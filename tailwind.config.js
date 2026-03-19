/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        mono:  ['"Geist Mono"', 'monospace'],
      },
      colors: {
        bg:     '#fafaf8',
        ink:    '#111110',
        muted:  '#78776c',
        rule:   '#e4e4e0',
        accent: '#2563eb',
      },
    },
  },
  plugins: [],
}
