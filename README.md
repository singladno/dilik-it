# Dilik — сайт IT-компании для российского рынка

Лендинг + сайт услуг бутиковой команды разработки. Реализован на Next.js 15 (App Router), Tailwind CSS, MDX для кейсов и юр. страниц. Соответствует 152-ФЗ, готов к деплою в российском облаке.

## Что внутри

- **8 готовых страниц:** главная, услуги-хаб + 4 услуги (SaaS, AI/ML, Mobile, Web), кейсы + детальные карточки, о команде, контакты с формой.
- **5 концепт-кейсов** в формате MDX (`content/cases/*.mdx`).
- **Юр. страницы:** политика обработки ПДн (152-ФЗ), cookie, договор-оферта.
- **Форма обратной связи** с уведомлением в Telegram.
- **Cookie-баннер** с согласием.
- **SEO:** sitemap, robots, OpenGraph, semantic HTML.
- **Аналитика:** Яндекс.Метрика подключается через env-переменную.

## Документация

- [BRAND.md](./BRAND.md) — позиционирование, тон, ценности, реквизиты.
- [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) — Docker, Yandex Cloud, SSL, Метрика.
- [docs/LEGAL-RF.md](./docs/LEGAL-RF.md) — регистрация ИП/ООО, РКН, ИТ-аккредитация Минцифры, договоры.
- [docs/UX-PILOT-PROMPTS.md](./docs/UX-PILOT-PROMPTS.md) — готовые промпты для UX Pilot, если хочешь альтернативный дизайн.
- [docs/GO-TO-MARKET.md](./docs/GO-TO-MARKET.md) — план личного бренда, CRM-воронка, outbound, KPI на 6 месяцев.

## Быстрый старт

```bash
cp .env.example .env
# заполните TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID минимум
npm install --legacy-peer-deps
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Структура

```
app/
├── layout.tsx                 # корневой layout, фонты, метрика, cookie
├── page.tsx                   # главная
├── globals.css                # tailwind + базовые стили
├── not-found.tsx              # 404
├── sitemap.ts / robots.ts     # SEO
├── services/
│   ├── page.tsx               # хаб услуг
│   ├── saas/page.tsx          # флагман 1
│   ├── ai/page.tsx            # флагман 2
│   ├── mobile/page.tsx
│   └── web/page.tsx
├── cases/
│   ├── page.tsx               # список
│   └── [slug]/page.tsx        # MDX-рендер
├── about/page.tsx
├── contact/page.tsx
├── privacy/page.tsx           # 152-ФЗ
├── cookie-policy/page.tsx
├── offer/page.tsx
└── api/contact/route.ts       # форма → Telegram

components/                    # 17 React-компонентов
content/
├── site.ts                    # центральный конфиг
└── cases/                     # 5 MDX-кейсов
lib/
├── cases.ts                   # MDX-loader
└── utils.ts
docs/                          # 4 документа-инструкции
```

## Что меняется в первую очередь

1. **Название и реквизиты** — `BRAND.md`, `content/site.ts`, `.env`.
2. **Контакты** — `.env`: `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_TG`, `NEXT_PUBLIC_CONTACT_PHONE`.
3. **Юр. реквизиты** — `.env`: `NEXT_PUBLIC_LEGAL_NAME`, `NEXT_PUBLIC_LEGAL_INN`, `NEXT_PUBLIC_LEGAL_OGRN`.
4. **Цены и ниши** — `content/site.ts` (массив `services`).
5. **Концепт-кейсы** — добавляй MDX в `content/cases/`.

## Команды

```bash
npm run dev          # разработка (порт 3000)
npm run build        # прод-сборка (standalone)
npm start            # запуск прод-сборки
npm run lint         # ESLint
npm run type-check   # TypeScript-проверка
```

## Деплой

См. [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md). Короткая версия:

```bash
docker compose up -d --build
```

Дальше Nginx + Certbot для HTTPS.

## Перед публикацией — чек-лист

- [ ] Заменено название «Dilik» на финальное (если решил иначе).
- [ ] Заполнены реквизиты в `.env.production`.
- [ ] Подано уведомление в Роскомнадзор (см. `docs/LEGAL-RF.md`).
- [ ] Подана заявка на ИТ-аккредитацию Минцифры.
- [ ] Подключён счётчик Яндекс.Метрики (`NEXT_PUBLIC_YM_ID`).
- [ ] Настроен Telegram-бот для уведомлений по форме.
- [ ] Договор-оферта согласован с юристом или ссылка скрыта из подвала.
- [ ] Запущен Telegram-канал / Хабр (см. `docs/GO-TO-MARKET.md`).

## Лицензия

Код этого сайта — твой. Делай что хочешь, удачи в запуске.
