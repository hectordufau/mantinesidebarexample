'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderMegaMenu from '@/components/HeaderMegaMenu/HeaderMegaMenu';
import { NavbarNested } from '@/components/NavbarNested/NavbarNested';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell
      padding="xl"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <HeaderMegaMenu
          toggleMobile={toggleMobile}
          toggleDesktop={toggleDesktop}
          mobileOpened={!mobileOpened}
          desktopOpened={!desktopOpened}
        />
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
