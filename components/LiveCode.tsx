"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type LiveToken = {
  text: string;
  className?: string;
};

export type LiveLine = {
  tokens?: LiveToken[];
  indent?: 0 | 4 | 8;
  blank?: boolean;
};

const INDENT_CLASS: Record<NonNullable<LiveLine["indent"]>, string> = {
  0: "",
  4: "pl-4",
  8: "pl-8",
};

type FlatChar = {
  lineIndex: number;
  tokenIndex: number;
  ch: string;
};

function flatten(lines: LiveLine[]): FlatChar[] {
  const flat: FlatChar[] = [];
  lines.forEach((line, lineIndex) => {
    if (line.blank || !line.tokens) return;
    line.tokens.forEach((tok, tokenIndex) => {
      for (let i = 0; i < tok.text.length; i++) {
        flat.push({ lineIndex, tokenIndex, ch: tok.text[i] });
      }
    });
  });
  return flat;
}

function nextDelay(
  ch: string,
  prevCh: string | undefined,
  isLineBoundary: boolean,
): number {
  if (isLineBoundary) {
    return 260 + Math.random() * 220;
  }
  const base = 55 + (Math.random() * 70 - 25);
  if (",;]".includes(ch)) {
    return base + 90 + Math.random() * 140;
  }
  if (ch === ")" || ch === "]") {
    return base + 50 + Math.random() * 80;
  }
  if (ch === " ") {
    return Math.max(20, base * 0.55);
  }
  if (ch === "/" && prevCh === "/") {
    return base + 60 + Math.random() * 80;
  }
  if (ch === '"') {
    return base + 15;
  }
  return Math.max(25, base);
}

export function LiveCode({
  lines,
  startDelay = 320,
  speed = 1,
  triggerOnView = false,
  ariaLabel = "Анимация набора кода",
}: {
  lines: LiveLine[];
  startDelay?: number;
  speed?: number;
  triggerOnView?: boolean;
  ariaLabel?: string;
}) {
  const flat = useMemo(() => flatten(lines), [lines]);
  const total = flat.length;

  const [revealed, setRevealed] = useState(0);
  const [reduce, setReduce] = useState(false);
  const [inView, setInView] = useState(!triggerOnView);
  const cancelledRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!triggerOnView) return;
    if (typeof window === "undefined") return;
    const el = containerRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!inView) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduce(true);
      setRevealed(total);
      return;
    }

    cancelledRef.current = false;
    let i = 0;
    let timer: number | undefined;

    const tick = () => {
      if (cancelledRef.current) return;
      i += 1;
      setRevealed(i);
      if (i >= total) return;

      const justTyped = flat[i - 1];
      const nextChar = flat[i];
      const isLineBoundary = justTyped.lineIndex !== nextChar.lineIndex;
      const delay =
        nextDelay(justTyped.ch, flat[i - 2]?.ch, isLineBoundary) / speed;
      timer = window.setTimeout(tick, delay);
    };

    const initial = window.setTimeout(tick, startDelay);
    return () => {
      cancelledRef.current = true;
      window.clearTimeout(initial);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [inView, flat, total, startDelay, speed]);

  const charsPerLine = useMemo(() => {
    const counts = new Map<number, Map<number, number>>();
    for (let k = 0; k < revealed; k++) {
      const c = flat[k];
      let lineMap = counts.get(c.lineIndex);
      if (!lineMap) {
        lineMap = new Map<number, number>();
        counts.set(c.lineIndex, lineMap);
      }
      lineMap.set(c.tokenIndex, (lineMap.get(c.tokenIndex) ?? 0) + 1);
    }
    return counts;
  }, [revealed, flat]);

  const lastCharLineIndex = revealed > 0 ? flat[revealed - 1].lineIndex : -1;

  return (
    <div
      ref={containerRef}
      className="space-y-1.5"
      role="img"
      aria-label={ariaLabel}
    >
      {lines.map((line, lineIndex) => {
        if (line.blank) {
          return <p key={lineIndex} className="h-3" aria-hidden />;
        }
        if (!line.tokens) return null;

        const lineCounts = charsPerLine.get(lineIndex);
        const lineStarted = reduce || !!lineCounts;
        const isCaretHere = !reduce && lineIndex === lastCharLineIndex;

        return (
          <p
            key={lineIndex}
            className={cn(
              "relative min-h-[1.5em] whitespace-pre",
              line.indent ? INDENT_CLASS[line.indent] : "",
            )}
          >
            {lineStarted &&
              line.tokens.map((tok, tokenIndex) => {
                const charCount = reduce
                  ? tok.text.length
                  : (lineCounts?.get(tokenIndex) ?? 0);
                if (charCount === 0) return null;
                const slice = tok.text.slice(0, charCount);
                return (
                  <span key={tokenIndex} className={tok.className}>
                    {slice}
                  </span>
                );
              })}
            {isCaretHere && <span className="live-caret" aria-hidden />}
          </p>
        );
      })}
    </div>
  );
}
