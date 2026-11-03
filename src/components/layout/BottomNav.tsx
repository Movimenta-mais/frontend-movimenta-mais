"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartIcon,
  HomeIcon,
  QrCodeIcon,
  UserIcon,
} from "@/components/ui/icons";

const items = [
  { href: "/home", label: "Início", Icon: HomeIcon },
  { href: "/favorites", label: "Favoritos", Icon: HeartIcon },
  { href: "/qr-code", label: "QR Code", Icon: QrCodeIcon },
  { href: "/profile", label: "Perfil", Icon: UserIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-brand-soft bg-white pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-4">
        {items.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-16 flex-col items-center justify-center gap-1 text-sm transition-colors focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-brand ${
                  isActive
                    ? "font-semibold text-brand"
                    : "font-medium text-ink/60 hover:text-ink"
                }`}
              >
                <Icon className="size-6" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
