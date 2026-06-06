import { Button } from '@/components/ui/button'
import { blogCategories, type BlogCategory } from '@/features/blog/data/blog-page-content'
import { cn } from '@/lib/utils'

type BlogCategoryFilterProps = {
  activeCategory: BlogCategory
  onCategoryChange: (category: BlogCategory) => void
}

export function BlogCategoryFilter({ activeCategory, onCategoryChange }: BlogCategoryFilterProps) {
  return (
    <div
      className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-3 rounded-full border border-white/10 bg-[color:var(--np-surface)] p-3"
      data-reveal="title"
      role="tablist"
      aria-label="Blog categories"
    >
      {blogCategories.map((category) => {
        const isActive = category === activeCategory

        return (
          <Button
            key={category}
            type="button"
            variant={isActive ? 'default' : 'outline'}
            className={cn(
              'min-h-12 rounded-full px-7 text-base transition-[background-color,border-color,transform] duration-(--np-duration-fast)',
              !isActive && 'border-white/10 bg-white/[0.025] text-muted-foreground hover:bg-white/[0.06] hover:text-foreground',
            )}
            onClick={() => onCategoryChange(category)}
            role="tab"
            aria-selected={isActive}
          >
            {category}
          </Button>
        )
      })}
    </div>
  )
}
