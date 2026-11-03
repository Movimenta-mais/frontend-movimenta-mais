/** Lê o QR Code que aparece no vídeo agora, ou devolve `null` se não houver nenhum. */
export type QrCodeReader = (video: HTMLVideoElement) => Promise<string | null>;

// O `BarcodeDetector` ainda não faz parte dos tipos do TypeScript.
interface BarcodeDetectorInstance {
  detect(source: CanvasImageSource): Promise<{ rawValue: string }[]>;
}

interface BarcodeDetectorConstructor {
  new (options?: { formats: string[] }): BarcodeDetectorInstance;
  getSupportedFormats(): Promise<string[]>;
}

declare global {
  interface Window {
    BarcodeDetector?: BarcodeDetectorConstructor;
  }
}

/** Maior lado da imagem analisada pelo jsQR. Imagens maiores só deixam a leitura lenta. */
const MAX_FRAME_SIZE = 720;

/** Leitor do próprio navegador (Chrome no Android, por exemplo): rápido e sem custo de download. */
async function createNativeReader(): Promise<QrCodeReader | null> {
  const { BarcodeDetector } = window;
  if (!BarcodeDetector) return null;

  try {
    const formats = await BarcodeDetector.getSupportedFormats();
    if (!formats.includes("qr_code")) return null;
    const detector = new BarcodeDetector({ formats: ["qr_code"] });
    return async (video) => {
      const [code] = await detector.detect(video);
      return code?.rawValue ?? null;
    };
  } catch {
    return null;
  }
}

/** Reserva para navegadores sem leitor nativo (Safari, Firefox, Chrome no Windows). */
async function createJsQrReader(): Promise<QrCodeReader> {
  const { default: jsQR } = await import("jsqr");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  return async (video) => {
    const { videoWidth, videoHeight } = video;
    if (!context || !videoWidth || !videoHeight) return null;

    const scale = Math.min(1, MAX_FRAME_SIZE / Math.max(videoWidth, videoHeight));
    const width = Math.round(videoWidth * scale);
    const height = Math.round(videoHeight * scale);
    if (canvas.width !== width) canvas.width = width;
    if (canvas.height !== height) canvas.height = height;

    context.drawImage(video, 0, 0, width, height);
    const { data } = context.getImageData(0, 0, width, height);
    return jsQR(data, width, height, { inversionAttempts: "dontInvert" })?.data ?? null;
  };
}

export async function createQrCodeReader(): Promise<QrCodeReader> {
  return (await createNativeReader()) ?? createJsQrReader();
}
