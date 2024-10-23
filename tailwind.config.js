/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.html.twig",
        "./templates/*.html.twig",
        "./src/**/*.{js,css}",
    ],
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            colors: {
                primary: "#ff4848",
                secondary: "#415649",
                black: "#000000",
                dark: "#060C14",
                light: "#E7E5D4",
                border: "#DCDBD0",
                borderLight: "#BFBEB5",
            },
            fontFamily: {
                primary: ["var(--font-primary)", "serif"],
                secondary: ["var(--font-secondary)", "sans-serif"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("./moz-blur-support"),
        require("nightwind"),
        require("tailwind-bootstrap-grid")({
            gridGutters: {
                0: 0,
                1: ".5rem",
                2: "1rem",
                3: "1.5rem",
                4: "2rem",
                5: "2.75rem",
                6: "3.25rem",
            },
        }),
    ],
};
