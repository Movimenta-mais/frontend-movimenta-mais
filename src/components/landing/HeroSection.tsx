import { ElderlyCouple } from "@/components/illustrations/ElderlyCouple";
import { Sparkle } from "@/components/illustrations/Sparkle";
import { EnterButton } from "@/components/ui/EnterButton";

export function HeroSection() {
  return (
    <section id="inicio" className="overflow-hidden bg-brand-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 pt-10 pb-14 md:flex-row md:gap-12 md:py-20">
        <div className="flex-1 text-center md:text-left">
          <p className="mb-4 inline-block rounded-full bg-sun px-4 py-1 text-sm font-semibold text-ink">
            Academias ao ar livre
          </p>
          <h1 className="relative text-4xl leading-tight font-bold text-ink sm:text-5xl">
            <Sparkle className="absolute -top-6 -left-2 h-8 w-8 -rotate-12 md:-left-8" />
            Vamos nos <span className="text-brand">movimentar?</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/80 sm:text-xl">
            O Movimenta + ensina, passo a passo, como usar cada aparelho da
            praça. Para que pessoas idosas e quem tem alguma condição física se
            exercitem com segurança e confiança.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <EnterButton className="w-full sm:w-auto" />
            <a
              href="#como-funciona"
              className="inline-flex min-h-12 items-center px-4 text-lg font-semibold text-brand underline-offset-4 hover:underline"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-sm flex-1 md:max-w-md">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-6 bottom-0 rounded-full bg-brand-light/25"
          />
          <div
            aria-hidden="true"
            className="absolute top-2 right-4 h-16 w-16 rounded-full bg-sun"
          />
          <ElderlyCouple className="relative w-full" />
        </div>
      </div>
    </section>
  );
}
