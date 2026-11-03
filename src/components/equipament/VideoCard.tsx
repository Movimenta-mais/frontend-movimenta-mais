import { EquipamentImage } from "@/components/equipament/EquipamentImage";
import { ArrowRightIcon, ClockIcon, PlayIcon } from "@/components/ui/icons";
import type { Equipament } from "@/types/equipamentTypes";
import { formatDuration } from "@/utils/text";

type VideoCardProps = {
  equipament: Equipament;
};

export function VideoCard({ equipament }: VideoCardProps) {
  const { video } = equipament;

  return (
    <section className="@container rounded-3xl border-2 border-brand-soft bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="relative hidden aspect-[4/3] w-24 shrink-0 self-start overflow-hidden rounded-2xl bg-brand-soft @min-[17rem]:block @min-[19.5rem]:w-32 @md:w-44">
          <div className="absolute inset-2">
            <EquipamentImage equipament={equipament} sizes="176px" />
          </div>
          {video && (
            <span className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-md">
              <PlayIcon className="size-6" />
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-brand">Vídeo explicativo</h2>
          <p className="mt-1 text-base leading-snug text-ink/80">
            Veja o movimento completo no vídeo.
          </p>
          {video ? (
            <>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/70">
                <ClockIcon className="size-4" />
                {formatDuration(video.durationInSeconds)}
              </p>
              <a
                href={video.url}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-5 text-base font-semibold whitespace-nowrap text-white shadow-md transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Assistir vídeo
                <ArrowRightIcon className="size-5" />
              </a>
            </>
          ) : (
            <p className="mt-3 inline-flex min-h-12 items-center rounded-full bg-brand-soft px-5 text-base font-semibold whitespace-nowrap text-ink/70">
              Vídeo em breve
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
