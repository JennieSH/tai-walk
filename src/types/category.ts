enum Category {
  ACTIVITY = "activity",
  SCENIC_SPOT = "scenic-spot",
  RESTAURANT = "restaurant"
}

type CategoryType = Category.ACTIVITY | Category.RESTAURANT | Category.SCENIC_SPOT;

interface CategoryItem {
  text: string;
  path: string;
}

interface CategoryData {
  title: string;
  list: CategoryItem[];
  categoryType: CategoryType;
}

type CategoryContextProviderProps = {
  children: React.ReactNode;
};

type CategoryAction = {
  type: CategoryType;
};

const validCategory = [Category.ACTIVITY, Category.RESTAURANT, Category.SCENIC_SPOT];

export type {
  CategoryType,
  CategoryItem,
  CategoryData,
  CategoryContextProviderProps,
  CategoryAction
};

export { Category, validCategory };
