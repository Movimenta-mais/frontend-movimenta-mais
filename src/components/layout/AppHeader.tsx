import Link from "next/link";
import { HelpButton } from "@/components/ui/HelpButton";
import { ChevronLeftIcon } from "@/components/ui/icons";

type AppHeaderProps = {
  /** Quando informado, mostra o botão de voltar para este endereço. */
  backHref?: string;
  /** Nome do botão de voltar lido pelos leitores de tela. */
  backLabel?: string;
};

export function AppHeader({ backHref, backLabel = "Voltar" }: AppHeaderProps) {
  return (
    <header className="mx-auto grid w-full max-w-3xl grid-cols-[3rem_1fr_3rem] items-center px-5 pt-4">
      <div>
        {backHref && (
          <Link
            href={backHref}
            aria-label={backLabel}
            className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand transition-colors hover:bg-brand-light/30 focus-visible:outline-3 focus-visible:outline-brand"
          >
            <ChevronLeftIcon className="size-7" />
          </Link>
        )}
      </div>
      <p className="text-center text-2xl font-bold tracking-tight text-brand">
        Movimenta+
      </p>
      <div className="flex justify-end">
        <HelpButton />
      </div>
    </header>
  );
}
