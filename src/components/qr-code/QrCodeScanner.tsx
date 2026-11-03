"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import {
  CameraIcon,
  CheckIcon,
  CloseIcon,
  QrCodeIcon,
  WarningIcon,
} from "@/components/ui/icons";
import { type CameraProblem, useQrCodeScanner } from "@/hooks/useQrCodeScanner";
import type { Equipament } from "@/types/equipamentTypes";
import { parseEquipamentId } from "@/utils/equipamentQrCode";

type EquipamentOption = Pick<Equipament, "id" | "name">;

type Action = {
  label: string;
  Icon: typeof CameraIcon;
  onClick: () => void;
  isSecondary?: boolean;
};

type QrCodeScannerProps = {
  /** Aparelhos que o leitor reconhece. */
  equipaments: EquipamentOption[];
};

const introSteps = [
  "Toque em “Abrir câmera”.",
  "Se o celular perguntar, toque em “Permitir”.",
  "Aponte a câmera para o código colado no aparelho.",
];

const unblockSteps = [
  "Toque no ícone ao lado do endereço do site, no alto da tela.",
  "Em “Câmera”, escolha “Permitir”.",
  "Volte aqui e toque em “Tentar de novo”.",
];

const problems: Record<
  CameraProblem,
  { title: string; description: string; canRetry: boolean }
> = {
  denied: {
    title: "A câmera está bloqueada",
    description:
      "Para ler o código, o Movimenta+ precisa da sua permissão para usar a câmera. Veja como liberar:",
    canRetry: true,
  },
  "no-camera": {
    title: "Não encontramos uma câmera",
    description:
      "Este aparelho parece não ter câmera. Você pode procurar o exercício pelo nome.",
    canRetry: true,
  },
  busy: {
    title: "A câmera está ocupada",
    description:
      "Outro aplicativo pode estar usando a câmera. Feche-o e toque em “Tentar de novo”.",
    canRetry: true,
  },
  insecure: {
    title: "Não foi possível abrir a câmera",
    description:
      "A câmera só funciona quando o site é aberto por um endereço seguro, que começa com https://.",
    canRetry: false,
  },
  unsupported: {
    title: "Este navegador não abre a câmera",
    description: "Tente abrir o Movimenta+ no Chrome ou no Safari.",
    canRetry: false,
  },
  unknown: {
    title: "Não foi possível abrir a câmera",
    description: "Algo deu errado ao abrir a câmera. Toque em “Tentar de novo”.",
    canRetry: true,
  },
};

const INVALID_CODE_MESSAGE =
  "Este código não é de um aparelho do Movimenta+. Procure o código colado no aparelho.";

/** Lê o QR Code do aparelho com a câmera e abre a página de instruções dele. */
export function QrCodeScanner({ equipaments }: QrCodeScannerProps) {
  const router = useRouter();
  const [found, setFound] = useState<EquipamentOption | null>(null);
  const [hasInvalidCode, setHasInvalidCode] = useState(false);

  const { videoRef, state, start, stop } = useQrCodeScanner((content) => {
    const id = parseEquipamentId(content);
    const equipament = equipaments.find((item) => item.id === id);
    if (!equipament) {
      setHasInvalidCode(true);
      return false;
    }

    setFound(equipament);
    // O navegador só deixa vibrar depois que a pessoa já tocou na página
    // (quando a câmera abre sozinha, isso pode não ter acontecido).
    if (navigator.userActivation?.hasBeenActive) navigator.vibrate?.(80);
    router.push(`/equipament/${equipament.id}`);
    return true;
  });

  // Ao voltar para esta tela, ela começa do zero, sem a mensagem da leitura anterior.
  useLayoutEffect(
    () => () => {
      setFound(null);
      setHasInvalidCode(false);
    },
    [],
  );

  function handleStart() {
    setHasInvalidCode(false);
    start();
  }

  const isCameraOpen =
    state.status === "starting" || state.status === "scanning";
  const problem = state.status === "error" ? problems[state.problem] : null;

  let announcement = "";
  if (found) announcement = `Código lido. Abrindo ${found.name}.`;
  else if (state.status === "starting")
    announcement = "Abrindo a câmera. Se o celular perguntar, toque em Permitir.";
  else if (state.status === "scanning")
    announcement = hasInvalidCode
      ? INVALID_CODE_MESSAGE
      : "Câmera aberta. Aponte para o código do aparelho.";
  else if (problem) announcement = `${problem.title}. ${problem.description}`;

  let action: Action | null = null;
  if (found) {
    // Já está abrindo o aparelho: não há o que fazer.
  } else if (state.status === "idle") {
    action = { label: "Abrir câmera", Icon: CameraIcon, onClick: handleStart };
  } else if (isCameraOpen) {
    action = {
      label: "Fechar câmera",
      Icon: CloseIcon,
      onClick: stop,
      isSecondary: true,
    };
  } else if (problem?.canRetry) {
    action = { label: "Tentar de novo", Icon: CameraIcon, onClick: handleStart };
  }

  let panel;
  if (found) {
    panel = (
      <div className="rounded-3xl bg-brand-soft p-6 text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand text-white">
          <CheckIcon className="size-9" />
        </span>
        <p className="mt-4 text-xl font-semibold text-ink">Código lido!</p>
        <p className="mt-2 text-lg text-ink/80">
          Abrindo as instruções de <strong>{found.name}</strong>…
        </p>
      </div>
    );
  } else if (isCameraOpen) {
    panel = (
      <div>
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-ink">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            aria-hidden="true"
            className={`size-full object-cover transition-opacity duration-300 ${
              state.status === "scanning" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Viewfinder />
          {state.status === "starting" && (
            <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-lg font-semibold text-white">
              Abrindo a câmera…
            </p>
          )}
        </div>

        {state.status === "starting" ? (
          <p className="mx-auto mt-4 max-w-sm rounded-2xl bg-sun/25 p-4 text-center text-lg leading-snug text-ink">
            Se o celular perguntar, toque em <strong>“Permitir”</strong>.
          </p>
        ) : hasInvalidCode ? (
          <p className="mx-auto mt-4 flex max-w-sm gap-3 rounded-2xl bg-sun/25 p-4 text-lg leading-snug text-ink">
            <WarningIcon className="size-7 shrink-0" />
            {INVALID_CODE_MESSAGE}
          </p>
        ) : (
          <p className="mx-auto mt-4 max-w-sm text-center text-lg leading-snug text-ink/80">
            Aponte a câmera para o código do aparelho. A leitura é automática.
          </p>
        )}
      </div>
    );
  } else if (problem && state.status === "error") {
    panel = (
      <div className="rounded-3xl bg-sun/20 p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sun text-ink">
            <WarningIcon className="size-7" />
          </span>
          <h2 className="text-xl leading-tight font-bold text-ink">
            {problem.title}
          </h2>
        </div>
        <p className="mt-3 text-lg leading-snug text-ink">
          {problem.description}
        </p>
        {process.env.NODE_ENV === "development" &&
          state.problem === "insecure" && (
            <p className="mt-4 rounded-2xl bg-white/70 p-4 text-base text-ink/80">
              <strong>Só em desenvolvimento:</strong> neste computador, abra
              por <code>http://localhost:3000</code> em vez do IP. Para testar
              no celular, rode <code>npm run dev:https -- -H &lt;seu IP&gt;</code>{" "}
              (veja o README).
            </p>
          )}
        {state.problem === "denied" && (
          <>
            <NumberedSteps steps={unblockSteps} />
            <p className="mt-4 text-base text-ink/75">
              No iPhone, também dá para liberar nos Ajustes do celular, em
              Safari › Câmera.
            </p>
          </>
        )}
      </div>
    );
  } else {
    panel = (
      <div className="rounded-3xl bg-brand-soft p-6">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-sun text-ink">
          <QrCodeIcon className="size-9" />
        </span>
        <h2 className="mt-4 text-xl font-semibold text-ink">
          Vamos usar a câmera do celular
        </h2>
        <NumberedSteps steps={introSteps} />
        <p className="mt-4 text-base text-ink/75">
          A câmera só é usada para ler o código. Nenhuma foto é tirada ou
          guardada.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {panel}

      {/* Sempre no mesmo lugar: o botão continua com o foco quando a tela muda. */}
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className={`mt-5 flex min-h-14 w-full items-center justify-center gap-3 rounded-full px-7 text-lg font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand sm:mx-auto sm:w-fit ${
            action.isSecondary
              ? "bg-brand-soft text-brand hover:bg-brand-light/30"
              : "bg-brand text-white shadow-md hover:bg-brand-dark"
          }`}
        >
          <action.Icon className="size-7" />
          {action.label}
        </button>
      )}

      {!found && (
        <p className="mt-6 text-center text-lg leading-snug text-ink/80">
          Não está conseguindo?{" "}
          <Link
            href="/home"
            className="font-semibold text-brand underline underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Procure o aparelho pelo nome
          </Link>
        </p>
      )}
    </div>
  );
}

function NumberedSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-4 space-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-3 text-lg leading-snug text-ink">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sun font-bold"
          >
            {index + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}

/** Cantos amarelos que mostram onde encaixar o código. */
function Viewfinder() {
  const corner = "absolute size-12 border-sun";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-[14%]">
      <span className={`${corner} top-0 left-0 rounded-tl-2xl border-t-6 border-l-6`} />
      <span className={`${corner} top-0 right-0 rounded-tr-2xl border-t-6 border-r-6`} />
      <span className={`${corner} bottom-0 left-0 rounded-bl-2xl border-b-6 border-l-6`} />
      <span className={`${corner} right-0 bottom-0 rounded-br-2xl border-r-6 border-b-6`} />
    </div>
  );
}
