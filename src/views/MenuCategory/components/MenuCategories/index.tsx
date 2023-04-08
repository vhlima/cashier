import { menuCategories } from '@/views/MenuCategory/categories';

import { MenuCategory } from './components';

interface Props {
  selectedCategory: string;
}

export const MenuCategories: React.FC<Props> = props => {
  const { selectedCategory } = props;

  return (
    <nav className="flex gap-8" data-testid="menu-categories">
      {menuCategories.map(category => (
        <MenuCategory
          key={`menu-category-${category.name}`}
          isActive={selectedCategory === category.name}
          {...category}
        />
      ))}
    </nav>
  );
};
