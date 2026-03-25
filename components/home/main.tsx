"use client"

import useReveal from "@/hooks/reveal"
import FeatureProjects from "./feature-projects"
import HeroSection from "./hero-section"
import LatestThoughts from "./latest-thoughts"
import { Project } from "@/data/projects"
import { Blog } from "@/data/blogs"

interface MainProps {
  projects: Project[]
  blogs: Blog[]
}

export default function Main({ projects, blogs }: MainProps) {
  useReveal()
  return (
    <main className="overflow-x-hidden pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="reveal">
          <HeroSection />
        </section>
        <section className="reveal">
          <FeatureProjects projects={projects} />
        </section>
        <section className="reveal">
          <LatestThoughts blogs={blogs} />
        </section>
      </div>
    </main>
  )
}
