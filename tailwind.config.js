/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '350px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        color: {
          1: "#30324B",
          2: "#6AD400",
          3: "#FF2F2F",
          4: "#0013FF",
          5: "#FFFFFF",
        },
        stroke: {
          1: "#30324B",
          2: "#575A84",
          3: "#6AD400",
          4: "#CEFF9D",
          5: "#FF2F2F",
          6: "#FFB8B8",
        },
        n: {
          1: "#A4A4A4",
        },
      },
      boxShadow: {
        'md': ' 0 4px 18px 0 rgba(0, 0, 0, 0.1);'
      }
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  },
  plugins: [],
}

