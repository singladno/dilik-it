"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "dilik:cookie-consent:v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на использование cookie"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-white p-4 shadow-card md:p-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-muted">
          Мы используем cookie для аналитики и улучшения сайта. Подробнее в{" "}
          <Link href="/cookie-policy" className="text-accent underline">
            политике cookie
          </Link>
          .
        </p>
        <button onClick={accept} className="btn-primary shrink-0">
          Принять
        </button>
      </div>
    </div>
  );
}
