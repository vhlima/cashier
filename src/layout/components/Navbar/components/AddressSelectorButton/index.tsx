import { FaChevronDown } from 'react-icons/fa';

import { Typography } from '@/components';

export const AddressSelectorButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2" type="button">
      <Typography
        className="font-medium"
        component="span"
        color="tertiary"
        size="sm"
      >
        Rua Conde de Iraja, 413
      </Typography>

      <FaChevronDown className="text-primary" size={16} />
    </button>
  );
};
