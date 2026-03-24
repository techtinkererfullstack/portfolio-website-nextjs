import Main from "@/components/projects/main"
import Page from "../page"
import { getAllProjects } from "@/lib/get-projects"

interface ProjectsPageProps {
  searchParams: Promise<{ category?: string; page?: string }>
}

export default async function Projects({ searchParams }: ProjectsPageProps) {
  const params = await searchParams
  const data = await getAllProjects()
  const category = params.category || "all"

  // Filter projects by category
  const filteredProjects =
    category === "all"
      ? data
      : data.filter(
          (project) =>
            project.categorySlug?.toLowerCase() === category.toLowerCase()
        )

  // Pagination
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const requestedPage = parseInt(params.page || "1")
  const currentPage = Math.max(1, Math.min(requestedPage, totalPages))
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

  return (
    <Page>
      <Main
        projects={paginatedProjects}
        totalProjects={filteredProjects.length}
        currentPage={currentPage}
        totalPages={totalPages}
        currentCategory={category}
      />
    </Page>
  )
}
