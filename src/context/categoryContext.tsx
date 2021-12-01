import { createContext, Dispatch, useReducer } from "react";
import { allCategoryData } from "@/constants/categoryList";
import { Category } from "@/types/category";
import type { CategoryData, CategoryContextProviderProps, CategoryAction } from "@/types/category";

const initState = allCategoryData.activity;

const CategoryContext = createContext<{
  categoryState: CategoryData;
  categoryDispatch: Dispatch<CategoryAction>;
}>({
  categoryState: initState,
  categoryDispatch: () => null
});

const categoryReducer = (state: CategoryData, action: CategoryAction) => {
  switch (action.type) {
    case Category.ACTIVITY:
      return allCategoryData.activity;
    case Category.SCENIC_SPOT:
      return allCategoryData["scenic-spot"];
    case Category.RESTAURANT:
      return allCategoryData.restaurant;
    default:
      return state;
  }
};

const CategoryContextProvider = ({ children }: CategoryContextProviderProps) => {
  const [categoryState, categoryDispatch] = useReducer(categoryReducer, initState);
  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryContextProvider };
