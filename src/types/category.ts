enum Category {
  ACTIVITY = "activity",
  SCENIC_SPOT = "scenic-spot",
  RESTAURANT = "restaurant"
}

enum CategoryMap {
  "節慶活動" = "activity",
  "探索景點" = "scenic-spot",
  "品嚐美食" = "restaurant"
}

enum CategoryTextMap {
  "activity" = "節慶活動",
  "scenic-spot" = "探索景點",
  "restaurant" = "品嚐美食"
}

type CategoryType = Category.ACTIVITY | Category.RESTAURANT | Category.SCENIC_SPOT;

interface CategoryItem {
  text: string;
  path: string;
  keyword: string;
}

interface CategoryData {
  title: string;
  list: CategoryItem[];
  categoryType: CategoryType;
  placeholder: string;
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

export { Category, CategoryMap, CategoryTextMap, validCategory };
