"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sectionIds = nav
      .map((n) => n.href)
      .filter((h) => h.startsWith("#"))
      .map((h) => h.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Главная навигация">
          {nav.map((item) => {
            const id = item.href.startsWith("#") ? item.href.slice(1) : "";
            const active = id && activeSection === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-bg-subtle hover:text-ink",
                  active && "text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="#contact" className="btn-primary hidden md:inline-flex">
            Обсудить проект
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Открыть меню"
            className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-all",
                open && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={cn(
                "mt-1 block h-0.5 w-5 bg-ink transition-all",
                open && "-translate-y-1 -rotate-45",
              )}
            />
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-bg-subtle"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Обсудить проект
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
