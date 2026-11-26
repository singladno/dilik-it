import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { ServiceIcon } from "./ServiceIcon";
import { services } from "@/content/site";

export function ServicesGrid() {
  return (
    <section id="services" className="section scroll-mt-20 section-glow-tr">
      <Container>
        <SectionHeader
          eyebrow="Услуги"
          title="Ещё делаем"
          description="Основной вход — MVP SaaS и AI-интеграции. Ниже — направления, в которых закрываем полный цикл: аналитика, дизайн, разработка, запуск и поддержка."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group relative overflow-hidden card p-6 md:p-8"
            >
              <FileTag>{`services/${s.slug}.ts`}</FileTag>

              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-white text-accent">
                <ServiceIcon name={s.icon as never} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.short}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-ink-muted"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FileTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-subtle px-2 py-1 font-mono text-[11px] text-ink-subtle">
      <span aria-hidden className="flex gap-0.5">
        <span className="h-1 w-1 rounded-full bg-danger/60" />
        <span className="h-1 w-1 rounded-full bg-warning/60" />
        <span className="h-1 w-1 rounded-full bg-success/60" />
      </span>
      {children}
    </span>
  );
}
