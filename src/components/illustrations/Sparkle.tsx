type SparkleProps = {
  className?: string;
};

/** Traços amarelos decorativos, como os do título no design do app. */
export function Sparkle({ className }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="#FCC02C"
      strokeWidth="4"
      strokeLinecap="round"
    >
      <path d="M20 4v9" />
      <path d="M6 12l7 6" />
      <path d="M34 12l-7 6" />
    </svg>
  );
}
