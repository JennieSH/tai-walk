import type { TourismBaseCard } from "@/types/tourism";

import type { CategoryType } from "@/types/category";

interface CardProps {
  card: TourismBaseCard;
  category: CategoryType;
  className?: string;
}

export type { CardProps };
