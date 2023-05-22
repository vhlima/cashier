import clsx from 'clsx';
import Image from 'next/image';
import { type HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductImage: React.FC<Props> = props => {
  const { className, src, alt, size = 'md', ...rest } = props;

  return (
    <div
      className={clsx(
        'flex h-fit items-center justify-center rounded-2xl bg-yellow-100',
        {
          'p-4': size !== 'sm',
          'p-2': size === 'sm',
        },
        className && className,
      )}
      {...rest}
    >
      <div
        className={clsx('relative', {
          'h-12 w-12': size === 'sm',
          'h-24 w-24': size === 'md',
          'h-64 w-64': size === 'lg',
        })}
      >
        <Image
          className="relative z-10 object-cover"
          src={src}
          alt={alt}
          fill
          data-testid="product-image"
        />
      </div>
    </div>
  );
};
