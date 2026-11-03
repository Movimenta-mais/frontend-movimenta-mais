"use client";

import { useId, useState } from "react";
import { ExerciseCard } from "@/components/equipament/ExerciseCard";
import { SearchIcon } from "@/components/ui/icons";
import { BODY_PART_LABELS, BODY_PARTS } from "@/constants/bodyParts";
import type { BodyPart, Equipament } from "@/types/equipamentTypes";
import { normalizeText } from "@/utils/text";

type Filter = BodyPart | "todos";

const filters: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  ...BODY_PARTS.map((bodyPart) => ({
    value: bodyPart,
    label: BODY_PART_LABELS[bodyPart],
  })),
];

type ExerciseExplorerProps = {
  equipaments: Equipament[];
};

/** Busca, filtros por parte do corpo e lista de exercícios da tela inicial. */
export function ExerciseExplorer({ equipaments }: ExerciseExplorerProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("todos");
  const searchId = useId();
  const headingId = useId();

  const search = normalizeText(query.trim());
  const visible = equipaments.filter(
    (item) =>
      (filter === "todos" || item.bodyPart === filter) &&
      normalizeText(
        `${item.name} ${item.summary} ${BODY_PART_LABELS[item.bodyPart]}`,
      ).includes(search),
  );

  return (
    <>
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="relative mt-6"
      >
        <label htmlFor={searchId} className="sr-only">
          Buscar exercício ou aparelho
        </label>
        <SearchIcon className="pointer-events-none absolute top-1/2 left-5 size-6 -translate-y-1/2 text-brand" />
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar exercício ou aparelho..."
          className="h-14 w-full rounded-full border-2 border-brand-light/30 bg-brand-soft/60 pr-5 pl-14 text-base text-ellipsis text-ink sm:text-lg placeholder:text-ink/60 focus:border-brand focus:bg-white focus:outline-none"
        />
      </form>

      <div
        role="group"
        aria-label="Filtrar por parte do corpo"
        className="mt-4 flex flex-wrap gap-2"
      >
        {filters.map(({ value, label }) => {
          const isActive = filter === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(value)}
              className={`min-h-12 rounded-full border-2 px-5 text-base font-medium transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                isActive
                  ? "border-brand bg-brand text-white shadow-md"
                  : "border-brand-soft bg-white text-ink hover:border-brand-light"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <section aria-labelledby={headingId} className="mt-8">
        <h2 id={headingId} className="text-xl font-bold text-ink">
          Exercícios disponíveis
        </h2>
        <p aria-live="polite" className="sr-only">
          {visible.length === 1
            ? "1 exercício encontrado"
            : `${visible.length} exercícios encontrados`}
        </p>

        {visible.length > 0 ? (
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {visible.map((item) => (
              <li key={item.id}>
                <ExerciseCard equipament={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 rounded-3xl bg-brand-soft p-6 text-center text-lg text-ink/80">
            Nenhum exercício encontrado. Tente outra palavra ou toque em
            “Todos”.
          </p>
        )}
      </section>
    </>
  );
}
