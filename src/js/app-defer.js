import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus'

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: () => import('photoswipe')
});

lightbox.init();
window.Alpine = Alpine
Alpine.plugin(focus)
Alpine.start()

const doc = document.documentElement;
const isDarkmode = window.localStorage.getItem("ui-mode") === "dark";
if (isDarkmode) {
    doc.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", () => {
    const darkSwitch = document.getElementById("dark-mode");
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");

    function toggleDarkMode() {
        const currentMode = window.localStorage.getItem("ui-mode");
        const newMode = currentMode === "dark" ? "light" : "dark";
        doc.classList.toggle("dark", newMode === "dark");
        window.localStorage.setItem("ui-mode", newMode);
        updateUI(newMode);
    }

    function updateUI(mode) {
        darkIcon.classList.toggle("hidden", mode === "light");
        lightIcon.classList.toggle("hidden", mode === "dark");
    }

    darkSwitch.addEventListener("click", () => {
        toggleDarkMode();
    });

    updateUI(window.localStorage.getItem("ui-mode"));
});

