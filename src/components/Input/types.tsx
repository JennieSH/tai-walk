type InputType = "number" | "text";

interface InputProps {
  type?: InputType;
  value?: string;
  placeholder?: string;
  className?: string;
  backgroundColor?: string;
  clickHandler?: () => void;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type StyledInputProps = Pick<InputProps, "backgroundColor">;

export type { InputProps, StyledInputProps };
