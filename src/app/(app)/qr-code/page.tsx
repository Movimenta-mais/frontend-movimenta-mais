import type { Metadata } from "next";
import { AppHeader } from "@/components/layout/AppHeader";
import { QrCodeScanner } from "@/components/qr-code/QrCodeScanner";
import { getEquipaments } from "@/services/equipamentService";

export const metadata: Metadata = {
  title: "QR Code",
};

export default async function QrCodePage() {
  const equipaments = await getEquipaments();

  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl px-5">
        <h1 className="mt-6 text-3xl font-bold text-ink">Escanear código</h1>
        <p className="mt-2 text-lg leading-snug text-ink/80">
          Aponte a câmera para o QR Code colado no aparelho e veja as
          instruções na hora.
        </p>
        <QrCodeScanner
          equipaments={equipaments.map(({ id, name }) => ({ id, name }))}
        />
      </main>
    </>
  );
}
