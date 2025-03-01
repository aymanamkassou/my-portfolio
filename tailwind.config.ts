import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#121212',
          surface: '#1a1a1a',
          border: '#333333',
          text: '#f0f0f0',
          accent: '#64FFDA',
        },
        light: {
          bg: '#f5f5f5',
          surface: '#ffffff',
          border: '#e0e0e0',
          text: '#212121',
          accent: '#0077B6',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
