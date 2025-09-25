import Image from "next/image";
import Link from "next/link";
import { IconLink } from "@/components/IconLink";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-20 md:h-28 md:w-28 overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
            <Image src="/avatar.jpeg" alt="Garrett's Headshot" fill sizes="112px" priority />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Garrett Daviscourt
            </h1>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Software Engineer • Seattle, WA
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <IconLink href="mailto:gdaviscourt@gmail.com" label="Email me">
                <Mail className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://github.com/garrett2840" label="GitHub">
                <Github className="h-4 w-4" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/gdaviscourt351" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </IconLink>
              <IconLink href="/Garrett_Daviscourt_Resume.pdf" label="Download Resume">
                <FileDown className="h-4 w-4" />
              </IconLink>
            </div>
          </div>
        </div>
      </header>

      {/* Intro */}
      <section className="mt-8">
        <p className="text-pretty text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Description Under Construction
        </p>
      </section>

      {/* Sections: Experience / Projects */}
      <section className="mt-12 grid gap-6">
        <Card
          title="Education"
          items={[
            {
              title: "B.S. in Computer Science",
              href: "",
              desc:
                "Whitworth University",
            },
          ]}
        />
        <Card
          title="Experience"
          items={[
            {
              title: "Under Construction",
              href: "#",
              desc: "",
              date: "",
              location: "",
            },
          ]}
        />
        <Card
          title="Projects"
          items={[
            {
              title: "Under Construction",
              href: "#",
              desc: "",
            },
          ]}
        />
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-xl font-semibold">Let’s work together</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          I’m open to full-time and freelance roles. I would love to learn more about your company or project.
        </p>
        <div className="mt-4">
          <Link
            href="mailto:you@example.com?subject=Project%20Inquiry"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
          >
            Contact me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Garrett Daviscourt. All rights reserved.
      </footer>
    </main>
  );
}

function Card({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    desc: string;
    href?: string | null;
    date?: string;
    location?: string;
  }[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-6">
        {items.map((it) => (
          <li key={it.title} className="group">
            {/* Top row: title + date */}
            <div className="flex items-start justify-between gap-4">
              {it.href ? (
                <Link
                  href={it.href}
                  className="text-base font-medium underline-offset-4 group-hover:underline"
                >
                  {it.title}
                </Link>
              ) : (
                <span className="text-base font-medium">{it.title}</span>
              )}

              {it.date && (
                <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                  {it.date}
                </span>
              )}
            </div>

            {/* Location (optional) */}
            {it.location && (
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {it.location}
              </span>
            )}

            {/* Description */}
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {it.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}