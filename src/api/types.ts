import type { City } from "@/types/city";

enum Tourism {
  // 所有觀光景點資料
  SCENIC_SPOT = "/ScenicSpot",
  // 所有觀光餐飲
  RESTAURANT = "/Restaurant",
  // 所有觀光活動
  ACTIVITY = "/Activity"
}

interface ApiParameter {
  // 挑選
  $select?: string;
  // 過濾
  $filter?: string;
  // 排序
  $orderBy?: string;
  // 取前幾筆
  $top?: string;
  // 空間過濾，語法為nearby({Lat},{Lon},{DistanceInMeters})，例如nearby(25.047675, 121.517055, 100)
  $spatialFilter?: string;
  // 跳過前幾筆
  $skip?: string;
}

interface ApiCityParameter extends ApiParameter {
  city: City;
}

export { Tourism };
export type { ApiParameter, ApiCityParameter };
