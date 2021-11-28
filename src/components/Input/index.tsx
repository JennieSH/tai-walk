import { StyledInput } from "./styles";
import { InputProps } from "./types";

const Input = ({
  type = "text",
  value = "",
  placeholder,
  className,
  backgroundColor,
  clickHandler,
  changeHandler
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      backgroundColor={backgroundColor}
      onClick={clickHandler}
      onChange={changeHandler}
    />
  );
};

export default Input;
