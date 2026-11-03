import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";
import { QrCodeIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "QR Code",
};

export default function QrCodePage() {
  return (
    <ComingSoon
      title="QR Code"
      description="Em breve você poderá apontar a câmera para o código do aparelho e abrir as instruções na hora."
      icon={<QrCodeIcon className="size-9" />}
    />
  );
}
