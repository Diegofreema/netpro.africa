import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { BlogPostMeta } from '@/features/blog/components/blog-post-meta'
import type { BlogPost } from '@/features/blog/data/blog-page-content'

type BlogPostDialogProps = {
  post: BlogPost | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BlogPostDialog({ post, open, onOpenChange }: BlogPostDialogProps) {
  if (!post) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90svh,52rem)] overflow-y-auto rounded-[var(--np-radius-xl)] border border-white/10 bg-[color:var(--np-surface)] p-6 text-foreground sm:max-w-3xl sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em]">
            {post.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-7 text-muted-foreground">
            {post.excerpt}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-3 overflow-hidden rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025]">
          <img src={post.image} alt={post.imageAlt} className="h-64 w-full object-cover" loading="lazy" />
        </div>
        <div className="mt-6">
          <BlogPostMeta post={post} variant="panel" />
        </div>
        <p className="mt-7 text-base leading-8 text-muted-foreground">{post.body}</p>

        <DialogFooter className="mt-8 border-white/10 bg-transparent p-0">
          <Button
            type="button"
            variant="outline"
            className="min-h-11 rounded-full border-white/10 bg-white/[0.04] px-5 text-foreground hover:bg-white/[0.08]"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button className="min-h-11 rounded-full px-5" onClick={() => onOpenChange(false)}>
            Back to articles
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
