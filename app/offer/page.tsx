import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Договор-оферта",
  description: "Публичная оферта на оказание услуг.",
};

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        title="Договор-оферта"
        breadcrumbs={[{ href: "/offer", label: "Оферта" }]}
      />

      <section className="pb-20">
        <Container className="max-w-4xl">
          <div className="rounded-md border border-warning/30 bg-warning/5 p-4 text-sm">
            <strong>Заглушка.</strong> Договор-оферта — индивидуальный документ.
            Используйте этот раздел, чтобы разместить вашу публичную оферту
            после её подготовки с юристом или удалите ссылку на «Оферту» в
            подвале сайта (<code>components/Footer.tsx</code>) до её появления.
          </div>

          <article className="prose prose-zinc mt-8 max-w-none">
            <p>
              {site.legal.name}, именуемое в дальнейшем «Исполнитель», публикует
              настоящую публичную оферту на оказание услуг по разработке
              программного обеспечения.
            </p>
            <p>
              Полный текст договора будет опубликован здесь после согласования с
              юристом.
            </p>
            <p>
              По вопросам сотрудничества пишите на {site.contact.email}
              {site.contact.telegram
                ? ` или в Telegram ${site.contact.telegram}`
                : ""}
              .
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
