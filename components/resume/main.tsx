export default function Main() {
  return (
    <main className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-7xl">
        {/* <!-- Hero Header Section --> */}
        <header className="mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-primary/30 blur transition duration-500 group-hover:bg-primary/50"></div>
            <div
              className="relative size-32 overflow-hidden rounded-full border-2 border-primary/30 bg-slate-800 bg-cover bg-center md:size-40"
              data-alt="Professional portrait of a male engineer in a dark studio setting"
              //   style="background-image: url(&quot;./public/profile.png&quot;)"
            ></div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Senior Full-Stack Engineer
            </h1>
            <p className="mb-4 text-xl font-medium text-primary">
              UI/UX Designer &amp; Systems Architect
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 md:justify-start">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">
                  location_on
                </span>
                San Francisco, CA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">
                  alternate_email
                </span>
                contact@alexrivers.dev
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-primary">
                  language
                </span>
                alexrivers.dev
              </span>
            </div>
          </div>
        </header>
        {/* <!-- Quick Stats --> */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
            <p className="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Experience
            </p>
            <p className="text-3xl font-bold text-slate-100 transition-colors group-hover:text-primary">
              10+ Years
            </p>
          </div>
          <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
            <p className="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Projects
            </p>
            <p className="text-3xl font-bold text-slate-100 transition-colors group-hover:text-primary">
              50+
            </p>
          </div>
          <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
            <p className="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Commits
            </p>
            <p className="text-3xl font-bold text-slate-100 transition-colors group-hover:text-primary">
              1.2k+
            </p>
          </div>
          <div className="group rounded-xl border border-primary/20 bg-primary/10 p-6 transition-all hover:border-primary/40">
            <p className="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Open Source
            </p>
            <p className="text-3xl font-bold text-slate-100 transition-colors group-hover:text-primary">
              12
            </p>
          </div>
        </div>
        {/* <!-- Experience Section --> */}
        <section className="mb-16" id="experience">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="material-symbols-outlined text-primary">work</span>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {/* <!-- Job 1 --> */}
            <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
              <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
                <span className="material-symbols-outlined text-6xl text-primary">
                  code
                </span>
              </div>
              <div className="mb-4 flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 text-white">
                    Senior Full-Stack Engineer
                  </h3>
                  <p className="font-medium text-primary">TechFlow Solutions</p>
                </div>
                <span className="mt-1 text-sm font-medium text-slate-400 md:mt-0">
                  2020 — Present
                </span>
              </div>
              <ul className="max-w-3xl space-y-3 text-sm text-slate-400">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">▹</span>
                  <span>
                    Led the migration of a legacy monolith to a modern
                    micro-frontend architecture using
                    <span className="font-medium text-white">React</span> and
                    <span className="font-medium text-white">Tailwind CSS</span>
                    .
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">▹</span>
                  <span>
                    Designed and implemented a custom UI Design System that
                    reduced front-end development time by 40% across 3 product
                    teams.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">▹</span>
                  <span>
                    Optimized CI/CD pipelines using GitHub Actions, reducing
                    deployment time from 25 minutes to under 8 minutes.
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- Job 2 --> */}
            <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
              <div className="mb-4 flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 text-white">
                    Full-Stack Developer &amp; UI Lead
                  </h3>
                  <p className="font-medium text-primary">
                    Creative Logic Agency
                  </p>
                </div>
                <span className="mt-1 text-sm font-medium text-slate-400 md:mt-0">
                  2017 — 2020
                </span>
              </div>
              <ul className="max-w-3xl space-y-3 text-sm text-slate-400">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">▹</span>
                  <span>
                    Architected scalable Node.js/Express backends for
                    high-traffic e-commerce platforms processing $1M+ monthly.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">▹</span>
                  <span>
                    Collaborated with designers to build interactive user
                    interfaces using
                    <span className="font-medium text-white">
                      Framer Motion
                    </span>
                    and specialized SVG animations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- Skills Section --> */}
        <section className="mb-16" id="skills">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
            <span className="material-symbols-outlined text-primary">
              psychology
            </span>
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-100 text-white">
                <span className="material-symbols-outlined text-sm text-primary">
                  laptop_mac
                </span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-100 text-white">
                <span className="material-symbols-outlined text-sm text-primary">
                  dns
                </span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-100 text-white">
                <span className="material-symbols-outlined text-sm text-primary">
                  palette
                </span>
                Design &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
                <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                  <span className="rounded-md bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary">
                    React / Next.js
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* <!-- Education --> */}
          <section id="education">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="material-symbols-outlined text-primary">
                school
              </span>
              Education
            </h2>
            <div className="space-y-6">
              <div className="relative border-l-2 border-primary/20 pl-6">
                <div className="absolute top-0 -left-1.5 size-3 rounded-full bg-primary"></div>
                <h3 className="text-lg leading-tight font-bold text-slate-100 text-white">
                  M.S. in Computer Science
                </h3>
                <p className="text-sm font-medium text-primary">
                  Stanford University
                </p>
                <p className="mt-1 text-xs text-slate-400">2015 — 2017</p>
              </div>
              <div className="relative border-l-2 border-primary/20 pl-6">
                <div className="absolute top-0 -left-1.5 size-3 rounded-full bg-slate-700"></div>
                <h3 className="text-lg leading-tight font-bold text-slate-100 text-white">
                  B.S. in Software Engineering
                </h3>
                <p className="text-sm font-medium text-primary">UC Berkeley</p>
                <p className="mt-1 text-xs text-slate-400">2011 — 2015</p>
              </div>
            </div>
          </section>
          {/* <!-- Certifications --> */}
          <section id="certifications">
            <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              Certifications
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20">
                  <span className="material-symbols-outlined text-primary">
                    cloud
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-100">
                    AWS Certified Solutions Architect
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Amazon Web Services • 2023
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/50 p-6 transition-all hover:border-primary/40">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20">
                  <span className="material-symbols-outlined text-primary">
                    design_services
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-100">
                    Google UX Design Professional
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Coursera / Google • 2022
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- Footer --> */}
        <footer className="mt-32 border-t border-primary/10 pt-12 text-center">
          <p className="mt-1 text-xs text-slate-400">
            © 2024 Alex Rivers. Built with Tailwind CSS and Inter Typeface.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              className="text-slate-400 transition-colors hover:text-primary"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-slate-400 transition-colors hover:text-primary"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-slate-400 transition-colors hover:text-primary"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-slate-400 transition-colors hover:text-primary"
              href="#"
            >
              Dribbble
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
