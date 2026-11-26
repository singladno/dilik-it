"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "ok" | "error";

const services = [
  { value: "saas", label: "SaaS-разработка" },
  { value: "ai", label: "AI/ML интеграция" },
  { value: "mobile", label: "Мобильное приложение" },
  { value: "web", label: "Веб-разработка" },
  { value: "consult", label: "Консультация / архитектурный аудит" },
  { value: "other", label: "Другое" },
];

const budgets = [
  { value: "<500k", label: "до 500 тыс. ₽" },
  { value: "500-1.5m", label: "500 тыс. – 1.5 млн ₽" },
  { value: "1.5-3m", label: "1.5 – 3 млн ₽" },
  { value: ">3m", label: "от 3 млн ₽" },
  { value: "unknown", label: "пока не знаю" },
];

const deadlines = [
  { value: "urgent", label: "Срочно (1–2 мес)" },
  { value: "normal", label: "Стандартно (3–4 мес)" },
  { value: "flexible", label: "Гибко (4+ мес)" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    if (fd.get("website")) {
      setStatus("ok");
      form.reset();
      return;
    }

    if (!fd.get("consent")) {
      setStatus("error");
      setError("Нужно согласие на обработку персональных данных");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(fd.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Не удалось отправить");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
    }
  }

  if (status === "ok") {
    return (
      <div className="py-6 text-center md:py-10">
        <span
          aria-hidden
          className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-2xl text-success"
        >
          ✓
        </span>
        <h2 className="mt-4 text-2xl font-bold">Спасибо, заявка получена</h2>
        <p className="mx-auto mt-2 max-w-md text-ink-muted">
          Ответим в течение 1 рабочего дня — пришлём вопросы или сразу
          предварительную оценку.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Как к вам обращаться" required>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="input"
            placeholder="Имя"
          />
        </Field>

        <Field label="Email или Telegram" required>
          <input
            type="text"
            name="contact"
            required
            className="input"
            placeholder="hello@example.com или @username"
          />
        </Field>

        <Field label="Компания (если есть)">
          <input
            type="text"
            name="company"
            className="input"
            placeholder="ООО «Ромашка»"
          />
        </Field>

        <Field label="Тип услуги" required>
          <select name="service" required className="input">
            <option value="">— выберите —</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Ориентир по бюджету">
          <select name="budget" className="input">
            <option value="">— не указан —</option>
            {budgets.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Сроки">
          <select name="deadline" className="input">
            <option value="">— не указано —</option>
            {deadlines.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Опишите задачу" required className="mt-5">
        <textarea
          name="message"
          required
          rows={5}
          className="input resize-y"
          placeholder="Расскажите, что нужно сделать, какие есть ограничения, цели бизнеса. Чем подробнее — тем точнее оценка."
        />
      </Field>

      <label className="mt-5 flex items-start gap-3 text-sm">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-border accent-accent"
        />
        <span className="text-ink-muted">
          Согласен(а) с{" "}
          <Link href="/privacy" className="text-accent underline">
            политикой обработки персональных данных
          </Link>{" "}
          в соответствии с 152-ФЗ.
        </span>
      </label>

      {status === "error" && error && (
        <p
          className="mt-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-danger"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn("btn-primary", status === "submitting" && "opacity-70")}
        >
          {status === "submitting" ? "Отправляем..." : "Отправить заявку"}
        </button>
        <p className="text-xs text-ink-muted">
          Ответим в течение 1 рабочего дня. Никакого спама.
        </p>
      </div>

      <style jsx>{`
        :global(.input) {
          display: block;
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #e6e6ee;
          background: #fff;
          padding: 0.625rem 0.875rem;
          font-size: 0.95rem;
          color: #0b0b14;
          transition:
            border-color 0.15s,
            box-shadow 0.15s;
        }
        :global(.input::placeholder) {
          color: #8a8a9e;
        }
        :global(.input:focus) {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(165, 180, 252, 0.5);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      {children}
    </label>
  );
}
