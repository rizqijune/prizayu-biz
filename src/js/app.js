document.addEventListener("DOMContentLoaded", () => {
    var nightwind = {
        beforeTransition: () => {
            const doc = document.documentElement;
            const onTransitionDone = () => {
                doc.classList.remove("nightwind");
                doc.removeEventListener("transitionend", onTransitionDone);
            };

            doc.addEventListener("transitionend", onTransitionDone);
            if (!doc.classList.contains("nightwind")) {
                doc.classList.add("nightwind");
            }
        },

        toggle: () => {
            nightwind.beforeTransition();
            const doc = document.documentElement;

            if (!doc.classList.contains("dark")) {
                doc.classList.add("dark");
                window.localStorage.setItem("nightwind-mode", "dark");
            } else {
                doc.classList.remove("dark");
                window.localStorage.setItem("nightwind-mode", "light");
            }
        },

        enable: (dark) => {
            const mode = dark ? "dark" : "light";
            const opposite = dark ? "light" : "dark";

            nightwind.beforeTransition();
            const doc = document.documentElement;

            if (doc.classList.contains(opposite)) {
                doc.classList.remove(opposite);
            }
            doc.classList.add(mode);
            window.localStorage.setItem("nightwind-mode", mode);
        },
    };

    (function () {
        function getInitialColorMode() {
            const persistedColorPreference =
                window.localStorage.getItem("nightwind-mode");
            const hasPersistedPreference =
                typeof persistedColorPreference === "string";
            if (hasPersistedPreference) {
                return persistedColorPreference;
            }
            const mql = window.matchMedia("(prefers-color-scheme: dark)");
            const hasMediaQueryPreference = typeof mql.matches === "boolean";
            return hasMediaQueryPreference
                ? mql.matches
                    ? "dark"
                    : "light"
                : "light";
        }

        const initialMode = getInitialColorMode();
        document.documentElement.classList.toggle(
            "dark",
            initialMode === "dark",
        );
    })();
    const darkButtonElement = document.getElementById("dark-mode");
    let isDarkmode = window.localStorage.getItem("nightwind-mode") === "dark";
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    const svgDark1 = document.getElementById("svgHead1");
    const svgDark2 = document.getElementById("svgHead2");
    
    function toggleDarkMode() {
        isDarkmode = !isDarkmode;
    
        darkIcon.classList.toggle("hidden", !isDarkmode);
        lightIcon.classList.toggle("hidden", isDarkmode);
    
        // Update the SVG fill colors
        if (svgDark1) {
            svgDark1.classList.toggle("fill-neutral-100", !isDarkmode);
            svgDark1.classList.toggle("fill-[#262626d9]", isDarkmode);
        }
        if (svgDark2) {
            svgDark2.classList.toggle("fill-neutral-100", !isDarkmode);
            svgDark2.classList.toggle("fill-[#262626d9]", isDarkmode);
        }
    
        // Toggle nightwind mode (if applicable)
        nightwind.toggle();
    }
    
    darkButtonElement.addEventListener("click", toggleDarkMode);
    
    if (isDarkmode) {
        darkIcon.classList.remove("hidden");
        if (svgDark1) {
            svgDark1.classList.remove("fill-neutral-100");
            svgDark1.classList.add("fill-[#262626d9]");
        }
        if (svgDark2) {
            svgDark2.classList.remove("fill-neutral-100");
            svgDark2.classList.add("fill-[#262626d9]");
        }
    } else {
        lightIcon.classList.remove("hidden");
        if (svgDark1) {
            svgDark1.classList.remove("fill-[#262626d9]");
            svgDark1.classList.add("fill-neutral-100");
        }
        if (svgDark2) {
            svgDark2.classList.remove("fill-[#262626d9]");
            svgDark2.classList.add("fill-neutral-100");
        }
    }
    
});
