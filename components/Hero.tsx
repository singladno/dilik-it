import Link from "next/link";
import { Container } from "./Container";
import { IDEWindow } from "./IDEWindow";
import { LiveCode, type LiveLine } from "./LiveCode";
import { stats } from "@/content/site";

const heroLines: LiveLine[] = [
  {
    tokens: [
      { text: "const", className: "tok-kw" },
      { text: " " },
      { text: "services", className: "tok-prop" },
      { text: " " },
      { text: "=", className: "tok-punct" },
      { text: " " },
      { text: "[", className: "tok-punct" },
    ],
  },
  {
    indent: 4,
    tokens: [
      { text: '"SaaS"', className: "tok-str" },
      { text: ",", className: "tok-punct" },
      { text: " " },
      { text: "// продукты под ключ", className: "tok-cmt" },
    ],
  },
  {
    indent: 4,
    tokens: [
      { text: '"AI / ML"', className: "tok-str" },
      { text: ",", className: "tok-punct" },
      { text: " " },
      { text: "// LLM, RAG, CV", className: "tok-cmt" },
    ],
  },
  {
    indent: 4,
    tokens: [
      { text: '"Mobile"', className: "tok-str" },
      { text: ",", className: "tok-punct" },
      { text: " " },
      { text: "// iOS, Android", className: "tok-cmt" },
    ],
  },
  {
    indent: 4,
    tokens: [
      { text: '"Web"', className: "tok-str" },
      { text: " " },
      { text: "// сайты и порталы", className: "tok-cmt" },
    ],
  },
  {
    tokens: [{ text: "];", className: "tok-punct" }],
  },
  { blank: true },
  {
    tokens: [
      { text: "await", className: "tok-kw" },
      { text: " " },
      { text: "launch", className: "tok-fn" },
      { text: "(", className: "tok-punct" },
      { text: "services", className: "tok-prop" },
      { text: ");", className: "tok-punct" },
    ],
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pb-16 pt-12 md:pb-24 md:pt-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-hero-glow opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid bg-[length:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_30%,transparent_80%)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="eyebrow animate-fade-in">
              Студия разработки · ИП в РФ
            </p>
            <h1 className="mt-5 text-display-xl text-balance">
              <span className="block">Запустим ваш</span>
              <span className="block">MVP за 8–12 недель</span>
              <span className="mt-1 block bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
                SaaS · AI · Web
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted text-pretty">
              От брифа до продакшена на серверах в РФ. Сначала 30‑минутный
              разбор задачи — затем план, сроки и ориентир по бюджету. Без
              размытого «делаем всё».
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="btn-primary">
                Созвон 30 минут
                <span aria-hidden>→</span>
              </Link>
              <Link href="#offer-entry" className="btn-secondary">
                Как это работает
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold tracking-tight md:text-3xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-xs text-ink-muted">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0 lg:col-span-5">
            <IDEWindow filename="dilik · stack.ts" framed status="online">
              <LiveCode lines={heroLines} />
            </IDEWindow>

            <div className="absolute -bottom-4 -right-2 hidden rounded-xl border border-border bg-white p-4 shadow-card md:block">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-success/15 text-success">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold">Запуск</p>
                  <p className="text-xs text-ink-muted">от 8 недель</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
