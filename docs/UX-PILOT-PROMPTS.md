# Промпты для UX Pilot

> Готовые к копированию промпты для каждой страницы. Сайт уже реализован в коде — UX Pilot нужен, если хочешь альтернативные варианты дизайна или хочешь переделать визуал.

## Как пользоваться

1. Открой [uxpilot.ai](https://uxpilot.ai/).
2. В настройках стиля (или в начале каждого промпта) вставь **Общий контекст** — он задаёт тон всему дизайну.
3. Для каждой страницы вставляй её отдельный промпт. Меняй только то, что выделено `<...>`.
4. Полученные дизайны прикладывай к чату с разработчиком (или мне) — портируем в код.

---

## 0. Общий контекст (вставить один раз в стиль / brand)

```
Project: Marketing website for a Russian IT boutique studio called "Dilik".

POSITIONING
- Personal technology partner / boutique team, not an agency.
- Solo founder/architect with 10 years of hands-on development experience.
- Assembles a custom team per project from a trusted network.
- Flagship services: SaaS development and AI/ML integrations.
- Secondary services: mobile apps, web development.

TARGET AUDIENCE
- Russian SMB founders looking for a tech partner for MVP.
- Product managers in mid-size companies who need to extend their team.
- Non-technical founders looking for an architect who can translate ideas.

LANGUAGE & TONE
- All copy in Russian.
- Confident but not pompous. No buzzwords like "цифровая трансформация",
  "инновационные решения", "лидер рынка".
- Concrete with numbers: "MVP за 8-10 недель", not "fast".
- Honest. We don't pretend to be a 50-person agency.

VISUAL DIRECTION
- Clean, modern, professional. NOT corporate-cold.
- Light background #FAFAFB. One accent color: deep indigo #4F46E5.
- Secondary surface #F4F4F7. Borders #E6E6EE.
- Typography: Manrope (headings 700/800, body 400/500), JetBrains Mono for code.
- Large display headlines clamp(2.5rem, 5vw, 4.5rem), generous whitespace.
- Cards: white background, rounded-xl (12-16px), soft shadow, hover lift.
- CTAs: filled indigo, white text, subtle glow on hover.

ASSETS
- NO stock photos of business people in suits.
- NO fake client logos.
- Use: abstract 3D gradients, subtle dotted/grid backgrounds, code snippets,
  minimal vector illustrations of dashboards/UI cards.

UX PRINCIPLES
- Every page ends with a CTA block "Обсудить проект" / "Расскажите о задаче".
- Use evidence blocks: tech stack tags, process timeline, FAQ accordion.
- Showcase items are labeled "Концепт-проект" or "Анонимизированный проект"
  — never fake clients.

ACCESSIBILITY
- Strong contrast (AA min).
- Focus rings visible (indigo ring with offset).
- Mobile-first responsive grid.
```

---

## 1. Главная страница `/`

```
Page: Homepage.

LAYOUT (sections top to bottom):

1. STICKY HEADER (h-16, white/blurred)
   - Left: logo "Dilik" (dark square with letter D, indigo dot in corner).
   - Center (md+): nav links — Услуги, Кейсы, О команде, Контакты.
   - Right: button "Обсудить проект" (filled indigo).
   - Mobile: hamburger menu.

2. HERO (light bg with subtle radial glow + dot grid mask)
   - Eyebrow chip: "Бутиковая команда разработки" (indigo-soft pill).
   - H1 (2 lines, balanced): "Запускаем SaaS-продукты и внедряем AI"
     ("AI" — gradient indigo to light indigo).
   - Subhead (max 60ch): "Архитектор с 10-летним опытом лично ведёт проект,
     под задачу собирается команда из проверенных специалистов.
     Без джунов на боевых задачах, без конвейера, без потерь в коммуникации."
   - 2 CTAs: primary "Обсудить проект →", secondary "Посмотреть кейсы".
   - 3 stat blocks on a divider: "10+ лет опыта", "8–10 недель до MVP",
     "100% хостинг в РФ".
   - Right side: a card visual (mockup of "architecture.ts" code editor
     with traffic light dots + lines of TypeScript). Floating chip below right:
     "✓ MVP запущен за 9 недель".

3. SERVICES GRID (4 cards, 2x2 desktop, stacked mobile)
   - Card layout: icon top-left, optional "Флагман" badge top-right (indigo).
   - Flagship cards have soft indigo gradient background.
   - Card 1 (flagship): "SaaS-разработка" — icon "browser+gear", 3 bullets:
     "MVP за 8–10 недель", "Биллинг, подписки, мультитенантность",
     "Личные кабинеты, аналитика, админка". Link "Подробнее →".
   - Card 2 (flagship): "AI / ML интеграции" — icon "star/spark", 3 bullets:
     "RAG-ассистенты по базе знаний", "LLM-агенты для автоматизации",
     "Fine-tuning под отраслевые данные".
   - Card 3: "Мобильные приложения" — icon "phone", 3 bullets:
     "iOS / Android нативно", "React Native, Flutter",
     "Публикация в RuStore, App Store, Google Play".
   - Card 4: "Веб-разработка" — icon "browser+code", 3 bullets.

4. PROCESS TIMELINE (light gray bg, 4 columns md+ / 7 cards)
   - Section header eyebrow "Как мы работаем", title
     "Прозрачные этапы и фиксированные сроки".
   - 7 cards numbered 01-07. Each card: number (indigo accent),
     duration pill ("1–2 недели"), title, 1-sentence description.
   - Titles: Брифинг, Аналитика и архитектура, Прототип и дизайн,
     Разработка спринтами, Тестирование, Запуск, Поддержка и развитие.

5. CASES PREVIEW (light gray bg)
   - Header: title "Концепт-проекты и анонимизированные кейсы" + button "Все кейсы →".
   - Honesty note: "Мы открыто помечаем каждый проект — концепт или анонимизированный".
   - 3 case cards. Each card:
     - Top: gradient header (unique color per case) with category and a tiny
       wireframe of a dashboard SVG.
     - Body: type badge ("Концепт-проект" indigo-soft / "Анонимизированный" gray),
       category text, title, short description, stack tags (5 max), link "Открыть кейс →".

6. TECH STACK (white bg)
   - Section header: "Стек выбираем под задачу, а не наоборот".
   - 6 category cards (Frontend, Backend, AI / ML, Mobile, Data, DevOps).
   - Each card: category label + tag chips with technology names.

7. VALUE PROPS / WHY US (white bg)
   - Section header: title "Не конвейер, а внимание".
   - 4 cards in 2x2 grid. Each card:
     - Square icon with number "01"-"04" (indigo-soft bg).
     - Title bold.
     - Description short.
   - Values: "Архитектор лично ведёт проект", "Команда собирается под задачу",
     "Прозрачные этапы и сроки", "Поддержка после запуска".

8. CTA BANNER (dark navy bg with indigo blob glows)
   - Big title white: "Расскажите о задаче — пришлём предварительную оценку
     за 2 рабочих дня".
   - Description (gray): "Бесплатно. Без обязательств. Никаких автоматических
     менеджеров — отвечает архитектор."
   - 2 buttons: primary "Обсудить проект", secondary outline "Сначала кейсы".

9. FOOTER (white bg, top border)
   - 4 columns: logo + tagline | Услуги | Компания | Связаться.
   - Bottom row: copyright + ИНН + 3 legal links
     (Политика обработки ПДн, Cookie, Договор-оферта).

10. STICKY COOKIE BANNER (bottom)
    - Single line: "Мы используем cookie для аналитики и улучшения сайта.
      Подробнее в политике cookie." + button "Принять".
```

---

## 2. Внутренняя страница услуги — пример SaaS `/services/saas`

```
Page: Service detail page for "SaaS-разработка". This is the FLAGSHIP service,
so it should feel premium.

LAYOUT:

1. STICKY HEADER (same as homepage).

2. PAGE HERO
   - Breadcrumbs: Главная / Услуги / SaaS-разработка.
   - Eyebrow chip "Флагманская услуга" (indigo).
   - H1 (max-w-3xl): "Разработка SaaS-сервисов под ключ".
   - Subhead (max 60ch): "От идеи до первых платящих пользователей за 8–10 недель.
     Архитектура, биллинг, мультитенантность, аналитика — всё с фокусом на скорость
     запуска без потери качества."
   - Stats row (3 items): "8–10 недель до MVP" / "10+ лет опыта в архитектуре"
     / "T&M — честная модель работы".

3. AUDIENCE SECTION ("Для кого")
   - Icon on left (browser+gear), H2 "Для кого" on right.
   - Grid 2-3 columns, 6 audience cards. Each: title + 2-3 sentence description.
   - Examples: "Основатели стартапов", "Продакты в среднем бизнесе",
     "Нетехнические фаундеры", "Существующие сервисы", "B2B-продукты под
     крупных клиентов", "SaaS в нишевой отрасли".

4. FEATURES SECTION ("Что мы делаем", light gray bg)
   - Grid 3 columns, 6 feature cards. Each:
     - Mono numeric label "/01".
     - Title.
     - 1-2 sentence description.
   - Features: "Мультитенантная архитектура", "Биллинг и подписки",
     "Личные кабинеты", "Аналитика и отчётность", "Интеграции",
     "Масштабирование под нагрузку".

5. TECH STACK (white bg)
   - H2 "Технологии".
   - Tag cloud of technology names (rectangular pills).
   - Tech: Next.js, React, TypeScript, NestJS, Node.js, Python/FastAPI,
     PostgreSQL, Redis, Kafka, ClickHouse, Docker, Kubernetes, Yandex Cloud,
     VK Cloud, YooKassa, Тинькофф Эквайринг.

6. PROCESS TIMELINE (same as homepage, light gray bg).

7. FAQ ACCORDION (white bg, 8 items, max-w-3xl centered)
   - First item expanded by default.
   - Each item: question (bold) with "+" icon that rotates to "×" when open.
   - Smooth height transition.
   - Questions: "Сколько стоит MVP SaaS?", "Что делать если нет ТЗ?",
     "Работаете по фикс-прайсу или по часам?", "Кому принадлежит код?",
     "Где будете хостить?", "Что после запуска?", "Подписываете NDA?",
     "Кто будет работать над моим проектом?".

8. CTA BANNER (same dark style).

9. FOOTER + COOKIE BANNER.
```

> Для AI / Mobile / Web — тот же шаблон, меняешь только содержимое (audience, features, tech, FAQ). Базовые данные есть в `app/services/<slug>/page.tsx`.

---

## 3. Список кейсов `/cases`

```
Page: Cases catalog.

1. HEADER.

2. PAGE HERO
   - Breadcrumbs: Главная / Кейсы.
   - Eyebrow "Кейсы".
   - H1: "Концепт-проекты и анонимизированные кейсы".
   - Subhead: "Мы честно помечаем каждый проект. «Концепт» — готовое
     архитектурное решение, которое мы можем собрать под клиента.
     «Анонимизированный» — реальная работа без раскрытия названия заказчика (NDA)."

3. CASES GRID (3 columns md+, 5 cards)
   - Same card design as homepage. Each:
     - Top: aspect-16/9 gradient header (unique hue per slug) with subtle
       dotted grid + a small dashboard wireframe SVG + category text.
     - Body: type badge + category, title (bold), short description, stack tags
       (5 max), link "Открыть кейс →".
   - Card titles: "SaaS для управления арендой коммерческой недвижимости",
     "RAG-ассистент по корпоративной базе знаний",
     "AI-агент первой линии поддержки",
     "B2B-биллинг и подписки для SaaS",
     "Мобильное приложение для нишевого маркетплейса".

4. CTA SOFT BANNER (dashed border, light gray bg, full width)
   - "Хотите такой же — но под себя?"
   - "Концепт-проекты — это базовые архитектуры, которые мы адаптируем
     под задачу заказчика. Расскажите о вашей — посчитаем срок и бюджет."

5. CTA BANNER (dark, same as homepage).

6. FOOTER + COOKIE.
```

---

## 4. Детальная страница кейса `/cases/[slug]`

```
Page: Case detail.

1. HEADER.

2. PAGE HERO (eyebrow shows the case type, e.g. "Концепт-проект"; H1 = case title).
   - Breadcrumbs: Главная / Кейсы / <title>.

3. MAIN GRID (2 columns: 8/4 split, sticky sidebar)
   - LEFT (article, prose):
     - Honesty box at the top (indigo soft bg, indigo border): explains what
       "Концепт-проект" or "Анонимизированный проект" means.
     - Article content with H2 sections: "Задача", "Что входит в шаблон",
       "Архитектура", "Что под капотом сложного", "Что получит заказчик",
       "Что обсудим до старта".
     - Bullet lists, bold inline emphasis.
   - RIGHT (sticky aside):
     - Card with parameters:
       - Категория (тег)
       - Срок ("6–8 недель")
       - Команда ("Архитектор + Fullstack + UX-дизайнер")
       - Стек (chip cloud)
     - Big CTA button "Обсудить похожий проект".

4. CTA BANNER (dark).

5. FOOTER + COOKIE.
```

---

## 5. Страница «О команде» `/about`

```
Page: About team.

1. HEADER.

2. PAGE HERO
   - Eyebrow "О команде", H1 "Бутиковая команда, а не агентство-конвейер".
   - Subhead: "Архитектор с 10-летним опытом в разработке + сеть проверенных
     специалистов под конкретный проект."

3. HONEST DESCRIPTION (2-column layout 7/5)
   - LEFT: H2 "Честно о том, как мы устроены" + 3 long paragraphs explaining
     the boutique model — solo architect + network of vetted contractors,
     why this beats big-studio model.
   - RIGHT: Comparison card "В чём разница" — small table with rows:
     С кем общаетесь, Кто проектирует, Кто пишет код, Гибкость scope,
     Скорость старта. Columns: "Большая студия" (strikethrough gray) vs
     "Мы" (bold ink).

4. VALUE PROPS (same as homepage).

5. TEAM ASSEMBLY (light gray bg, 2-column)
   - LEFT: H2 "Как формируется команда" + 1 paragraph.
   - RIGHT: 6-step ordered list, each step is a card with number badge.
     Steps: брифинг — архитектор, проектирование — архитектор, формирование
     состава, kick-off, разработка, архитектор как точка контакта.

6. CTA BANNER (dark) — adjusted text: "Хотите познакомиться? Часовой созвон
   с архитектором без обязательств."

7. FOOTER + COOKIE.
```

---

## 6. Контакты / Брифинг `/contact`

```
Page: Contact and project brief.

1. HEADER.

2. PAGE HERO
   - Eyebrow "Брифинг", H1 "Расскажите о задаче".
   - Subhead about response time (1 day for reply, 2 days for estimate).

3. MAIN GRID (2 columns 8/4)
   - LEFT: project brief FORM card
     - 6 form fields in 2-column grid:
       - "Как к вам обращаться" (text, required)
       - "Email или Telegram" (text, required)
       - "Компания (если есть)" (text)
       - "Тип услуги" (select with 6 options: SaaS, AI, Mobile, Web, Консультация, Другое)
       - "Ориентир по бюджету" (select with 5 options)
       - "Сроки" (select with 3 options)
     - Then full-width textarea "Опишите задачу" (5 rows, required).
     - Checkbox: "Согласен с политикой обработки персональных данных
       в соответствии с 152-ФЗ" (link styled).
     - Submit button "Отправить заявку" + small text "Ответим в течение
       1 рабочего дня. Никакого спама."
     - Field style: white inputs with indigo focus ring.
   - RIGHT (sidebar): 2 cards
     - "Прямой контакт" — list of Telegram, Email, Телефон (with uppercase
       eyebrows above each value).
     - "Что будет дальше" — numbered list of 4 steps (01-04) describing
       the response process.

4. FOOTER + COOKIE.

(No CTA banner — the form IS the CTA.)
```

---

## 7. Юридические страницы (privacy / cookie / offer)

```
Page: Legal document page.

1. HEADER.

2. PAGE HERO
   - Eyebrow "Документы".
   - H1 = document title (e.g. "Политика обработки персональных данных").
   - Subhead with legal reference (e.g. "В соответствии с 152-ФЗ").

3. ARTICLE BODY (max-w-4xl, prose styling)
   - Warning callout box at top (only for cookie/offer): orange-tinted card
     with note that this is a placeholder/template.
   - Numbered H2 sections.
   - Long-form paragraphs and lists.
   - Last line: "Дата последнего обновления: <date>" in subtle gray.

4. FOOTER + COOKIE.
```

---

## Что важно сделать после получения дизайнов

1. Сравни с реализацией в коде — где UX Pilot предлагает что-то лучше, чем
   текущая вёрстка, проси AI-разработчика портировать.
2. Дизайн UX Pilot — отправная точка, не догма. Финальный дизайн должен
   быть **последовательным** между страницами. Если на главной кнопки имеют
   тень, то и на услугах должны иметь.
3. Перенеси основные токены (цвета, радиусы, шрифты) в `tailwind.config.ts`
   и используй их во всех новых блоках, чтобы не плодить «магические» значения.
