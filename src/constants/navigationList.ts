import Routes from "@/types/routes";
import { Category, CategoryTextMap } from "@/types/category";

const navigationList = [
  { path: Routes.SCENIC_SPOT, text: CategoryTextMap[Category.SCENIC_SPOT] },
  { path: Routes.ACTIVITY, text: CategoryTextMap[Category.ACTIVITY] },
  { path: Routes.RESTAURANT, text: CategoryTextMap[Category.RESTAURANT] }
];
export default navigationList;
