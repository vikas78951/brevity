import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../ui/button';

const Auth = ({ className }: { className?: string }) => {
  const buttonStyles =
    'py-2 px-4 rounded-md lg:rounded-full font-light capitalize text-lg w-full lg:w-auto';
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between gap-2 lg:flex-row',
        className,
      )}
    >
      <Button variant={'outline'} className={buttonStyles} size={'lg'}>
        Sign in
      </Button>
      <Button
        variant={'default'}
        className={buttonStyles + ' dark:bg-foreground/20 dark:text-foreground'}
        size={'lg'}
      >
        Sign up
      </Button>
    </div>
  );
};

export default Auth;
