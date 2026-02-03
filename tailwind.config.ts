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
        // Facebook (2007-2009) color palette
        facebook: {
          blue: '#3b5998',           // Primary Facebook blue
          'blue-dark': '#2d4373',    // Hover states
          'blue-light': '#5b7ab8',   // Subtle accents
          'blue-medium': '#6E84B5',  // Medium blue for section headers
        },
        background: {
          page: '#F2F2F2',           // Classic Facebook gray background
          white: '#ffffff',          // Content boxes
          sidebar: '#f7f7f7',        // Sidebar background
          'table-stripe': '#F7F7F7', // Alternating table row color
        },
        text: {
          primary: '#333333',        // Main text
          secondary: '#777777',      // Secondary text
          light: '#999999',          // Light text
        },
        border: {
          light: '#e5e5e5',          // Content box borders
          medium: '#cccccc',         // Stronger borders
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
      },
      fontFamily: {
        sans: ['Tahoma', 'Verdana', 'Arial', 'sans-serif'],
        display: ['Tahoma', 'Verdana', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
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
        'fb-card': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'fb-header': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'fb-button': '0 1px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

export default config
