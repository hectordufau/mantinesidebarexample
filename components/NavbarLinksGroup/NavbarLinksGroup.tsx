import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconCaretRight, IconCaretRightFilled, IconChevronRight } from '@tabler/icons-react';
import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './NavbarLinksGroup.module.css';

interface LinksGroupProps {
  id: number;
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { id: number; label: string; link: string }[];
  linkURL?: string;
  menuativo?: number;
  submenuativo?: number;
  handlerMenu?: (id: number) => void;
  handlerSubMenu?: (id: number) => void;
}

export function LinksGroup({
  id,
  icon: Icon,
  label,
  initiallyOpened,
  links,
  linkURL,
  menuativo,
  submenuativo,
  handlerMenu,
  handlerSubMenu,
}: LinksGroupProps) {
  const router = useRouter();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link, index) => (
    <Box key={index}>
      <Group className={classes.link} style={{ display: 'flex', alignItems: 'center' }} data-active={link.id === submenuativo || undefined} key={index}>
        {link.id === submenuativo ? <IconCaretRightFilled /> : <IconCaretRight />}
        <Text<'a'>
          component="a"
          href={link.link}
          key={link.id}
          onClick={(event) => {
            event.preventDefault();
            handlerMenu(id)
            handlerSubMenu(link.id)
            router.push(`${link.link}`);
          }}
        >
          {link.label}
        </Text>
      </Group>
    </Box>
  ));
  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (menuativo === id && opened) {
            setOpened(false)
          } else {
            setOpened(true)
          }
          handlerMenu(id)
        }}
        className={classes.control}
        key={id}
        data-active={id === menuativo || undefined}
      >
        <Group justify="space-between" gap={0}>
          <a
            href={linkURL}
            onClick={(event) => {
              event.preventDefault();
              linkURL !== undefined ? router.push(`${linkURL}`) : '#';
            }}
          >
            <Box style={{ display: 'flex', alignItems: 'center' }} key={`box-${id}`}>
              <ThemeIcon variant="light" size={30}>
                <Icon size={18} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </a>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: (opened && id === menuativo) ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened && id === menuativo}>{items}</Collapse> : null}
    </>
  );
}
