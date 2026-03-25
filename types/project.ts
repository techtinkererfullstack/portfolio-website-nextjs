export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  slug: string
  image?: string
  liveUrl?: string
  frontendUrl?: string
  backendUrl?: string
  androidUrl?: string
  detailedDescription?: string
  features?: string[]
  technologies?: string[]
  categorySlug?: string
}
