import type { Config } from "tailwindcss";
declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-bg": "#f3972d",
        "main-sbg":"#cd2b32",
        "main-tbg":"#41ac6c",
        "hover":"#ce8a3c"
      },
    },
  },
  plugins: [],
} satisfies Config;
