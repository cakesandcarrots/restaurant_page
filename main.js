/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _src_pic_PNG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pic.PNG */ \"./src/pic.PNG\");\n\n\nfunction home() {\n\n    const body = document.querySelector(\"#content\");\n    const restaurantname = document.createElement(\"div\");\n    restaurantname.textContent = \"Royal Eatery\";\n    restaurantname.style.fontWeight = \"bold\";\n    const image = new Image();\n    image.src = _src_pic_PNG__WEBPACK_IMPORTED_MODULE_0__;\n    image.style.width = '30rem';\n    image.style.height = '30rem';\n    const description = document.createElement(\"div\");\n    const linebreak = document.createElement(\"br\");\n\n    description.textContent = \"Royal Eateries is a renowned restaurant that offers a truly regal dining experience. Known for its opulent decor and impeccable service, it is a culinary destination fit for royalty. The menu boasts a delightful array of dishes, ranging from classic favorites to innovative creations, carefully curated by our expert chefs.\";\n    body.appendChild(image);\n    body.appendChild(restaurantname);\n    body.appendChild(linebreak);\n    body.appendChild(description);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _src_pic_PNG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/pic.PNG */ \"./src/pic.PNG\");\n\n\n\nfunction page() {\n    const body = document.querySelector('#content')\n    const btn = document.createElement('button');\n    btn.textContent = \"Home\";\n    const line = document.createElement('br');\n    body.appendChild(btn);\n    body.appendChild(line);\n\n    const btn2 = document.createElement('button');\n    btn2.textContent = \"Dishes\";\n    btn2.style.marginLeft = '10px';\n    body.appendChild(btn2);\n    body.appendChild(line);\n\n\n\n\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let ishome = true;\n    let isdishes = false;\n\n    btn2.addEventListener('click', function (e) {\n        if (!isdishes) {\n            body.textContent = '';\n            body.appendChild(btn);\n            body.appendChild(btn2);\n\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            isdishes = true;\n            ishome = false;\n\n\n        }\n    });\n\n\n    btn.addEventListener('click', function (e) {\n        if (!ishome) {\n            body.textContent = '';\n            body.appendChild(btn);\n            body.appendChild(line);\n\n            body.appendChild(btn2);\n            body.appendChild(line);\n\n            (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n            ishome = true;\n            isdishes = false;\n        }\n    });\n\n    return body;\n\n\n}\ndocument.body.appendChild(page());\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dishes)\n/* harmony export */ });\nfunction dishes() {\n    const body = document.querySelector('#content');\n    const dish1 = document.createElement('div');\n    dish1.textContent = \"King's Crown Burger:\";\n    dish1.style.fontWeight = \"bold\";\n    const dish1details = document.createElement('div');\n    dish1details.textContent = \"A towering burger fit for royalty! Our signature plant-based patty topped with gooey melted cheese, crispy bacon (vegan), and a crown of caramelized onions. Served with a side of golden fries.\";\n    dish1details.style.fontWeight = \"normal\"\n\n    dish1.appendChild(dish1details);\n    body.appendChild(dish1);\n\n\n\n    const dish2 = document.createElement('div');\n    dish2.textContent = \"Regal Seafood Extravaganza:\";\n    dish2.style.fontWeight = \"bold\";\n\n    const dish2details = document.createElement('div');\n    dish2details.textContent = \"Dive into a royal feast of ocean delights! Succulent lobster tails, king prawns, and buttery scallops, all bathed in a velvety lemon garlic butter sauce. Accompanied by a medley of seasonal vegetables and steamed jasmine rice.\";\n    dish2details.style.fontWeight = \"normal\"\n    dish2.appendChild(dish2details);\n    body.appendChild(dish2);\n\n\n\n    const dish3 = document.createElement('div');\n    dish3.textContent = \"Queen's Quinoa Salad:\";\n    dish3.style.fontWeight = \"bold\";\n\n    const dish3details = document.createElement('div');\n    dish3details.textContent = \"A healthy and delightful blend of nutty quinoa, fresh greens, juicy cherry tomatoes, and tangy feta cheese (vegan option available), crowned with a zesty lemon vinaigrette.\";\n    dish3details.style.fontWeight = \"normal\"\n\n    dish3.appendChild(dish3details);\n    body.appendChild(dish3);\n\n}\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/pic.PNG":
/*!*********************!*\
  !*** ./src/pic.PNG ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65a99cc9faeb71174cb8.PNG\";\n\n//# sourceURL=webpack://restaurant_page/./src/pic.PNG?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;