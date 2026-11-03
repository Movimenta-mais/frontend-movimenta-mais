export type Sex = "feminino" | "masculino";

export type AnamnesisData = {
  age: number;
  sex: Sex;
};

export type AnamnesisField = keyof AnamnesisData;

/** Valores como chegam do formulário, antes da validação. */
export type AnamnesisInput = Record<AnamnesisField, string>;

export type AnamnesisErrors = Partial<Record<AnamnesisField, string>>;

export type AnamnesisFormState = {
  status: "idle" | "error" | "success";
  values: AnamnesisInput;
  errors: AnamnesisErrors;
};
