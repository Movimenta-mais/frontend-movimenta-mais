import { Sparkle } from "@/components/illustrations/Sparkle";
import { EnterButton } from "@/components/ui/EnterButton";

export function ClosingSection() {
  return (
    <section className="px-5 pb-14 md:pb-20" aria-labelledby="comecar">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-brand px-6 py-12 text-center text-white md:px-12">
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-sun/90"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-light/70"
        />
        <Sparkle className="relative mx-auto h-10 w-10" />
        <h2 id="comecar" className="relative mt-2 text-3xl font-bold sm:text-4xl">
          Pronto para começar?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg font-medium">
          Entre no Movimenta + e descubra como cada aparelho da praça pode
          cuidar da sua saúde.
        </p>
        <EnterButton variant="inverted" className="relative mt-8 w-full sm:w-auto" />
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-base text-ink/70">
        Antes de começar qualquer atividade física, converse com um
        profissional de saúde.
      </p>
    </section>
  );
}
