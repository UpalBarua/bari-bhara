/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#cfdee8',
          '100': '#c4d7e3',
          '200': '#a5c5d4',
          '300': '#79a9be',
          '400': '#4e89a2',
          '500': '#3f6c83',
          '600': '#33566b',
          '700': '#263f4f',
          '800': '#1c2f3b',
          '900': '#18232a',
          '950': '#000000',
        },
        accent: {
          '50': '#f0f8ff',
          '100': '#e5f3ff',
          '200': '#bce5ff',
          '300': '#7ecfff',
          '400': '#37b3ff',
          '500': '#0499f6',
          '600': '#007cd2',
          '700': '#0063ac',
          '800': '#01538d',
          '900': '#084778',
          '950': '#052e51',
        },
        green: {
          '50': '#f1fcf3',
          '100': '#dff9e5',
          '200': '#c0f2cb',
          '300': '#8ee7a3',
          '400': '#56d274',
          '500': '#2ba84a',
          '600': '#21983f',
          '700': '#1e7734',
          '800': '#1c5f2e',
          '900': '#194e28',
          '950': '#082b13',
        },
        red: {
          '50': '#fff0f2',
          '100': '#ffdde2',
          '200': '#ffc0c8',
          '300': '#ff94a2',
          '400': '#ff576d',
          '500': '#ff2340',
          '600': '#ff0022',
          '700': '#d7001d',
          '800': '#b1031a',
          '900': '#920a1c',
          '950': '#50000b',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
};
