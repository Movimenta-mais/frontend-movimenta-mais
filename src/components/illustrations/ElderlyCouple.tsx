type IllustrationProps = {
  className?: string;
};

const SKIN = "#F6C9A4";
const HAIR = "#E3E6EE";
const INK = "#0B1A4A";

export function ElderlyCouple({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 180"
      className={className}
      role="img"
      aria-label="Ilustração de um casal de idosos sorrindo"
    >
      {/* Mulher (atrás) */}
      <path
        d="M95 180c0-42 17-58 45-58s45 16 45 58Z"
        fill="#FCC02C"
      />
      <path d="M128 123l12 22 12-22Z" fill="#FFFFFF" />
      <rect x="133" y="104" width="14" height="20" rx="6" fill={SKIN} />
      <circle cx="140" cy="80" r="32" fill={HAIR} />
      <circle cx="140" cy="45" r="12" fill={HAIR} />
      <circle cx="140" cy="86" r="26" fill={SKIN} />
      <path
        d="M114 84c-1-19 12-27 26-27s28 8 26 27c-6-11-15-16-26-16s-20 5-26 16Z"
        fill={HAIR}
      />
      <circle cx="131" cy="86" r="2.6" fill={INK} />
      <circle cx="149" cy="86" r="2.6" fill={INK} />
      <circle cx="125" cy="95" r="4" fill="#F59E9E" opacity="0.6" />
      <circle cx="155" cy="95" r="4" fill="#F59E9E" opacity="0.6" />
      <path
        d="M132 98q8 7 16 0"
        stroke={INK}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Homem (na frente) */}
      <path
        d="M18 180c0-48 22-64 56-64s54 16 54 64Z"
        fill="#4372FF"
      />
      <path d="M62 117l12 18 12-18Z" fill="#FFFFFF" />
      <rect x="66" y="100" width="16" height="20" rx="6" fill={SKIN} />
      <circle cx="42" cy="80" r="6" fill={SKIN} />
      <circle cx="104" cy="80" r="6" fill={SKIN} />
      <circle cx="73" cy="78" r="30" fill={SKIN} />
      <path
        d="M43 74c-2-22 13-31 30-31s32 9 30 31c-4-12-12-17-30-17s-26 5-30 17Z"
        fill={HAIR}
      />
      <g stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round">
        <circle cx="61" cy="79" r="8" />
        <circle cx="85" cy="79" r="8" />
        <path d="M69 79h8" />
        <path d="M63 94q10 9 20 0" />
      </g>
      <circle cx="61" cy="79" r="2.4" fill={INK} />
      <circle cx="85" cy="79" r="2.4" fill={INK} />
      <circle cx="54" cy="92" r="4" fill="#F59E9E" opacity="0.6" />
      <circle cx="92" cy="92" r="4" fill="#F59E9E" opacity="0.6" />
    </svg>
  );
}
