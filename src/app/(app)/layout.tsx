import { BottomNav } from "@/components/layout/BottomNav";

/** Telas com a barra de navegação inferior (Início, Favoritos, QR Code, Perfil). */
export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <div className="flex-1 pb-24">{children}</div>
      <BottomNav />
    </>
  );
}
