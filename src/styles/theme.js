import { glassEffect } from "./glass";

export default {
  COLORS: {
    BACKGROUND_900: "#0c0c0e",
    BACKGROUND_800: "#18181c",
    BACKGROUND_700: "#27272f",
    TEXT_COLOR_01: "#f4f4f6",
    TEXT_COLOR_02: "#b8b8c2",
    TEXT_MUTED: "#a2a2ae",
    WHITE: "#ffffff",
    GRAY_300: "#666360",
    GRAY_100: "#999591",
    ACCENT: "#3B9EFF",
    ACCENT_HOVER: "#70B8FF",
    ACCENT_GRADIENT_START: "#8DD8FF",
    ACCENT_GRADIENT_END: "#1675E8",
    ACCENT_RGB: "59, 158, 255",
    TEXT_ON_ACCENT: "#061526",
    BLUE_GLOW: "#1675E8",
    ACCENT_EMERALD: "#34d399",
    BORDER_LIGHT: "rgba(255,255,255,.12)",
    BORDER_FOCUS: "#3B9EFF",
    SURFACE: "rgba(24,24,30,.72)"
  },
  FONTS: {
    sans: "'Poppins', sans-serif",
    serif: "'Instrument Serif', serif",
    mono: "'Sometype Mono', monospace"
  },
  SPACE: {
    small: ".5rem",
    medium: "1rem",
    large: "1.5rem",
    section: "3rem"
  },
  RADII: {
    card: "24px",
    control: "12px"
  },
  BREAKPOINTS: {
    mobile: "600px",
    tablet: "900px"
  },
  MIXINS: {
    glass: glassEffect
  }
};
