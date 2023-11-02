/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#123b2d',
        50: '#effaf4',
        100: '#d9f2e3',
        200: '#b5e5cb',
        300: '#85d0ac',
        400: '#52b589',
        500: '#30996e',
        600: '#207b58',
        700: '#1a6248',
        800: '#174e3b',
        900: '#123b2d',
        950: '#0a241c',
      },
      secondary: {
        DEFAULT: '#6c0303',
        50: '#fff0f0',
        100: '#ffdede',
        200: '#ffc3c3',
        300: '#ff9999',
        400: '#ff5f5f',
        500: '#ff2d2d',
        600: '#f40e0e',
        700: '#ce0707',
        800: '#aa0a0a',
        900: '#8c1010',
        950: '#6c0303',
      },
      grayscale: {
        'neutral-light-accessible': 'hsl(0, 0%, 43%)',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      alert: {
        success: {
          DEFAULT: '#388e3c',
          accent: '#edffed',
        },
        error: {
          DEFAULT: '#d32f2f',
          accent: '#fff1f1',
        },
        warning: {
          DEFAULT: '#f57c00',
          accent: '#fffbea',
        },
        info: {
          DEFAULT: '#0288d1',
          accent: '#f0f7ff',
        },
      },
    },
    lineHeight: {
      9: '3.75rem',
      8: '2.5rem',
      7: '2.25rem',
      6: '1.875rem',
      5: '1.625rem',
      4: '1.5rem',
      3: '1.375rem',
      2: '1.125rem',
      1: '1rem',
    },
    letterSpacing: {
      9: '-0.025em',
      8: '-0.01em',
      7: '-0.0075em',
      6: '-0.00625em',
      5: '-0.005em',
      4: '-0.0025em',
      3: '0em',
      2: '0em',
      1: '0.0025em',
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      none: '0',
      full: '5rem',
    },
    transitionDuration: {
      base: '350ms',
    },
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['var(--font-next)'],
      },
      minWidth: {
        '9/10': '90%',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fill, minmax(16.25rem, 1fr))',
      },
      gap: {
        form: '1.25rem',
      },
      // left to right infinite animation
      keyframes: {
        'left-to-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0.25rem)' },
        },
      },
      animation: {
        'left-to-right': 'left-to-right 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('tailwind-scrollbar')],
};
