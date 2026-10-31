import { APP_NAME } from "@/constants/app";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-8 text-center text-white/80">
      <p className="text-lg font-semibold text-white">Movimenta +</p>
      <p className="mt-2 text-sm">
        Exercícios ao ar livre com mais segurança e autonomia.
      </p>
      <p className="mt-4 text-xs text-white/60">
        © {APP_NAME}
      </p>
    </footer>
  );
}
