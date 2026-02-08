/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'PingFang SC',
          'Microsoft YaHei',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.04), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        'soft-md': '0 15px 35px -5px rgba(0, 0, 0, 0.06), 0 10px 15px -5px rgba(0, 0, 0, 0.02)',
        'soft-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 35px 60px -15px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
