import { menuCategories } from '@/views/MenuCategory/categories';

import { MenuCategory } from './components';

interface Props {
  selectedCategory: string;
}

export const MenuCategories: React.FC<Props> = props => {
  const { selectedCategory } = props;

  return (
    <nav className="my-12 flex gap-8" data-testid="menu-categories">
      {menuCategories.map((category, index) => (
        <MenuCategory
          key={`menu-category-${category.name}`}
          displayOrder={index}
          isActive={selectedCategory === category.id}
          {...category}
        />
      ))}
    </nav>
  );
};
