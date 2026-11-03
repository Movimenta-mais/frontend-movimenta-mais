import type { Metadata } from "next";
import { FavoritesList } from "@/components/equipament/FavoritesList";
import { AppHeader } from "@/components/layout/AppHeader";
import { getEquipaments } from "@/services/equipamentService";

export const metadata: Metadata = {
  title: "Favoritos",
};

export default async function FavoritesPage() {
  const equipaments = await getEquipaments();

  return (
    <>
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl px-5">
        <h1 className="mt-6 text-3xl font-bold text-ink">Meus favoritos</h1>
        <FavoritesList equipaments={equipaments} />
      </main>
    </>
  );
}
