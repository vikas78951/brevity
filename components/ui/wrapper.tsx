import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={cn('w-full max-w-[1440px] px-4', className)}>
      {children}
    </div>
  );
}
