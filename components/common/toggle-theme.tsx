'use client';

import React, { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className='h-8 w-8' />;

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='h-auto w-auto bg-transparent !p-0 transition-all duration-700 hover:rotate-180 hover:bg-transparent'
    >
      {theme === 'dark' ? (
        <Sun className='m-1' size={20} />
      ) : (
        <Moon className='m-1' size={20} />
      )}
    </Button>
  );
}
