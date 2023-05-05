import { type HTMLAttributes } from 'react';

import { Typography } from '@/components';

import { AmountSelector } from '../index';

import { useQuantitySelector } from '../../hooks';

type Props = HTMLAttributes<HTMLDivElement>;

export const ProductOptions: React.FC<Props> = props => {
  const { className, ...rest } = props;

  const quantitySelector = useQuantitySelector();

  return (
    <div className="" {...rest}>
      <div className="bg-slate-100 px-4 py-2">
        <Typography className="font-bold" component="h2">
          Complementos
        </Typography>
        <Typography component="span" size="sm">
          Escolha até 4 opções.
        </Typography>
      </div>

      <ul className="px-4">
        {['1', '2', '3', '4', '5'].map(n => (
          <li
            className="flex items-center justify-between border-b border-b-gray-200 py-4 last-of-type:border-b-0"
            key={n}
          >
            <div className="flex flex-col">
              <Typography component="span">Leite Ninho</Typography>
              <Typography component="span" size="sm">
                Escolha na observação: batido ou separado.
              </Typography>
              <Typography component="span">+ $4.90</Typography>
            </div>

            <AmountSelector {...quantitySelector} />
          </li>
        ))}
      </ul>
    </div>
  );
};
