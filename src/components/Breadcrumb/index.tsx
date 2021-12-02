import { Link } from "react-router-dom";
import { StyledBreadcrumb } from "./styles";
import type { BreadcrumbProps, BreadcrumbType } from "./types";
import type { CityText } from "@/types/city";
import { CityMap } from "@/types/city";
import { CategoryTextMap, Category } from "@/types/category";

const getBreadcrumbList = (
  category: Category,
  city?: CityText,
  title?: string
): BreadcrumbType[] => {
  const list: BreadcrumbType[] = [
    { path: "/", text: "首頁" },
    { path: `/${category}`, text: CategoryTextMap[category] }
  ];

  if (city) list.push({ path: `/${category}?city=${CityMap[city]}`, text: city });
  if (title) list.push({ text: title });

  return list;
};

const Breadcrumb = ({ category, city, title }: BreadcrumbProps) => {
  const breadcrumbList = getBreadcrumbList(category, city, title);
  return (
    <StyledBreadcrumb>
      {breadcrumbList.map((item, index) =>
        item.path && index !== breadcrumbList.length - 1 ? (
          <Link key={`breadcrumb-${item.text}`} to={item.path}>
            {item.text}
          </Link>
        ) : (
          <span key={`breadcrumb-${item.text}`}>{item.text}</span>
        )
      )}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
