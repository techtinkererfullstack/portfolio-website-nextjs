export interface Blog {
  id: string
  title: string
  description: string
  content: string
  slug: string
  image?: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  featured?: boolean
}
