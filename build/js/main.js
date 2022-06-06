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

eval("// accordion\r\n\r\nfunction accordion(block, active) {\r\n\tconst itemAccordion = document.querySelectorAll(block);\r\n\r\n\titemAccordion.forEach(item => {\r\n\t\titem.addEventListener('click', function () {\r\n\t\t\tlet parent = item.parentNode;\r\n\t\t\tif (parent.classList.contains(active)) {\r\n\t\t\t\tparent.classList.remove(active);\r\n\t\t\t} else {\r\n\t\t\t\tdocument\r\n\t\t\t\t\t.querySelectorAll(active)\r\n\t\t\t\t\t.forEach(child => child.classList.remove(active));\r\n\t\t\t\tparent.classList.add(active);\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n}\r\n\r\naccordion('.accordion__item', 'accordion__item--active');\r\n\r\n\r\n// slider-banner\t\r\n\r\n$('.slider-banner__items').slick({\r\n\tinfinite: true,\r\n\tslidesToShow: 1,\r\n\tslidesToScroll: 1,\r\n\tarrow: true,\r\n\tdots: true,\r\n\tprevArrow: document.querySelector('.slick-prev'),\r\n\tnextArrow: document.querySelector('.slick-next'),\r\n  });\r\n\r\n\r\n//   Counter\r\n\r\ntry {\r\n\t// Counter\r\n\tlet assortmentCounterWrapper = $('.counter');\r\n\t$('#number').value = 0;\r\n\r\n\tfunction setAssortmntCount(input, operator = 'decrease') {\r\n\t\tlet inputValue = input.value;\r\n\t\tlet value = parseInt(inputValue, 10);\r\n\t\tvalue = isNaN(value) ? 0 : value;\r\n\r\n\t\tswitch (operator) {\r\n\t\t\tcase 'decrease':\r\n\t\t\t\tvalue < 1 ? value = 1 : '';\r\n\t\t\t\tvalue--;\r\n\t\t\t\t\r\n\t\t\t\tbreak;\r\n\t\t\tcase 'increase':\r\n\t\t\t\tvalue++;\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\r\n\t\tinput.setAttribute('value', value);\r\n\t}\r\n\r\n\tassortmentCounterWrapper.on('click', function (e) {\r\n\t\tlet currentInput = this.querySelector('input');\r\n\t\tlet $thisTarget = e.target;\r\n\t\tlet decreaseButton = $thisTarget.classList.contains('decrease-button');\r\n\t\tlet increaseButton = $thisTarget.classList.contains('increase-button');\r\n\r\n\t\tif (!decreaseButton && !increaseButton) return;\r\n\r\n\t\tdecreaseButton\r\n\t\t\t?\r\n\t\t\tsetAssortmntCount(currentInput, 'decrease') :\r\n\t\t\tsetAssortmntCount(currentInput, 'increase');\r\n\t});\r\n\r\n\r\n} catch {\r\n\r\n}\r\n\r\n// call counter\r\n\r\nconst stockBtn = document.querySelectorAll('.stock__item-btn-box')\r\nconst stockCount = document.querySelectorAll('.counter')\r\n\r\n\t  stockBtn.forEach(btn=> {\r\n\t\t  btn.addEventListener('click', () =>{\r\n\t\t\t  stockCount.forEach(count => {\r\n\t\t\t\tcount.classList.toggle('show')\r\n\t\t\t  })\r\n\t\t  })\r\n\t  })\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/main.js?");

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