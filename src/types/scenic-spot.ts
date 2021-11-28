import type { ScenicSpotTourismInfo } from "./ptx";

type ScenicSpotCard = Required<Pick<ScenicSpotTourismInfo, "ID" | "Name" | "City" | "Picture">>;

export type { ScenicSpotCard };
