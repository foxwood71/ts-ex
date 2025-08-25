/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GaussSumStrategy)
/* harmony export */ });
class GaussSumStrategy {
    get(N) {
        return (N * (N + 1)) / 2;
    }
}


/***/ }),

/***/ "./src/strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoopSumStrategy)
/* harmony export */ });
class LoopSumStrategy {
    get(N) {
        let sum = 0;
        for (let i = 1; i <= N; i++) {
            sum += i;
        }
        return sum;
    }
}


/***/ }),

/***/ "./src/strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SumPrinter)
/* harmony export */ });
class SumPrinter {
    print(strategy, N, domOutput) {
        const value = strategy.get(N);
        domOutput.innerHTML = `1~${N}까지의 총합 = ${value}`;
    }
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoopSumStrategy */ "./src/strategy/LoopSumStrategy.ts");
/* harmony import */ var _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GaussSumStrategy */ "./src/strategy/GaussSumStrategy.ts");
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SumPrinter */ "./src/strategy/SumPrinter.ts");



const printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_2__["default"]();
// const dom1 = document.createElement("h1");
// document.body.append(dom1);
// const dom2 = document.createElement("h1");
// document.body.append(dom2);
document.addEventListener("DOMContentLoaded", () => {
    const dom1 = document.createElement("h1");
    if (document.body) {
        document.body.append(dom1);
    }
    const dom2 = document.createElement("h1");
    if (document.body) {
        document.body.append(dom2);
    }
    printer.print(new _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom1);
    printer.print(new _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_0__["default"](), 100, dom2);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWUsTUFBTSxnQkFBZ0I7SUFDbkMsR0FBRyxDQUFDLENBQVM7UUFDWCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDSmMsTUFBTSxlQUFlO0lBQ2xDLEdBQUcsQ0FBQyxDQUFTO1FBQ1gsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ1JjLE1BQU0sVUFBVTtJQUM3QixLQUFLLENBQUMsUUFBcUIsRUFBRSxDQUFTLEVBQUUsU0FBc0I7UUFDNUQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FDRjs7Ozs7OztVQ1BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDRTtBQUNaO0FBRXRDLE1BQU0sT0FBTyxHQUFHLElBQUksbURBQVUsRUFBRSxDQUFDO0FBRWpDLDZDQUE2QztBQUM3Qyw4QkFBOEI7QUFFOUIsNkNBQTZDO0FBQzdDLDhCQUE4QjtBQUU5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2pELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSx5REFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksd0RBQWUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLy4vc3JjL3N0cmF0ZWd5L0dhdXNzU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvc3RyYXRlZ3kvTG9vcFN1bVN0cmF0ZWd5LnRzIiwid2VicGFjazovL3RzLy4vc3JjL3N0cmF0ZWd5L1N1bVByaW50ZXIudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy8uL3NyYy9zdHJhdGVneS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBTdW1TdHJhdGVneSBmcm9tIFwiLi9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXVzc1N1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3kge1xuICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKE4gKiAoTiArIDEpKSAvIDI7XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIFN1bVN0cmF0ZWd5IGZyb20gXCIuL1N1bVN0cmF0ZWd5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb3BTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcbiAgZ2V0KE46IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTjsgaSsrKSB7XG4gICAgICBzdW0gKz0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bTtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgU3VtU3RyYXRlZ3kgZnJvbSBcIi4vU3VtU3RyYXRlZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VtUHJpbnRlciB7XG4gIHByaW50KHN0cmF0ZWd5OiBTdW1TdHJhdGVneSwgTjogbnVtYmVyLCBkb21PdXRwdXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBzdHJhdGVneS5nZXQoTik7XG4gICAgZG9tT3V0cHV0LmlubmVySFRNTCA9IGAxfiR7Tn3quYzsp4DsnZgg7LSd7ZWpID0gJHt2YWx1ZX1gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBMb29wU3VtU3RyYXRlZ3kgZnJvbSBcIi4vTG9vcFN1bVN0cmF0ZWd5XCI7XG5pbXBvcnQgR2F1c3NTdW1TdHJhdGVneSBmcm9tIFwiLi9HYXVzc1N1bVN0cmF0ZWd5XCI7XG5pbXBvcnQgU3VtUHJpbnRlciBmcm9tIFwiLi9TdW1QcmludGVyXCI7XG5cbmNvbnN0IHByaW50ZXIgPSBuZXcgU3VtUHJpbnRlcigpO1xuXG4vLyBjb25zdCBkb20xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tMSk7XG5cbi8vIGNvbnN0IGRvbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZChkb20yKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBkb20xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRvbTEpO1xuICB9XG5cbiAgY29uc3QgZG9tMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkb20yKTtcbiAgfVxuICBwcmludGVyLnByaW50KG5ldyBHYXVzc1N1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMSk7XG4gIHByaW50ZXIucHJpbnQobmV3IExvb3BTdW1TdHJhdGVneSgpLCAxMDAsIGRvbTIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=