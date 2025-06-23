import type { NavigationItem } from '@/lib/defination';

export const navigation: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: 'home',
    isActive: true,
  },
  {
    title: 'About',
    href: '/about',
    icon: 'info',
  },
  {
    title: 'Services',
    href: '/services',
    icon: 'cog',
    children: [
      {
        title: 'Web Development',
        href: '/services/web-development',
      },
      {
        title: 'Mobile Development',
        href: '/services/mobile-development',
      },
    ],
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: 'envelope',
  },
];
