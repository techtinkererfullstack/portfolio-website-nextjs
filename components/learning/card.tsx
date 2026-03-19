export default function Card() {
  return (
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
          <h3 className="group-hover:text-emerald-accent mb-4 text-xl font-bold text-slate-900 transition-colors sm:text-2xl md:text-3xl dark:text-white">
            Product Design Strategy &amp; Systems
          </h3>
          <p className="text-sage-muted mb-6 leading-relaxed">
            Exploring the intersection of business goals and user needs. Focused
            on creating scalable design languages using Figma variables and
            advanced prototyping techniques to bridge the gap between design and
            dev.
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
          <button className="flex items-center gap-2 rounded-xl border border-primary px-6 py-3 font-bold text-slate-900 transition-all hover:bg-primary/10 dark:text-white">
            <span className="material-symbols-outlined">verified</span>
            <span>Download Certificate</span>
          </button>
        </div>
      </div>
    </section>
  )
}
