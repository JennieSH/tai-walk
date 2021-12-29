import type { CategoryType } from "@/types/category";
import type { SearchDataType } from "@/pages/Search/types";

interface SearchListProps {
  category: CategoryType;
  searchList: SearchDataType[];
}

export type { SearchListProps };
