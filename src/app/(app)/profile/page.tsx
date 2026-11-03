import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";
import { UserIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Perfil",
};

export default function ProfilePage() {
  return (
    <ComingSoon
      title="Perfil"
      description="Em breve você poderá criar seu perfil e guardar seus exercícios em qualquer aparelho."
      icon={<UserIcon className="size-9" />}
    />
  );
}
