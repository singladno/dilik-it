import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Политика использования cookie",
  description: "Какие cookie мы используем и зачем.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        title="Политика использования cookie"
        breadcrumbs={[{ href: "/cookie-policy", label: "Cookie" }]}
      />

      <section className="pb-20">
        <Container className="max-w-4xl">
          <article className="prose prose-zinc max-w-none prose-h2:mt-10 prose-h2:text-2xl prose-headings:font-bold">
            <h2>Что такое cookie</h2>
            <p>
              Cookie — это небольшие текстовые файлы, которые сайт сохраняет на
              устройстве пользователя для запоминания настроек и аналитики
              использования.
            </p>

            <h2>Какие cookie мы используем</h2>
            <ul>
              <li>
                <strong>Технические (обязательные).</strong> Обеспечивают работу
                сайта (например, согласие на cookie). Хранятся в localStorage
                браузера.
              </li>
              <li>
                <strong>Аналитические.</strong> Используются для понимания, как
                пользователи взаимодействуют с сайтом (Яндекс.Метрика). Помогают
                улучшать структуру и контент.
              </li>
            </ul>

            <h2>Управление cookie</h2>
            <p>
              Вы можете запретить использование cookie в настройках вашего
              браузера. Однако без обязательных cookie сайт может работать
              некорректно.
            </p>
            <p>
              При первом посещении сайт показывает баннер с информацией о
              cookie. Продолжая использовать сайт без явного отказа, вы
              соглашаетесь с использованием cookie в соответствии с настоящей
              Политикой.
            </p>

            <h2>Передача данных</h2>
            <p>
              Аналитические данные обрабатываются сервисом Яндекс.Метрика на
              условиях, опубликованных по адресу{" "}
              <a href="https://yandex.ru/legal/confidential/">
                yandex.ru/legal/confidential
              </a>
              .
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
