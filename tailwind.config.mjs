/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        alfa: {
          red: {
            50: '#fff1f1',
            100: '#ffe1e1',
            200: '#ffc7c7',
            300: '#ffa0a0',
            400: '#f86c6c',
            500: '#c51010',
            600: '#990000', // Iconic Alfa Romeo Red
            700: '#7d0000',
            800: '#660000',
            900: '#4a0000',
            950: '#2b0000',
          },
          metal: {
            50: '#f8f9fa',
            100: '#f1f3f5',
            200: '#e4e7eb',
            300: '#caced5',
            400: '#9ea4b0',
            500: '#6f7685',
            600: '#525866',
            700: '#373c47',
            800: '#23262d', // Anthracite card background
            850: '#1b1d24',
            900: '#131418', // Deep metallic dark canvas
            950: '#0b0c0e', // Pure asphalt deep black
          },
          silver: {
            100: '#f4f6f8',
            200: '#e5e9ef',
            300: '#c9d1dc',
            400: '#98a2b3',
            500: '#667085',
          },
          gold: {
            300: '#fadb7f',
            400: '#e8c454',
            500: '#cda02a', // Quadrifoglio gold badge accent
            600: '#a87e19',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -4px rgba(153, 0, 0, 0.45)',
        'glow-red-lg': '0 0 35px -2px rgba(153, 0, 0, 0.65)',
        'glow-red-sm': '0 0 12px -2px rgba(153, 0, 0, 0.35)',
        'glow-metal': '0 0 20px -5px rgba(255, 255, 255, 0.08)',
        'metallic-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'alfa-gradient': 'linear-gradient(135deg, #990000 0%, #660000 100%)',
        'metal-dark': 'linear-gradient(180deg, #1f2229 0%, #131418 100%)',
        'carbon-grid': 'radial-gradient(#2a2d36 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
