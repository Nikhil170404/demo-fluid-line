/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add any custom theme extensions here
      colors: {
        'fluidline-blue': '#1e40af',
        'fluidline-red': '#dc2626',
      }
    },
  },
  plugins: [],
  // Ensure proper CSS generation for v4
  corePlugins: {
    preflight: true,
  }
}