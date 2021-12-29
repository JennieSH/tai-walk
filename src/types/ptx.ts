//  MOTC Transport API Response Type，資料源自交通部運輸資料流通服務平台 (TDX)

interface TourismPicture {
  // 照片連結網址1
  PictureUrl1?: string;
  // 照片說明1
  PictureDescription1?: string;
  // 照片連結網址2
  PictureUrl2?: string;
  // 照片說明2
  PictureDescription2?: string;
  // 照片連結網址3
  PictureUrl3?: string;
  // 照片說明3
  PictureDescription3?: string;
}

interface PointType {
  // 位置經度(WGS84)
  PositionLon?: number;
  // 位置緯度(WGS84)
  PositionLat?: number;
  // 地理空間編碼
  GeoHash?: string;
}

interface ScenicSpotTourismInfo {
  // 景點代碼
  ScenicSpotID: string;
  //  景點名稱
  ScenicSpotName?: string;
  //  景點特色詳細說明
  DescriptionDetail?: string;
  //  景點特色精簡說明
  Description?: string;
  //  景點服務電話
  Phone?: string;
  //  景點地址
  Address?: string;
  //  郵遞區號
  ZipCode?: string;
  //  交通資訊
  TravelInfo?: string;
  //  開放時間
  OpenTime?: string;
  //  景點照片
  Picture?: TourismPicture;
  //  景點地圖/簡圖介紹網址
  MapUrl?: string;
  //  景點位置
  Position?: PointType;
  //  景點分類1
  Class1?: string;
  //  景點分類2
  Class2?: string;
  // 景點分類3
  Class3?: string;
  // 古蹟分級
  Level?: string;
  // 景點官方網站網址
  WebsiteUrl?: string;
  // 停車資訊
  ParkingInfo?: string;
  // 景點主要停車場位置
  ParkingPosition?: PointType;
  //  票價資訊
  TicketInfo?: string;
  //  警告及注意事項
  Remarks?: string;
  //  常用搜尋關鍵字
  Keyword?: string;
  //  所屬縣市
  City?: string;
  //  觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  SrcUpdateTime: Date;
  // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: Date;
}

interface RestaurantTourismInfo {
  // 餐飲店家代碼
  RestaurantID: string;
  // 餐飲店家名稱
  RestaurantName?: string;
  // 店家簡述
  Description?: string;
  // 店家地址
  Address?: string;
  // 郵遞區號
  ZipCode?: string;
  // 預約電話
  Phone?: string;
  // 營業時間
  OpenTime?: string;
  // 店家網站網址
  WebsiteUrl?: string;
  // 店家照片
  Picture?: TourismPicture;
  // 店家位置
  Position?: PointType;
  // 店家分類
  Class?: string;
  // 店家地圖/簡圖介紹網址
  MapUrl?: string;
  // 停車資訊
  ParkingInfo?: string;
  // 所屬縣市
  City?: string;
  //  觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  SrcUpdateTime: string;
  // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string;
}

interface ActivityTourismInfo {
  // 活動訊息代碼
  ActivityID: string;
  // 活動名稱
  ActivityName?: string;
  // 活動簡述
  Description?: string;
  // 活動參與對象
  Particpation?: string;
  // 主要活動地點名稱
  Location?: string;
  // 主要活動地點地址
  Address?: string;
  // 活動聯絡電話
  Phone?: string;
  // 活動主辦單位
  Organizer?: string;
  // 活動開始時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  StartTime?: string;
  // 活動結束時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  EndTime?: string;
  // 週期性活動執行時間
  Cycle?: string;
  // 非週期性活動執行時間
  NonCycle?: string;
  // 活動網址
  WebsiteUrl?: string;
  // 活動照片
  Picture?: TourismPicture;
  // 活動位置
  Position?: PointType;
  // 活動分類1
  Class1?: string;
  // 活動分類2
  Class2?: string;
  // 活動地圖/簡圖連結網址
  MapUrl?: string;
  //  交通資訊
  TravelInfo?: string;
  // 停車資訊
  ParkingInfo?: string;
  // 費用標示
  Charge?: string;
  // 備註(其他活動相關事項)
  Remarks?: string;
  // 所屬縣市
  City?: string;
  // 觀光局檔案更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  SrcUpdateTime: string;
  // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
  UpdateTime: string;
}

export type { ScenicSpotTourismInfo, RestaurantTourismInfo, ActivityTourismInfo, PointType };
