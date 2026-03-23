import { FaArrowCircleRight, FaCode, FaEye } from "react-icons/fa"
import { Project } from "@/data/projects"

interface FeatureProjectsProps {
  projects: Project[]
}

export default function FeatureProjects({ projects }: FeatureProjectsProps) {
  const featuredProjects = projects.slice(0, 3) // Show first 3 projects as featured

  return (
    <div>
      <section className="reveal mt-32">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Featured Projects
            </h2>
            <div className="mt-2 h-1.5 w-12 rounded-full bg-primary"></div>
          </div>
          <a
            href="/projects"
            className="flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2 dark:text-emerald-400"
          >
            View All Projects
            <span className="material-symbols-outlined text-sm">
              <FaArrowCircleRight />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group stagger-item relative block cursor-pointer"
            >
              <a
                href={`/projects/${project.slug}`}
                className="block no-underline hover:no-underline"
              >
                <div className="bg-sage-50 border-sage-100 relative mb-4 aspect-video overflow-hidden rounded-2xl border dark:border-white/5">
                  <img
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={
                      project.image ||
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2DL9yLYBih8V1pEuZGNwG-0i-sHZQ-nb4d5N3kcgL53guCcY4JvMYc6QbhnVFlGWptY0m2qBKQLD4KR9Gj3tZOdJdYzGK4uNg7nuoRKOdYqzQJO7RUl4JItC_HpzAnkZoHskDW2XUwBKSR6HRjfWqLQrTWjW2n_lP3GtR8nneiOl-AKXEcWhKkSwFr9v9OLRiWAfZwjFU8LxPXEmL4KjRkNBmlI_Lf-Ta7Jxs2kPTtwVxxDTbuB9HhLtiDINfBuzpAm7iyBK9hOo"
                    }
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-lg bg-white px-4 py-2 font-bold text-primary">
                      View Project
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold transition-colors group-hover:text-primary dark:group-hover:text-emerald-400">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary dark:bg-emerald-400/10 dark:text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
              <div className="absolute top-3 right-3 flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    title="Live Demo"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaEye />
                    </span>
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    title="View Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaCode />
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
