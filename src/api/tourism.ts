import { apiGet } from "./axios";
import { Tourism } from "./types";
import type { ApiParameter, ApiCityParameter } from "./types";

const tourismApi = {
  // 景點
  getScenicSpot<T>(params: ApiParameter): Promise<T> {
    return apiGet<T>(Tourism.SCENIC_SPOT, params);
  },
  getScenicSpotByCity<T>(params: ApiCityParameter): Promise<T> {
    const { city, ...apiParams } = params;
    const url = `${Tourism.SCENIC_SPOT}/${city}`;
    return apiGet<T>(url, apiParams);
  },

  // 餐廳
  getRestaurant<T>(params: ApiParameter): Promise<T> {
    return apiGet<T>(Tourism.RESTAURANT, params);
  },
  getRestaurantByCity<T>(params: ApiCityParameter): Promise<T> {
    const { city, ...apiParams } = params;
    const url = `${Tourism.RESTAURANT}/${city}`;
    return apiGet<T>(url, apiParams);
  },

  // 活動
  getActivity<T>(params: ApiParameter): Promise<T> {
    return apiGet<T>(Tourism.ACTIVITY, params);
  },
  getActivityByCity<T>(params: ApiCityParameter): Promise<T> {
    const { city, ...apiParams } = params;
    const url = `${Tourism.ACTIVITY}/${params.city}`;
    return apiGet<T>(url, apiParams);
  }
};

export default tourismApi;
