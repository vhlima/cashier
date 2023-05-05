import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductImage: React.FC<Props> = props => {
  const { src, alt, size = 'md' } = props;

  return (
    <div className="flex h-fit items-center justify-center rounded-sm bg-yellow-100 p-4">
      <div
        className={clsx('relative', {
          'h-20 w-20': size === 'sm',
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
