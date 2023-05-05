import { type HTMLAttributes } from 'react';

import { Typography } from '@/components';

import { ProductOption } from './components';

type Props = HTMLAttributes<HTMLDivElement>;

export const ProductOptions: React.FC<Props> = props => {
  return (
    <div {...props}>
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
          <ProductOption
            key={`product-option-${n}`}
            name="Leite Ninho"
            description="Escolha na observação: batido ou separado."
            price={4.9}
          />
        ))}
      </ul>
    </div>
  );
};
