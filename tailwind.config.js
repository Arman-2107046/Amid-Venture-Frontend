/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                ibm: ['"IBM Plex Sans Condensed"', 'sans-serif'],
                roboto: ['"Roboto"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}