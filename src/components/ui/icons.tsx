import type { ReactNode } from "react";
import type { BodyPart } from "@/types/equipamentTypes";

type IconProps = {
  className?: string;
};

function StrokeIcon({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </StrokeIcon>
  );
}

export function HelpIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6" />
      <path d="M12 17h.01" />
    </StrokeIcon>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M15 18l-6-6 6-6" />
    </StrokeIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeIcon>
  );
}

export function HeartIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <StrokeIcon {...props}>
      <path
        d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1Z"
        fill={filled ? "currentColor" : "none"}
      />
    </StrokeIcon>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9v11a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9" />
    </StrokeIcon>
  );
}

export function QrCodeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3" />
    </StrokeIcon>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </StrokeIcon>
  );
}

export function SpeakerIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M11 5 6 9H3v6h3l5 4Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
    </StrokeIcon>
  );
}

export function StopIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
    </StrokeIcon>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
    </StrokeIcon>
  );
}

export function WarningIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </StrokeIcon>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M8 5.5v13l11-6.5Z" fill="currentColor" />
    </StrokeIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </StrokeIcon>
  );
}

/** Ícone de perna do design (`public/icons/leg.png`), pintado com a cor do texto. */
export function LegIcon({ className = "" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current mask-[url(/icons/leg.png)] mask-contain mask-center mask-no-repeat ${className}`}
    />
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12" />
    </StrokeIcon>
  );
}

export function WalkingIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="13" cy="4.5" r="1.8" />
      <path d="M12 8.5 9.5 14l3 2.5 1 5" />
      <path d="M12 8.5l3 3 3 .5M12 8.5 8.5 10.5 7.5 13.5" />
      <path d="M9.5 14 8 17.5 5 21" />
    </StrokeIcon>
  );
}

export function BodyIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M5 9h14M12 9v6l-3 6M12 15l3 6" />
    </StrokeIcon>
  );
}

const bodyPartIcons: Record<BodyPart, (props: IconProps) => ReactNode> = {
  pernas: LegIcon,
  bracos: DumbbellIcon,
  caminhada: WalkingIcon,
  "corpo-todo": BodyIcon,
};

export function BodyPartIcon({
  bodyPart,
  ...props
}: IconProps & { bodyPart: BodyPart }) {
  const Icon = bodyPartIcons[bodyPart];
  return <Icon {...props} />;
}
