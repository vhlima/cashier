import { Typography } from '@/components';

import { useQuantitySelector } from '../../../../hooks';

import { AmountSelector } from '../../../AmountSelector';

interface Props {
  name: string;
  description: string;
  price: number;
}

export const ProductOption: React.FC<Props> = props => {
  const { name, description, price } = props;

  const quantitySelector = useQuantitySelector();

  return (
    <li className="flex items-center justify-between border-b border-b-gray-200 py-4 last-of-type:border-b-0">
      <div className="flex flex-col">
        <Typography component="span">{name}</Typography>
        <Typography component="span" size="sm">
          {description}
        </Typography>
        <Typography component="span">+ ${price}</Typography>
      </div>

      <AmountSelector {...quantitySelector} />
    </li>
  );
};
