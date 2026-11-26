import type { ElementType } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <As className={cn("container relative z-10 max-w-6xl", className)}>
      {children}
    </As>
  );
}
