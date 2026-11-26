import { cn } from "@/lib/utils";

type IDEWindowProps = {
  filename?: string;
  tabs?: { label: string; active?: boolean }[];
  status?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  framed?: boolean;
};

export function IDEWindow({
  filename,
  tabs,
  status,
  children,
  className,
  bodyClassName,
  framed = false,
}: IDEWindowProps) {
  const window = (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border bg-white/90 shadow-card backdrop-blur",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
        </div>

        {tabs && tabs.length > 0 ? (
          <ul className="flex flex-wrap items-center gap-1 overflow-hidden">
            {tabs.map((t) => (
              <li
                key={t.label}
                className={cn(
                  "rounded-md px-2.5 py-1 font-mono text-xs",
                  t.active
                    ? "bg-bg-subtle text-ink"
                    : "text-ink-subtle hover:text-ink-muted",
                )}
              >
                {t.label}
              </li>
            ))}
          </ul>
        ) : filename ? (
          <span className="truncate font-mono text-xs text-ink-subtle">
            {filename}
          </span>
        ) : null}

        {status && (
          <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {status}
          </span>
        )}
      </div>

      <div
        className={cn(
          "flex-1 p-5 font-mono text-[13px] leading-relaxed text-ink-muted md:p-6",
          bodyClassName,
        )}
      >
        {children}
      </div>
    </div>
  );

  if (!framed) return window;

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent"
      />
      <div className="relative p-3 md:p-4">{window}</div>
    </div>
  );
}
