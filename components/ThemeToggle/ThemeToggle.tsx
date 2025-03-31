import { useRouter } from 'next/navigation';
import { IconLogout, IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import {
  ActionIcon,
  Group,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { theme } from '@/theme';
import classes from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const router = useRouter();
  return (
    <Group justify="center">
      <Tooltip label="Change Theme">
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
          bg={computedColorScheme === 'light' ? theme.colors!.brand[3]! : theme.colors!.brand[6]!}
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Logout">
        <ActionIcon
          onClick={(e) => {
            e.preventDefault();
            router.push('/panel/');
          }}
          variant="default"
          size="xl"
          aria-label="Logout"
          bg={computedColorScheme === 'light' ? theme.colors!.brand[3]! : theme.colors!.brand[6]!}
        >
          <IconLogout className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconLogout className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
