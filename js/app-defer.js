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


var lightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"]({
  gallery: '#gallery--getting-started',
  children: 'a',
  pswpModule: function pswpModule() {
    return __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! photoswipe */ "../../../../.yarn/berry/cache/photoswipe-npm-5.4.4-f7a755162f-10c0.zip/node_modules/photoswipe/dist/photoswipe.esm.js"));
  }
});
lightbox.init();
var navbarSocial = document.getElementById('navbar-social');
console.log(navbarSocial);
window.onscroll = function () {
  if (window.scrollY > 500) {
    navbarSocial.style.display = 'none';
  } else {
    navbarSocial.style.display = 'block';
  }
};
document.addEventListener('DOMContentLoaded', function () {
  // Toggle TOC
  // const toggleButton = document.getElementById('toc-toggle');
  // const toc = document.getElementById('toc');

  // Initial state
  // toc.classList.add('toc-visible');

  // toggleButton.addEventListener('click', () => {
  //     if (toc.classList.contains('toc-visible')) {
  //         toc.classList.remove('toc-visible');
  //         toc.classList.add('hidden');
  //     } else {
  //         toc.classList.remove('hidden');
  //         toc.classList.add('toc-visible');
  //     }
  // });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./src/js/app-defer.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);