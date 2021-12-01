// import { useState } from "react";
import { StyledSearchList } from "./styles";
import { SearchListProps } from "./types";
// import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import Icon from "@/components/Icon";

const SearchList = ({ searchList, category }: SearchListProps) => {
  // const [currentPage, setCurrentPage] = useState(1);

  return (
    <StyledSearchList>
      <div className="search-result">
        <h2>搜尋結果</h2>
        <p>
          共有
          <span>{searchList.length}</span>筆
        </p>
      </div>

      <div className="search-list">
        {searchList.length === 0 ? (
          <div className="search-empty">
            <Icon name="empty" width="80px" height="80px" />
            <p>
              <span>目前查無資料</span>
              <span>請重新搜尋</span>
            </p>
          </div>
        ) : (
          searchList
            .slice(0, 8)
            .map(item => (
              <Card className="search-card" key={item.ID} card={item} category={category} />
            ))
        )}
      </div>

      {/* {searchList.length > 0 && (
        <Pagination
          currentPage={currentPage}
          total={searchList.length}
          clickHandler={setCurrentPage}
        />
      )} */}
    </StyledSearchList>
  );
};

export default SearchList;