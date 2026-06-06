import { dateIcon, readIcon, type BlogMetaItem, type BlogPost } from '@/features/blog/data/blog-page-content'

type BlogPostMetaProps = {
  post: BlogPost
  variant?: 'panel' | 'compact'
}

export function BlogPostMeta({ post, variant = 'compact' }: BlogPostMetaProps) {
  const ReadIcon = readIcon
  const DateIcon = dateIcon

  if (variant === 'panel') {
    const items: BlogMetaItem[] = [
      { label: 'Read Time', value: post.readTime },
      { label: 'Author', value: post.author },
      { label: 'Published Date', value: post.date },
      { label: 'Category', value: post.category },
    ]

    return (
      <dl className="grid gap-5 rounded-[var(--np-radius-lg)] border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="border-white/10 lg:border-r lg:last:border-r-0">
            <dt className="text-base text-[color:var(--np-subtle)]">{item.label}</dt>
            <dd className="mt-2 text-lg font-medium text-foreground">{item.value}</dd>
          </div>
        ))}
      </dl>
    )
  }

  return (
    <div className="flex flex-wrap gap-3">
      <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 text-sm text-muted-foreground">
        <ReadIcon className="size-4" aria-hidden="true" />
        {post.readTime}
      </span>
      <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 text-sm text-muted-foreground">
        <DateIcon className="size-4" aria-hidden="true" />
        {post.date}
      </span>
    </div>
  )
}
