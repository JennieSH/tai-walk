import { StyledIcon } from "./styles";
import { IconProps } from "./types";

const Icon = ({ name, width, height, color, className, clickHandler }: IconProps) => {
  return (
    <StyledIcon
      className={className}
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
