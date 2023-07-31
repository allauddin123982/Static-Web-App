module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#273444',
      green: '#49E4A2',
      hello: '#94a3b8',
      red: '#DC2626',
      blue: {
        light: '#1E3A8A',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#1f2937',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
        200:'#f3f4f6'
      },
      indigo: {
        light: '#1E3A8A',
        DEFAULT: '#5c6ac4',
        dark: '#202e78',
      }
      
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
