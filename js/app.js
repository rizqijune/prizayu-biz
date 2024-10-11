(self["webpackChunkprizayu_biz"] = self["webpackChunkprizayu_biz"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var nightwind = {
    beforeTransition: function beforeTransition() {
      var doc = document.documentElement;
      var _onTransitionDone = function onTransitionDone() {
        doc.classList.remove('nightwind');
        doc.removeEventListener('transitionend', _onTransitionDone);
      };
      doc.addEventListener('transitionend', _onTransitionDone);
      if (!doc.classList.contains('nightwind')) {
        doc.classList.add('nightwind');
      }
    },
    toggle: function toggle() {
      nightwind.beforeTransition();
      var doc = document.documentElement;
      if (!doc.classList.contains('dark')) {
        doc.classList.add('dark');
        window.localStorage.setItem('nightwind-mode', 'dark');
      } else {
        doc.classList.remove('dark');
        window.localStorage.setItem('nightwind-mode', 'light');
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
      window.localStorage.setItem('nightwind-mode', mode);
    }
  };

  // Initialize the initial color mode
  (function () {
    function getInitialColorMode() {
      var persistedColorPreference = window.localStorage.getItem('nightwind-mode');
      var hasPersistedPreference = typeof persistedColorPreference === 'string';
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      var hasMediaQueryPreference = typeof mql.matches === 'boolean';
      return hasMediaQueryPreference ? mql.matches ? 'dark' : 'light' : 'light';
    }
    var initialMode = getInitialColorMode();
    document.documentElement.classList.toggle('dark', initialMode === 'dark');
  })();
  document.getElementById('toggle-dark-mode').addEventListener('click', nightwind.toggle);
});

/***/ }),

/***/ "./src/css/tailwind.css":
/*!******************************!*\
  !*** ./src/css/tailwind.css ***!
  \******************************/
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
/******/ __webpack_require__.O(0, ["css/fonts","css/app"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/css/tailwind.css"), __webpack_exec__("./src/css/fonts.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);