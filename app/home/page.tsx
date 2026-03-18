import { Metadata } from "next"
import Page from "../page"
import HeroSection from "@/components/home/hero-section"
import FeatureProjects from "@/components/home/feature-projects"
import LatestThoughts from "@/components/home/latest-thoughts"

export const metadata: Metadata = {
  title: "Shafe | Home",
  description: "Android Developer & Full-Stack Tech Tinkerer",
}

export default function Home() {
  return (
    <Page>
      <main className="pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <FeatureProjects />
          <LatestThoughts />
        </div>
      </main>
    </Page>
  )
}
