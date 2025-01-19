/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,mdx}",
    "./components/**/*.{js,ts,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx,html}",
  ],
  darkMode: "class", // Use "class" without an array for dark mode configuration
  theme: {
    fontFamily: {
      cairo_new: ["Cairo"],
    },
    extend: {
      backgroundImage: {
        bg_lg: "url('/public/cashai.png')",
        bg_sm: "url('/mycashaismall.png')",
        mainbg: "url('/heronew.png')",
        solutions_bg: "url('/solutions_bg.png')",
      },
      screens: {
        xxs: "320px",
        xs: "450px",
      },
      lineHeight: {
        "40": "100px",
      },
      spacing: {
        "85": "23rem",
        "105": "6.563rem",
        "90": "4.5rem",
      },
      fontSize: {
        "2.5xs": "0.783rem",
      },
      colors: {
        green: "#6EC531",
        primary: {
          blue: "#232773",
          green: "#6EC531",
          grey: {
            brands: "#F9F9F9",
            grey: "#393939",
            softgrey: "#f5f6ff",
            carousel: "#F3F4F6",
            softer: "#fafafa",
            arrow: "#D9D9D9",
            form: "#979797",
            package: "#636363",
          },
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        grident: {
          darkblue: "#00084D",
          lightblue: "#1D63ED",
        },
      },
      leading: {
        "20": "780px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Ensure the plugin is installed
};

export default tailwindConfig;
