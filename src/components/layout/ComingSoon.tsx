import Link from "next/link";
import type { ReactNode } from "react";
import { AppHeader } from "@/components/layout/AppHeader";

type ComingSoonProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

/** Tela provisória para recursos que ainda não fazem parte do MVP. */
export function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl px-5">
        <h1 className="mt-6 text-3xl font-bold text-ink">{title}</h1>
        <div className="mt-6 rounded-3xl bg-brand-soft p-6 text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-sun text-ink">
            {icon}
          </span>
          <p className="mt-4 text-xl font-semibold text-ink">Em breve</p>
          <p className="mt-2 text-lg text-ink/80">{description}</p>
          <Link
            href="/home"
            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 text-lg font-semibold text-white shadow-md transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Ver exercícios
          </Link>
        </div>
      </main>
    </>
  );
}
