import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSearch } from "./styles";
import { CategoryContextProvider } from "@/context/categoryContext";
import Input from "@/components/Input";
import SearchBtn from "@/components/SearchBtn";
import Category from "@/components/Category";
import SearchList from "@/components/SearchList";
import Calendar from "@/components/Calendar";
import Dropdown from "@/components/Dropdown";
import Breadcrumb from "@/components/Breadcrumb";
import useQuery from "@/hooks/useQuery";
import { useTourismApi, SearchType } from "@/hooks/useTourismApi";
import { Category as CategoryEnum } from "@/types/category";
import { City, CityMap, CityTextMap } from "@/types/city";
import type { CityText } from "@/types/city";
import type { CategoryType } from "@/types/category";
import type {
  ActivityCard as ActivityCardType,
  ScenicSpotCard as ScenicSpotCardType,
  RestaurantCard as RestaurantCardType
} from "@/types/tourism";
import { cityTextList } from "@/constants/city";
import { categoryPlaceholder } from "@/constants/categoryList";
import { formatTime } from "@/utils/format";

type SearchParams = {
  category: CategoryType;
};
type QueryCityType = keyof typeof CityTextMap;
type SearchDataType = ActivityCardType | ScenicSpotCardType | RestaurantCardType;

const Search = () => {
  const [cityInput, setCityInput] = useState<CityText | null>(null);
  const [dateInput, setDateInput] = useState<Date | null>(null);
  const [keywordInput, setKeywordInput] = useState("");
  const [searchData, setSearchData] = useState<SearchDataType[] | null>(null);
  const { category } = useParams<SearchParams>();
  const { query, routerPush } = useQuery(["city", "date", "keyword"]);
  const { fetchTourismData } = useTourismApi();

  const onSearch = () => {
    const target: { [key: string]: string | null } = {};
    target["keyword"] = keywordInput;
    target["city"] = cityInput && CityMap[cityInput];
    target["date"] = formatTime(dateInput, "YYYY-MM-DD");
    routerPush(target);
  };

  const fetchSearchData = async (
    city: City | null,
    date: string | null,
    keyword: string | null
  ) => {
    const data = await fetchTourismData<SearchDataType>({
      page: SearchType.MULTIPLE,
      category: category,
      city: city,
      keyword: keyword,
      date: date
    });

    setSearchData(data);
  };

  useEffect(() => {
    setCityInput(query.city ? CityTextMap[query.city as QueryCityType] : null);
    setDateInput(query.date ? new Date(query.date) : null);
    setKeywordInput(query.keyword || "");
    setSearchData(null);
  }, [category]);

  useEffect(() => {
    const { city, date, keyword } = query;
    if (city || date || keyword) {
      fetchSearchData(city as City, date, keyword);
    }
  }, [query.city, query.date, query.keyword]);

  return (
    <StyledSearch className="container">
      <Breadcrumb category={category} />
      <div className="search-block">
        <Dropdown
          className="search-dropdown"
          list={cityTextList}
          value={cityInput ? cityInput : "全部縣市"}
          setValue={setCityInput}
        />
        {category === CategoryEnum.ACTIVITY && (
          <Calendar className="search-calendar" date={dateInput} changeHandler={setDateInput} />
        )}
        <Input
          className="search-input"
          placeholder={categoryPlaceholder[category]}
          value={keywordInput}
          changeHandler={e => setKeywordInput(e.target.value)}
          enterHandler={onSearch}
        />
        <SearchBtn className="search-button" clickHandler={onSearch} />
      </div>

      {searchData ? (
        <SearchList category={category} searchList={searchData} />
      ) : (
        <CategoryContextProvider>
          <Category category={category} />
        </CategoryContextProvider>
      )}
    </StyledSearch>
  );
};

export default Search;
