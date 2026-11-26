import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              {site.description}
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold">Разделы</h3>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold">Документы</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  Политика обработки ПДн
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  Политика cookie
                </Link>
              </li>
              <li>
                <Link
                  href="/offer"
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  Договор-оферта
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold">Связаться</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  {site.contact.email}
                </a>
              </li>
              {site.contact.telegram ? (
                <li>
                  <a
                    href={`https://t.me/${site.contact.telegram.replace(/^@/, "")}`}
                    className="text-sm text-ink-muted hover:text-ink"
                    rel="noopener"
                  >
                    Telegram: {site.contact.telegram}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  {site.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-ink-subtle md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {year} {site.legal.name}. Все права защищены.
            </p>
            <p>
              ИНН {site.legal.inn} · ОГРН/ОГРНИП {site.legal.ogrn}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
