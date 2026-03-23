import { projects, Project } from "@/data/projects"

export async function getAllProjects(): Promise<Project[]> {
  // In a static build, this happens on your computer, not the user's browser
  return projects
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug)
}
