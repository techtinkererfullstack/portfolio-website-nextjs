import { Metadata } from "next"
import Page from "../page"
import Main from "@/components/home/main"

export const metadata: Metadata = {
  title: "Shafe | Home",
  description: "Android Developer & Full-Stack Tech Tinkerer",
}

export default function Home() {
  return (
    <Page>
      <Main />
    </Page>
  )
}
