import { useState } from "react";
import { StyledBanner } from "./styles";
import Icon from "@/components/Icon";
import Dropdown from "@/components/Dropdown";
import SearchBtn from "@/components/SearchBtn";
import Input from "@/components/Input";
import navigationList from "@/constants/navigationList";

const categoryList = navigationList.map(item => item.text);

const Banner = () => {
  const [category, setCategory] = useState(categoryList[0]);
  const [keyword, setKeyword] = useState("");

  return (
    <StyledBanner>
      <div>
        <h1>
          探索<span className="underline">台灣之美</span>
        </h1>
        <h2>讓我們更親近這片土地</h2>
        <h3>
          <Icon name="spot" width="24px" />
          <span>台灣旅遊景點導覽</span>
          <span>Taiwan Travel Guide</span>
        </h3>
      </div>

      <div className="search-block">
        <Dropdown list={categoryList} value={category} setValue={setCategory} />
        <Input
          className="search-bar"
          placeholder="你想去哪裡？請輸入關鍵字"
          value={keyword}
          changeHandler={e => setKeyword(e.target.value)}
        />
        <SearchBtn />
      </div>
    </StyledBanner>
  );
};

export default Banner;
