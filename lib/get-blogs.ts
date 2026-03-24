import { blogs, Blog } from "@/data/blogs"

export async function getAllBlogs(): Promise<Blog[]> {
  // In a static build, this happens on your computer, not the user's browser
  return blogs
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  return blogs.find((blog) => blog.slug === slug)
}

export async function getFeaturedBlogs(limit: number = 3): Promise<Blog[]> {
  return blogs.filter((blog) => blog.featured).slice(0, limit)
}
