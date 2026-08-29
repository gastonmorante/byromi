/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary": "#3f0689",
        "secondary-fixed-dim": "#ffb59e",
        "surface-dim": "#151312",
        "secondary-fixed": "#ffdbd0",
        "secondary-container": "#7c2d12",
        "primary": "#ffb77d",
        "on-primary-fixed-variant": "#6e3900",
        "surface-container-lowest": "#100e0d",
        "on-secondary-container": "#ff9b7c",
        "on-secondary-fixed-variant": "#7c2d12",
        "surface-container-high": "#2c2928",
        "on-tertiary-fixed-variant": "#572ba0",
        "outline-variant": "#554336",
        "inverse-primary": "#904d00",
        "on-surface": "#e8e1df",
        "on-primary": "#4d2600",
        "on-error-container": "#ffdad6",
        "secondary": "#ffb59e",
        "on-primary-fixed": "#2f1500",
        "on-primary-container": "#432100",
        "surface": "#151312",
        "on-tertiary-fixed": "#260059",
        "tertiary-fixed-dim": "#d3bbff",
        "on-secondary": "#5e1700",
        "error": "#ffb4ab",
        "on-tertiary-container": "#37007c",
        "primary-fixed-dim": "#ffb77d",
        "inverse-surface": "#e8e1df",
        "on-error": "#690005",
        "primary-fixed": "#ffdcc3",
        "on-surface-variant": "#dbc2b0",
        "tertiary-fixed": "#ebdcff",
        "surface-variant": "#373433",
        "inverse-on-surface": "#33302e",
        "primary-container": "#d97707",
        "on-background": "#e8e1df",
        "tertiary-container": "#a37af1",
        "surface-bright": "#3c3837",
        "surface-container": "#221f1e",
        "outline": "#a38c7c",
        "background": "#151312",
        "surface-tint": "#ffb77d",
        "surface-container-low": "#1d1b1a",
        "error-container": "#93000a",
        "surface-container-highest": "#373433",
        "on-secondary-fixed": "#3a0b00",
        "tertiary": "#d3bbff"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "0.75rem",
        "pill": "9999px"
      },
      spacing: {
        "gutter": "16px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "container-padding": "24px",
        "unit": "8px",
        "stack-lg": "32px"
      },
      fontFamily: {
        "headline-md": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "label-sm": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"]
      }
    }
  },
  plugins: []
};
