/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                /* TODO
                default: ['var(--normal)', ...fontFamily.sans],
                title: ['var(--title)', ...fontFamily.sans],
                number: ['var(--number)', ...fontFamily.sans],
                */
            },
        },
    },
    plugins: [],
};
