import { cacheLife } from "next/cache";
import { EQUIPAMENTS } from "@/constants/equipaments";
import type { Equipament } from "@/types/equipamentTypes";

// Por enquanto os dados vêm de uma lista local. Quando houver backend, basta
// trocar o retorno por um `fetch`: o `use cache` mantém as páginas pré-renderizadas.

export async function getEquipaments(): Promise<Equipament[]> {
  "use cache";
  cacheLife("hours");
  return EQUIPAMENTS;
}

export async function getEquipamentById(
  id: number,
): Promise<Equipament | null> {
  "use cache";
  cacheLife("hours");
  return EQUIPAMENTS.find((item) => item.id === id) ?? null;
}
