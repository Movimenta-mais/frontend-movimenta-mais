const EQUIPAMENT_PATH = /^\/equipament\/(\d+)\/?$/;

/**
 * Descobre qual aparelho um QR Code indica.
 *
 * O código colado no aparelho deve guardar o link da página dele
 * (ex.: `https://exemplo.com.br/equipament/3`): assim a câmera do próprio celular
 * também abre a página, sem passar pelo leitor do app. Só o número (`3`) também vale.
 *
 * O domínio do link é ignorado de propósito: o leitor usa apenas o número e
 * nunca leva a pessoa para fora do aplicativo.
 */
export function parseEquipamentId(content: string): number | null {
  const text = content.trim();
  if (/^\d+$/.test(text)) return Number(text);

  let url: URL;
  try {
    url = new URL(text);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;

  const match = EQUIPAMENT_PATH.exec(url.pathname);
  return match ? Number(match[1]) : null;
}
