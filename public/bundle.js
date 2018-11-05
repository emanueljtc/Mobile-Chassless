/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n\n// Constants\nvar options = document.getElementById('options');\nvar arrowUp = document.getElementById('arrowUp');\nvar arrowDown = document.getElementById('arrowDown');\nvar line = document.getElementById('line');\nvar btnKeyboard = document.getElementById('buttonKeyboard');\nvar btnCombo = document.getElementById('buttonCombo');\nvar Keyboard = document.getElementById('Keyboard');\nvar combo = document.getElementById('combo');\n\narrowUp.addEventListener('click', toogleUp);\narrowDown.addEventListener('click', toogleDown);\nbtnKeyboard.addEventListener('click', f_Keyboard);\nbtnCombo.addEventListener('click', f_combo);\n\n// Function Toogle\nfunction toogleUp() {\n  options.classList.replace('hide', 'show');\n  arrowUp.classList.replace('show', 'hide');\n  arrowDown.classList.replace('hide', 'show');\n\n  if (btnKeyboard.classList.contains('hide')) {\n    line.classList.remove('show');\n    line.classList.add('hide');\n  }\n\n  btnKeyboard.disabled = false;\n  btnCombo.disabled = false;\n}\nfunction toogleDown() {\n  options.classList.replace('show', 'hide');\n  arrowUp.classList.replace('hide', 'show');\n  arrowDown.classList.replace('show', 'hide');\n  line.classList.remove('hide');\n  btnKeyboard.disabled = true;\n  btnCombo.disabled = true;\n}\n\n//Function Keyboard\n\nfunction f_Keyboard() {\n  Keyboard.classList.remove('hide');\n  combo.classList.add('hide');\n  btnKeyboard.classList.remove('show');\n  btnKeyboard.classList.add('hide');\n  btnCombo.classList.remove('hide');\n  btnCombo.classList.add('show_null');\n  line.classList.add('hide');\n}\n\n// Function Combo\n\nfunction f_combo() {\n  Keyboard.classList.add('hide');\n  Keyboard.classList.remove('show');\n  combo.classList.remove('hide');\n  combo.classList.add('show');\n  btnCombo.classList.remove('show_null');\n  btnCombo.classList.add('hide');\n  btnKeyboard.classList.remove('hide');\n  btnKeyboard.classList.add('show_null');\n  line.classList.remove('hide');\n}\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/styles.scss?");

/***/ })

/******/ });