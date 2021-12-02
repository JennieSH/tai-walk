import type { CategoryType } from "@/types/category";
import type { TourismDetailInfo } from "@/types/tourism";

type SearchParams = {
  category: CategoryType;
  id: string;
};

type ClassKey = keyof Pick<TourismDetailInfo, "Class" | "Class1" | "Class2" | "Class3">;

enum RecommendTextMap {
  "activity" = "還有這些不能錯過活動",
  "scenic-spot" = "還有這些不能錯過的景點",
  "restaurant" = "還有這些不能錯過的美食"
}

enum RecommendLinkTextMap {
  "activity" = "活動",
  "scenic-spot" = "景點",
  "restaurant" = "美食"
}

export type { SearchParams, ClassKey };
export { RecommendTextMap, RecommendLinkTextMap };
