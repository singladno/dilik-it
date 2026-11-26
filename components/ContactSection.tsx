import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { ContactForm } from "./ContactForm";
import { site } from "@/content/site";

const nextSteps = [
  "В течение 1 рабочего дня отвечаем и предлагаем слот на 30 минут.",
  "На созвоне фиксируем цели, ограничения и критерии успеха.",
  "За 2 рабочих дня — черновая оценка, этапы и стек.",
  "Если подходит — договор, предоплата и старт спринта.",
];

export function ContactSection() {
  const telegramHandle = site.contact.telegram.replace(/^@/, "");
  const phoneHref = `tel:${site.contact.phone.replace(/\s|\(|\)|-/g, "")}`;

  return (
    <section
      id="contact"
      className="section scroll-mt-20 bg-bg-subtle section-glow-tc"
    >
      <Container>
        <SectionHeader
          eyebrow="Контакты"
          title="Расскажите о задаче"
          description={
            site.contact.telegram
              ? "Заполните форму или напишите в Telegram. Ответим в течение 1 рабочего дня — пришлём уточняющие вопросы или предварительную оценку."
              : "Заполните форму или напишите на email. Ответим в течение 1 рабочего дня — пришлём уточняющие вопросы или предварительную оценку."
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="card overflow-hidden">
              <div className="border-b border-border bg-white px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                  Прямой контакт
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Если форма кажется лишней — напишите как удобно.
                </p>
              </div>

              <ul className="divide-y divide-border">
                {site.contact.telegram ? (
                  <ContactLink
                    href={`https://t.me/${telegramHandle}`}
                    label="Telegram"
                    value={site.contact.telegram}
                    icon={<TelegramIcon />}
                    external
                  />
                ) : null}
                <ContactLink
                  href={`mailto:${site.contact.email}`}
                  label="Email"
                  value={site.contact.email}
                  icon={<EmailIcon />}
                />
                <ContactLink
                  href={phoneHref}
                  label="Телефон"
                  value={site.contact.phone}
                  icon={<PhoneIcon />}
                />
              </ul>
            </div>

            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Что дальше
              </p>

              <ol className="relative mt-5 space-y-5 border-l border-border pl-6">
                {nextSteps.map((text, i) => (
                  <li key={i} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[1.6rem] top-0.5 grid h-6 w-6 place-items-center rounded-full border border-accent/30 bg-white font-mono text-[10px] font-semibold text-accent"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-ink-muted">{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-2 -inset-y-2 -z-10 rounded-3xl bg-gradient-to-br from-accent/15 via-accent/5 to-transparent blur-sm"
              />
              <div className="card overflow-hidden">
                <header className="flex items-center justify-between gap-4 border-b border-border bg-white px-6 py-4 md:px-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                      Бриф проекта
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      Опишите задачу — пришлём оценку
                    </p>
                  </div>
                  <span className="hidden items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success sm:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Принимаем заявки
                  </span>
                </header>

                <div className="bg-white px-6 py-6 md:px-8 md:py-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactLink({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { rel: "noopener", target: "_blank" } : {})}
        className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-accent-soft/50"
      >
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white"
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-ink-subtle">
            {label}
          </span>
          <span className="mt-0.5 block truncate text-sm font-semibold text-ink group-hover:text-accent">
            {value}
          </span>
        </span>
        <span
          aria-hidden
          className="text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
        >
          →
        </span>
      </a>
    </li>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-5 w-5"
    >
      <path d="m21.5 3.5-19 7.5 6 2.2L18 7l-7 8 .2 5 3-3.3 5.3 3.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-5 w-5"
    >
      <path d="M5.5 3.5h3l2 5-2.5 1.5c1 2.5 3 4.5 5.5 5.5L15 13l5 2v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
