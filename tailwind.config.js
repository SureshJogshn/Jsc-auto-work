/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'xs': '480px',  // Extra small screens (mobile devices)
        'sm': '640px',  // Small screens (tablets)
        'md': '768px',  // Medium screens (small laptops)
        'lg': '1024px', // Large screens (laptops and desktops)
        'xl': '1280px', // Extra large screens (large desktops)
        '2xl': '1536px', // 2x large screens (large monitors)
      },
      boxShadow: {
        'text-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'text-lg': '3px 3px 6px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        carMove: 'carMove 2s ease-in-out infinite',
        fadeInOut: 'fadeInOut 8s ease-in-out infinite',
      },
      keyframes: {
        carMove: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

