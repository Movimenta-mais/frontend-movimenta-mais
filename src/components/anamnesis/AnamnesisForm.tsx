"use client";

import { useState, useEffect, useRef } from "react";
import { MAX_AGE, MIN_AGE, SEX_OPTIONS } from "@/constants/anamnesis";

export function AnamnesisForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ age?: string; sex?: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("anamnesis_data");
    if (!saved || !formRef.current) return;

    const { age, sex } = JSON.parse(saved);
    const form = formRef.current;

    if (age) {
      (form.elements.namedItem("age") as HTMLInputElement).value = age;
    }
    if (sex) {
      const radio = form.querySelector(`input[name="sex"][value="${sex}"]`) as HTMLInputElement;
      if (radio) radio.checked = true;
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccess(false);
    
    const formData = new FormData(event.currentTarget);
    const age = formData.get("age") as string;
    const sex = formData.get("sex") as string;

    const newErrors: { age?: string; sex?: string } = {};
    if (!age) newErrors.age = "A idade é obrigatória.";
    if (!sex) newErrors.sex = "O sexo é obrigatório.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    localStorage.setItem("anamnesis_data", JSON.stringify({ age, sex }));
    setIsSuccess(true);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="age" className="text-xl font-semibold text-ink">
          Qual a sua idade?
        </label>
        <p id="age-hint" className="text-base text-ink/70">
          Digite apenas números, em anos.
        </p>
        <div className="flex items-center gap-3">
          <input
            id="age"
            name="age"
            type="number"
            inputMode="numeric"
            min={MIN_AGE}
            max={MAX_AGE}
            step={1}
            required
            aria-invalid={Boolean(errors.age)}
            aria-describedby={errors.age ? "age-hint age-error" : "age-hint"}
            className="h-14 w-32 rounded-2xl border-2 border-brand-soft bg-brand-soft px-4 text-2xl font-semibold text-ink outline-none focus:border-brand aria-invalid:border-red-600"
          />
          <span className="text-lg text-ink/80">anos</span>
        </div>
        {errors.age && <FieldError id="age-error" message={errors.age} />}
      </div>

      <fieldset
        aria-describedby={errors.sex ? "sex-error" : undefined}
        className="flex flex-col gap-3"
      >
        <legend className="mb-3 text-xl font-semibold text-ink">
          Qual o seu sexo?
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {SEX_OPTIONS.map((option) => (
            <label
              key={option.value}
              className="flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border-2 border-brand-soft bg-white px-5 text-lg font-medium text-ink transition-colors has-checked:border-brand has-checked:bg-brand-soft has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand"
            >
              <input
                type="radio"
                name="sex"
                value={option.value}
                required
                className="h-6 w-6 accent-brand"
              />
              {option.label}
            </label>
          ))}
        </div>
        {errors.sex && <FieldError id="sex-error" message={errors.sex} />}
      </fieldset>

      <div aria-live="polite">
        {isSuccess && (
          <p className="rounded-2xl bg-sun/30 px-5 py-4 text-lg font-medium text-ink">
            Obrigado! Suas respostas foram salvas localmente.
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand px-8 text-lg font-semibold text-white shadow-md transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Enviar respostas
      </button>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="text-base font-medium text-red-700">
      {message}
    </p>
  );
}
