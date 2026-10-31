import type { ReactNode } from "react";

type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-7 w-7",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const benefits: Benefit[] = [
  {
    title: "Segurança em primeiro lugar",
    description:
      "Cada exercício mostra a postura correta e os cuidados para evitar lesões.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6Z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "Passo a passo simples",
    description:
      "Instruções curtas, em linguagem clara, para seguir no seu tempo.",
    icon: (
      <svg {...iconProps}>
        <path d="M9 6h11M9 12h11M9 18h11" />
        <path d="M4 6h.01M4 12h.01M4 18h.01" />
      </svg>
    ),
  },
  {
    title: "Respeita o seu ritmo",
    description:
      "Sugestões adaptadas para quem está começando ou tem alguma limitação física.",
    icon: (
      <svg {...iconProps}>
        <path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1Z" />
      </svg>
    ),
  },
  {
    title: "Fácil de ler e usar",
    description:
      "Letras grandes, botões amplos e cores com bom contraste.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20l5-14h2l5 14" />
        <path d="M6 15h8" />
        <path d="M17 10h4M19 8v4" />
      </svg>
    ),
  },
];

export function BenefitsSection() {
  return (
    <section className="px-5 py-14 md:py-20" aria-labelledby="beneficios">
      <div className="mx-auto max-w-6xl">
        <h2
          id="beneficios"
          className="text-center text-3xl font-bold text-ink sm:text-4xl"
        >
          Feito para você se exercitar <span className="text-brand">sem medo</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/75">
          Os aparelhos das praças são para todos. O Movimenta + ajuda você a
          usá-los do jeito certo.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-3xl border border-brand-soft bg-white p-6 shadow-sm"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-ink">
                {benefit.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-ink/75">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
