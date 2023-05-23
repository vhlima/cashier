import type { ElementType, HtmlHTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

interface Props extends HtmlHTMLAttributes<HTMLParagraphElement> {
  component: ElementType;

  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export const Typography: React.FC<PropsWithChildren<Props>> = props => {
  const { className, color, size, component, children, ...rest } = props;

  const ElementComponent = component;

  return (
    <ElementComponent
      className={clsx(
        color && {
          'text-t-primary': color === 'primary',
          'text-t-secondary': color === 'secondary',
          'text-t-tertiary': color === 'tertiary',
          'text-primary': color === 'error',
        },
        size && {
          'text-4xl': size === '4xl',
          'text-3xl': size === '3xl',
          'text-2xl': size === '2xl',
          'text-xl': size === 'xl',
          'text-lg': size === 'lg',
          'text-md': size === 'md',
          'text-sm': size === 'sm',
          'text-xs': size === 'xs',
        },
        className && className,
      )}
      {...rest}
    >
      {children}
    </ElementComponent>
  );
};
