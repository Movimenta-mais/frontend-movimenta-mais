/** Minúsculas e sem acentos, para buscas como "bracos" encontrarem "Braços". */
export function normalizeText(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/** 92 → "1 min 32 s" */
export function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds} s`;
  if (seconds === 0) return `${minutes} min`;
  return `${minutes} min ${seconds} s`;
}
