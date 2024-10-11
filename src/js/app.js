document.addEventListener('DOMContentLoaded', () => {
    var nightwind = {
        beforeTransition: () => {
            const doc = document.documentElement;
            const onTransitionDone = () => {
                doc.classList.remove('nightwind');
                doc.removeEventListener('transitionend', onTransitionDone);
            }

            doc.addEventListener('transitionend', onTransitionDone);
            if (!doc.classList.contains('nightwind')) {
                doc.classList.add('nightwind');
            }
        },

        toggle: () => {
            nightwind.beforeTransition();
            const doc = document.documentElement;

            if (!doc.classList.contains('dark')) {
                doc.classList.add('dark');
                window.localStorage.setItem('nightwind-mode', 'dark');
            } else {
                doc.classList.remove('dark');
                window.localStorage.setItem('nightwind-mode', 'light');
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
            window.localStorage.setItem('nightwind-mode', mode);
        },
    };

    // Initialize the initial color mode
    (function() {
        function getInitialColorMode() {
            const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
            const hasPersistedPreference = typeof persistedColorPreference === 'string';
            if (hasPersistedPreference) {
                return persistedColorPreference;
            }
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const hasMediaQueryPreference = typeof mql.matches === 'boolean';
            return hasMediaQueryPreference ? (mql.matches ? 'dark' : 'light') : 'light';
        }

        const initialMode = getInitialColorMode();
        document.documentElement.classList.toggle('dark', initialMode === 'dark');
    })();
    document.getElementById('toggle-dark-mode').addEventListener('click', nightwind.toggle);
});