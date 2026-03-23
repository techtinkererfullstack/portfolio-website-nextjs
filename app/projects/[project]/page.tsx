import { getProjectBySlug } from "@/lib/get-projects"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ project: string }>
}) {
  const { project: slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-primary/20 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <FaGithub />
              View Code
            </a>
          )}
        </div>
      </div>

      {project.image && (
        <div className="mb-8">
          <Image
            width={800}
            height={800}
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {project.detailedDescription && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">About This Project</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {project.detailedDescription}
          </p>
        </div>
      )}

      {project.features && project.features.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
