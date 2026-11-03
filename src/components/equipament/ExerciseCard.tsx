import Link from "next/link";
import { EquipamentImage } from "@/components/equipament/EquipamentImage";
import { BodyPartTag } from "@/components/ui/BodyPartTag";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Equipament } from "@/types/equipamentTypes";

type ExerciseCardProps = {
  equipament: Equipament;
};

// Em cards estreitos (celulares de 360px) o botão ocupa a largura toda, embaixo
// da imagem; nos demais fica na coluna do texto, como no design. Nos ainda mais
// estreitos (320px), a imagem também diminui.
export function ExerciseCard({ equipament }: ExerciseCardProps) {
  return (
    <article className="@container h-full rounded-3xl border-2 border-brand-soft bg-white p-4 shadow-sm">
      <div className="grid h-full grid-cols-[4rem_1fr] grid-rows-[1fr_auto] gap-x-3 gap-y-3 @min-[17rem]:grid-cols-[7rem_1fr] @min-[17rem]:gap-x-4">
        <div className="relative aspect-square self-start rounded-2xl bg-brand-soft @min-[19.5rem]:row-span-2">
          <div className="absolute inset-2">
            <EquipamentImage equipament={equipament} sizes="112px" />
          </div>
        </div>

        <div className="min-w-0 wrap-break-word">
          <h3 className="text-lg leading-snug font-bold text-brand">
            {equipament.name}
          </h3>
          <p className="mt-1 text-base leading-snug text-ink/80">
            {equipament.summary}
          </p>
          <BodyPartTag bodyPart={equipament.bodyPart} className="mt-2" />
        </div>

        <Link
          href={`/equipament/${equipament.id}`}
          className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 self-end rounded-full bg-brand px-4 text-base font-semibold whitespace-nowrap text-white shadow-md transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand @min-[19.5rem]:col-span-1 @min-[19.5rem]:col-start-2"
        >
          Ver instruções
          <span className="sr-only">: {equipament.name}</span>
          <ArrowRightIcon className="size-5" />
        </Link>
      </div>
    </article>
  );
}
