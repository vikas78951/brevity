'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function FixedHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        className,
        scrolled &&
          'bg-background dark:bg-background/20 shadow-md transition duration-500',
      )}
    >
      {children}
    </div>
  );
}
