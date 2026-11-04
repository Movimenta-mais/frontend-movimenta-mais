import type { Metadata } from "next";
import { Suspense } from "react";
import { AnamnesisForm } from "@/components/anamnesis/AnamnesisForm";
import { Sparkle } from "@/components/illustrations/Sparkle";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { APP_NAME } from "@/constants/app";

export const metadata: Metadata = {
  title: `Anamnese | ${APP_NAME}`,
  description:
    "Responda algumas perguntas para indicarmos exercícios adequados para você.",
};

export default function AnamnesisPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-soft px-5 pt-10 pb-14 md:py-16">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <p className="mb-4 inline-block rounded-full bg-sun px-4 py-1 text-sm font-semibold text-ink">
              Anamnese
            </p>
            <h1 className="relative text-3xl leading-tight font-bold text-ink sm:text-4xl">
              <Sparkle className="absolute -top-6 left-2 h-8 w-8 -rotate-12" />
              Conte um pouco <span className="text-brand">sobre você</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Com essas informações, indicamos exercícios mais adequados para o
              seu corpo.
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <Suspense
              fallback={
                <div className="flex h-32 items-center justify-center">
                  <p className="text-lg font-medium text-ink/80">
                    Carregando formulário...
                  </p>
                </div>
              }
            >
              <AnamnesisForm />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
