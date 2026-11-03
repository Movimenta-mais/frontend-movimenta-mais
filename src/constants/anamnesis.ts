import type { Sex } from "@/types/anamnesis";

export const MIN_AGE = 18;
export const MAX_AGE = 120;

export const SEX_OPTIONS: ReadonlyArray<{ value: Sex; label: string }> = [
  { value: "feminino", label: "Feminino" },
  { value: "masculino", label: "Masculino" },
];
