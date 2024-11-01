/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "selector",
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
                background: "hsl(var(--background) / <alpha-value>)",
                primary: "hsl(var(--primary) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",
                accent: "hsl(var(--background) / <alpha-value>)",
                black: "hsl(var(--black) / <alpha-value>)",
                white: "hsl(var(--white) / <alpha-value>)",
                border: "hsl(var(--border) / <alpha-value>)",
                info: "#0369a1",
                success: "#15803d",
                warning: "#c2410c",
                error: "#be123c",
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
    safelist:["fill-[#262626d9]"]
};
