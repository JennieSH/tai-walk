import type { ScenicSpotCard } from "@/types/scenic-spot";
import type { CategoryType } from "@/types/category";

interface SearchListProps {
  category: CategoryType;
  searchList: ScenicSpotCard[];
}

export type { SearchListProps };
