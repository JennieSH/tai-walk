import type { CategoryType } from "@/types/category";
import type {
  ActivityCard as ActivityCardType,
  ScenicSpotCard as ScenicSpotCardType,
  RestaurantCard as RestaurantCardType
} from "@/types/tourism";
import { CityTextMap } from "@/types/city";

type SearchParams = {
  category: CategoryType;
};
type QueryCityType = keyof typeof CityTextMap;
type SearchDataType = ActivityCardType | ScenicSpotCardType | RestaurantCardType;

export type { SearchParams, QueryCityType, SearchDataType };
