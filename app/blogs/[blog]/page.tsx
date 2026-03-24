import { getBlogBySlug } from "@/lib/get-blogs"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

interface BlogDetailsPageProps {
  params: Promise<{ blog: string }>
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { blog: slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return {
      title: "Blog Not Found",
    }
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.image ? [{ url: blog.image }] : [],
    },
  }
}

export default async function BlogDetails({ params }: BlogDetailsPageProps) {
  const { blog: slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <Link
          href="/blogs"
          className="mb-6 inline-flex items-center gap-2 text-primary hover:text-primary/80"
        >
          <FaArrowLeft />
          Back to Blogs
        </Link>

        <div className="mb-4">
          <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
            {blog.category}
          </span>
        </div>

        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{blog.title}</h1>

        <div className="mb-6 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{blog.readTime}</span>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-primary/10 px-2 py-1 text-xs text-primary dark:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {blog.image && (
        <div className="mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-64 w-full rounded-lg object-cover md:h-96"
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content.replace(/\n/g, "<br />"),
          }}
        />
      </div>
    </div>
  )
}
