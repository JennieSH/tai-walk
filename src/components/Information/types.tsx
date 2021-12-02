import type { TourismDetailInfo } from "@/types/tourism";
import type { CategoryType } from "@/types/category";

interface InformationProps {
  category: CategoryType;
  informationData: TourismDetailInfo;
}

type InformationKey = keyof Pick<
  TourismDetailInfo,
  | "OpenTime"
  | "StartTime"
  | "EndTime"
  | "Phone"
  | "Organizer"
  | "Address"
  | "WebsiteUrl"
  | "TicketInfo"
  | "Charge"
  | "Remarks"
>;
type RestaurantKey = keyof Pick<TourismDetailInfo, "OpenTime" | "Phone" | "Address" | "WebsiteUrl">;

type ActivityKey = keyof Pick<
  TourismDetailInfo,
  "StartTime" | "EndTime" | "Phone" | "Organizer" | "Address" | "WebsiteUrl" | "Charge" | "Remarks"
>;

type ScenicSpotKey = keyof Pick<
  TourismDetailInfo,
  "OpenTime" | "Phone" | "Address" | "WebsiteUrl" | "TicketInfo" | "Remarks"
>;

interface InfoData {
  key: InformationKey;
  text: RestaurantTextMap | ActivityTextMap | ScenicSpotTextMap;
  value?: string;
  href?: string;
}

enum ScenicSpotTextMap {
  "OpenTime" = "開放時間",
  "Phone" = "服務電話",
  "Address" = "景點地址",
  "WebsiteUrl" = "官方網站",
  "TicketInfo" = "票價資訊",
  "Remarks" = "注意事項"
}

enum ActivityTextMap {
  "StartTime" = "活動時間",
  "EndTime" = "活動時間",
  "Phone" = "聯絡電話",
  "Organizer" = "主辦單位",
  "Address" = "活動地點",
  "WebsiteUrl" = "官方網站",
  "Charge" = "活動費用",
  "Remarks" = "注意事項"
}
enum RestaurantTextMap {
  "OpenTime" = "營業時間",
  "Phone" = "聯絡電話",
  "Address" = "開放時間",
  "WebsiteUrl" = "官方網站"
}

export type { InformationProps, ScenicSpotKey, ActivityKey, RestaurantKey, InfoData };

export { ScenicSpotTextMap, ActivityTextMap, RestaurantTextMap };
