import { ScrollArea } from '@mantine/core';
import menu from '@/lib/menu/menu';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '../UserButton/UserButton';
import classes from './NavbarNested.module.css';
import { useState } from 'react';

export function NavbarNested() {


  const idperfil = 3; // get User Profile ID. Fixed here for testing purposes; 
  const [idMenu, setIdMenu] = useState(0);
  const [idSubmenu, setIdSubmenu] = useState(0);


  const evtMenu = (id: number) => {
    setIdMenu(id)
  }

  const evtSubmenu = (id: number) => {
    setIdSubmenu(id)
  }

  const links = menu
    .filter((item) => item.idperfil === idperfil || item.id === 0)
    .map((item) => <LinksGroup {...item} key={item.id} menuativo={idMenu} submenuativo={idSubmenu} handlerMenu={(id: number) => evtMenu(id)} handlerSubMenu={(id: number) => evtSubmenu(id)} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          {links}
        </div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
