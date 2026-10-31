export type EquipmentKind = "leg-press" | "horse-rider" | "leg-abduction";

type EquipmentProps = {
  kind: EquipmentKind;
  className?: string;
};

const FRAME = "#1B2A6B";
const PART = "#FCC02C";

/**
 * Desenhos simplificados dos aparelhos de academia ao ar livre,
 * inspirados nas imagens do design do app.
 */
export function Equipment({ kind, className }: EquipmentProps) {
  return (
    <svg viewBox="0 0 160 130" className={className} aria-hidden="true">
      <ellipse cx="80" cy="122" rx="62" ry="5" fill="#0B1A4A" opacity="0.1" />
      {kind === "leg-press" && <LegPress />}
      {kind === "horse-rider" && <HorseRider />}
      {kind === "leg-abduction" && <LegAbduction />}
    </svg>
  );
}

function LegPress() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V22" stroke={FRAME} strokeWidth="8" />
      <path d="M64 22h32" stroke={FRAME} strokeWidth="7" />
      <path d="M60 118h40" stroke={FRAME} strokeWidth="7" />
      <path d="M80 70H50M80 70h30" stroke={FRAME} strokeWidth="6" />
      {/* Assentos e encostos */}
      <path d="M50 70V44M110 70V44" stroke={PART} strokeWidth="8" />
      <path d="M38 72h20M102 72h20" stroke={PART} strokeWidth="8" />
      {/* Pedais */}
      <path d="M48 76l-26 22M112 76l26 22" stroke={FRAME} strokeWidth="5" />
      <path d="M14 94l12 10M146 94l-12 10" stroke={PART} strokeWidth="8" />
    </g>
  );
}

function HorseRider() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M30 118h100" stroke={FRAME} strokeWidth="7" />
      <path d="M48 118l50-88" stroke={FRAME} strokeWidth="8" />
      <path d="M104 118L84 58" stroke={FRAME} strokeWidth="6" />
      {/* Guidão */}
      <path d="M98 30l22-12" stroke={PART} strokeWidth="7" />
      <path d="M112 12l10 14" stroke={PART} strokeWidth="7" />
      {/* Assento */}
      <path d="M62 62h26" stroke={PART} strokeWidth="9" />
      <path d="M75 62l-8 20" stroke={FRAME} strokeWidth="5" />
      {/* Apoios dos pés */}
      <path d="M56 92l26 12" stroke={FRAME} strokeWidth="5" />
      <path d="M50 88l10 6M80 102l10 6" stroke={PART} strokeWidth="7" />
    </g>
  );
}

function LegAbduction() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M58 118V20M102 118V20" stroke={FRAME} strokeWidth="7" />
      <path d="M50 20h60" stroke={FRAME} strokeWidth="7" />
      {/* Barras de apoio para as mãos */}
      <path d="M58 44H30M102 44h28" stroke={FRAME} strokeWidth="5" />
      <path d="M40 40l-14-6M120 40l14-6" stroke={FRAME} strokeWidth="4" />
      {/* Pêndulos das pernas */}
      <path d="M72 30l-6 70M88 30l6 70" stroke={PART} strokeWidth="8" />
      <path d="M58 104h14M88 104h14" stroke={PART} strokeWidth="8" />
    </g>
  );
}
