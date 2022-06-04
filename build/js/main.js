/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("// accordion\r\n\r\nfunction accordion(block, active) {\r\n\tconst itemAccordion = document.querySelectorAll(block);\r\n\r\n\titemAccordion.forEach(item => {\r\n\t\titem.addEventListener('click', function () {\r\n\t\t\tlet parent = item.parentNode;\r\n\t\t\tif (parent.classList.contains(active)) {\r\n\t\t\t\tparent.classList.remove(active);\r\n\t\t\t} else {\r\n\t\t\t\tdocument\r\n\t\t\t\t\t.querySelectorAll(active)\r\n\t\t\t\t\t.forEach(child => child.classList.remove(active));\r\n\t\t\t\tparent.classList.add(active);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\r\n\r\naccordion('#accordion__item', 'accordion__item--active');\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;