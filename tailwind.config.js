const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['var(--body)', ...fontFamily.sans],
                title: ['var(--title)', ...fontFamily.sans]
            },
        },
    },
    plugins: [],
};
