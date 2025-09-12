/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Playfair Display",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // New Brand Palette
        "brand-honeydew": "#F1FAEE",
        "brand-yellow": "#ECB858",
        "brand-cordovan": "#341867",
        "brand-oxford": "#130B34",
        // Legacy colors
        "primary-text": "#2C3E50",
        "background-main": "#F8F5F2",
        "background-card": "#FFFFFF",
        "accent-primary": "#E87A5D",
        "accent-secondary": "#A9A9A9",
        "highlight-calm": "#77ACA2",
        "prussian-blue": "#0C2D48",
        timberwolf: "#D9CDC2",
        linen: "#FFF6EC",
        buff: "#DBAD75",
        "persian-orange": "#D08968",
        "rosy-brown": "#B88C84",
        "moss-green": "#8A9A5B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
