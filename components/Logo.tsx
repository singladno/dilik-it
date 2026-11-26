import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — на главную`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-ink text-white transition-transform group-hover:scale-105">
        <span className="text-base font-bold leading-none">D</span>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-bg" />
      </span>
      <span className="text-lg font-bold tracking-tight">{site.name}</span>
    </Link>
  );
}
