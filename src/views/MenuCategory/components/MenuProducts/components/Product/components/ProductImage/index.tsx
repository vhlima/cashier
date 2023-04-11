import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export const ProductImage: React.FC<Props> = props => {
  const { src, alt } = props;

  return (
    <div className="mb-2 rounded-full bg-yellow-100 p-4">
      <div className="relative h-20 w-20">
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
