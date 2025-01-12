'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { BlogPost } from '../types/BlogPost'
import { Button } from '@/components/ui/button'
import { useSwipeable } from 'react-swipeable'

const POSTS_PER_SLIDE = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
}

const BlogSlider: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const postsPerSlide = windowWidth < 640 ? POSTS_PER_SLIDE.mobile :
                        windowWidth < 1024 ? POSTS_PER_SLIDE.tablet :
                        POSTS_PER_SLIDE.desktop

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data/db.json')
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        const data = await response.json()
        setPosts(data.posts)
      } catch {
        setError('Error fetching blog posts. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const totalSlides = Math.ceil(posts.length / postsPerSlide)

  const handleSlideChange = useCallback((direction: 'next' | 'prev') => {
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % totalSlides
      }
      return (prev - 1 + totalSlides) % totalSlides
    })
  }, [totalSlides])

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSlideChange('next'),
    onSwipedRight: () => handleSlideChange('prev'),
    trackMouse: true
  })

  if (isLoading) {
    return <div className="text-center py-10">Loading blog posts...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative mb-8" {...handlers}>
        <div className="flex items-center gap-x-1 underline mb-4">
          <a href="/blog" className="hover:text-secondary-blue text-primary-blue text-sm flex items-center">
            Te gjithe artikujt
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(slideIndex * postsPerSlide, (slideIndex + 1) * postsPerSlide).map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={() => handleSlideChange('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
          aria-label="Previous slide"
          variant="ghost"
          size="icon"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => handleSlideChange('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
          aria-label="Next slide"
          variant="ghost"
          size="icon"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:shadow-xl hover:border-[#E5502A] transition-all duration-300">
    <div className="relative aspect-video">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover "
        loading="lazy"
      />
    </div>
    <div className="p-4 flex flex-col justify-between h-[calc(100%-56.25%)]">
      <div>
        <h3 className="text-lg font-semibold mb-2 text-primary-blue text-left line-clamp-2">{post.title}</h3>
        <p className="text-sm text-gray-400 mb-2 text-left">{post.date}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 text-left">{post.content}</p>
      </div>
      <a
        href={`/blog/${post.id}`}
        className="text-secondary-purple hover:text-primary-blue text-sm flex justify-end items-center mt-auto"
      >
        Me shume
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
)

export default BlogSlider

