import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

const highlights = [
  {
    title: "Полный цикл",
    description:
      "Берём проект от исследования и аналитики до запуска и постпродажной поддержки. Можем подключаться и на промежуточных этапах.",
  },
  {
    title: "Состав под проект",
    description:
      "Команда формируется под требования продукта: фронтенд, бэкенд, мобильная разработка, ML, DevOps, UX/UI-дизайн.",
  },
  {
    title: "Соответствие требованиям РФ",
    description:
      "Хостинг и обработка персональных данных на серверах в России. Готовая инфраструктура для работы по 152-ФЗ.",
  },
  {
    title: "Развитие после релиза",
    description:
      "Релиз — точка старта. Помогаем продукту расти: новые фичи, оптимизация, исправления, регулярные релизы.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section scroll-mt-20 section-glow-mr">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="О нас"
              title="Студия разработки полного цикла"
              description="Помогаем компаниям запускать цифровые продукты и развивать существующие. Работаем по понятному процессу с фиксированными этапами и регулярными демо."
            />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {highlights.map((h, i) => (
              <li key={h.title} className="card-hover p-5">
                <span className="font-mono text-xs text-ink-subtle">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold">{h.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{h.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
