/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{js,ts,jsx,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f2aec0",
        
"secondary": "#f7ccff",
        
"accent": "#98e585",
        
"neutral": "#322735",
        
"base-100": "#f5f3f6",
        
"info": "#56addc",
        
"success": "#67e9d1",
        
"warning": "#f3d972",
        
"error": "#f9715d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

