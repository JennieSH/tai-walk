import { useState } from "react";
import { StyledDropdown } from "./styles";
import { DropdownProps } from "./types";
import Icon from "@/components/Icon";

const Dropdown = ({ list, value, setValue }: DropdownProps) => {
  const [isDropdownListShow, toggleDropdownList] = useState(false);
  const menuHandler = (val: string) => {
    setValue(val);
    toggleDropdownList(!isDropdownListShow);
  };

  return (
    <StyledDropdown>
      <button onClick={() => toggleDropdownList(!isDropdownListShow)}>{value}</button>
      <Icon
        className="arrow"
        name={isDropdownListShow ? "arrow-up" : "arrow-down"}
        clickHandler={() => toggleDropdownList(!isDropdownListShow)}
      />
      {isDropdownListShow && (
        <ul>
          {list.map(item => (
            <li key={item} onClick={() => menuHandler(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
