"use client"

import useReveal from "@/hooks/reveal"
import FeatureProjects from "./feature-projects"
import HeroSection from "./hero-section"
import LatestThoughts from "./latest-thoughts"
import { Project } from "@/data/projects"

interface MainProps {
  projects: Project[]
}

export default function Main({ projects }: MainProps) {
  useReveal()
  return (
    <main className="bg-background-light dark:bg-background-dark pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="reveal">
          <HeroSection />
        </section>
        <section className="reveal">
          <FeatureProjects projects={projects} />
        </section>
        <section className="reveal">
          <LatestThoughts />
        </section>
      </div>
    </main>
  )
}
