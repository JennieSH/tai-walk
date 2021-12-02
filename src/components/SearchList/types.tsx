import type { ScenicSpotCard } from "@/types/tourism";
import type { CategoryType } from "@/types/category";

interface SearchListProps {
  category: CategoryType;
  searchList: ScenicSpotCard[];
}

export type { SearchListProps };
