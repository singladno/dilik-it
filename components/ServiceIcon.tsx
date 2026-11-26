type IconName = "saas" | "ai" | "mobile" | "web";

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  switch (name) {
    case "saas":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M3 8h18" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="6" cy="6" r="0.6" fill="currentColor" />
          <circle cx="8.5" cy="6" r="0.6" fill="currentColor" />
          <path
            d="M7 12h6M7 14.5h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 11l2 2-2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21h6M12 18v3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 3l2.4 4.6L19 9l-3.6 2.6.9 4.6L12 14l-4.3 2.2.9-4.6L5 9l4.6-1.4L12 3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="20"
            r="1.2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 21h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="7"
            y="2.5"
            width="10"
            height="19"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 5.5h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="18.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="3"
            y="4"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 8h18M7 6h.01M10 6h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 12l2 2-2 2M11 16h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
