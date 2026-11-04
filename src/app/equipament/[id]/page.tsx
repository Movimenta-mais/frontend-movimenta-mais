import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EquipamentImage } from "@/components/equipament/EquipamentImage";
import { FavoriteButton } from "@/components/equipament/FavoriteButton";
import { ListenButton } from "@/components/equipament/ListenButton";
import { VideoCard } from "@/components/equipament/VideoCard";
import { AppHeader } from "@/components/layout/AppHeader";
import { BodyPartTag } from "@/components/ui/BodyPartTag";
import { LightbulbIcon, WarningIcon } from "@/components/ui/icons";
import { EquipamentGuard } from "@/components/equipament/EquipamentGuard";
import {
  getEquipamentById,
  getEquipaments,
} from "@/services/equipamentService";
import type { Equipament } from "@/types/equipamentTypes";

export async function generateStaticParams() {
  const equipaments = await getEquipaments();
  return equipaments.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/equipament/[id]">): Promise<Metadata> {
  const { id } = await params;
  const equipament = await getEquipamentById(Number(id));
  return { title: equipament?.name };
}

/** Texto lido pelo botão "Ouvir áudio". */
function buildSpeechText(equipament: Equipament) {
  const steps = equipament.steps
    .map((step, index) => `Passo ${index + 1}, ${step.title}. ${step.description}`)
    .join(" ");
  return [
    `${equipament.name}.`,
    equipament.description,
    `Instruções. ${steps}`,
    `Cuidados importantes. ${equipament.precautions.join(" ")}`,
  ].join(" ");
}

export default async function EquipamentPage({
  params,
}: PageProps<"/equipament/[id]">) {
  const { id } = await params;
  const equipament = await getEquipamentById(Number(id));

  if (!equipament) notFound();

  return (
    <EquipamentGuard>
      <AppHeader backHref="/home" />
      <main className="mx-auto w-full max-w-3xl px-5 pb-10">
        <h1 className="mt-4 text-3xl leading-tight font-bold text-ink sm:text-4xl">
          {equipament.name}
        </h1>
        <BodyPartTag
          bodyPart={equipament.bodyPart}
          className="mt-3 rounded-full bg-brand-soft px-4 py-1.5"
        />

        <div className="relative mt-4">
          <Image
            src="/images/blob.png"
            alt=""
            width={900}
            height={535}
            sizes="(min-width: 768px) 700px, 90vw"
            loading="eager"
            className="absolute inset-0 m-auto w-[85%]"
          />
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm">
            <EquipamentImage
              equipament={equipament}
              sizes="(min-width: 640px) 384px, 90vw"
              preload
            />
          </div>
          <ListenButton
            text={buildSpeechText(equipament)}
            className="absolute right-0 bottom-0"
          />
        </div>

        <p className="mt-6 flex gap-3 rounded-3xl bg-brand-soft p-5 text-lg leading-relaxed text-ink">
          <LightbulbIcon className="size-8 shrink-0 text-brand" />
          {equipament.description}
        </p>

        <h2 className="mt-8 text-2xl font-bold text-ink">Instruções</h2>
        <ol className="mt-4 space-y-5">
          {equipament.steps.map((step, index) => (
            <li key={step.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white"
              >
                {index + 1}
              </span>
              {step.imageUrl && (
                <div className="relative aspect-[4/3] w-28 shrink-0 self-start overflow-hidden rounded-2xl sm:w-36">
                  <Image
                    src={step.imageUrl}
                    alt=""
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-brand">
                  {step.title}
                </h3>
                <p className="mt-1 text-lg leading-relaxed text-ink/80">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <VideoCard equipament={equipament} />
        </div>

        <section className="mt-6 rounded-3xl bg-sun/20 p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sun text-ink">
              <WarningIcon className="size-6" />
            </span>
            <h2 className="text-xl font-bold text-ink">Cuidados importantes</h2>
          </div>
          <ul className="mt-3 list-disc space-y-1.5 pl-6 text-lg leading-snug text-ink marker:text-ink/60">
            {equipament.precautions.map((precaution) => (
              <li key={precaution}>{precaution}</li>
            ))}
          </ul>
        </section>

        <div className="mt-6">
          <FavoriteButton equipamentId={equipament.id} />
        </div>
      </main>
    </EquipamentGuard>
  );
}
