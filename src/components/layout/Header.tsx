import Link from "next/link";
import { EnterButton } from "@/components/ui/EnterButton";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-brand-soft bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-brand"
          aria-label="Movimenta Mais, voltar ao início"
        >
          Movimenta +
        </Link>
        <EnterButton className="min-h-11 px-6 text-base" />
      </div>
    </header>
  );
}
