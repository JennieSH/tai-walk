import { StyledInput } from "./styles";
import { InputProps } from "./types";

const Input = ({
  type = "text",
  value = "",
  placeholder,
  className,
  backgroundColor,
  clickHandler,
  changeHandler,
  enterHandler
}: InputProps) => {
  const keydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      enterHandler && enterHandler(e);
    }
  };

  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      backgroundColor={backgroundColor}
      onClick={clickHandler}
      onChange={changeHandler}
      onKeyDown={keydownHandler}
    />
  );
};

export default Input;
