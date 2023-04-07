import { MenuHeader } from './components';

interface Props {
  category: string;
}

export const MenuCategory: React.FC<Props> = props => {
  const { category } = props;

  return (
    <div className="mt-14 px-14">
      <MenuHeader />
    </div>
  );
};
