import { Typography } from '@/components';

interface Props {
  title: string;
  description: string;
}

export const ProductOptionsHeader: React.FC<Props> = props => {
  const { title, description } = props;

  return (
    <div className="bg-slate-100 px-4 py-2">
      <Typography className="font-bold" component="h2">
        {title}
      </Typography>
      <Typography component="span" size="sm">
        {description}
      </Typography>
    </div>
  );
};
