import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

// SETUP COLORS

export const grey = {
  0: "#FFFFFF",
  100: "#ededed",
  200: "#dfdfdf",
  300: "#c8c8c8",
  400: "#b0b0b05",
  500: "#999999",
  600: "#888888",
  700: "#7b7b7b",
  800: "#676767",
  900: "#545454",
  950: "#363636",
};

export const primary = {
  lighter: "#0068D2",
  light: "#0054AA",
  main: "#00468A",
  dark: "#073B73",
  darker: "#04264D",
  contrastText: "#FFFFFF",
};

export const secondary = {
  lighter: "#FFEE46",
  light: "#FFDF1B",
  main: "#FFC107",
  dark: "#E29400",
  darker: "#BB6902",
  contrastText: "#FFFFFF",
};

export const info = {
  lighter: "#45b4c6",
  light: "#2eabbf",
  main: "#17A2B8",
  dark: "#1491a5",
  darker: "#128193",
  contrastText: "#FFFFFF",
};

export const success = {
  lighter: "#52b86a",
  light: "#3daf57",
  main: "#28A745",
  dark: "#24963e",
  darker: "#208537",
  contrastText: "#ffffff",
};

export const warning = {
  lighter: "#0068D2",
  light: "#0054AA",
  main: "#00468A",
  dark: "#073B73",
  darker: "#04264D",
  contrastText: grey[800],
};

export const error = {
  lighter: "#db5858",
  light: "#d74343",
  main: "#D32F2F",
  dark: "#bd2a2a",
  darker: "#a82525",
  contrastText: "#FFFFFF",
};

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode: "light" | "dark") {
  const light = {
    ...base,
    mode: "light",
    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.12),
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === "light" ? light : dark;
}
