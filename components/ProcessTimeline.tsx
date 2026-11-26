import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { processSteps } from "@/content/site";

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="section scroll-mt-20 bg-bg-subtle section-grid-soft"
    >
      <Container>
        <SectionHeader
          eyebrow="Как мы работаем"
          title="Прозрачные этапы и фиксированные сроки"
          description="Демо каждые 2 недели. Вы видите прогресс на каждом шаге и можете влиять на приоритеты до релиза."
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.n} className="card-hover p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-accent">
                  {step.n}
                </span>
                <span className="rounded-full bg-bg-subtle px-2 py-0.5 text-xs text-ink-muted">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
