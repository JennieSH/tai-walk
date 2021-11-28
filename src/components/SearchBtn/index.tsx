import { StyledSearchBtn } from "./styles";
import { SearchBtnProps } from "./types";
import Icon from "@/components/Icon";

const SearchBtn = ({ clickHandler }: SearchBtnProps) => {
  return (
    <StyledSearchBtn onClick={clickHandler}>
      <Icon name="search" />
      <span>搜尋</span>
    </StyledSearchBtn>
  );
};

export default SearchBtn;
