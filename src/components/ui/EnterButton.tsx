import Link from "next/link";


type EnterButtonProps = {
  variant?: "primary" | "inverted";
  className?: string;
};

const variantClasses: Record<NonNullable<EnterButtonProps["variant"]>, string> =
  {
    primary: "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand",
    inverted: "bg-sun text-ink hover:bg-white focus-visible:outline-white",
  };

/**
 * Botão "Entrar". Ainda sem destino definido: por enquanto é apenas visual.
 */
export function EnterButton({
  variant = "primary",
  className = "",
}: EnterButtonProps) {
  return (
    <Link href="/home">
      <button
      type="button"
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 text-lg font-semibold shadow-md transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
      >
        Entrar
      </button>
    </Link>
  );
}
