import type { ActivityTourismInfo } from "./ptx";

type ActivityCard = Required<
  Pick<ActivityTourismInfo, "City" | "Picture" | "StartTime" | "Name" | "EndTime" | "ID">
>;

export type { ActivityCard };
