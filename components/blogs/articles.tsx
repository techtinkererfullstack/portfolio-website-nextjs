import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import { Blog } from "@/data/blogs"

interface ArticlesProps {
  blogs: Blog[]
}

export default function Articles({ blogs }: ArticlesProps) {
  return (
    <>
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="group flex flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-xl dark:bg-primary/10"
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              alt={blog.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={
                blog.image ||
                "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=800&h=400&fit=crop"
              }
            />
            <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
              {blog.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              <span>
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="mx-1">•</span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="mb-3 text-xl leading-tight font-bold transition-colors group-hover:text-primary">
              {blog.title}
            </h3>
            <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {blog.description}
            </p>
            <Link
              className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary"
              href={`/blogs/${blog.slug}`}
            >
              Read More
              <span className="material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </article>
      ))}
    </>
  )
}
