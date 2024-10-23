(self["webpackChunkprizayu_biz"] = self["webpackChunkprizayu_biz"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var nightwind = {
    beforeTransition: function beforeTransition() {
      var doc = document.documentElement;
      var _onTransitionDone = function onTransitionDone() {
        doc.classList.remove("nightwind");
        doc.removeEventListener("transitionend", _onTransitionDone);
      };
      doc.addEventListener("transitionend", _onTransitionDone);
      if (!doc.classList.contains("nightwind")) {
        doc.classList.add("nightwind");
      }
    },
    toggle: function toggle() {
      nightwind.beforeTransition();
      var doc = document.documentElement;
      if (!doc.classList.contains("dark")) {
        doc.classList.add("dark");
        window.localStorage.setItem("nightwind-mode", "dark");
      } else {
        doc.classList.remove("dark");
        window.localStorage.setItem("nightwind-mode", "light");
      }
    },
    enable: function enable(dark) {
      var mode = dark ? "dark" : "light";
      var opposite = dark ? "light" : "dark";
      nightwind.beforeTransition();
      var doc = document.documentElement;
      if (doc.classList.contains(opposite)) {
        doc.classList.remove(opposite);
      }
      doc.classList.add(mode);
      window.localStorage.setItem("nightwind-mode", mode);
    }
  };
  (function () {
    function getInitialColorMode() {
      var persistedColorPreference = window.localStorage.getItem("nightwind-mode");
      var hasPersistedPreference = typeof persistedColorPreference === "string";
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      var mql = window.matchMedia("(prefers-color-scheme: dark)");
      var hasMediaQueryPreference = typeof mql.matches === "boolean";
      return hasMediaQueryPreference ? mql.matches ? "dark" : "light" : "light";
    }
    var initialMode = getInitialColorMode();
    document.documentElement.classList.toggle("dark", initialMode === "dark");
  })();
  var darkButtonElement = document.getElementById("dark-mode");
  var isDarkmode = window.localStorage.getItem("nightwind-mode") === "dark";
  var darkIcon = document.getElementById("dark-icon");
  var lightIcon = document.getElementById("light-icon");
  var svgDark1 = document.getElementById("svgHead1");
  var svgDark2 = document.getElementById("svgHead2");
  function toggleDarkMode() {
    isDarkmode = !isDarkmode;
    darkIcon.classList.toggle("hidden", !isDarkmode);
    lightIcon.classList.toggle("hidden", isDarkmode);

    // Update the SVG fill colors
    if (svgDark1) {
      svgDark1.classList.toggle("fill-neutral-100", !isDarkmode);
      svgDark1.classList.toggle("fill-neutral-900", isDarkmode);
    }
    if (svgDark2) {
      svgDark2.classList.toggle("fill-neutral-100", !isDarkmode);
      svgDark2.classList.toggle("fill-neutral-900", isDarkmode);
    }

    // Toggle nightwind mode (if applicable)
    nightwind.toggle();
  }
  darkButtonElement.addEventListener("click", toggleDarkMode);
  if (isDarkmode) {
    darkIcon.classList.remove("hidden");
    if (svgDark1) {
      svgDark1.classList.remove("fill-neutral-100");
      svgDark1.classList.add("fill-neutral-900");
    }
    if (svgDark2) {
      svgDark2.classList.remove("fill-neutral-100");
      svgDark2.classList.add("fill-neutral-900");
    }
  } else {
    lightIcon.classList.remove("hidden");
    if (svgDark1) {
      svgDark1.classList.remove("fill-neutral-900");
      svgDark1.classList.add("fill-neutral-100");
    }
    if (svgDark2) {
      svgDark2.classList.remove("fill-neutral-900");
      svgDark2.classList.add("fill-neutral-100");
    }
  }
});

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","css/fonts"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/css/styles.css"), __webpack_exec__("./src/css/fonts.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);