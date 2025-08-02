import { cn } from '../lib/utils';
import { ComponentProps, ElementType, ReactNode } from 'react';

interface FlexSwitcherProps extends ComponentProps<ElementType> {
  as?: ElementType;
  gap?: string;
  threshold?: string;
  children?: ReactNode;
  className?: string;
}

const FlexSwitcher = ({
  as,
  gap = '1rem',
  threshold = '30rem',
  children,
  className,
  ...otherProps
}: FlexSwitcherProps) => {
  const Component = as ? as : 'div';
  return (
    <Component
      style={{
        ['--threshold']: threshold,
        ['--gap']: gap,
      }}
      className={cn(
        'flex! flex-wrap! gap-[var(--gap)] *:grow *:basis-[calc((var(--threshold)_-_100%)_*_999)]!',
        className
      )}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default FlexSwitcher;
