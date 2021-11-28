interface IconProps {
  name: string;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  clickHandler?: () => void;
}

type StyledIconProps = Pick<IconProps, "width" | "height" | "color">;

export type { IconProps, StyledIconProps };
