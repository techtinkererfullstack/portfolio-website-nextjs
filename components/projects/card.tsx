"use client"

import { FaCode, FaEye } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { Project } from "@/data/projects"

interface CardProps {
  project: Project
}

export default function Card({ project }: CardProps) {
  const router = useRouter()

  return (
    <div
      className="glass-card group stagger-item flex cursor-pointer flex-col overflow-hidden rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-xl"
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-alt={`Screenshot of ${project.title}`}
          src={
            project.image ||
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZjubHpL1a6i6hpEoPFKsT_VYWYsWHuuSh9JqCofAMNa1D8roarY6gCrby_biriSqrYv_gZ2TmwdjlyOB8_V9pHsLsDlqId7pOhrN2cudBRtHeyaJFa0OZvVFGS0uX7CLAOPLt8yRQ5rD5U-CJIFnFWgGmkiA1tJrb4mkg1rcn0DkpWDOEQkVA8gW1GdW-7hwdqcCl03L-aB9RI1ID5zpElJHaLbnhCNga4OHu9-37sF3l1BEbXNjpp1ZKQwW-Nrki7CkNFquObI"
          }
        />
        <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
          {project.categorySlug || ""}
        </span>
        <div className="from-background-dark/80 absolute inset-0 bg-gradient-to-t to-transparent"></div>
      </div>
      <div className="flex flex-grow flex-col p-4 sm:p-6">
        <h3 className="mb-2 text-lg font-bold sm:text-xl">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="dark:text-primary-light rounded bg-primary/20 px-2 py-1 text-[10px] font-bold tracking-wider text-primary uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-primary/10 pt-4">
          <div className="flex gap-4">
            <div className="text-slate-400" title="View Code">
              <span className="material-symbols-outlined text-xl">
                <FaCode />
              </span>
            </div>
            <div className="text-slate-400" title="Backend">
              <span className="material-symbols-outlined text-xl"></span>
            </div>
          </div>
          <div className="text-slate-400" title="Live Demo">
            <span className="material-symbols-outlined text-sm">Live</span>
          </div>
        </div>
      </div>
    </div>
  )
}
