import type { ScenicSpotTourismInfo, RestaurantTourismInfo, ActivityTourismInfo } from "./ptx";

type CardBasic = {
  name: string;
  id: string;
};

type ScenicSpotCard = Required<
  Pick<ScenicSpotTourismInfo, "ScenicSpotID" | "ScenicSpotName" | "City" | "Picture"> & CardBasic
>;

type RestaurantCard = Required<
  Pick<RestaurantTourismInfo, "RestaurantID" | "RestaurantName" | "City" | "Picture"> & CardBasic
>;

type ActivityCard = Required<
  Pick<
    ActivityTourismInfo,
    "City" | "Picture" | "StartTime" | "ActivityName" | "EndTime" | "ActivityID"
  > &
    CardBasic
>;

type TourismDetailInfo = ScenicSpotTourismInfo &
  RestaurantTourismInfo &
  ActivityTourismInfo &
  CardBasic;

type TourismBaseCard = (ScenicSpotCard | RestaurantCard | ActivityCard) & CardBasic;

export type { ScenicSpotCard, RestaurantCard, ActivityCard, TourismDetailInfo, TourismBaseCard };
