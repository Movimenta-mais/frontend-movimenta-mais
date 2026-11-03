import Image from "next/image";
import { ExerciseExplorer } from "@/components/equipament/ExerciseExplorer";
import { Sparkle } from "@/components/illustrations/Sparkle";
import { AppHeader } from "@/components/layout/AppHeader";
import { getEquipaments } from "@/services/equipamentService";

export default async function HomePage() {
  const equipaments = await getEquipaments();

  return (
    <>
      <AppHeader backHref="/" backLabel="Voltar para a apresentação" />
      <main className="mx-auto w-full max-w-3xl px-5">
        {/* O texto nunca fica mais estreito que a maior palavra: a imagem é que encolhe. */}
        <section className="@container mt-6 flex items-center gap-2">
          <div className="flex-1">
            <h1 className="relative text-[1.75rem] leading-tight font-bold text-ink sm:text-4xl">
              <Sparkle className="absolute -top-7 -left-3 size-8 -rotate-12" />
              Vamos nos movimentar?
            </h1>
            <p className="mt-3 text-base leading-snug text-ink/80 sm:text-lg">
              Encontre um exercício ou aparelho e aprenda a usar com segurança.
            </p>
          </div>
          <Image
            src="/images/elderly-couple.png"
            alt="Ilustração de um casal de idosos sorrindo"
            width={900}
            height={627}
            sizes="(min-width: 640px) 240px, 40vw"
            preload
            className="hidden w-[36%] max-w-60 min-w-0 @min-[17rem]:block"
          />
        </section>

        <ExerciseExplorer equipaments={equipaments} />
      </main>
    </>
  );
}
