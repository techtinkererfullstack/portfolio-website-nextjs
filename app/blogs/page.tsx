import Main from "@/components/blogs/main"
import Page from "../page"
import { getAllBlogs } from "@/lib/get-blogs"

export default async function Blogs() {
  const blogs = await getAllBlogs()
  return (
    <Page>
      <Main blogs={blogs} />
    </Page>
  )
}
