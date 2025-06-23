'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
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
