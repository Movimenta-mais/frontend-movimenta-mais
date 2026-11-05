import type { EquipmentKind } from "@/types/equipamentTypes";

type EquipmentProps = {
  kind: EquipmentKind;
  className?: string;
};

const FRAME = "#1B2A6B";
const PART = "#FCC02C";

/**
 * Desenhos simplificados dos aparelhos de academia ao ar livre,
 * inspirados nas imagens do design e do catálogo de exercícios.
 */
export function Equipment({ kind, className }: EquipmentProps) {
  return (
    <svg viewBox="0 0 160 130" className={className} aria-hidden="true">
      <ellipse cx="80" cy="122" rx="62" ry="5" fill="#0B1A4A" opacity="0.1" />
      {kind === "leg-press" && <LegPress />}
      {kind === "horse-rider" && <HorseRider />}
      {kind === "leg-abduction" && <LegAbduction />}
      {kind === "walker" && <Walker />}
      {kind === "rower" && <Rower />}
      {kind === "elliptical" && <Elliptical />}
      {kind === "lat-pulldown" && <LatPulldown />}
      {kind === "chest-press" && <ChestPress />}
      {kind === "shoulder-wheel" && <ShoulderWheel />}
      {kind === "parallel-bars" && <ParallelBars />}
      {kind === "twist-bars" && <TwistBars />}
      {kind === "sit-up-bench" && <SitUpBench />}
      {kind === "pull-up-bar" && <PullUpBar />}
      {kind === "bar-set" && <BarSet />}
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

function Walker() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M34 118 54 24h52l20 94" stroke={FRAME} strokeWidth="7" />
      {/* Barras de apoio para as mãos */}
      <path d="M62 30l-5 26M98 30l5 26" stroke={PART} strokeWidth="7" />
      {/* Pêndulos das pernas, um à frente e outro atrás */}
      <path d="M80 28 64 98M80 28l16 70" stroke={PART} strokeWidth="7" />
      <path d="M54 100h20M86 100h20" stroke={PART} strokeWidth="8" />
    </g>
  );
}

function Rower() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M30 118h96" stroke={FRAME} strokeWidth="7" />
      {/* Coluna do assento e viga até o apoio dos pés */}
      <path d="M108 118V76" stroke={FRAME} strokeWidth="7" />
      <path d="M108 98 46 110" stroke={FRAME} strokeWidth="6" />
      <path d="M38 102l8 14" stroke={FRAME} strokeWidth="8" />
      {/* Assento e encosto */}
      <path d="M92 74h30" stroke={PART} strokeWidth="9" />
      <path d="M124 72l6-38" stroke={PART} strokeWidth="9" />
      {/* Alavanca com as alças */}
      <path d="M70 106 50 52" stroke={PART} strokeWidth="7" />
      <path d="M36 50h26" stroke={FRAME} strokeWidth="7" />
    </g>
  );
}

function Elliptical() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M40 118h80" stroke={FRAME} strokeWidth="7" />
      <path d="M84 118V60" stroke={FRAME} strokeWidth="8" />
      <circle cx="84" cy="106" r="9" fill={FRAME} />
      {/* Barras dos braços, ligadas aos pedais */}
      <path d="M70 12l14 48 16 40M98 12 84 60l-20 40" stroke={PART} strokeWidth="6" />
      <path d="M56 102h16M92 102h16" stroke={PART} strokeWidth="8" />
    </g>
  );
}

function LatPulldown() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V12" stroke={FRAME} strokeWidth="8" />
      {/* Braços da puxada, abertos para cima */}
      <path d="M80 20 38 26 22 40M80 20l42 6 16 14" stroke={PART} strokeWidth="6" />
      {/* Assentos */}
      <path d="M80 92H54M80 92h26" stroke={PART} strokeWidth="5" />
      <path d="M34 92h22M104 92h22" stroke={FRAME} strokeWidth="8" />
    </g>
  );
}

function ChestPress() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V12" stroke={FRAME} strokeWidth="8" />
      {/* Braços do peitoral, descendo até as manoplas */}
      <path d="M80 20 52 24 44 50l4 18M80 20l28 4 8 26-4 18" stroke={PART} strokeWidth="6" />
      <path d="M48 66v14M112 66v14" stroke={FRAME} strokeWidth="7" />
      {/* Assentos */}
      <path d="M80 94H54M80 94h26" stroke={PART} strokeWidth="5" />
      <path d="M34 94h22M104 94h22" stroke={FRAME} strokeWidth="8" />
    </g>
  );
}

function ShoulderWheel() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V50" stroke={FRAME} strokeWidth="8" />
      <path d="M66 118h28" stroke={FRAME} strokeWidth="7" />
      {/* Duas rodas com manoplas */}
      <circle cx="58" cy="42" r="26" stroke={PART} strokeWidth="5" />
      <circle cx="102" cy="42" r="26" stroke={PART} strokeWidth="5" />
      <path d="M58 16v52M32 42h52M102 16v52M76 42h52" stroke={PART} strokeWidth="3" />
      <circle cx="58" cy="16" r="4" fill={FRAME} />
      <circle cx="128" cy="42" r="4" fill={FRAME} />
    </g>
  );
}

function ParallelBars() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Postes de trás, mais baixos pela perspectiva */}
      <path d="M50 108V40M118 108V40" stroke={FRAME} strokeWidth="6" />
      {/* Postes da frente */}
      <path d="M36 118V50M104 118V50" stroke={FRAME} strokeWidth="8" />
      {/* Barras */}
      <path d="M36 50 50 40M104 50l14-10" stroke={PART} strokeWidth="7" />
    </g>
  );
}

function TwistBars() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V18" stroke={FRAME} strokeWidth="8" />
      <path d="M66 118h28" stroke={FRAME} strokeWidth="7" />
      {/* Alças triangulares que giram */}
      <path d="M80 28H28l52 54" stroke={PART} strokeWidth="6" />
      <path d="M80 36h52L80 90" stroke={PART} strokeWidth="6" />
    </g>
  );
}

function SitUpBench() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V68" stroke={FRAME} strokeWidth="8" />
      <path d="M66 118h28" stroke={FRAME} strokeWidth="7" />
      {/* Prancha inclinada */}
      <path d="M24 90 136 50" stroke={PART} strokeWidth="12" />
      {/* Apoio dos pés na parte baixa */}
      <path d="M22 86l-6 10" stroke={FRAME} strokeWidth="5" />
      <path d="M8 98h16" stroke={FRAME} strokeWidth="7" />
    </g>
  );
}

function PullUpBar() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M80 118V22" stroke={FRAME} strokeWidth="8" />
      <path d="M66 118h28" stroke={FRAME} strokeWidth="7" />
      {/* Braços com as pegadas */}
      <path d="M80 26 42 30M80 26l38 4" stroke={PART} strokeWidth="6" />
      <path d="M42 30 24 32M118 30l18 2" stroke={FRAME} strokeWidth="7" />
    </g>
  );
}

function BarSet() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Espaldar */}
      <path d="M22 118V18M62 118V18" stroke={FRAME} strokeWidth="7" />
      <path
        d="M22 28h40M22 42h40M22 56h40M22 70h40M22 84h40M22 98h40"
        stroke={PART}
        strokeWidth="5"
      />
      {/* Barras em alturas diferentes */}
      <path d="M102 118V26M140 118V60" stroke={FRAME} strokeWidth="7" />
      <path d="M62 26h40M102 60h38" stroke={PART} strokeWidth="6" />
    </g>
  );
}
