// app/page.tsx
import Link from 'next/link'
import Hero from '@/components/Hero'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const posts = getAllPosts().slice(0, 10) // Get 10 most recent posts

  return (
    <div>
      <Hero />

      {/* Recent Blog Posts Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex items-baseline gap-3 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Recent blog posts
          </h2>
          <Link href="/blogs" className="text-sm text-blue-600 hover:underline">
            Full archive ➔
          </Link>
        </div>

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
      </section>
    </div>
  )
}