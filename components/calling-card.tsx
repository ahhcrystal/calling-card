const LINKEDIN_URL = 'https://www.linkedin.com/in/crystal-tran-b809612a3'

const roles = ['Medical Assistant', 'Nail Tech', 'Barista']

export function CallingCard() {
  return (
    <article className="w-full max-w-md rounded-3xl border border-pink-200 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(219,39,119,0.35)] sm:p-10">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink-600">
          Hello, I&apos;m
        </p>
        <h1 className="mt-2 font-serif text-5xl leading-tight text-neutral-900 text-balance">
          Crystal Tran
        </h1>
      </header>

      <section aria-labelledby="what-i-do" className="mt-8">
        <h2 id="what-i-do" className="sr-only">
          What I do
        </h2>
        <ul className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-800"
            >
              {role}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about" className="mt-8 border-t border-pink-100 pt-8">
        <h2 id="about" className="text-xs font-medium uppercase tracking-[0.2em] text-pink-600">
          Career Focus
        </h2>
        <p className="mt-3 leading-relaxed text-neutral-700 text-pretty">
  Pursuing a career in psychiatry or dermatology, and seeking roles that offer deeper
  clinical exposure to either specialty.
  </p>
      </section>

      <footer className="mt-10">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
          Connect on LinkedIn
        </a>
        <p className="mt-3 text-center text-xs text-neutral-500 break-all">
          linkedin.com/in/crystal-tran-b809612a3
        </p>
      </footer>
    </article>
  )
}
