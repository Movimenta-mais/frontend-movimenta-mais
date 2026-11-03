import type { BodyPart } from "@/types/equipamentTypes";

export const BODY_PART_LABELS: Record<BodyPart, string> = {
  pernas: "Pernas",
  bracos: "Braços",
  caminhada: "Caminhada",
  "corpo-todo": "Corpo todo",
};

/** Ordem em que as categorias aparecem nos filtros. */
export const BODY_PARTS: BodyPart[] = [
  "pernas",
  "bracos",
  "caminhada",
  "corpo-todo",
];
