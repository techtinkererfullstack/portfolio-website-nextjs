import { Blog } from "@/types/blog"
import { blogs } from "@/data/blogs"

const API_URL = process.env.NEXT_PUBLIC_API_URL || ""

async function fetchFromAPI(endpoint: string): Promise<any> {
  try {
    if (!API_URL) throw new Error("API_URL not set")
    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: 3600 }, // revalidate every hour
    })
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    return await res.json()
  } catch (error) {
    console.warn("API fetch failed, using static fallback:", error)
    return null
  }
}

export async function getAllBlogs(): Promise<Blog[]> {
  // Try API first, fallback to static
  const apiData = await fetchFromAPI("/blogs")
  return apiData || blogs
}

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  const apiData = await fetchFromAPI(`/blogs?slug=${slug}`)
  if (apiData?.length > 0) return apiData[0]

  // Fallback
  return blogs.find((blog) => blog.slug === slug)
}

export async function getFeaturedBlogs(limit: number = 3): Promise<Blog[]> {
  // Try API first, fallback to static
  const apiData = await fetchFromAPI(`/blogs/featured?limit=${limit}`)
  return apiData || blogs.filter((blog) => blog.featured).slice(0, limit)
}
