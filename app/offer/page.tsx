import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Договор на услуги",
  description: "Условия сотрудничества: индивидуальный договор на оказание услуг.",
  robots: { index: false, follow: false },
};

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        title="Договор на услуги"
        breadcrumbs={[{ href: "/offer", label: "Договор" }]}
      />

      <section className="pb-20">
        <Container className="max-w-4xl">
          <article className="prose prose-zinc max-w-none">
            <p>
              {site.legal.name} оказывает услуги по разработке программного
              обеспечения на основании индивидуального договора. Публичная
              оферта на сайте не размещается.
            </p>
            <p>
              После описания задачи мы готовим предложение (этапы, сроки,
              ориентир по бюджету). При согласии сторон заключаем договор,
              фиксируем объём в приложении и приступаем к работе после
              предоплаты.
            </p>
            <p>
              По вопросам сотрудничества:{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              {site.contact.telegram ? (
                <>
                  {" "}
                  или{" "}
                  <a
                    href={`https://t.me/${site.contact.telegram.replace(/^@/, "")}`}
                    rel="noopener"
                  >
                    Telegram {site.contact.telegram}
                  </a>
                </>
              ) : null}
              .
            </p>
            <p>
              <Link href="/#contact">Описать задачу →</Link>
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
