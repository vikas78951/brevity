import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 group disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full min-w-64 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-violet-600 text-white border border-violet-600 hover:bg-background hover:text-violet-600',
        defaultOutline:
          'border border-violet-600 text-violet-600 bg-transparent',
        secondary:
          'bg-foreground dark:bg-white text-white dark:text-black border border-foreground dark:border-white hover:bg-transparent  ',
        secondaryOutline:
          'border border-foreground text-foreground bg-transparent hover:bg-transparent',
      },
      size: {
        sm: 'h-12 text-sm p-3',
        default: 'h-14   text-base p-4',
        lg: 'h-16   text-lg p-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type AnimatedLinkButtonProps = React.ComponentProps<'a'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function AnimatedLinkButton({
  className,
  variant = 'default',
  size,
  asChild = false,
  href = '',
  children,
  ...props
}: AnimatedLinkButtonProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      href={href}
      className={cn(
        buttonVariants({ variant, size }),
        'relative cursor-pointer overflow-hidden transition-all',
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'transition-all duration-300 group-hover:translate-x-34',
          'flex-1 capitalize',
          variant === 'secondary' && 'group-hover:text-black',
          size === 'sm' && 'group-hover:translate-x-36',
          size === 'lg' && 'group-hover:translate-x-28',
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'text-foreground flex h-9 w-9 items-center justify-center rounded-full border border-transparent bg-transparent transition-all duration-300 group-hover:-translate-x-48',

          variant === 'default' &&
            'bg-white text-black group-hover:bg-violet-600 group-hover:text-white',
          variant === 'defaultOutline' && 'border border-violet-600',
          variant === 'secondary' &&
            'bg-background group-hover:bg-foreground group-hover:text-background dark:group-hover:text-foreground text-foreground dark:bg-black',
          variant === 'secondaryOutline' && 'border-foreground border',
          size === 'sm' && 'h-8 w-8 group-hover:-translate-x-50',
          size === 'lg' && 'h-10 w-10 group-hover:-translate-x-44',
        )}
      >
        <ArrowRight
          strokeWidth={2}
          size={16}
          className='-rotate-45 group-hover:rotate-0'
        />
      </span>
    </Comp>
  );
}

export { AnimatedLinkButton, buttonVariants };
