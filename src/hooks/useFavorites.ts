"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "movimenta-mais:favoritos";
// O evento `storage` só avisa as outras abas; este avisa a aba atual.
const CHANGE_EVENT = "movimenta-mais:favoritos-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function readStorage() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function parseIds(raw: string): number[] {
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value)
      ? value.filter((id): id is number => typeof id === "number")
      : [];
  } catch {
    return [];
  }
}

const noopSubscribe = () => () => {};

/** Favoritos guardados no próprio navegador, enquanto não há login. */
export function useFavorites() {
  const raw = useSyncExternalStore(subscribe, readStorage, () => "[]");
  // Falso no servidor e na hidratação: evita mostrar "sem favoritos" antes de ler o navegador.
  const isReady = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const ids = useMemo(() => parseIds(raw), [raw]);

  const toggle = useCallback(
    (id: number) => {
      const next = ids.includes(id)
        ? ids.filter((favoriteId) => favoriteId !== id)
        : [...ids, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        return;
      }
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    [ids],
  );

  return { ids, isReady, toggle };
}
