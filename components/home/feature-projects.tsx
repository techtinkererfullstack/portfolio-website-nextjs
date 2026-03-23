import Link from "next/link"
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaCode,
  FaEye,
  FaMobile,
} from "react-icons/fa"
import { MdDesignServices } from "react-icons/md"

export default function FeatureProjects() {
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
            className="flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2 dark:text-emerald-400"
            href="#"
          >
            View All Projects
            <span className="material-symbols-outlined text-sm">
              <FaArrowCircleRight />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/home/feature-projects/ecommerce-revolution"
            className="group stagger-item cursor-pointer"
          >
            <div className="group stagger-item cursor-pointer">
              <div className="bg-sage-50 border-sage-100 relative mb-4 aspect-video overflow-hidden rounded-2xl border dark:border-white/5">
                <img
                  alt="E-commerce project"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="Modern e-commerce platform interface on screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2DL9yLYBih8V1pEuZGNwG-0i-sHZQ-nb4d5N3kcgL53guCcY4JvMYc6QbhnVFlGWptY0m2qBKQLD4KR9Gj3tZOdJdYzGK4uNg7nuoRKOdYqzQJO7RUl4JItC_HpzAnkZoHskDW2XUwBKSR6HRjfWqLQrTWjW2n_lP3GtR8nneiOl-AKXEcWhKkSwFr9v9OLRiWAfZwjFU8LxPXEmL4KjRkNBmlI_Lf-Ta7Jxs2kPTtwVxxDTbuB9HhLtiDINfBuzpAm7iyBK9hOo"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-lg bg-white px-4 py-2 font-bold text-primary">
                    View Case Study
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Live Demo"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaEye />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Frontend Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <MdDesignServices />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Backend Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaCode />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Android App"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaMobile />
                    </span>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-primary dark:group-hover:text-emerald-400">
                E-commerce Evolution
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Full-stack Next.js application with Stripe integration.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/features/analytics"
            className="group stagger-item cursor-pointer"
          >
            <div className="group stagger-item cursor-pointer">
              <div className="bg-sage-50 border-sage-100 relative mb-4 aspect-video overflow-hidden rounded-2xl border dark:border-white/5">
                <img
                  alt="SaaS Dashboard"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="Detailed data visualization dashboard with dark theme"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGrK_9FShIEenbP4BDRNTa1s0nPYGu5zFz6gmJk0bu9xN7PrZrHbcnFNx1i6E_j9t60jBAXRG3R6f0OYnzhstQqUuy4N95BmS6QSllbJg1PifrAZQZL5fBMG3fsW8WHDpJXXwe4RpnQWyH5FeBj-b-6d2yp92XqFnOwpSFt7dJwz0bmVmdvOYm8CyQjqoWZ--sMmnzwqyM4oM9SK3tPToVJ5hwC6PvlovGXC8KXgvsBODYRXZhhJBvy47F7iulehN6c3T7A8UwMyY"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-lg bg-white px-4 py-2 font-bold text-primary">
                    View Case Study
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Live Demo"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaEye />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Frontend Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <MdDesignServices />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Backend Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaCode />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Android App"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaMobile />
                    </span>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-primary dark:group-hover:text-emerald-400">
                Analytics Pro
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Real-time data visualization tool for enterprise teams.
              </p>
            </div>
          </Link>
          <Link
            href="/projects/features/ai-design"
            className="group stagger-item cursor-pointer"
          >
            <div className="group stagger-item cursor-pointer">
              <div className="bg-sage-50 border-sage-100 relative mb-4 aspect-video overflow-hidden rounded-2xl border dark:border-white/5">
                <img
                  alt="AI Portfolio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="Abstract AI neural network visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1GMpZSjaj5-KM0fNMGiw6S0U9RjpXkcH83_5nVrpPv_29oa6yNV9h7x8baZwp0jAd5VzRqdBHRyBqzFgBe39h_2pJYHg0IHpPXHlxxwwT27FYzjcltX5ST4IO5-7EC6XQ-WOhyNS-fLxfs7ihIePGDI75ek1IaYZjtt5mOm2U3xBhu4jLawVqlP2jzSh3ksDKWrvpPvVUgWn7GfKiceHn0Nyohr9tvpHFc036MOxv1k4vfzS-LkxiCMd9vyeDZD_AYAbT58ESKpM"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-lg bg-white px-4 py-2 font-bold text-primary">
                    View Case Study
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Live Demo"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaEye />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Frontend Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <MdDesignServices />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Backend Code"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaCode />
                    </span>
                  </a>
                  <a
                    className="rounded-lg border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500"
                    href="#"
                    title="Android App"
                  >
                    <span className="material-symbols-outlined text-sm">
                      <FaMobile />
                    </span>
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-primary dark:group-hover:text-emerald-400">
                Neural Canvas
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                AI-driven design tool for generating vector assets.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
