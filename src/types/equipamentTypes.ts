export type BodyPart = "pernas" | "bracos" | "caminhada" | "corpo-todo";

/** Desenho usado quando o aparelho ainda não tem foto (`imageUrl`). */
export type EquipmentKind =
  | "leg-press"
  | "horse-rider"
  | "leg-abduction"
  | "walker"
  | "rower"
  | "elliptical"
  | "lat-pulldown"
  | "chest-press"
  | "shoulder-wheel"
  | "parallel-bars"
  | "twist-bars"
  | "sit-up-bench"
  | "pull-up-bar"
  | "bar-set";

export interface InstructionStep {
  title: string;
  description: string;
  /** Caminho de uma imagem em `public/` (ex.: `/images/aparelhos/passo-1.jpg`). */
  imageUrl?: string;
}

export interface EquipamentVideo {
  url: string;
  durationInSeconds: number;
}

export interface Equipament {
  id: number;
  name: string;
  /** Resumo curto exibido no card da lista. */
  summary: string;
  /** Explicação exibida no destaque da página do aparelho. */
  description: string;
  bodyPart: BodyPart;
  illustration: EquipmentKind;
  /** Caminho de uma imagem em `public/`. Sem ela, o desenho é exibido. */
  imageUrl?: string;
  steps: InstructionStep[];
  video?: EquipamentVideo;
  precautions: string[];
}
