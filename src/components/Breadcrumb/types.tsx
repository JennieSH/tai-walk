import { Category } from "@/types/category";
import { CityText } from "@/types/city";

interface BreadcrumbProps {
  category: Category;
  city?: CityText;
  title?: string;
}

interface BreadcrumbType {
  text: string;
  path?: string;
}

export type { BreadcrumbProps, BreadcrumbType };
