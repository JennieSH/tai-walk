import { useState } from "react";
import { StyledDropdown } from "./styles";
import { DropdownProps } from "./types";
import Icon from "@/components/Icon";

const Dropdown = ({ list, value, className, setValue }: DropdownProps) => {
  const [isDropdownListShow, toggleDropdownList] = useState(false);
  const menuHandler = (val: string) => {
    setValue(val);
    toggleDropdownList(!isDropdownListShow);
  };

  return (
    <StyledDropdown className={className}>
      <button onClick={() => toggleDropdownList(!isDropdownListShow)}>
        {value}
        <Icon
          width="20px"
          height="20px"
          name={isDropdownListShow ? "arrow-up" : "arrow-down"}
          clickHandler={() => toggleDropdownList(!isDropdownListShow)}
        />
      </button>

      {isDropdownListShow && (
        <ul>
          {list.map(item => (
            <li key={`dropdown-${item}`} onClick={() => menuHandler(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
