// types

export type NavigationItem = {
  title: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  isExternal?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
};
