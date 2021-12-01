import type { ScenicSpotCard } from "@/types/scenic-spot";
import type { RestaurantCard } from "@/types/restaurant";
import type { CategoryType } from "@/types/category";

interface CardProps {
  card: ScenicSpotCard | RestaurantCard;
  category: CategoryType;
  className?: string;
}

export type { CardProps };
