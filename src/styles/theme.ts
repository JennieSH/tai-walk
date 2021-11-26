const theme = {
  color: {
    primary: "#7F977B",
    secondary: "#6E7D60",
    border: "#E5E5E5",
    active: "#65895F",
    focus: "#E0DA48",
    white: "#ffffff",
    transparent: "transparent",
    "gary-50": "#F9F9F9",
    "gary-100": "#9E9E9E",
    "gary-200": "#737373",
    "gary-300": "#646464",
    "gary-400": "#1E1E1E",
    "gary-500": "#2F2F2F"
  },
  fontSize: {
    // 12px
    xs: "0.75rem",
    // 14px
    sm: "0.875rem",
    // 16px
    base: "1rem",
    // 18px
    lg: "1.125rem",
    // 22px
    xl: "1.375rem",
    // 24px
    "2xl": "1.5rem",
    // 28px
    "3xl": "1.75rem",
    // 32px
    "4xl": "2rem",
    // 36px
    "5xl": "2.25rem",
    // 40px
    "6xl": "2.5rem"
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  borderRadius: {
    xs: "0.125rem",
    sm: "0.25rem",
    default: "0.3125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  fontFamily: {
    "noto-sans": "Noto Sans TC"
  }
};

type ThemeType = typeof theme;

export { theme };

export type { ThemeType };
