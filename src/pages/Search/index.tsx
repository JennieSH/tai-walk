import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSearch } from "./styles";
import { CategoryContextProvider } from "@/context/categoryContext";
import Input from "@/components/Input";
import SearchBtn from "@/components/SearchBtn";
import Category from "@/components/Category";
import SearchList from "@/components/SearchList";
// import Calendar from "@/components/Calendar";
import Dropdown from "@/components/Dropdown";
import { CityMap, CityTextMap } from "@/types/city";
// import { Category as CategoryEnum } from "@/types/category";
import type { CityText } from "@/types/city";
import type { CategoryType } from "@/types/category";
import type { ScenicSpotCard as ScenicSpotCardType } from "@/types/scenic-spot";
import useQuery from "@/hooks/useQuery";
import tourismApi from "@/api/tourism";
import { cityTextList } from "@/constants/city";
import { categoryPlaceholder } from "@/constants/categoryList";

type SearchParams = {
  category: CategoryType;
};

type QueryCityType = keyof typeof CityTextMap;

const Search = () => {
  const [cityInput, setCityInput] = useState<CityText | null>(null);
  const [keywordInput, setKeywordInput] = useState("");
  const [searchData, setSearchData] = useState<ScenicSpotCardType[] | null>(null);
  const { category } = useParams<SearchParams>();
  const { query, routerPush } = useQuery(["keyword", "city"]);

  const onSearch = () => {
    const target: { [key: string]: string | null } = {};
    target["keyword"] = keywordInput;
    target["city"] = cityInput && CityMap[cityInput];
    routerPush(target);
  };

  const fetchSearchData = async (filter: string[]) => {
    const data = await tourismApi.getScenicSpot<ScenicSpotCardType[]>({
      $select: "ID,Name,Address,Picture,City",
      $filter: filter.join(" and "),
      $orderBy: "UpdateTime desc"
    });
    setSearchData(data);
  };

  useEffect(() => {
    setCityInput(query.city ? CityTextMap[query.city as QueryCityType] : null);
    setKeywordInput(query.keyword || "");
    setSearchData(null);
  }, [category]);

  useEffect(() => {
    const { city, keyword } = query;
    if (city || keyword) {
      const filterConditions = ["Picture/PictureUrl1 ne null and City ne null"];
      if (city) filterConditions.push(`City eq '${CityTextMap[city as QueryCityType]}'`);
      if (keyword) filterConditions.push(`contains(Description, '${keyword}')`);
      fetchSearchData(filterConditions);
    }
  }, [query.city, query.keyword]);

  return (
    <StyledSearch className="container">
      <div className="search-block">
        <Dropdown
          className="search-dropdown"
          list={cityTextList}
          value={cityInput ? cityInput : "全部縣市"}
          setValue={setCityInput}
        />
        {/* {category === CategoryEnum.ACTIVITY && <Calendar className="search-calendar" />} */}
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
