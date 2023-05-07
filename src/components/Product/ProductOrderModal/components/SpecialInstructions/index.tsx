import { Typography } from '@/components';

import { BsChatSquareTextFill } from 'react-icons/bs';

export const SpecialInstructions: React.FC = () => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <BsChatSquareTextFill size={20} />

        <Typography className="font-bold" component="h2">
          Special Instructions
        </Typography>
      </div>

      <textarea
        className="w-full resize-none rounded-sm border border-gray-200 p-2 shadow-sm focus:border-gray-500 focus:outline-none"
        id="special-instructions"
        placeholder="Please enter any special requests or instructions for your order here (e.g. no onions, extra sauce, etc)."
        rows={4}
      />
    </div>
  );
};
