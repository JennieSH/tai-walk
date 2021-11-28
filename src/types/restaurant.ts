import type { RestaurantTourismInfo } from "./ptx";

type RestaurantCard = Required<Pick<RestaurantTourismInfo, "ID" | "Name" | "City" | "Picture">>;

export type { RestaurantCard };
