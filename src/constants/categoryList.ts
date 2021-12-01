import type { CategoryType, CategoryItem, CategoryData } from "@/types/category";
import { Category } from "@/types/category";

const restaurantList: CategoryItem[] = [
  {
    text: "地方特產",
    path: "/src/assets/imgs/restaurant/local-specialty.jpg",
    keyword: "特產"
  },
  {
    text: "中式美食",
    path: "/src/assets/imgs/restaurant/chinese-food.jpg",
    keyword: "中式"
  },
  {
    text: "甜點冰品",
    path: "/src/assets/imgs/restaurant/dessert.jpg",
    keyword: "甜點"
  },
  {
    text: "異國料理",
    path: "/src/assets/imgs/restaurant/exotic-food.jpg",
    keyword: "異國"
  },
  {
    text: "伴手禮",
    path: "/src/assets/imgs/restaurant/souvenir.jpg",
    keyword: "伴手禮"
  },
  {
    text: "素食",
    path: "/src/assets/imgs/restaurant/vegetarian.jpg",
    keyword: "素食"
  }
];

const scenicSpotList: CategoryItem[] = [
  {
    text: "自然風景類",
    path: "/src/assets/imgs/scenic-spot/natural.jpg",
    keyword: "景觀"
  },
  {
    text: "觀光工廠類",
    path: "/src/assets/imgs/scenic-spot/tourist-factory.jpg",
    keyword: "觀光工廠"
  },
  {
    text: "遊憩類",
    path: "/src/assets/imgs/scenic-spot/recreation-area.jpg",
    keyword: "休閒"
  },
  {
    text: "休閒農業類",
    path: "/src/assets/imgs/scenic-spot/agriculture.jpg",
    keyword: "農場"
  },
  {
    text: "生態類",
    path: "/src/assets/imgs/scenic-spot/ecology.jpg",
    keyword: "生態"
  },
  {
    text: "溫泉類",
    path: "/src/assets/imgs/scenic-spot/hot-spring.jpg",
    keyword: "溫泉"
  },
  {
    text: "古蹟類",
    path: "/src/assets/imgs/scenic-spot/historic-site.jpg",
    keyword: "古蹟"
  }
];

const activityList: CategoryItem[] = [
  {
    text: "節慶活動",
    path: "/src/assets/imgs/activity/festival.jpg",
    keyword: "節慶"
  },
  {
    text: "自行車活動",
    path: "/src/assets/imgs/activity/bicycle.jpg",
    keyword: "自行車"
  },
  {
    text: "遊憩活動",
    path: "/src/assets/imgs/activity/recreational-activities.jpg",
    keyword: "休閒"
  },
  {
    text: "產業文化活動",
    path: "/src/assets/imgs/activity/cultural.jpg",
    keyword: "文化"
  },
  {
    text: "年度活動",
    path: "/src/assets/imgs/activity/annual.jpg",
    keyword: "年度"
  },
  {
    text: "四季活動",
    path: "/src/assets/imgs/activity/seasonal.jpg",
    keyword: "季節"
  }
];

const allCategoryData: Record<CategoryType, CategoryData> = {
  [Category.ACTIVITY]: {
    title: "熱門主題",
    list: activityList,
    categoryType: Category.ACTIVITY,
    placeholder: "想找有趣的？請輸入關鍵字"
  },
  [Category.RESTAURANT]: {
    title: "熱門分類",
    list: restaurantList,
    categoryType: Category.RESTAURANT,
    placeholder: "你想吃什麼？請輸入關鍵字"
  },
  [Category.SCENIC_SPOT]: {
    title: "熱門主題",
    list: scenicSpotList,
    categoryType: Category.SCENIC_SPOT,
    placeholder: "你想去哪裡？請輸入關鍵字"
  }
};

const categoryPlaceholder: Record<CategoryType, string> = {
  [Category.ACTIVITY]: "想找有趣的？請輸入關鍵字",
  [Category.RESTAURANT]: "你想吃什麼？請輸入關鍵字",
  [Category.SCENIC_SPOT]: "你想去哪裡？請輸入關鍵字"
};

export { allCategoryData, categoryPlaceholder };
