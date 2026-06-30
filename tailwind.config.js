/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Keep Playfair, but Bodoni is often better for this scale
                serif: ['"Playfair Display"', '"Bodoni Moda"', 'serif'],
            },
        },
    },
    plugins: [],
}