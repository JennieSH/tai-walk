import { StyledSearchBtn } from "./styles";
import { SearchBtnProps } from "./types";
import Icon from "@/components/Icon";

const SearchBtn = ({ className, clickHandler }: SearchBtnProps) => {
  return (
    <StyledSearchBtn className={className} onClick={clickHandler}>
      <Icon name="search" />
      <span>搜尋</span>
    </StyledSearchBtn>
  );
};

export default SearchBtn;
