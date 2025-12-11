import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export default function BlogsPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Blog Posts</h1>

      <div className="divide-y divide-gray-100">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  )
}
