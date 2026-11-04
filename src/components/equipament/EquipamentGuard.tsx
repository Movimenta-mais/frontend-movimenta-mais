'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';


export function EquipamentGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userData = localStorage.getItem('anamnesis_data');

    if (!userData) {
      // Se não estiver preenchido, redireciona (ex: para a home ou login)
      router.push(`/anamnese?callbackUrl=${encodeURIComponent(pathname)}`);
    } 
  }, [router, pathname]);

  
    return <>{children}</>;
  }


