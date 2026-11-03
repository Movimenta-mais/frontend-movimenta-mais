"use client";

import {
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createQrCodeReader, type QrCodeReader } from "@/utils/qrCodeReader";

/** Motivos para a câmera não abrir. Cada um tem uma mensagem própria na tela. */
export type CameraProblem =
  | "insecure"
  | "unsupported"
  | "denied"
  | "no-camera"
  | "busy"
  | "unknown";

export type ScannerState =
  | { status: "idle" }
  | { status: "starting" }
  | { status: "scanning" }
  | { status: "error"; problem: CameraProblem };

/** Intervalo entre uma leitura e outra. Quatro por segundo já parecem instantâneas. */
const SCAN_INTERVAL_MS = 250;

const CAMERA_CONSTRAINTS: MediaStreamConstraints = {
  // Prefere a câmera traseira; sem ela (computador), usa a que existir.
  video: { facingMode: { ideal: "environment" } },
  audio: false,
};

const noopSubscribe = () => () => {};

/** A câmera só existe em páginas seguras (https ou localhost) e em navegadores com suporte. */
function getEnvironmentProblem(): CameraProblem | null {
  if (!window.isSecureContext) return "insecure";
  if (!navigator.mediaDevices?.getUserMedia) return "unsupported";
  return null;
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

/** Traduz o erro do `getUserMedia` para o motivo mostrado à pessoa. */
function toCameraProblem(error: unknown): CameraProblem {
  const name = error instanceof Error ? error.name : "";
  switch (name) {
    case "NotAllowedError":
    case "SecurityError":
      return "denied";
    case "NotFoundError":
    case "OverconstrainedError":
      return "no-camera";
    case "NotReadableError":
    case "AbortError":
      return "busy";
    default:
      return "unknown";
  }
}

/**
 * Abre a câmera e procura um QR Code no vídeo até `onScan` aceitar um conteúdo
 * (devolvendo `true`); então a câmera é desligada.
 *
 * A câmera também é desligada quando a pessoa sai da tela (o Next só esconde a
 * página, sem desmontar) ou troca de aplicativo, e volta sozinha quando ela retorna.
 */
export function useQrCodeScanner(onScan: (content: string) => boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<ScannerState>({ status: "idle" });
  const environmentProblem = useSyncExternalStore(
    noopSubscribe,
    getEnvironmentProblem,
    () => null,
  );
  const isPageVisible = useSyncExternalStore(
    subscribeToVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );

  const wantsCamera = state.status === "starting" || state.status === "scanning";
  const shouldStream = wantsCamera && isPageVisible && !environmentProblem;

  const handleCode = useEffectEvent((content: string) => {
    if (!onScan(content)) return false;
    setState({ status: "idle" });
    return true;
  });

  // Ao esconder a tela, volta ao início: a câmera desliga e nenhuma mensagem antiga fica para trás.
  useLayoutEffect(() => () => setState({ status: "idle" }), []);

  // Se a permissão já foi dada antes, abre a câmera direto. Se foi negada, já explica como liberar.
  useEffect(() => {
    if (environmentProblem || !("permissions" in navigator)) return;
    let cancelled = false;

    navigator.permissions.query({ name: "camera" }).then(
      ({ state: permission }) => {
        if (cancelled) return;
        setState((current) => {
          if (current.status !== "idle") return current;
          if (permission === "granted") return { status: "starting" };
          if (permission === "denied") return { status: "error", problem: "denied" };
          return current;
        });
      },
      // Alguns navegadores não sabem consultar a permissão da câmera: a pessoa toca no botão.
      () => {},
    );

    return () => {
      cancelled = true;
    };
  }, [environmentProblem]);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldStream || !video) return;

    let cancelled = false;
    let stream: MediaStream | undefined;
    let timer: number | undefined;

    async function scan(read: QrCodeReader, target: HTMLVideoElement) {
      if (cancelled) return;
      if (target.readyState >= target.HAVE_CURRENT_DATA) {
        const content = await read(target).catch(() => null);
        if (cancelled) return;
        if (content && handleCode(content)) return;
      }
      timer = window.setTimeout(() => scan(read, target), SCAN_INTERVAL_MS);
    }

    async function start(target: HTMLVideoElement) {
      try {
        stream = await navigator.mediaDevices.getUserMedia(CAMERA_CONSTRAINTS);
        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        // Câmera desligada de fora (outro app, permissão revogada).
        stream.getVideoTracks()[0]?.addEventListener("ended", () => {
          if (!cancelled) setState({ status: "error", problem: "unknown" });
        });

        target.srcObject = stream;
        // O `autoPlay` já cuida disso; a falha aqui não impede o vídeo de começar.
        await target.play().catch(() => {});
        const read = await createQrCodeReader();
        if (cancelled) return;

        setState({ status: "scanning" });
        scan(read, target);
      } catch (error) {
        if (!cancelled) setState({ status: "error", problem: toCameraProblem(error) });
      }
    }

    start(video);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      stream?.getTracks().forEach((track) => track.stop());
      video.srcObject = null;
    };
  }, [shouldStream]);

  return {
    videoRef,
    state: environmentProblem
      ? ({ status: "error", problem: environmentProblem } satisfies ScannerState)
      : state,
    start: () => setState({ status: "starting" }),
    stop: () => setState({ status: "idle" }),
  };
}
