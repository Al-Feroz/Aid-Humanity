const { basePath } = require("./next.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-shade": "0px 0px 15px rgb(09,09,09,0.3)",
        "custom-shade2": "0px 5px 40px #0000001A",
      },
      colors: {
        "custom-blue-shade1": "#006BA3",
        "custom-blue-shade2": "#102558",
        "custom-blue-shade3": "#00ade9",
        "custom-gray-shade1": "#999999",
        "custom-gray-shade2": "#8892ac",
        "custom-gray-shade3": "#7C7C7C",
        "custom-gray-shade4": "#BDBDBD",
        "custom-gray-shade5": "#444445",
        "custom-gray-shade6": "#E6E6E6",
        "custom-green-shade1": "#00c98b",
        "custom-white-shade1": "#F1F1F1",
        "custom-white-shade2": "#ffffff",
        "custom-white-shade3": "#f5f6f7",
        "custom-yellow-shade1": "#ffc100",
      },
      backgroundImage: {
        visa: "url(../public/Home-Desktop/logo_visa.svg)",
        mastercard: "url(../public/Home-Desktop/symbol_maestro.svg)",
        paypal: "url(../public/Home-Desktop/logo_paypal.svg)",
        stripe: "url(../public/Home-Desktop/logo_stripe.svg)",
      },
    },
  },
  plugins: [],
};
