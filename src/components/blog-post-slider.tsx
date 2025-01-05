import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BlogPost } from '../types/BlogPost'
import { ArrowRight } from 'lucide-react';



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
    <div className="flex justify-center items-center  px-5">
      <div className="relative w-full h-full overflow-hidden px-4 mb-32">
      <div className="flex items-center gap-x-1 underline">
  <a href="/blog" className="hover:text-secondary-blue text-primary-blue text-sm flex items-center">
    Te gjithe artikujt
    <ArrowRight className="w-4 h-4 ml-1" />
  </a>
</div>

        <div className="relative  h-[90%] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 50}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex w-full flex-shrink-0 gap-4 py-4">
                {posts
                  .slice(slideIndex * postsPerSlide, (slideIndex + 1) * postsPerSlide)
                  .map((post) => (
                    <div
                      key={post.id}
                      className="relative bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:border-2 hover:border-[#E5502A] transition-all duration-300 ease-in-out transform w-1/3"
                    >
                      <div className="relative w-full aspect-video overflow-hidden transform translate-y-0 transition-transform duration-300 ease-in-out">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-[100%] object-cover transition-all duration-300"
                        />
                        <div className="text-left absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                        <div className=" text-left absolute bottom-3 left-3 right-3">
                          <h3 className="text-l text-white">{post.title}</h3>
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="text-xs text-left text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <p className="mt-2 text-s text-gray-400 line-clamp-2 text-left ">{post.content}</p>
                        
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

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

