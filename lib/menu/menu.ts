import {
  IconBuildingStore,
  IconHome,
  IconNotes,
  IconSettings,
  IconUserHeart,
} from '@tabler/icons-react';
import PerfilEnum from '../enums/perfilEnum';

const menu = [
  {
    id: 0,
    label: 'Home',
    icon: IconHome,
    linkURL: '/panel/',
  },
  {
    id: 1,
    label: 'Orders',
    icon: IconNotes,
    links: [
      { id: 101, label: 'Pending', link: '/panel/admin/orders/pending' },
      { id: 102, label: 'Approved', link: '/panel/admin/orders/approved' },
    ],
    idperfil: PerfilEnum.Admin,
  },
  {
    id: 2,
    label: 'Customers',
    icon: IconUserHeart,
    linkURL: '/panel/admin/customers',
    idperfil: PerfilEnum.Admin,
  },
  {
    id: 6,
    label: 'Stores',
    icon: IconBuildingStore,
    links: [
      { id: 601, label: 'Pendentes', link: '/panel/admin/stores/pending' },
      { id: 602, label: 'Aprovadas', link: '/panel/admin/stores/approved' },
    ],
    idperfil: PerfilEnum.Admin,
  },
  {
    id: 22,
    label: 'System',
    icon: IconSettings,
    links: [
      { id: 2201, label: 'Settings', link: '/panel/admin/system/settings' },
      { id: 2202, label: 'Users', link: '/panel/admin/system/users' },
    ],
    idperfil: PerfilEnum.Admin,
  },

];

export default menu;
