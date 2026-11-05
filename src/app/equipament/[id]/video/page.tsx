import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EquipamentGuard } from "@/components/equipament/EquipamentGuard";
import { AppHeader } from "@/components/layout/AppHeader";
import { ChevronLeftIcon, ClockIcon } from "@/components/ui/icons";
import {
  getEquipamentById,
  getEquipaments,
} from "@/services/equipamentService";
import { formatDuration } from "@/utils/text";

export async function generateStaticParams() {
  const equipaments = await getEquipaments();
  return equipaments
    .filter((item) => item.video)
    .map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/equipament/[id]/video">): Promise<Metadata> {
  const { id } = await params;
  const equipament = await getEquipamentById(Number(id));
  return { title: equipament && `Vídeo: ${equipament.name}` };
}

export default async function EquipamentVideoPage({
  params,
}: PageProps<"/equipament/[id]/video">) {
  const { id } = await params;
  const equipament = await getEquipamentById(Number(id));

  if (!equipament?.video) notFound();

  const backHref = `/equipament/${equipament.id}`;

  return (
    <EquipamentGuard>
      <AppHeader backHref={backHref} backLabel="Voltar às instruções" />
      <main className="mx-auto w-full max-w-3xl px-5 pb-10">
        <p className="mt-4 text-base font-semibold text-brand">
          Vídeo explicativo
        </p>
        <h1 className="mt-1 text-3xl leading-tight font-bold text-ink sm:text-4xl">
          {equipament.name}
        </h1>
        <p className="mt-2 flex items-center gap-1.5 text-base text-ink/70">
          <ClockIcon className="size-5" />
          {formatDuration(equipament.video.durationInSeconds)}
        </p>

        <div className="mt-5 rounded-3xl bg-brand-soft p-3 shadow-sm">
          <video
            src={equipament.video.url}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`Demonstração do exercício no aparelho ${equipament.name}`}
            className="mx-auto max-h-[70svh] w-full rounded-2xl bg-ink object-contain"
          />
        </div>

        <p className="mt-4 text-center text-base text-ink/70">
          O vídeo se repete sozinho. Toque nele para pausar.
        </p>

        <Link
          href={backHref}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-base font-semibold text-white shadow-md transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ChevronLeftIcon className="size-5" />
          Voltar às instruções
        </Link>
      </main>
    </EquipamentGuard>
  );
}
