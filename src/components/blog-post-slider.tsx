'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BlogPost } from '../types/BlogPost'

const BlogPostSlider: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data/db.json')
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        const data = await response.json()
        setPosts(data.posts)
        setIsLoading(false)
      } catch {
        setError('Error fetching blog posts. Please try again later.')
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Number of posts to display per slide
  const postsPerSlide = 3

  const totalSlides = Math.ceil(posts.length / postsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading blog posts...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen"> {/* Center the div */}
    <div className="relative w-[85%] overflow-hidden px-4 mb-32"> {/* Added padding */}
      <div className="flex justify-between mb-4">
        <a href="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
          Te gjithe artikujt
        </a>
      </div>
  
      <div className="relative mt-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {/* Group posts into slides, each containing 3 posts */}
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex w-full flex-shrink-0">
              {posts
                .slice(slideIndex * postsPerSlide, (slideIndex + 1) * postsPerSlide)
                .map((post) => (
                  <div
                    key={post.id}
                    className="w-1/6 px-2" // Reduced width of each blog post to 1/4 (25%)
                  >
                    <div className="group relative h-[220px] overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
  
                      {/* Title */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-l text-white">{post.title}</h3>
                      </div>
                    </div>
  
                    {/* Author info and excerpt */}
                    <div className="mt-2">
                      <div className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <p className="mt-2 text-xs text-gray-400 line-clamp-2 text-align-left">{post.content}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
  
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default BlogPostSlider
