import Link from "next/link";
import { Container } from "./Container";

const outcomes = [
  "Что запускать первым и что отложить",
  "Стек и архитектура под ваш бюджет",
  "Оценка сроков и стоимости MVP",
];

export function EntryOffer() {
  return (
    <section
      id="offer-entry"
      className="relative scroll-mt-20 overflow-hidden border-y border-border bg-ink text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(99,102,241,0.35),transparent_55%)]"
      />
      <Container className="relative py-14 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
              Входной оффер · 30 минут
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Разберём задачу и скажем, как запустить MVP за 8–12 недель
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70 text-pretty">
              Бесплатный созвон: цели, ограничения, риски. После — план работ и
              ориентир по бюджету. Без «продающей презентации на час».
            </p>
            <ul className="mt-6 space-y-2.5">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-white/85"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-7">
              <p className="text-sm font-semibold text-white">Что получите</p>
              <p className="mt-2 text-sm text-white/65">
                Ответ в течение 1 рабочего дня · созвон 30 минут · черновая
                оценка за 2 рабочих дня после брифа.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-indigo-50"
              >
                Записаться на созвон
                <span aria-hidden>→</span>
              </Link>
              <p className="mt-3 text-center text-xs text-white/45">
                Или напишите на email — ответим так же быстро
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
