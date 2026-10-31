import { version as reactVersion } from "react";
import nextPackage from "next/package.json";
import { APP_NAME } from "@/constants/app";

const nextVersion = nextPackage.version;

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-6 py-24">
      <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {APP_NAME}
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Bem-vindo! A estrutura inicial do projeto está pronta para receber as
          próximas funcionalidades.
        </p>
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-1.5 font-mono text-sm text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-950 dark:text-emerald-300">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-emerald-500"
          />
          Next.js {nextVersion} + React {reactVersion} funcionando
        </p>
      </div>
    </main>
  );
}
