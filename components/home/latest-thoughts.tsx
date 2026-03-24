"use Client"

import { FaArrowCircleRight } from "react-icons/fa"
import Link from "next/link"
import { Blog } from "@/data/blogs"

interface LatestThoughtsProps {
  blogs: Blog[]
}

export default function LatestThoughts({ blogs }: LatestThoughtsProps) {
  return (
    <div>
      <section className="reveal mt-32 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Latest Thoughts
            </h2>
            <div className="mt-2 h-1.5 w-12 rounded-full bg-primary"></div>
          </div>
          <Link
            className="flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2 dark:text-emerald-400"
            href="/blogs"
          >
            Read Blog
            <span className="material-symbols-outlined text-sm">
              <FaArrowCircleRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="stagger-item bg-sage-50/50 border-sage-100 rounded-2xl border p-6 transition-all hover:border-primary/50 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-xs font-bold tracking-widest text-primary uppercase dark:text-emerald-400">
                  {blog.category}
                </span>
                <span className="text-xs text-slate-500">
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold sm:text-xl">
                {blog.title}
              </h3>
              <p className="text-sage-800 mb-6 line-clamp-2 dark:text-slate-400">
                {blog.description}
              </p>
              <Link
                className="group flex items-center gap-2 font-bold text-primary dark:text-emerald-400"
                href={`/blogs/${blog.slug}`}
              >
                Read Article
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  east
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
