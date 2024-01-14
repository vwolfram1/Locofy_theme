/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#cecece",
        darkslategray: "#444",
        mediumslateblue: "#7b61ff",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.3)",
          "200": "rgba(255, 255, 255, 0.9)",
          "300": "rgba(65, 0, 22, 0.8)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.75)",
          "600": "rgba(0, 0, 0, 0.1)",
        },
        darkslateblue: "#1e2049",
      },
      spacing: {},
      fontFamily: {
        "din-mediumitalic": "DIN-MediumItalic",
        "din-bolditalic": "DIN-BoldItalic",
        roboto: "Roboto",
        "din-bolditalicalt": "DIN-BoldItalicAlt",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
