// lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function resolvePostsDirectory(): string {
  // Next production servers can run from .next/standalone, so walk up until we find the content directory
  const cwd = process.cwd()
  const candidates = [
    path.join(cwd, 'content', 'blogs'),
    path.join(cwd, '..', 'content', 'blogs'),
    path.join(cwd, '..', '..', 'content', 'blogs'),
  ]

  const found = candidates.find((dir) => fs.existsSync(dir))
  if (found) return found

  // Fallback to original location to preserve previous behavior
  return path.join(cwd, 'content', 'blogs')
}

const postsDirectory = resolvePostsDirectory()

export interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
  tags?: string[]
}

export interface PostWithContent extends Post {
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Parse frontmatter
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        excerpt: data.excerpt,
        tags: data.tags,
      }
    })

  // Sort by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): PostWithContent | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt,
      tags: data.tags,
      content,
    }
  } catch (error) {
    return null
  }
}