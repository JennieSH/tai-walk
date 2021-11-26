import { StyledIcon } from "./style";
import { IconProps } from "./type";

const Icon = ({ name, width, height, color, clickHandler }: IconProps) => {
  return (
    <StyledIcon
      width={width}
      height={height}
      color={color}
      fill="currentColor"
      aria-hidden="true"
      onClick={clickHandler}
    >
      <use href={`#${name}`} />
    </StyledIcon>
  );
};

export default Icon;
