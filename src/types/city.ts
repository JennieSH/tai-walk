enum CityMap {
  "臺北市" = "Taipei",
  "新北市" = "NewTaipei",
  "桃園市" = "Taoyuan",
  "臺中市" = "Taichung",
  "臺南市" = "Tainan",
  "高雄市" = "Kaohsiung",
  "基隆市" = "Keelung",
  "新竹市" = "Hsinchu",
  "新竹縣" = "HsinchuCounty",
  "苗栗縣" = "MiaoliCounty",
  "彰化縣" = "ChanghuaCounty",
  "南投縣" = "NantouCounty",
  "雲林縣" = "YunlinCounty",
  "嘉義縣" = "ChiayiCounty",
  "嘉義市" = "Chiayi",
  "屏東縣" = "PingtungCounty",
  "宜蘭縣" = "YilanCounty",
  "花蓮縣" = "HualienCounty",
  "臺東縣" = "TaitungCounty",
  "金門縣" = "KinmenCounty",
  "澎湖縣" = "PenghuCounty",
  "連江縣" = "LienchiangCounty"
}

enum CityTextMap {
  "Taipei" = "臺北市",
  "NewTaipei" = "新北市",
  "Taoyuan" = "桃園市",
  "Taichung" = "臺中市",
  "Tainan" = "臺南市",
  "Kaohsiung" = "高雄市",
  "Keelung" = "基隆市",
  "Hsinchu" = "新竹市",
  "HsinchuCounty" = "新竹縣",
  "MiaoliCounty" = "苗栗縣",
  "ChanghuaCounty" = "彰化縣",
  "NantouCounty" = "南投縣",
  "YunlinCounty" = "雲林縣",
  "ChiayiCounty" = "嘉義縣",
  "Chiayi" = "嘉義市",
  "PingtungCounty" = "屏東縣",
  "YilanCounty" = "宜蘭縣",
  "HualienCounty" = "花蓮縣",
  "TaitungCounty" = "臺東縣",
  "KinmenCounty" = "金門縣",
  "PenghuCounty" = "澎湖縣",
  "LienchiangCounty" = "連江縣"
}

type City =
  | "Taipei"
  | "NewTaipei"
  | "Taoyuan"
  | "Taichung"
  | "Tainan"
  | "Kaohsiung"
  | "Keelung"
  | "Hsinchu"
  | "HsinchuCounty"
  | "MiaoliCounty"
  | "ChanghuaCounty"
  | "NantouCounty"
  | "YunlinCounty"
  | "ChiayiCounty"
  | "Chiayi"
  | "PingtungCounty"
  | "YilanCounty"
  | "HualienCounty"
  | "TaitungCounty"
  | "KinmenCounty"
  | "PenghuCounty"
  | "LienchiangCounty";

type CityText =
  | "臺北市"
  | "新北市"
  | "桃園市"
  | "臺中市"
  | "臺南市"
  | "高雄市"
  | "基隆市"
  | "新竹市"
  | "新竹縣"
  | "苗栗縣"
  | "彰化縣"
  | "南投縣"
  | "雲林縣"
  | "嘉義縣"
  | "嘉義市"
  | "屏東縣"
  | "宜蘭縣"
  | "花蓮縣"
  | "臺東縣"
  | "金門縣"
  | "澎湖縣"
  | "連江縣";

export type { City, CityText };

export { CityMap, CityTextMap };
