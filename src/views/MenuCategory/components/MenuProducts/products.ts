export type Product = {
  name: string;
  price: number;
  displayImageUrl: string;
};

export const products: Product[] = [
  ...Array.from({ length: 15 }).map((_, index) => ({
    name: `big ${index}`,
    displayImageUrl:
      'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
    price: 4.18 + index,
  })),
  {
    name: 'Big Mac',
    displayImageUrl:
      'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
    price: 4.18,
  },
];
