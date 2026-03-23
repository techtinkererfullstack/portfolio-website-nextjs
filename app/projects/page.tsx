import Main from "@/components/projects/main"
import Page from "../page"
import { getAllProjects } from "@/lib/get-projects"

export default async function Projects() {
  const data = await getAllProjects()
  return (
    <Page>
      <Main projects={data} />
    </Page>
  )
}
