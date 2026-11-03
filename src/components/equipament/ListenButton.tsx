"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { SpeakerIcon, StopIcon } from "@/components/ui/icons";

type ListenButtonProps = {
  text: string;
  className?: string;
};

const noopSubscribe = () => () => {};

/** Lê o texto em voz alta com a síntese de voz do próprio navegador. */
export function ListenButton({ text, className = "" }: ListenButtonProps) {
  const isSupported = useSyncExternalStore(
    noopSubscribe,
    () => "speechSynthesis" in window,
    () => false,
  );
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Para a leitura ao sair da página (inclusive quando ela só fica escondida).
  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  if (!isSupported) return null;

  function handleClick() {
    const synth = window.speechSynthesis;
    synth.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    synth.speak(utterance);
    setIsSpeaking(true);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex min-h-14 items-center gap-2 rounded-full bg-brand-soft px-4 text-left text-sm leading-tight font-semibold text-brand shadow-sm transition-colors hover:bg-brand-light/30 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      {isSpeaking ? (
        <StopIcon className="size-7" />
      ) : (
        <SpeakerIcon className="size-7" />
      )}
      <span>
        {isSpeaking ? "Parar" : "Ouvir"}
        <br />
        áudio
      </span>
    </button>
  );
}
