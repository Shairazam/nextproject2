/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': 'rgba(36, 91, 134, 0.4) 5px 5px, rgba(36, 91, 134, 0.3) 10px 10px, rgba(36, 91, 134, 0.2) 15px 15px, rgba(36, 91, 134, 0.1) 20px 20px, rgba(36, 91, 134, 0.05) 25px 25px',
        'custom-shadow-pink': 'rgba(157, 63, 109, 0.4) 5px 5px, rgba(157, 63, 109, 0.3) 10px 10px, rgba(157, 63, 109, 0.2) 15px 15px, rgba(157, 63, 109, 0.1) 20px 20px, rgba(157, 63, 109, 0.05) 25px 25px',
        'custom-shadow-purple': 'rgba(77, 60, 112, 0.4) 5px 5px, rgba(77, 60, 112, 0.3) 10px 10px, rgba(77, 60, 112, 0.2) 15px 15px, rgba(77, 60, 112, 0.1) 20px 20px, rgba(77, 60, 112, 0.05) 25px 25px',
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}