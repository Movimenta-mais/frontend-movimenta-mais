type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Vá até a praça",
    description:
      "Escolha uma academia ao ar livre perto de você e leve o celular.",
  },
  {
    title: "Encontre o aparelho",
    description:
      "Escaneie o código do aparelho ou procure pelo nome ou pela parte do corpo.",
  },
  {
    title: "Siga as instruções",
    description:
      "Veja como se posicionar, quantas repetições fazer e quais cuidados tomar.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-20 bg-brand px-5 py-14 text-white md:py-20"
      aria-labelledby="como-funciona-titulo"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="como-funciona-titulo"
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Como funciona
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/85">
          Em três passos você começa a se exercitar com orientação.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-3xl bg-white/10 p-6 md:flex-col"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sun text-2xl font-bold text-ink"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-white/85">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
