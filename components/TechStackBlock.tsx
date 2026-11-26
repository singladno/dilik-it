import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { IDEWindow } from "./IDEWindow";
import { LiveCode, type LiveLine, type LiveToken } from "./LiveCode";
import { techStack } from "@/content/site";

const FILENAME_BY_CATEGORY: Record<string, string> = {
  Frontend: "frontend.json",
  Backend: "backend.json",
  "AI / ML": "ai.json",
  Mobile: "mobile.json",
  Data: "data.json",
  DevOps: "devops.json",
};

const ITEMS_PER_ROW = 3;
const STAGGER_STEP_MS = 110;

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    rows.push(arr.slice(i, i + size));
  }
  return rows;
}

function buildCategoryLines(
  category: string,
  items: readonly string[],
): LiveLine[] {
  const rows = chunk(items, ITEMS_PER_ROW);
  const lines: LiveLine[] = [
    {
      tokens: [
        { text: `"${category}"`, className: "tok-str" },
        { text: ":", className: "tok-punct" },
        { text: " " },
        { text: "[", className: "tok-punct" },
      ],
    },
  ];

  rows.forEach((row, rowIdx) => {
    const isLastRow = rowIdx === rows.length - 1;
    const tokens: LiveToken[] = [];
    row.forEach((item, i) => {
      const isLastInRow = i === row.length - 1;
      const isVeryLast = isLastRow && isLastInRow;
      tokens.push({ text: `"${item}"`, className: "tok-str" });
      if (!isVeryLast) {
        tokens.push({ text: ",", className: "tok-punct" });
        if (!isLastInRow) tokens.push({ text: " " });
      }
    });
    lines.push({ indent: 4, tokens });
  });

  lines.push({ tokens: [{ text: "]", className: "tok-punct" }] });
  return lines;
}

export function TechStackBlock() {
  const entries = Object.entries(techStack);

  return (
    <section id="stack" className="section scroll-mt-20 section-glow-bl">
      <Container>
        <SectionHeader
          eyebrow="Технологии"
          title="Стек выбираем под задачу"
          description="Технологии, на которых строим решения. Конкретный набор определяется после аналитики — исходя из требований к нагрузке, бюджета и инфраструктурных ограничений."
        />

        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
          {entries.map(([category, items], i) => {
            const lines = buildCategoryLines(category, items);
            return (
              <IDEWindow
                key={category}
                filename={
                  FILENAME_BY_CATEGORY[category] ??
                  `${category.toLowerCase()}.json`
                }
              >
                <LiveCode
                  lines={lines}
                  triggerOnView
                  startDelay={120 + i * STAGGER_STEP_MS}
                  ariaLabel={`Технологии: ${category}`}
                />
              </IDEWindow>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
