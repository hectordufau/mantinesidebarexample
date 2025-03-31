'use client';

import { checkLoginClient } from '@/app/actions/loginClient';
import PerfilEnum from '@/lib/enums/perfilEnum';

export default function AdminPage() {
  checkLoginClient(PerfilEnum.Administrativo);
  return (
    <>
      <h1>Admin Sistema</h1>
    </>
  );
}
