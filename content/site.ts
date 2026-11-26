export const site = {
  name: "Dilik",
  domain: "dilik.ru",
  tagline: "MVP SaaS и AI за 8–12 недель",
  description:
    "Студия разработки: MVP SaaS и AI-интеграции за 8–12 недель. Пришлите ТЗ или описание задачи — вернёмся с предложением по этапам, срокам и бюджету.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dilik.ru",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "dragonsecret96@gmail.com",
    telegram: process.env.NEXT_PUBLIC_CONTACT_TG || "@mightyHeart",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+79963663660",
  },
  legal: {
    name: process.env.NEXT_PUBLIC_LEGAL_NAME || "ИП Саттаров Дали Саттарович",
    inn: process.env.NEXT_PUBLIC_LEGAL_INN || "772393632336",
    ogrn: process.env.NEXT_PUBLIC_LEGAL_OGRN || "326774600882622",
  },
  metrika: process.env.NEXT_PUBLIC_YM_ID,
};

export const nav = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#stack", label: "Технологии" },
  { href: "#about", label: "О нас" },
  { href: "#contact", label: "Контакты" },
];

export const services = [
  {
    slug: "saas",
    title: "SaaS-разработка",
    short:
      "Разработка SaaS-сервисов под ключ: архитектура, биллинг, мультитенантность, аналитика.",
    icon: "saas",
    bullets: [
      "Архитектура и проектирование БД",
      "Биллинг, подписки, личные кабинеты",
      "Аналитика, отчётность, интеграции",
    ],
  },
  {
    slug: "ai",
    title: "AI / ML интеграции",
    short:
      "Внедрение моделей искусственного интеллекта в продукты и бизнес-процессы.",
    icon: "ai",
    bullets: [
      "RAG-ассистенты и чат-боты",
      "Автоматизация на базе LLM",
      "Обработка документов, NLP, CV",
    ],
  },
  {
    slug: "mobile",
    title: "Мобильные приложения",
    short: "Нативная и кроссплатформенная разработка для iOS и Android.",
    icon: "mobile",
    bullets: [
      "Swift, Kotlin",
      "React Native, Flutter",
      "Публикация в RuStore, App Store, Google Play",
    ],
  },
  {
    slug: "web",
    title: "Веб-разработка",
    short: "Корпоративные сайты, веб-приложения, личные кабинеты и порталы.",
    icon: "web",
    bullets: [
      "Лендинги и корпоративные сайты",
      "Личные кабинеты и порталы",
      "Высоконагруженные веб-приложения",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const processSteps = [
  {
    n: "01",
    title: "Брифинг",
    duration: "2–3 дня",
    description:
      "Изучаем задачу, цели бизнеса и ограничения. Если ТЗ нет — составляем сами в формате product brief.",
  },
  {
    n: "02",
    title: "Аналитика и архитектура",
    duration: "1–2 недели",
    description:
      "Проектируем архитектуру решения, выбираем стек, фиксируем интеграции и нагрузку.",
  },
  {
    n: "03",
    title: "Прототип и дизайн",
    duration: "2–3 недели",
    description:
      "Кликабельный прототип, UX-исследования, дизайн-система. Согласуем перед разработкой.",
  },
  {
    n: "04",
    title: "Разработка спринтами",
    duration: "от 4 недель",
    description:
      "Двухнедельные спринты с демо. Frontend, backend, инфраструктура — всё с тестами и код-ревью.",
  },
  {
    n: "05",
    title: "Тестирование",
    duration: "1–2 недели",
    description:
      "Автотесты, нагрузочное тестирование, ручная проверка пользовательских сценариев.",
  },
  {
    n: "06",
    title: "Запуск",
    duration: "от 1 недели",
    description:
      "Развёртывание в продакшне на серверах в РФ, настройка мониторинга, резервного копирования.",
  },
  {
    n: "07",
    title: "Поддержка и развитие",
    duration: "постоянно",
    description:
      "Регулярные релизы, мониторинг ошибок, развитие продукта по бэклогу.",
  },
] as const;

export const techStack = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue"],
  Backend: ["Node.js", "NestJS", "Python", "FastAPI", "PHP", "Go"],
  "AI / ML": [
    "OpenAI",
    "Anthropic",
    "YandexGPT",
    "GigaChat",
    "LangChain",
    "Llama",
    "PyTorch",
    "Hugging Face",
  ],
  Mobile: ["Swift", "Kotlin", "React Native", "Flutter"],
  Data: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "S3"],
  DevOps: [
    "Docker",
    "Kubernetes",
    "Yandex Cloud",
    "VK Cloud",
    "GitLab CI",
    "GitHub Actions",
  ],
} as const;

export const values = [
  {
    title: "Команда под задачу",
    description:
      "Состав специалистов формируется под требования проекта: фронтенд, бэкенд, мобильная разработка, ML, DevOps, дизайн.",
  },
  {
    title: "Прозрачные этапы",
    description:
      "Демо каждые две недели, фиксированные точки контроля, единый канал коммуникации по проекту.",
  },
  {
    title: "Решения, рассчитанные на рост",
    description:
      "Архитектура и стек выбираются так, чтобы продукт выдерживал рост нагрузки и не требовал переписывания.",
  },
  {
    title: "Поддержка после запуска",
    description:
      "Развитие продукта по бэклогу, мониторинг, исправление ошибок, регулярные релизы.",
  },
] as const;

export const stats = [
  { value: "7", label: "этапов в процессе" },
  { value: "8–12", label: "недель до запуска MVP" },
  { value: "100%", label: "хостинг на серверах РФ" },
];
