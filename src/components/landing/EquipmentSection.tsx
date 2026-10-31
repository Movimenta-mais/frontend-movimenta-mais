import {
  Equipment,
  type EquipmentKind,
} from "@/components/illustrations/Equipment";

type EquipmentItem = {
  kind: EquipmentKind;
  name: string;
  description: string;
  bodyPart: string;
};

const equipment: EquipmentItem[] = [
  {
    kind: "leg-press",
    name: "Pressão de pernas duplo",
    description:
      "Fortalece os membros inferiores e melhora o condicionamento.",
    bodyPart: "Pernas",
  },
  {
    kind: "horse-rider",
    name: "Simulador de cavalgada",
    description: "Melhora o equilíbrio e a coordenação motora.",
    bodyPart: "Corpo todo",
  },
  {
    kind: "leg-abduction",
    name: "Abdução de pernas",
    description: "Trabalha a parte interna e externa das coxas.",
    bodyPart: "Pernas",
  },
];

export function EquipmentSection() {
  return (
    <section className="px-5 py-14 md:py-20" aria-labelledby="aparelhos">
      <div className="mx-auto max-w-6xl">
        <h2
          id="aparelhos"
          className="text-center text-3xl font-bold text-ink sm:text-4xl"
        >
          Aparelhos que você já conhece
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/75">
          Os mesmos equipamentos das praças públicas, agora com instruções
          claras para cada um.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {equipment.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-4 rounded-3xl border border-brand-soft bg-white p-5 shadow-sm md:flex-col md:text-center"
            >
              <div className="w-28 shrink-0 rounded-2xl bg-brand-soft p-2 md:w-full md:p-6">
                <Equipment kind={item.kind} className="w-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand">
                  {item.name}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-ink/80">
                  {item.description}
                </p>
                <p className="mt-2 inline-block rounded-full bg-sun/30 px-3 py-0.5 text-sm font-semibold text-ink">
                  {item.bodyPart}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
