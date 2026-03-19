export default function () {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* <!-- Glassmorphism Navbar --> */}

      <main className="mx-auto w-full max-w-7xl px-6 py-12 md:px-20">
        {/* <!-- Page Header --> */}
        <div className="mb-16">
          <span className="mb-2 block text-sm font-bold tracking-widest uppercase">
            Skill Acquisition
          </span>
          <h1 className="mb-4 text-5xl leading-tight font-black text-slate-900 md:text-6xl dark:text-white">
            Continuous Learning
          </h1>
          <p className="text-sage-muted max-w-2xl text-lg">
            A curated track of technologies, design patterns, and systemic
            methodologies I'm currently mastering or have recently added to my
            toolkit.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* <!-- Left Column: Main Content --> */}
          <div className="space-y-12 lg:col-span-8">
            {/* <!-- Categories Tabs --> */}
            <div className="flex flex-wrap gap-4 border-b border-primary/20 pb-6">
              <button className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-white">
                All Disciplines
              </button>
              <button className="text-sage-muted rounded-full bg-primary/10 px-6 py-2 text-sm font-bold transition-all hover:bg-primary/20">
                Development
              </button>
              <button className="text-sage-muted rounded-full bg-primary/10 px-6 py-2 text-sm font-bold transition-all hover:bg-primary/20">
                Design Systems
              </button>
              <button className="text-sage-muted rounded-full bg-primary/10 px-6 py-2 text-sm font-bold transition-all hover:bg-primary/20">
                Business Strategy
              </button>
            </div>
            {/* <!-- Milestone Card 1 --> */}
            <section className="group">
              <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 p-1">
                <div
                  className="aspect-video w-full rounded-xl bg-cover bg-center"
                  data-alt="Technical architectural diagram of microservices"
                  //   style='
                  //     background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIm1eANmsnuAD8-u9F_Pfs9G7AZX-yg9pC9YGrTz9qT88VOJhwSwiKSm-Dv-bk5bCRwaiAcVyeor9hR99R1ezX7Rz5yrYPQgbGJwT1afDDq8R2PUNOmORoTq0_AHhi74pnUPhppd-DgzySXchmNdy51d3DDHDukZpywpcYtyu_8iJ0gq6jxPMHcgUwO62Q3bKUI6ZukdL1suo80Y_Ss3VL17izL54AAiOFsLQtYNw80keIndLKXdltxFp1J1LBtLM61o5JNuMiUD8");
                  //   '
                ></div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="bg-emerald-accent/20 text-emerald-accent rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
                      Development
                    </span>
                    <span className="text-sage-muted text-xs font-medium">
                      Jan 2024 — Present
                    </span>
                  </div>
                  <h3 className="group-hover:text-emerald-accent mb-4 text-3xl font-bold text-white transition-colors">
                    Advanced Distributed Systems &amp; Microservices
                  </h3>
                  <p className="text-sage-muted mb-6 leading-relaxed">
                    Deep diving into the complexities of scaling applications.
                    This milestone focuses on message brokers (Kafka/RabbitMQ),
                    eventual consistency patterns, and container orchestration
                    with Kubernetes.
                  </p>
                  <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>
                      Event Sourcing
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>
                      gRPC &amp; Protocol Buffers
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>
                      Service Mesh (Istio)
                    </div>
                  </div>
                  <button className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-white transition-all hover:bg-emerald-800">
                    <span>View Curriculum</span>
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </section>
            {/* <!-- Milestone Card 2 --> */}
            <section className="group">
              <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 p-1">
                <div
                  className="aspect-video w-full rounded-xl bg-cover bg-center"
                  data-alt="Minimalist UI design system interface"
                  //   style="
                  //     background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDMhSLbdbJe1NohJdgh3uxfa8wZMj2IZRGueS17V77rYbdzY1uN9HIftsuQJUsAVBNmYNwSyTFthVEYGi97NYIaXcg4wIv-bprrE698xXmRUM5kiVYzbav15YXhQewvkwQfXK0i7PZE9lEyeq45933ZoHbNa0R7tVWt5wluMaFfkQgtaE2rZP04KvUiwHS-42gQZS9RIuwA6BvAk7B6jKSB2AAiH5zDdgqtZ1CH-HwpyjkSJ0eVj4V1WcL46ROdC0QX_HkucWlKDpQ&quot;);
                  //   "
                ></div>
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold tracking-wider text-blue-400 uppercase">
                      Design
                    </span>
                    <span className="text-sage-muted text-xs font-medium">
                      Sept 2023 — Dec 2023
                    </span>
                  </div>
                  <h3 className="group-hover:text-emerald-accent mb-4 text-3xl font-bold text-white transition-colors">
                    Product Design Strategy &amp; Systems
                  </h3>
                  <p className="text-sage-muted mb-6 leading-relaxed">
                    Exploring the intersection of business goals and user needs.
                    Focused on creating scalable design languages using Figma
                    variables and advanced prototyping techniques to bridge the
                    gap between design and dev.
                  </p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    <span className="text-sage-muted rounded-lg border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-medium">
                      Atomic Design
                    </span>
                    <span className="text-sage-muted rounded-lg border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-medium">
                      Variable Tokens
                    </span>
                    <span className="text-sage-muted rounded-lg border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-medium">
                      User Psychology
                    </span>
                  </div>
                  <button className="flex items-center gap-2 rounded-xl border border-primary px-6 py-3 font-bold text-white transition-all hover:bg-primary/10">
                    <span className="material-symbols-outlined">verified</span>
                    <span>Download Certificate</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
          {/* <!-- Right Column: Sticky Timeline --> */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                <h4 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
                  <span className="material-symbols-outlined text-emerald-accent">
                    timeline
                  </span>
                  Learning Roadmap
                </h4>
                <div className="relative space-y-0 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[2px] before:bg-primary/30">
                  {/* <!-- Timeline Item 1 --> */}
                  <div className="relative pb-10 pl-8">
                    <div className="bg-background-dark border-emerald-accent absolute top-1 left-0 z-10 size-[24px] rounded-full border-4"></div>
                    <p className="text-emerald-accent mb-1 text-[10px] font-bold tracking-tighter uppercase">
                      In Progress
                    </p>
                    <h5 className="text-sm font-bold text-white">
                      System Design Mastery
                    </h5>
                    <p className="text-sage-muted mt-1 text-xs">
                      Focusing on high-level architecture and scalability
                      patterns.
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
                    <h5 className="text-sm font-bold text-white">
                      Generative AI Integration
                    </h5>
                    <p className="text-sage-muted mt-1 text-xs">
                      Learning to build LLM-powered features into existing
                      products.
                    </p>
                    <span className="text-sage-muted mt-2 inline-block rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase">
                      AI/ML
                    </span>
                  </div>
                  {/* <!-- Timeline Item 3 --> */}
                  <div className="relative pb-10 pl-8">
                    <div className="absolute top-1 left-0 z-10 flex size-[24px] items-center justify-center rounded-full bg-primary">
                      <span className="material-symbols-outlined text-[12px] font-bold text-white">
                        check
                      </span>
                    </div>
                    <p className="text-sage-muted mb-1 text-[10px] font-bold tracking-tighter uppercase">
                      Completed
                    </p>
                    <h5 className="text-sm font-bold text-white/60 line-through">
                      Advanced Typescript
                    </h5>
                    <p className="text-sage-muted/60 mt-1 text-xs">
                      Mastered utility types, generics, and template literal
                      types.
                    </p>
                    <span className="text-sage-muted/50 mt-2 inline-block rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase">
                      Frontend
                    </span>
                  </div>
                  {/* <!-- Timeline Item 4 --> */}
                  <div className="relative pl-8">
                    <div className="absolute top-1 left-0 z-10 flex size-[24px] items-center justify-center rounded-full bg-primary">
                      <span className="material-symbols-outlined text-[12px] font-bold text-white">
                        check
                      </span>
                    </div>
                    <p className="text-sage-muted mb-1 text-[10px] font-bold tracking-tighter uppercase">
                      Completed
                    </p>
                    <h5 className="text-sm font-bold text-white/60 line-through">
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="mb-4 text-lg font-bold text-white">
                  Reading List
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded bg-primary/30">
                      <span className="material-symbols-outlined text-white/50">
                        auto_stories
                      </span>
                    </div>
                    <div>
                      <p className="text-sm leading-snug font-bold text-white">
                        Designing Data-Intensive Applications
                      </p>
                      <p className="text-sage-muted text-xs">
                        Martin Kleppmann
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded bg-primary/30">
                      <span className="material-symbols-outlined text-white/50">
                        auto_stories
                      </span>
                    </div>
                    <div>
                      <p className="text-sm leading-snug font-bold text-white">
                        Refactoring UI
                      </p>
                      <p className="text-sage-muted text-xs">
                        Adam Wathan &amp; Steve Schoger
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
