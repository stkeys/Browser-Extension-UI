import { cn } from '../lib/utils'
import { ComponentProps, ElementType, ReactNode } from 'react';

interface AutoGridProps extends ComponentProps<ElementType> {
  threshold?: string;
  gap?: string;
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  track?: 'auto-fit' | 'auto-fill';
}

const AutoGrid = ({
  threshold = '20rem',
  gap = '1rem',
  as,
  children,
  className,
  track = 'auto-fill',
  ...otherProps
}: AutoGridProps) => {
  const Component = as ? as : 'div';
  return (
    <Component
      style={{
        '--width': threshold,
        '--gap': gap,
        '--track': track,
      }}
      className={cn(
        '!grid !gap-[var(--gap)] !grid-cols-[repeat(var(--track),minmax(min(var(--width),100%),1fr))]',
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default AutoGrid;
