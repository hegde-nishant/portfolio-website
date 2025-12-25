import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // MacOS 9 Platinum theme palette
        platinum: {
          bg: '#DDDDDD',           // Main background - classic Mac gray
          'bg-light': '#EEEEEE',   // Lighter areas
          'bg-dark': '#CCCCCC',    // Darker sections
          border: '#999999',       // Standard borders
          'border-dark': '#666666', // Darker borders
          'border-light': '#FFFFFF', // Highlight/3D effect
          text: '#000000',         // Primary text
          'text-muted': '#555555', // Secondary text
        },
        macos: {
          bg: '#DDDDDD',
          'bg-secondary': '#EEEEEE',
          'bg-tertiary': '#CCCCCC',
          border: '#999999',
          'border-dark': '#666666',
        },
        gray: {
          50: '#FAFAFA',
          100: '#EEEEEE',
          200: '#DDDDDD',
          300: '#CCCCCC',
          400: '#999999',
          500: '#777777',
          600: '#555555',
          700: '#333333',
          800: '#222222',
          900: '#000000',
        },
        blue: {
          DEFAULT: '#0066CC',      // Muted blue for platinum theme
          dark: '#004499',
          light: '#3399FF',
        },
        accent: {
          blue: '#0066CC',
          'blue-dark': '#004499',
        }
      },
      fontFamily: {
        sans: ['Geneva', 'Tahoma', 'Verdana', 'Arial', 'sans-serif'],
        display: ['Geneva', 'Charcoal', 'Chicago', 'Impact', 'Arial Black', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'Courier', 'monospace'],
      },
      fontSize: {
        'body': ['1rem', { lineHeight: '1.6' }],
        'lg-body': ['1.125rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'prose': '65ch',
        'content': '900px',
      },
      spacing: {
        'section': '4rem',
      },
      boxShadow: {
        'macos': '2px 2px 0 0 rgba(0, 0, 0, 0.2)',
        'macos-lg': '3px 3px 0 0 rgba(0, 0, 0, 0.3)',
        'macos-inset': 'inset 1px 1px 0 0 rgba(255, 255, 255, 0.5), inset -1px -1px 0 0 rgba(0, 0, 0, 0.2)',
        'button-3d': '1px 1px 0 0 #FFFFFF, 2px 2px 0 0 #666666',
        'button-3d-pressed': 'inset 1px 1px 2px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

export default config
