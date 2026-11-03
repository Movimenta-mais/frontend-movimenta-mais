import { MAX_AGE, MIN_AGE, SEX_OPTIONS } from "@/constants/anamnesis";
import type {
  AnamnesisData,
  AnamnesisErrors,
  AnamnesisInput,
  Sex,
} from "@/types/anamnesis";

type ValidationResult =
  | { success: true; data: AnamnesisData }
  | { success: false; errors: AnamnesisErrors };

function isSex(value: string): value is Sex {
  return SEX_OPTIONS.some((option) => option.value === value);
}

export function validateAnamnesis(input: AnamnesisInput): ValidationResult {
  const errors: AnamnesisErrors = {};
  const age = Number(input.age);
  const sex = isSex(input.sex) ? input.sex : null;

  if (input.age === "") {
    errors.age = "Informe a sua idade.";
  } else if (!Number.isInteger(age) || age < MIN_AGE || age > MAX_AGE) {
    errors.age = `Informe uma idade entre ${MIN_AGE} e ${MAX_AGE} anos, usando apenas números.`;
  }

  if (!sex) {
    errors.sex = "Escolha uma das opções.";
  }

  if (errors.age || !sex) {
    return { success: false, errors };
  }

  return { success: true, data: { age, sex } };
}
