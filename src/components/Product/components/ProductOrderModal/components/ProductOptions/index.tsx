import { type HTMLAttributes } from 'react';

import { ProductOption, ProductOptionsHeader } from './components';

type Props = HTMLAttributes<HTMLDivElement>;

export const ProductOptions: React.FC<Props> = props => {
  return (
    <div {...props}>
      <ProductOptionsHeader
        title="Complementos"
        description="Escolha até 4 opções."
      />

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
