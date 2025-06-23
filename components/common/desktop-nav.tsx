import React from 'react';
import { navigation } from '@/lib/data';
import type { NavigationItem } from '@/lib/defination';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { headers } from 'next/headers';

export async function getCurrentPathname(): Promise<string> {
  const hdrs = await headers();
  const pathname = hdrs.get('x-pathname') || '/';
  return pathname;
}

const NavItem = React.memo(
  ({ item, active }: { item: NavigationItem; active: boolean }) => {
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            'text-foreground/60 dark:text-foreground block rounded-full px-5 py-1.5',
            'hover:bg-background hover:text-foreground dark:hover:text-background hover:shadow-sm dark:hover:bg-white',
            active &&
              'bg-background text-foreground dark:text-background shadow-md dark:bg-white',
          )}
        >
          {item.title}
        </Link>
      </li>
    );
  },
);

const DesktopNav = async () => {
  const pathname = await getCurrentPathname();

  return (
    <div className='hidden lg:block'>
      <ul
        className={`bg-foreground/5 flex items-center gap-2 rounded-full px-1 py-1.5`}
      >
        {navigation &&
          navigation.map((item) => (
            <NavItem
              key={`${item.title}`}
              item={item}
              active={pathname === item.href}
            />
          ))}
      </ul>
    </div>
  );
};

NavItem.displayName = 'NavItem';
export default DesktopNav;
