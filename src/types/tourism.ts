import type { ScenicSpotTourismInfo, RestaurantTourismInfo, ActivityTourismInfo } from "./ptx";

type ScenicSpotCard = Required<Pick<ScenicSpotTourismInfo, "ID" | "Name" | "City" | "Picture">>;

type RestaurantCard = Required<Pick<RestaurantTourismInfo, "ID" | "Name" | "City" | "Picture">>;

type ActivityCard = Required<
  Pick<ActivityTourismInfo, "City" | "Picture" | "StartTime" | "Name" | "EndTime" | "ID">
>;

type TourismDetailInfo = ScenicSpotTourismInfo & RestaurantTourismInfo & ActivityTourismInfo;

type TourismBaseCard = ScenicSpotCard | RestaurantCard | ActivityCard;

export type { ScenicSpotCard, RestaurantCard, ActivityCard, TourismDetailInfo, TourismBaseCard };
