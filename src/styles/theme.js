import { glassEffect } from "./glass";

export default {
  COLORS: {
    BACKGROUND_900: "#0c0c0e",
    BACKGROUND_800: "#18181c",
    BACKGROUND_700: "#27272f",

    TEXT_COLOR_01: "#f4f4f6",
    TEXT_COLOR_02: "rgba(244, 244, 246, 0.68)",
    TEXT_MUTED: "rgba(244, 244, 246, 0.45)",

    WHITE: "#ffffff",
    GRAY_300: "#666360",
    GRAY_100: "#999591",
    PURPLE: "#5900d5",

    ORANGE: "#ff7a1a",
    BLUE_GLOW: "#3a4a7a",
    ACCENT_EMERALD: "#10b981",
    BORDER_LIGHT: "rgba(255, 255, 255, 0.14)",
    BORDER_FOCUS: "rgba(255, 122, 26, 0.45)"
  },
  FONTS: {
    sans: "'Poppins', sans-serif",
    serif: "'Instrument Serif', serif",
    mono: "'Sometype Mono', monospace"
  },
  MIXINS: {
    glass: glassEffect
  }
};
