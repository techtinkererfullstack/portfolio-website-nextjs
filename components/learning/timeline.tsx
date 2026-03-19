import { FaCheck, FaCheckCircle } from "react-icons/fa"
import { FaArrowTrendUp } from "react-icons/fa6"

export default function Timeline() {
  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-28 space-y-8">
        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
          <h4 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-900 dark:text-white">
            <span className="material-symbols-outlined text-emerald-accent">
              <FaArrowTrendUp className="text-slate-900 dark:text-slate-900 dark:text-white" />
            </span>
            Learning Roadmap
          </h4>
          <div className="relative space-y-0 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[2px] before:bg-primary/30">
            {/* <!-- Timeline Item 1 --> */}
            <div className="relative pb-10 pl-8">
              <div className="bg-background-dark absolute top-1 left-0 z-10 size-[24px] rounded-full border-4 border-primary/50"></div>
              <p className="mb-1 text-[10px] font-bold tracking-tighter text-primary uppercase">
                In Progress
              </p>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                System Design Mastery
              </h5>
              <p className="text-sage-muted mt-1 text-xs">
                Focusing on high-level architecture and scalability patterns.
              </p>
              <span className="text-sage-muted mt-2 inline-block rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase">
                Backend
              </span>
            </div>
            {/* <!-- Timeline Item 2 --> */}
            <div className="relative pb-10 pl-8">
              <div className="bg-background-dark absolute top-1 left-0 z-10 size-[24px] rounded-full border-4 border-primary/50"></div>
              <p className="text-sage-muted mb-1 text-[10px] font-bold tracking-tighter uppercase">
                Coming Soon
              </p>
              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                Generative AI Integration
              </h5>
              <p className="text-sage-muted mt-1 text-xs">
                Learning to build LLM-powered features into existing products.
              </p>
              <span className="text-sage-muted mt-2 inline-block rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase">
                AI/ML
              </span>
            </div>
            {/* <!-- Timeline Item 3 --> */}
            <div className="relative pb-10 pl-8">
              <div className="absolute top-1 left-0 z-10 flex size-[24px] items-center justify-center rounded-full bg-primary">
                <span className="material-symbols-outlined text-[12px] font-bold text-slate-900 dark:text-white">
                  <FaCheck />
                </span>
              </div>
              <p className="text-sage-muted mb-1 text-[10px] font-bold tracking-tighter uppercase">
                Completed
              </p>
              <h5 className="text-sm font-bold text-slate-900 line-through dark:text-white/60">
                Advanced Typescript
              </h5>
              <p className="text-sage-muted/60 mt-1 text-xs">
                Mastered utility types, generics, and template literal types.
              </p>
              <span className="text-sage-muted/50 mt-2 inline-block rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase">
                Frontend
              </span>
            </div>
            {/* <!-- Timeline Item 4 --> */}
            <div className="relative pl-8">
              <div className="absolute top-1 left-0 z-10 flex size-[24px] items-center justify-center rounded-full bg-primary">
                <span className="material-symbols-outlined text-[12px] font-bold text-slate-900 dark:text-white">
                  <FaCheck />
                </span>
              </div>
              <p className="text-sage-muted mb-1 text-[10px] font-bold tracking-tighter uppercase">
                Completed
              </p>
              <h5 className="text-sm font-bold text-slate-900 line-through dark:text-white/60">
                Visual Storytelling
              </h5>
              <p className="text-sage-muted/60 mt-1 text-xs">
                Course on communication and color theory.
              </p>
              <span className="text-sage-muted/50 mt-2 inline-block rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase">
                Creative
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Current Reading/Resources --> */}
        {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
            Reading List
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded bg-primary/30">
                <span className="material-symbols-outlined text-slate-900 dark:text-white/50">
                  auto_stories
                </span>
              </div>
              <div>
                <p className="text-sm leading-snug font-bold text-slate-900 dark:text-white">
                  Designing Data-Intensive Applications
                </p>
                <p className="text-sage-muted text-xs">Martin Kleppmann</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded bg-primary/30">
                <span className="material-symbols-outlined text-slate-900 dark:text-white/50">
                  auto_stories
                </span>
              </div>
              <div>
                <p className="text-sm leading-snug font-bold text-slate-900 dark:text-white">
                  Refactoring UI
                </p>
                <p className="text-sage-muted text-xs">
                  Adam Wathan &amp; Steve Schoger
                </p>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </aside>
  )
}
