/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/array.ts":
/*!*******************************!*\
  !*** ./src/iterator/array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Array)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/iterator/item.ts");
/* harmony import */ var _arrayiterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayiterator */ "./src/iterator/arrayiterator.ts");


class Array {
    _items;
    constructor(items) {
        this._items = items;
    }
    getItem(index) {
        const item = this._items[index];
        if (item === undefined) {
            throw new Error(`Index ${index} is out of bounds`);
        }
        return item;
    }
    get count() {
        return this._items.length;
    }
    iterator() {
        return new _arrayiterator__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
}


/***/ }),

/***/ "./src/iterator/arrayiterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/arrayiterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrayIterator)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/iterator/item.ts");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./src/iterator/array.ts");


class ArrayIterator {
    _array;
    _index;
    constructor(array) {
        this._array = array;
        this._index = -1;
    }
    next() {
        this._index++;
        return this._index < this._array.count;
    }
    current() {
        return this._array.getItem(this._index);
    }
}


/***/ }),

/***/ "./src/iterator/item.ts":
/*!******************************!*\
  !*** ./src/iterator/item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
class Item {
    _name;
    _cost;
    constructor(name, cost) {
        this._name = name;
        this._cost = cost;
    }
    // -> eraableSyntaxOnly: false시만 사용가능`
    //constructor(private name: string, private _cost: number) {}
    get name() {
        return this._name;
    }
    get cost() {
        return this._cost;
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
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/iterator/array.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./src/iterator/item.ts");


const items = [
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠쿠다스", 2500),
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 1800),
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("빼빼로", 1200),
    new _item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 4600),
];
const array = new _array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
const iter = array.iterator();
while (iter.next()) {
    const item = iter.current();
    const domItem = document.createElement("div");
    domItem.innerText = `${item.name} - ${item.cost}원`;
    document.body.appendChild(domItem);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsQ0FBQztJQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFNUIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLy4vc3JjL2l0ZXJhdG9yL2FycmF5LnRzIiwid2VicGFjazovL3RzLy4vc3JjL2l0ZXJhdG9yL2FycmF5aXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvaXRlcmF0b3IvaXRlbS50cyIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLy4vc3JjL2l0ZXJhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtIGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB0eXBlIHsgSXRlcmF0b3IgfSBmcm9tIFwiLi9pdGVyYXRvclwiO1xuaW1wb3J0IHR5cGUgeyBBZ2dyZWdhdG9yIH0gZnJvbSBcIi4vYWdncmVnYXRvclwiO1xuaW1wb3J0IEFycmF5SXRlcmF0b3IgZnJvbSBcIi4vYXJyYXlpdGVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheSBpbXBsZW1lbnRzIEFnZ3JlZ2F0b3I8SXRlbT4ge1xuICBwcml2YXRlIF9pdGVtczogSXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKGl0ZW1zOiBJdGVtW10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICB9XG5cbiAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcik6IEl0ZW0ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbmRleCAke2luZGV4fSBpcyBvdXQgb2YgYm91bmRzYCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHVibGljIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBpdGVyYXRvcigpOiBJdGVyYXRvcjxJdGVtPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMpO1xuICB9XG59XG4iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgQXJyYXkgZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB0eXBlIHsgSXRlcmF0b3IgfSBmcm9tIFwiLi9pdGVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3I8SXRlbT4ge1xuICBwcml2YXRlIF9hcnJheTogQXJyYXk7XG4gIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoYXJyYXk6IEFycmF5KSB7XG4gICAgdGhpcy5fYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLl9pbmRleCA9IC0xO1xuICB9XG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5faW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy5faW5kZXggPCB0aGlzLl9hcnJheS5jb3VudDtcbiAgfVxuICBjdXJyZW50KCk6IEl0ZW0ge1xuICAgIHJldHVybiB0aGlzLl9hcnJheS5nZXRJdGVtKHRoaXMuX2luZGV4KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29zdDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29zdDogbnVtYmVyKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fY29zdCA9IGNvc3Q7XG4gIH1cbiAgLy8gLT4gZXJhYWJsZVN5bnRheE9ubHk6IGZhbHNl7Iuc66eMIOyCrOyaqeqwgOuKpWBcbiAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZywgcHJpdmF0ZSBfY29zdDogbnVtYmVyKSB7fVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgY29zdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3N0O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcnJheSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgbmV3IEl0ZW0oXCLsv6Dsv6Dri6TsiqRcIiwgMjUwMCksXG4gIG5ldyBJdGVtKFwi7IOI7Jqw6rmhXCIsIDE4MDApLFxuICBuZXcgSXRlbShcIuu5vOu5vOuhnFwiLCAxMjAwKSxcbiAgbmV3IEl0ZW0oXCLstIjsvZTtjIzsnbRcIiwgNDYwMCksXG5dO1xuXG5jb25zdCBhcnJheSA9IG5ldyBBcnJheShpdGVtcyk7XG5jb25zdCBpdGVyID0gYXJyYXkuaXRlcmF0b3IoKTtcblxud2hpbGUgKGl0ZXIubmV4dCgpKSB7XG4gIGNvbnN0IGl0ZW0gPSBpdGVyLmN1cnJlbnQoKTtcblxuICBjb25zdCBkb21JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZG9tSXRlbS5pbm5lclRleHQgPSBgJHtpdGVtLm5hbWV9IC0gJHtpdGVtLmNvc3R97JuQYDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==