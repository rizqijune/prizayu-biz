"use strict";
(self["webpackChunkprizayu_biz"] = self["webpackChunkprizayu_biz"] || []).push([["/js/app-defer"],{

/***/ "./src/js/app-defer.js":
/*!*****************************!*\
  !*** ./src/js/app-defer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe/lightbox */ "../../../../.yarn/berry/cache/photoswipe-npm-5.4.4-f7a755162f-10c0.zip/node_modules/photoswipe/dist/photoswipe-lightbox.esm.js");
/* harmony import */ var photoswipe_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/style.css */ "../../../../.yarn/berry/cache/photoswipe-npm-5.4.4-f7a755162f-10c0.zip/node_modules/photoswipe/dist/photoswipe.css");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "../../../../.yarn/berry/cache/alpinejs-npm-3.14.3-2d6652512e-10c0.zip/node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var _alpinejs_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alpinejs/focus */ "../../../../.yarn/berry/cache/@alpinejs-focus-npm-3.14.3-32bdd05e01-10c0.zip/node_modules/@alpinejs/focus/dist/module.esm.js");




var lightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"]({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: function pswpModule() {
    return __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! photoswipe */ "../../../../.yarn/berry/cache/photoswipe-npm-5.4.4-f7a755162f-10c0.zip/node_modules/photoswipe/dist/photoswipe.esm.js"));
  }
});
lightbox.init();
window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].plugin(_alpinejs_focus__WEBPACK_IMPORTED_MODULE_3__["default"]);
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].start();

// Immediately check localStorage and apply styles
var doc = document.documentElement;
var isDarkmode = window.localStorage.getItem("ui-mode") === "dark";
if (isDarkmode) {
  doc.classList.add("dark");
}
document.addEventListener("DOMContentLoaded", function () {
  var darkSwitch = document.getElementById("dark-mode");
  var darkIcon = document.getElementById("dark-icon");
  var lightIcon = document.getElementById("light-icon");

  // Toggle dark mode and update local storage
  function toggleDarkMode() {
    var currentMode = window.localStorage.getItem("ui-mode");
    var newMode = currentMode === "dark" ? "light" : "dark";
    doc.classList.toggle("dark", newMode === "dark");
    window.localStorage.setItem("ui-mode", newMode);
    updateUI(newMode);
  }
  function updateUI(mode) {
    darkIcon.classList.toggle("hidden", mode === "light");
    lightIcon.classList.toggle("hidden", mode === "dark");
  }
  darkSwitch.addEventListener("click", function () {
    toggleDarkMode();
  });

  // Initialize UI based on current mode
  updateUI(window.localStorage.getItem("ui-mode"));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./src/js/app-defer.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);