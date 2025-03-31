'use client';

import { MantineLogo } from '@mantinex/mantine-logo';
import { Box, Burger, Group } from '@mantine/core';
import { theme } from '@/theme';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import classes from './HeaderMegaMenu.module.css';

interface Props {
  toggleMobile: any;
  toggleDesktop: any;
  mobileOpened: boolean;
  desktopOpened: boolean;
}

export default function HeaderMegaMenu(props: Props) {
  return (
    <Box bg={theme.colors!.brand[9]!}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <MantineLogo size={34} />
            <Burger
              onClick={props.toggleDesktop}
              aria-label="Toggle navigation"
              visibleFrom="sm"
              color="white"
              opened={props.desktopOpened}
            />
            <Burger
              onClick={props.toggleMobile}
              aria-label="Toggle navigation"
              hiddenFrom="sm"
              color="white"
              opened={props.mobileOpened}
            />
          </Group>
          <Group>
            <ThemeToggle />
          </Group>
        </Group>
      </header>
    </Box>
  );
}
