import { useMemo, useState } from 'react'

import { BlogCategoryFilter } from '@/features/blog/components/blog-category-filter'
import { BlogFeaturedPost } from '@/features/blog/components/blog-featured-post'
import { BlogPostCard } from '@/features/blog/components/blog-post-card'
import { BlogPostDialog } from '@/features/blog/components/blog-post-dialog'
import {
  blogPosts,
  type BlogCategory,
  type BlogPost,
} from '@/features/blog/data/blog-page-content'

export function BlogListSection() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('Design')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts
    }

    return blogPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  const featuredPost = filteredPosts.find((post) => post.featured) ?? filteredPosts[0] ?? blogPosts[0]
  const cardPosts = filteredPosts.filter((post) => post.id !== featuredPost.id)

  return (
    <section className="np-container py-(--np-section-y)">
      <BlogCategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="mt-20">
        <BlogFeaturedPost post={featuredPost} onRead={setSelectedPost} />
      </div>

      <div className="np-reveal-stagger mt-20 grid gap-x-12 gap-y-20 lg:grid-cols-2">
        {cardPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} onRead={setSelectedPost} />
        ))}
      </div>

      <BlogPostDialog
        post={selectedPost}
        open={selectedPost !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPost(null)
          }
        }}
      />
    </section>
  )
}
