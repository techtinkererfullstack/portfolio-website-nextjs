import { Project } from "@/types/project"
import { projects } from "@/data/projects"

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

export async function getAllProjects(): Promise<Project[]> {
  // Try API first, fallback to static
  const apiData = await fetchFromAPI("/projects")
  return apiData || projects
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const apiData = await fetchFromAPI(`/projects?slug=${slug}`)
  if (apiData?.length > 0) return apiData[0]

  // Fallback
  return projects.find((p) => p.slug === slug)
}
