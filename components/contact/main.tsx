"use client"

import useReveal from "@/hooks/reveal"

export default function Main() {
  useReveal()
  return (
    <main className="px-4 pt-20 pb-20 sm:px-6 md:pt-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <section className="reveal flex flex-col justify-center lg:col-span-5">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-emerald-400"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary dark:bg-emerald-400"></span>
            </span>
            Available for projects
          </div>
          <h1 className="mb-6 text-2xl leading-[1.1] font-black tracking-tight text-slate-900 sm:text-3xl md:text-5xl lg:text-7xl dark:text-slate-100">
            Let's build <br />
            <span className="text-primary dark:text-emerald-400">
              something
            </span>{" "}
            great.
          </h1>
          <p className="mb-10 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg dark:text-slate-400">
            Senior Full-Stack Engineer based in San Francisco. I'm currently
            looking for high-impact opportunities in AI, Fintech, or Cloud
            Infrastructure.
          </p>
          <div className="mb-12 space-y-6">
            <div className="group flex cursor-pointer items-center gap-4">
              <div className="dark:group-hover:text-emerald-400\ flex size-12 items-center justify-center rounded-full bg-primary/30 transition-all duration-300 group-hover:bg-primary/50 group-hover:text-primary dark:group-hover:bg-emerald-400/30">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs font-bold tracking-tighter text-slate-500 uppercase">
                  Email me at
                </p>
                <p className="text-sm font-medium transition-colors group-hover:text-accent sm:text-base">
                  hello@alexrivera.dev
                </p>
              </div>
            </div>
            <div className="group flex cursor-pointer items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/30 transition-all duration-300 group-hover:bg-primary/50 group-hover:text-primary dark:group-hover:bg-emerald-400/30 dark:group-hover:text-emerald-400">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-xs font-bold tracking-tighter text-slate-500 uppercase">
                  Current Location
                </p>
                <p className="text-sm font-medium transition-colors group-hover:text-accent sm:text-base">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              className="glass group flex size-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-primary/50 hover:text-primary dark:hover:bg-emerald-400/30 dark:hover:text-emerald-400"
              href="#"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6 fill-current"
                //   viewbox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a
              className="glass group flex size-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-primary/50 hover:text-primary dark:hover:bg-emerald-400/30 dark:hover:text-emerald-400"
              href="#"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6 fill-current"
                //   viewbox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              className="glass group flex size-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-primary/50 hover:text-primary dark:hover:bg-emerald-400/30 dark:hover:text-emerald-400"
              href="#"
            >
              <span className="sr-only">Twitter X</span>
              <svg
                className="h-6 w-6 fill-current"
                //   viewbox="0 0 24 24"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
              </svg>
            </a>
          </div>
        </section>
        {/* <!-- Right Column: Contact Form & Map --> */}
        <section className="reveal flex flex-col justify-center lg:col-span-7">
          <div className="glass rounded-2xl p-8 shadow-2xl md:p-12">
            <form action="#" className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="form-floating-label relative">
                  <input
                    className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-white transition-all focus:border-accent focus:ring-0"
                    id="fullname"
                    name="fullname"
                    placeholder=" "
                    type="text"
                  />
                  <label
                    className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all"
                    // for="fullname"
                  >
                    Full Name
                  </label>
                </div>
                <div className="form-floating-label relative">
                  <input
                    className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-white transition-all focus:border-accent focus:ring-0"
                    id="email"
                    name="email"
                    placeholder=" "
                    type="email"
                  />
                  <label
                    className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all"
                    // for="email"
                  >
                    Email Address
                  </label>
                </div>
              </div>
              <div className="form-floating-label relative">
                <input
                  className="block w-full border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-white transition-all focus:border-accent focus:ring-0"
                  id="subject"
                  name="subject"
                  placeholder=" "
                  type="text"
                />
                <label
                  className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all"
                  //   for="subject"
                >
                  Subject
                </label>
              </div>
              <div className="form-floating-label relative">
                <textarea
                  className="block w-full resize-none border-0 border-b-2 border-primary bg-transparent px-0 py-3 text-white transition-all focus:border-accent focus:ring-0"
                  id="message"
                  name="message"
                  placeholder=" "
                  //   rows="4"
                ></textarea>
                <label
                  className="pointer-events-none absolute top-3 left-0 origin-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-all"
                  //   for="message"
                >
                  Your Message
                </label>
              </div>
              <button
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-5 font-black text-primary shadow-lg shadow-accent/20 transition-all hover:bg-emerald-400"
                type="submit"
              >
                SEND MESSAGE
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </form>
            {/* <!-- Location Indicator / Map Section --> */}
            <div className="mt-12">
              <p className="mb-4 text-xs font-bold tracking-widest text-slate-500 uppercase">
                Location: San Francisco, CA
              </p>
              <div className="relative h-48 w-full overflow-hidden rounded-xl border border-primary">
                <div
                  className="absolute inset-0 bg-primary/20 bg-cover bg-center mix-blend-overlay grayscale"
                  data-alt="Abstract dark map pattern of San Francisco"
                  data-location="San Francisco"
                  //   style="
                  //     background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAAOzC1MLA5_sGipza4JDMbXMLpP886P-aUbT0Z3Y4_52lE0uBBt1bFcsikMFiBXAKxG-6FiV_-1xOUvFZYgooo3Cwg6EuGl1nW7WyQAuo4IGVxV-Z3msp0yl3HIRvJAi2qca-DM9x2u0RNXejFUxd2b7fZK2O62eWD6Nbwj1x4lt_3Ja4zp4_UlaiqQABRcO472skflb76sa-CCMteKBsyH9LwYryQ1kmHcR2KDuEowFw9bYj49SELKlngfp0q2KQpE8Ao0o42NC4&quot;);
                  //   "
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 animate-pulse rounded-full bg-accent/20"></div>
                    <span
                      className="material-symbols-outlined relative z-10 text-4xl text-accent"
                      //   style="font-variation-settings: &quot;FILL&quot; 1"
                    >
                      location_on
                    </span>
                  </div>
                </div>
                <div className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-lg px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase">
                  <span className="size-2 rounded-full bg-accent"></span>
                  Currently UTC -8
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
