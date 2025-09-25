import Link from "next/link";
import { ReactNode } from "react";

export function IconLink({
  href,
  children,
  label,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
    >
      {children}
      <span className="font-medium">{label}</span>
    </Link>
  );
}