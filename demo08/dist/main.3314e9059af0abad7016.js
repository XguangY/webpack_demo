webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__(4);
// 插件式引入lodash


function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(["Hello", "webpack666666"], " ");
  element.onclick = __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].bind(null, 'Hello webpack1!');
  return element;
}

document.body.appendChild(component());


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(text) {
  console.log(text);
}


/***/ })
],[1]);