"use client";

import Link from "next/link";
import { ExerciseCard } from "@/components/equipament/ExerciseCard";
import { HeartIcon } from "@/components/ui/icons";
import { useFavorites } from "@/hooks/useFavorites";
import type { Equipament } from "@/types/equipamentTypes";

type FavoritesListProps = {
  equipaments: Equipament[];
};

export function FavoritesList({ equipaments }: FavoritesListProps) {
  const { ids, isReady } = useFavorites();

  if (!isReady) return null;

  const favorites = equipaments.filter((item) => ids.includes(item.id));

  if (favorites.length === 0) {
    return (
      <div className="mt-6 rounded-3xl bg-brand-soft p-6 text-center">
        <HeartIcon className="mx-auto size-10 text-brand" />
        <p className="mt-3 text-lg text-ink/80">
          Você ainda não tem exercícios favoritos. Na página de um exercício,
          toque em “Favoritar exercício” para guardá-lo aqui.
        </p>
        <Link
          href="/home"
          className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 text-lg font-semibold text-white shadow-md transition-colors hover:bg-brand-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Ver exercícios
        </Link>
      </div>
    );
  }

  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {favorites.map((item) => (
        <li key={item.id}>
          <ExerciseCard equipament={item} />
        </li>
      ))}
    </ul>
  );
}
