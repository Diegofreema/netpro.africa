import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BlogPostMeta } from '@/features/blog/components/blog-post-meta';
import type { BlogPost } from '@/features/blog/data/blog-page-content';

type BlogPostCardProps = {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
};

export function BlogPostCard({ post, onRead }: BlogPostCardProps) {
  return (
    <Card
      className="group rounded-(--np-radius-xl) border border-white/10 bg-transparent py-0 shadow-none"
      data-reveal="card"
    >
      <CardHeader className="np-card-texture overflow-hidden rounded-(--np-radius-xl) border border-white/10 p-5">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="relative z-10 aspect-video w-full rounded-(--np-radius-lg) object-cover transition-transform duration-(--np-duration-med) group-hover:scale-[1.015]"
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="px-5 pt-7 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <Avatar className="size-12 border border-white/10 bg-(--np-blue-soft)">
              <AvatarFallback className="bg-transparent text-sm font-semibold text-foreground">
                {post.authorInitials}
              </AvatarFallback>
            </Avatar>
            <p className="text-base font-medium text-foreground">
              {post.author}
            </p>
          </div>
          <BlogPostMeta post={post} />
        </div>
        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em] text-foreground">
          {post.title}
        </h3>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          {post.excerpt}...
        </p>
        <Button
          className="mx-auto mt-8 flex min-h-12 rounded-full px-8"
          onClick={() => onRead(post)}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
