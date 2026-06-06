import { Button } from '@/components/ui/button'
import { BlogPostMeta } from '@/features/blog/components/blog-post-meta'
import type { BlogPost } from '@/features/blog/data/blog-page-content'

type BlogFeaturedPostProps = {
  post: BlogPost
  onRead: (post: BlogPost) => void
}

export function BlogFeaturedPost({ post, onRead }: BlogFeaturedPostProps) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]" data-reveal="media">
      <div className="np-card-texture flex min-h-[24rem] items-center justify-center overflow-hidden rounded-[var(--np-radius-xl)] border border-white/10 p-10">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="relative z-10 max-h-44 w-full max-w-lg object-contain outline-none"
          loading="eager"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-foreground">{post.title}</h2>
        <p className="mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
          {post.excerpt}{' '}
          <button
            type="button"
            className="np-focus inline-flex min-h-11 items-center align-middle font-semibold text-foreground underline-offset-4 hover:underline"
            onClick={() => onRead(post)}
          >
            Read More...
          </button>
        </p>
        <div className="mt-10">
          <BlogPostMeta post={post} variant="panel" />
        </div>
        <Button className="mt-8 min-h-12 rounded-full px-6 lg:hidden" onClick={() => onRead(post)}>
          Read More
        </Button>
      </div>
    </article>
  )
}
