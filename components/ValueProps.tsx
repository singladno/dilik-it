import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { values } from "@/content/site";

export function ValueProps() {
  return (
    <section id="why" className="section scroll-mt-20 bg-bg-subtle">
      <Container>
        <SectionHeader
          eyebrow="Подход"
          title="Как мы строим работу"
          description="Принципы, на которых выстраиваем процесс на каждом проекте."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {values.map((v, i) => (
            <li key={v.title} className="card-hover p-6">
              <div className="flex items-start gap-4">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft font-mono text-accent"
                  aria-hidden
                >
                  <span className="text-sm font-bold">0{i + 1}</span>
                </span>
                <div>
                  <h3 className="text-base font-bold">{v.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{v.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
