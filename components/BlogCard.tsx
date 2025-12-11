import Link from 'next/link'

interface BlogCardProps {
  title: string
  date: string
  slug: string
  excerpt?: string
}

export default function BlogCard({ title, date, slug, excerpt }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <div className="flex gap-6 py-4 group">
      <span className="text-gray-500 text-sm whitespace-nowrap pt-0.5 font-light">
        {formatDate(date)}
      </span>
      <div className="flex-1">
        <Link
          href={`/blogs/${slug}`}
          className="text-base text-gray-900 hover:text-blue-600 transition-colors duration-200 inline-block mb-1"
        >
          {title}
        </Link>
        {excerpt && (
          <p className="text-sm text-gray-600 leading-relaxed">{excerpt}</p>
        )}
      </div>
    </div>
  )
}