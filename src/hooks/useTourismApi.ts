import { useContext } from "react";
import { LoadingContext, Loading_Action_Type } from "@/context/loadingContext";
import { Category } from "@/types/category";
import type { City } from "@/types/city";
import type { ApiCityParameter, ApiParameter } from "@/api/types";
import tourismApi from "@/api/tourism";

enum SearchType {
  BASE = "Base",
  MULTIPLE = "Multiple",
  DETAIL = "Detail"
}
type CategoryParameter = Record<Category, ApiParameter>;
type PageComponentParams = Record<SearchType, CategoryParameter>;

type TourismPayload = {
  page: SearchType;
  category: Category;
  city?: City | null;
  keyword?: string | null;
  date?: string | null;
  position?: string | null;
  id?: string;
};

const baseSearchCount = 4;
const detailSearchCount = 1;
const baseFilter = "Picture/PictureUrl1 ne null and City ne null";
const baseOrderBy = "UpdateTime desc";
const baseSelect = "ID,Name,Address,Picture,City";

const apiParams: PageComponentParams = {
  [SearchType.BASE]: {
    [Category.ACTIVITY]: {
      $top: baseSearchCount.toString(),
      $select: "ID,Name,City,Picture",
      $filter: baseFilter,
      $orderBy: "StartTime desc"
    },
    [Category.SCENIC_SPOT]: {
      $top: baseSearchCount.toString(),
      $select: baseSelect,
      $filter: baseFilter,
      $orderBy: `${baseOrderBy},OpenTime asc`
    },
    [Category.RESTAURANT]: {
      $top: baseSearchCount.toString(),
      $select: baseSelect,
      $filter: baseFilter,
      $orderBy: `${baseOrderBy},OpenTime desc`
    }
  },

  [SearchType.MULTIPLE]: {
    [Category.ACTIVITY]: {
      $select: "ID,Name,City,Picture",
      $filter: baseFilter,
      $orderBy: baseOrderBy
    },
    [Category.SCENIC_SPOT]: {
      $select: baseSelect,
      $filter: baseFilter,
      $orderBy: `${baseOrderBy},OpenTime asc`
    },
    [Category.RESTAURANT]: {
      $select: baseSelect,
      $filter: baseFilter,
      $orderBy: "OpenTime asc"
    }
  },
  [SearchType.DETAIL]: {
    [Category.ACTIVITY]: {
      $top: detailSearchCount.toString(),
      $filter: baseFilter
    },
    [Category.SCENIC_SPOT]: {
      $top: detailSearchCount.toString(),
      $filter: baseFilter
    },
    [Category.RESTAURANT]: {
      $top: detailSearchCount.toString(),
      $filter: baseFilter
    }
  }
};

const getTargetApi = (category: Category, city?: City | null) => {
  switch (category) {
    case Category.SCENIC_SPOT:
      return city ? tourismApi.getScenicSpotByCity : tourismApi.getScenicSpot;

    case Category.RESTAURANT:
      return city ? tourismApi.getRestaurantByCity : tourismApi.getRestaurant;

    case Category.ACTIVITY:
      return city ? tourismApi.getActivityByCity : tourismApi.getActivity;
    default:
      throw Error("The category is invalid! Please check again.");
  }
};

const getTargetParams = (payload: TourismPayload): ApiParameter | ApiCityParameter => {
  const { page, category, city, keyword, date, id, position } = payload;
  let targetParams: ApiParameter | ApiCityParameter = apiParams[page][category];
  const filterConditions: string[] = [baseFilter];

  if (city) targetParams = { ...targetParams, city };
  if (keyword)
    filterConditions.push(`(contains(Description, '${keyword}') or contains(Name,'${keyword}'))`);

  if (date && category === Category.ACTIVITY)
    filterConditions.push(`(date(StartTime) le ${date} and date(EndTime) ge ${date})`);

  if (position) targetParams = { ...targetParams, $spatialFilter: `nearby(${position})` };

  if (id) filterConditions.push(`ID eq '${id}'`);

  targetParams = {
    ...targetParams,
    $filter: filterConditions.join(" and ")
  };

  return targetParams;
};

const useTourismApi = () => {
  const { loadingDispatch } = useContext(LoadingContext);

  const fetchTourismData = async <T>(payload: TourismPayload): Promise<T[]> => {
    const targetApi = getTargetApi(payload.category, payload.city);
    const targetParams = getTargetParams(payload);

    loadingDispatch({ type: Loading_Action_Type.ON });
    const data = await targetApi<T[]>(targetParams);
    loadingDispatch({ type: Loading_Action_Type.OFF });
    return data;
  };

  return { fetchTourismData };
};

export { SearchType, useTourismApi };
