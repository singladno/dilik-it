import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="section">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow mx-auto">Ошибка 404</p>
        <h1 className="mt-4 text-display-lg">Такой страницы нет</h1>
        <p className="mt-4 text-ink-muted">
          Возможно, страница была перенесена или удалена. Возвращайтесь на главную
          или напишите нам — поможем сориентироваться.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">На главную</Link>
          <Link href="/#contact" className="btn-secondary">Написать нам</Link>
        </div>
      </Container>
    </section>
  );
}
