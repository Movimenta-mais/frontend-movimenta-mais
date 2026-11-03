"use client";

import { useEffect, useId, useRef } from "react";
import { HelpIcon } from "@/components/ui/icons";

const tips = [
  "Procure o aparelho pelo nome ou toque em uma parte do corpo para filtrar.",
  "Ou toque em “QR Code”, na barra de baixo, e aponte a câmera para o código colado no aparelho.",
  "Toque em “Ver instruções” para ver o passo a passo do exercício.",
  "Na página do aparelho, toque em “Ouvir áudio” para escutar as instruções.",
  "Toque no coração para guardar o exercício nos seus favoritos.",
];

export function HelpButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // A página fica escondida (e não desmontada) ao navegar; fecha o diálogo junto.
  useEffect(() => {
    const dialog = dialogRef.current;
    return () => dialog?.close();
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label="Ajuda: como usar o aplicativo"
        className="flex size-12 items-center justify-center rounded-full text-brand transition-colors hover:bg-brand-soft focus-visible:outline-3 focus-visible:outline-brand"
      >
        <HelpIcon className="size-8" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          // Clique fora do conteúdo (no fundo escurecido) fecha o diálogo.
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto w-[calc(100%-2.5rem)] max-w-md rounded-3xl bg-white text-ink shadow-xl backdrop:bg-ink/50"
      >
        <div className="p-6">
          <h2 id={titleId} className="text-2xl font-bold">
            Como usar o Movimenta+
          </h2>
          <ol className="mt-4 space-y-3">
            {tips.map((tip, index) => (
              <li key={tip} className="flex gap-3 text-lg leading-snug">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sun font-bold"
                >
                  {index + 1}
                </span>
                {tip}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-base text-ink/75">
            Antes de começar qualquer atividade física, converse com um
            profissional de saúde.
          </p>
          <form method="dialog">
            <button
              type="submit"
              className="mt-6 min-h-12 w-full rounded-full bg-brand px-6 text-lg font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Entendi
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
