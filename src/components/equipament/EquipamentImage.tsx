import Image from "next/image";
import { Equipment } from "@/components/illustrations/Equipment";
import type { Equipament } from "@/types/equipamentTypes";

type EquipamentImageProps = {
  equipament: Equipament;
  /** Largura em que a foto é exibida, repassada ao `sizes` do `next/image`. */
  sizes: string;
  preload?: boolean;
};

/**
 * Foto do aparelho, ou o desenho dele enquanto não houver foto.
 * Ocupa todo o elemento pai, que precisa ter `position: relative` e tamanho definido.
 */
export function EquipamentImage({
  equipament,
  sizes,
  preload,
}: EquipamentImageProps) {
  if (equipament.imageUrl) {
    return (
      <Image
        src={equipament.imageUrl}
        alt=""
        fill
        sizes={sizes}
        preload={preload}
        className="object-contain"
      />
    );
  }

  return (
    <Equipment
      kind={equipament.illustration}
      className="absolute inset-0 size-full"
    />
  );
}
