import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { BlogPost } from '../types/BlogPost'
import { Button } from '@/components/ui/button'

const POSTS_PER_SLIDE = 3

const BlogSlider: React.FC = () => {
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
      } catch {
        setError('Error fetching blog posts. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const totalSlides = Math.ceil(posts.length / POSTS_PER_SLIDE)

  const handleSlideChange = (direction: 'next' | 'prev') => {
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % totalSlides
      }
      return (prev - 1 + totalSlides) % totalSlides
    })
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading blog posts...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden px-7 mb-32">
        <div className="flex items-center gap-x-1 underline mb-4">
          <a href="/blog" className="hover:text-secondary-blue text-primary-blue text-sm flex items-center">
            Te gjithe artikujt
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="relative overflow-hidden ">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 50}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts
                    .slice(slideIndex * POSTS_PER_SLIDE, (slideIndex + 1) * POSTS_PER_SLIDE)
                    .map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => handleSlideChange('prev')}
            className="absolute left-2 top-1/3 -translate-y-1/4 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
            aria-label="Previous slide"
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => handleSlideChange('next')}
            className="absolute right-2 top-1/3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
            aria-label="Next slide"
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <div className="my-5 px-3 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-[#E5502A]">
    <div className="relative aspect-video">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-all duration-300"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-primary-blue min-h-[60px] text-left">{post.title}</h3>
      <p className="text-sm text-gray-400 mb-2 text-left">{post.date}</p>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2 text-left">{post.content}</p>
      <a
        href={`/blog/${post.id}`}
        className="text-secondary-purple hover:text-primary-blue text-sm flex justify-end items-center"
      >
        Me shume
        <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
)

export default BlogSlider

