"use client";

import { HeartIcon } from "@/components/ui/icons";
import { useFavorites } from "@/hooks/useFavorites";

type FavoriteButtonProps = {
  equipamentId: number;
};

export function FavoriteButton({ equipamentId }: FavoriteButtonProps) {
  const { ids, toggle } = useFavorites();
  const isFavorite = ids.includes(equipamentId);

  return (
    <button
      type="button"
      onClick={() => toggle(equipamentId)}
      className={`flex min-h-14 w-full items-center justify-center gap-3 rounded-full border-2 border-brand px-6 text-lg font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        isFavorite
          ? "bg-brand text-white hover:bg-brand-dark"
          : "bg-white text-brand hover:bg-brand-soft"
      }`}
    >
      <HeartIcon filled={isFavorite} className="size-6" />
      {isFavorite ? "Remover dos favoritos" : "Favoritar exercício"}
    </button>
  );
}
