/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00ade9',
        'custom-blue-shade1': '#006BA3',
        'custom-blue-shade2': '#102558',
        'custom-blue-shade3': '#00ade9',
        'custom-gray-shade1': '#999999',
        'custom-gray-shade2': '#8892ac',
        'custom-yellow-shade1': '#ffc100',
      },
      backgroundImage: {
        'visa': 'url(../public/Home-Desktop/logo_visa.svg)',
        'mastercard': 'url(../public/Home-Desktop/symbol_maestro.svg)',
        'paypal': 'url(../public/Home-Desktop/logo_paypal.svg)',
        'stripe': 'url(../public/Home-Desktop/logo_stripe.svg)'
      }
    }
  },
  plugins: [],
}
