

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './layouts/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  safelist: [
    {
      pattern: /bg-(.*?)-(300|400)/,
      variants: ["group-hover"],
    },
  ],
  prefix: "",
  theme: {
    extend: {

    },
  },

}
