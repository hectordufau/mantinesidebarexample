import { useRouter } from 'next/navigation';
import { IconChevronRight } from '@tabler/icons-react';
import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './UserButton.module.css';

export function UserButton() {
  const router = useRouter();
  return (
    <UnstyledButton
      className={classes.user}
      onClick={(e) => {
        e.preventDefault();
        router.push('/panel/profile');
      }}
    >
      <Group>
        <Avatar radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            John Wick
          </Text>

          <Text c="dimmed" size="xs">
            john.wick@babayaga.fs
          </Text>
        </div>

        <IconChevronRight size={14} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}
