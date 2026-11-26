import Link from "next/link";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-bg pb-12 pt-10 md:pb-16 md:pt-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-hero-glow opacity-60"
      />
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Хлебные крошки" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
              <li>
                <Link href="/" className="hover:text-ink">Главная</Link>
              </li>
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span aria-hidden>/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page">{b.label}</span>
                  ) : (
                    <Link href={b.href} className="hover:text-ink">{b.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-display-lg text-balance">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-ink-muted text-pretty">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
