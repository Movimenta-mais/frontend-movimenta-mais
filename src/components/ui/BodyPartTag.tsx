import { BodyPartIcon } from "@/components/ui/icons";
import { BODY_PART_LABELS } from "@/constants/bodyParts";
import type { BodyPart } from "@/types/equipamentTypes";

type BodyPartTagProps = {
  bodyPart: BodyPart;
  className?: string;
};

export function BodyPartTag({ bodyPart, className = "" }: BodyPartTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-base font-medium text-ink ${className}`}
    >
      <BodyPartIcon bodyPart={bodyPart} className="size-5 text-brand" />
      {BODY_PART_LABELS[bodyPart]}
    </span>
  );
}
