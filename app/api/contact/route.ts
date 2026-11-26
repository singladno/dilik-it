import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  contact?: string;
  company?: string;
  service?: string;
  budget?: string;
  deadline?: string;
  message?: string;
  consent?: string;
  website?: string;
};

const SERVICE_LABEL: Record<string, string> = {
  saas: "SaaS-разработка",
  ai: "AI/ML интеграция",
  mobile: "Мобильное приложение",
  web: "Веб-разработка",
  consult: "Консультация / архитектурный аудит",
  other: "Другое",
};

const BUDGET_LABEL: Record<string, string> = {
  "<500k": "до 500 тыс. ₽",
  "500-1.5m": "500 тыс. – 1.5 млн ₽",
  "1.5-3m": "1.5 – 3 млн ₽",
  ">3m": "от 3 млн ₽",
  unknown: "пока не знаю",
};

const DEADLINE_LABEL: Record<string, string> = {
  urgent: "Срочно (1–2 мес)",
  normal: "Стандартно (3–4 мес)",
  flexible: "Гибко (4+ мес)",
};

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Невалидный JSON" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  if (
    !payload.name?.trim() ||
    !payload.contact?.trim() ||
    !payload.message?.trim()
  ) {
    return NextResponse.json(
      { error: "Заполните обязательные поля: имя, контакт и описание" },
      { status: 400 },
    );
  }

  if (!payload.consent) {
    return NextResponse.json(
      { error: "Требуется согласие на обработку персональных данных" },
      { status: 400 },
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = formatMessage(payload);

  if (!token || !chatId) {
    console.warn(
      "[contact] Telegram env vars not set. Lead received but not delivered:",
    );
    console.warn(text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!tgRes.ok) {
      const body = await tgRes.text();
      console.error("[contact] Telegram error:", tgRes.status, body);
      return NextResponse.json(
        {
          error:
            "Не удалось доставить заявку. Напишите нам напрямую в Telegram или email.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Network error:", err);
    return NextResponse.json(
      { error: "Сетевая ошибка. Попробуйте позже или напишите напрямую." },
      { status: 502 },
    );
  }
}

function formatMessage(p: ContactPayload): string {
  const lines = [
    "<b>🆕 Новая заявка с сайта</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(p.name ?? "")}`,
    `<b>Контакт:</b> ${escapeHtml(p.contact ?? "")}`,
  ];
  if (p.company) lines.push(`<b>Компания:</b> ${escapeHtml(p.company)}`);
  if (p.service)
    lines.push(`<b>Услуга:</b> ${SERVICE_LABEL[p.service] ?? p.service}`);
  if (p.budget)
    lines.push(`<b>Бюджет:</b> ${BUDGET_LABEL[p.budget] ?? p.budget}`);
  if (p.deadline)
    lines.push(`<b>Сроки:</b> ${DEADLINE_LABEL[p.deadline] ?? p.deadline}`);
  lines.push("", "<b>Задача:</b>", escapeHtml(p.message ?? ""));
  return lines.join("\n");
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
