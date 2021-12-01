import type { ActivityCard } from "@/types/activity";
import type { CategoryType } from "@/types/category";

interface ActivityCardProps {
  category: CategoryType;
  activityCard: ActivityCard;
}

export type { ActivityCardProps };
