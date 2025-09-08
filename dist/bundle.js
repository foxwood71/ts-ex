/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/06decorator/BoxDecorator.ts":
/*!*****************************************!*\
  !*** ./src/06decorator/BoxDecorator.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoxDecorator)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/06decorator/Decorator.ts");

class BoxDecorator extends _Decorator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getLinesCount() {
        return this._tagetItem.getLinesCount() + 2;
    }
    getLength(i) {
        return this._tagetItem.getLength(i) + 2;
    }
    getMaxLength() {
        return this._tagetItem.getMaxLength() + 2;
    }
    getString(i) {
        const maxWidth = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return `<span style='color:yellow'>+${"-".repeat(maxWidth - 2)}+</span>`;
        }
        else {
            return (`<span style='color:yellow'>${"|"}</span>` +
                `${this._tagetItem.getString(i - 1)}${" ".repeat(maxWidth - this.getLength(i - 1))}` +
                `<span style='color:yellow'>${"|"}</span>`);
        }
    }
    constructor(tagetItem) {
        super(tagetItem);
    }
}


/***/ }),

/***/ "./src/06decorator/Decorator.ts":
/*!**************************************!*\
  !*** ./src/06decorator/Decorator.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Decorator)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/06decorator/Item.ts");

class Decorator extends _Item__WEBPACK_IMPORTED_MODULE_0__["default"] {
    _tagetItem;
    constructor(tagetItem) {
        super();
        this._tagetItem = tagetItem;
    }
}


/***/ }),

/***/ "./src/06decorator/Item.ts":
/*!*********************************!*\
  !*** ./src/06decorator/Item.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
class Item {
    print(dom) {
        const result = [];
        const cntLines = this.getLinesCount();
        for (let i = 0; i < cntLines; i++) {
            const string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join("\n");
    }
}


/***/ }),

/***/ "./src/06decorator/LineNumberDecorator.ts":
/*!************************************************!*\
  !*** ./src/06decorator/LineNumberDecorator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LineNumberDecorator)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/06decorator/Decorator.ts");

class LineNumberDecorator extends _Decorator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getLinesCount() {
        return this._tagetItem.getLinesCount();
    }
    getLength(i) {
        return this._tagetItem.getLength(i) + 6;
    }
    getMaxLength() {
        return this._tagetItem.getMaxLength() + 6;
    }
    getString(i) {
        return ('<span style="color:green">' +
            `${i}`.padStart(4, "0") +
            `</span><span style="color:dimgray">: </span>${this._tagetItem.getString(i)}`);
    }
    constructor(tagetItem) {
        super(tagetItem);
    }
}


/***/ }),

/***/ "./src/06decorator/SideDecorator.ts":
/*!******************************************!*\
  !*** ./src/06decorator/SideDecorator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideDecorator)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/06decorator/Decorator.ts");

class SideDecorator extends _Decorator__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getLinesCount() {
        return this._tagetItem.getLinesCount();
    }
    getLength(i) {
        return this._tagetItem.getLength(i) + this._ch.length * 2;
    }
    getMaxLength() {
        return this._tagetItem.getMaxLength() + this._ch.length * 2;
    }
    getString(i) {
        return (`<span style='color:gray'>${this._ch}</span>` +
            `${this._tagetItem.getString(i)}` +
            `<span style='color:gray'>${this._ch}</span>`);
    }
    _ch;
    constructor(tagetItem, ch) {
        super(tagetItem);
        this._ch = ch;
    }
}


/***/ }),

/***/ "./src/06decorator/Strings.ts":
/*!************************************!*\
  !*** ./src/06decorator/Strings.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Strings)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/06decorator/Item.ts");

class Strings extends _Item__WEBPACK_IMPORTED_MODULE_0__["default"] {
    getLinesCount() {
        return this.data.length;
    }
    getLength(i) {
        if (this.data[i] !== undefined) {
            return this.data[i].length;
        }
        return 0;
    }
    getMaxLength() {
        let maxLength = 0;
        this.data.forEach((item) => {
            if (item.length > maxLength)
                maxLength = item.length;
        });
        return maxLength;
    }
    getString(i) {
        return this.data[i] ?? "";
    }
    data = new Array();
    constructor() {
        super();
    }
    add(str) {
        this.data.push(str);
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
/*!**********************************!*\
  !*** ./src/06decorator/index.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/06decorator/BoxDecorator.ts");
/* harmony import */ var _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineNumberDecorator */ "./src/06decorator/LineNumberDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDecorator */ "./src/06decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/06decorator/Strings.ts");
// Decorator Pattern
// # Decorator의 뜻은 "장식하는 사람"
// # 장식되는 대상과 장식을 동일한 개념으로 처리함
// # 기능을 마지 장식처럼 계속 추가할 수 있는 패턴
// # 기능을 실행 주에 동적으로 변경 또는 확장할 수 있는 패턴
//
// # 상속보다 유연한 패턴
// # 상속은 컴파일 시점에 기능이 결정되지만, 데코레이터는 런타임 시점에 기능이 결정됨
//
// # 장식하는 대상과 장식하는 객체가 동일한 인터페이스를 구현함
// # 장식하는 객체는 장식되는 대상을 포함함
// # 장식하는 객체는 장식되는 대상의 기능을 호출할 수 있음
// # 장식하는 객체는 장식되는 대상의 기능을 호출한 후에 추가적인 기능을 수행할 수 있음
// # 장식하는 객체는 여러 개를 중첩해서 사용할 수 있음
//
// [정리]
// # Decorator 패턴은 어떤 개체에 기능(장식)을 적용할때 그 객체와 적용될 기능을 동일시 할 수 있음
// # 데이터와 기능을 동일시할 수 있으므로 다양한 기능을 중첩해서 적용할 수 있으며 적용되는 기능의
// # 순서에 따라 다를 결과를 얻을 수 있음




const strs = new _Strings__WEBPACK_IMPORTED_MODULE_3__["default"]();
strs.add("Hello!");
strs.add("My name is Kim Hyoung-Jun.");
strs.add("I am a GIS Developer.");
strs.add("Design-Pattern is powerful tool.");
const domPre = document.querySelector("pre");
const d1 = new _SideDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](strs, '"');
// d1.print(domPre);
const d2 = new _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](d1);
// d2.print(domPre);
const d3 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](d2);
d3.print(domPre);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDTkEsb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQyxFQUFFO0FBQ0YsZ0JBQWdCO0FBQ2hCLGtEQUFrRDtBQUNsRCxFQUFFO0FBQ0YscUNBQXFDO0FBQ3JDLDBCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsbURBQW1EO0FBQ25ELGlDQUFpQztBQUNqQyxFQUFFO0FBQ0YsT0FBTztBQUNQLCtEQUErRDtBQUMvRCx5REFBeUQ7QUFDekQsMEJBQTBCO0FBRWdCO0FBQ2M7QUFDWjtBQUNaO0FBRWhDLE1BQU0sSUFBSSxHQUFHLElBQUksZ0RBQU8sRUFBRSxDQUFDO0FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFFN0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQWdCLENBQUM7QUFDNUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxzREFBYSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxvQkFBb0I7QUFFcEIsTUFBTSxFQUFFLEdBQUcsSUFBSSw0REFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxvQkFBb0I7QUFFcEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxxREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy8uL3NyYy8wNmRlY29yYXRvci9Cb3hEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMDZkZWNvcmF0b3IvRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzA2ZGVjb3JhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMDZkZWNvcmF0b3IvTGluZU51bWJlckRlY29yYXRvci50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy8wNmRlY29yYXRvci9TaWRlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzA2ZGVjb3JhdG9yL1N0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy8uL3NyYy8wNmRlY29yYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvclwiO1xuaW1wb3J0IHR5cGUgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveERlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZXRJdGVtLmdldExpbmVzQ291bnQoKSArIDI7XG4gIH1cblxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZXRJdGVtLmdldExlbmd0aChpKSArIDI7XG4gIH1cblxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZXRJdGVtLmdldE1heExlbmd0aCgpICsgMjtcbiAgfVxuXG4gIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5nZXRNYXhMZW5ndGgoKTtcbiAgICBpZiAoaSA9PT0gMCB8fCBpID09PSB0aGlzLmdldExpbmVzQ291bnQoKSAtIDEpIHtcbiAgICAgIHJldHVybiBgPHNwYW4gc3R5bGU9J2NvbG9yOnllbGxvdyc+KyR7XCItXCIucmVwZWF0KG1heFdpZHRoIC0gMil9Kzwvc3Bhbj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOnllbGxvdyc+JHtcInxcIn08L3NwYW4+YCArXG4gICAgICAgIGAke3RoaXMuX3RhZ2V0SXRlbS5nZXRTdHJpbmcoaSAtIDEpfSR7XCIgXCIucmVwZWF0KFxuICAgICAgICAgIG1heFdpZHRoIC0gdGhpcy5nZXRMZW5ndGgoaSAtIDEpXG4gICAgICAgICl9YCArXG4gICAgICAgIGA8c3BhbiBzdHlsZT0nY29sb3I6eWVsbG93Jz4ke1wifFwifTwvc3Bhbj5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHRhZ2V0SXRlbTogSXRlbSkge1xuICAgIHN1cGVyKHRhZ2V0SXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGV4dGVuZHMgSXRlbSB7XG4gIHByb3RlY3RlZCBfdGFnZXRJdGVtOiBJdGVtO1xuICBjb25zdHJ1Y3Rvcih0YWdldEl0ZW06IEl0ZW0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3RhZ2V0SXRlbSA9IHRhZ2V0SXRlbTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSXRlbSB7XG4gIGFic3RyYWN0IGdldExpbmVzQ291bnQoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRNYXhMZW5ndGgoKTogbnVtYmVyO1xuICBhYnN0cmFjdCBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nO1xuXG4gIHByaW50KGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCBjbnRMaW5lcyA9IHRoaXMuZ2V0TGluZXNDb3VudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY250TGluZXM7IGkrKykge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSk7XG4gICAgICByZXN1bHQucHVzaChzdHJpbmcpO1xuICAgIH1cbiAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oXCJcXG5cIik7XG4gIH1cbn1cbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSBcIi4vRGVjb3JhdG9yXCI7XG5pbXBvcnQgdHlwZSBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZU51bWJlckRlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdGFnZXRJdGVtLmdldExpbmVzQ291bnQoKTtcbiAgfVxuXG4gIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90YWdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgNjtcbiAgfVxuXG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90YWdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyA2O1xuICB9XG5cbiAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICc8c3BhbiBzdHlsZT1cImNvbG9yOmdyZWVuXCI+JyArXG4gICAgICBgJHtpfWAucGFkU3RhcnQoNCwgXCIwXCIpICtcbiAgICAgIGA8L3NwYW4+PHNwYW4gc3R5bGU9XCJjb2xvcjpkaW1ncmF5XCI+OiA8L3NwYW4+JHt0aGlzLl90YWdldEl0ZW0uZ2V0U3RyaW5nKFxuICAgICAgICBpXG4gICAgICApfWBcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IodGFnZXRJdGVtOiBJdGVtKSB7XG4gICAgc3VwZXIodGFnZXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlY29yYXRvciBmcm9tIFwiLi9EZWNvcmF0b3JcIjtcbmltcG9ydCB0eXBlIEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90YWdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2V0SXRlbS5nZXRMZW5ndGgoaSkgKyB0aGlzLl9jaC5sZW5ndGggKiAyO1xuICB9XG5cbiAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIHRoaXMuX2NoLmxlbmd0aCAqIDI7XG4gIH1cblxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgYDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5Jz4ke3RoaXMuX2NofTwvc3Bhbj5gICtcbiAgICAgIGAke3RoaXMuX3RhZ2V0SXRlbS5nZXRTdHJpbmcoaSl9YCArXG4gICAgICBgPHNwYW4gc3R5bGU9J2NvbG9yOmdyYXknPiR7dGhpcy5fY2h9PC9zcGFuPmBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2g6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0YWdldEl0ZW06IEl0ZW0sIGNoOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YWdldEl0ZW0pO1xuICAgIHRoaXMuX2NoID0gY2g7XG4gIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5ncyBleHRlbmRzIEl0ZW0ge1xuICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG4gIH1cblxuICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5kYXRhW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbaV0ubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIGxldCBtYXhMZW5ndGggPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPiBtYXhMZW5ndGgpIG1heExlbmd0aCA9IGl0ZW0ubGVuZ3RoO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhMZW5ndGg7XG4gIH1cblxuICBnZXRTdHJpbmcoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW2ldID8/IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIGRhdGEgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYWRkKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnB1c2goc3RyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBEZWNvcmF0b3IgUGF0dGVyblxuLy8gIyBEZWNvcmF0b3LsnZgg65y77J2AIFwi7J6l7Iud7ZWY64qUIOyCrOuejFwiXG4vLyAjIOyepeyLneuQmOuKlCDrjIDsg4Hqs7wg7J6l7Iud7J2EIOuPmeydvO2VnCDqsJzrhZDsnLzroZwg7LKY66as7ZWoXG4vLyAjIOq4sOuKpeydhCDrp4jsp4Ag7J6l7Iud7LKY65+8IOqzhOyGjSDstpTqsIDtlaAg7IiYIOyeiOuKlCDtjKjthLRcbi8vICMg6riw64ql7J2EIOyLpO2WiSDso7zsl5Ag64+Z7KCB7Jy866GcIOuzgOqyvSDrmJDripQg7ZmV7J6l7ZWgIOyImCDsnojripQg7Yyo7YS0XG4vL1xuLy8gIyDsg4Hsho3rs7Tri6Qg7Jyg7Jew7ZWcIO2MqO2EtFxuLy8gIyDsg4Hsho3snYAg7Lu07YyM7J28IOyLnOygkOyXkCDquLDriqXsnbQg6rKw7KCV65CY7KeA66eMLCDrjbDsvZTroIjsnbTthLDripQg65+w7YOA7J6EIOyLnOygkOyXkCDquLDriqXsnbQg6rKw7KCV65CoXG4vL1xuLy8gIyDsnqXsi53tlZjripQg64yA7IOB6rO8IOyepeyLne2VmOuKlCDqsJ3ssrTqsIAg64+Z7J287ZWcIOyduO2EsO2OmOydtOyKpOulvCDqtaztmITtlahcbi8vICMg7J6l7Iud7ZWY64qUIOqwneyytOuKlCDsnqXsi53rkJjripQg64yA7IOB7J2EIO2PrO2VqO2VqFxuLy8gIyDsnqXsi53tlZjripQg6rCd7LK064qUIOyepeyLneuQmOuKlCDrjIDsg4HsnZgg6riw64ql7J2EIO2YuOy2nO2VoCDsiJgg7J6I7J2MXG4vLyAjIOyepeyLne2VmOuKlCDqsJ3ssrTripQg7J6l7Iud65CY64qUIOuMgOyDgeydmCDquLDriqXsnYQg7Zi47Lac7ZWcIO2bhOyXkCDstpTqsIDsoIHsnbgg6riw64ql7J2EIOyImO2Wie2VoCDsiJgg7J6I7J2MXG4vLyAjIOyepeyLne2VmOuKlCDqsJ3ssrTripQg7Jes65+sIOqwnOulvCDspJHssqntlbTshJwg7IKs7Jqp7ZWgIOyImCDsnojsnYxcbi8vXG4vLyBb7KCV66asXVxuLy8gIyBEZWNvcmF0b3Ig7Yyo7YS07J2AIOyWtOuWpCDqsJzssrTsl5Ag6riw64qlKOyepeyLnSnsnYQg7KCB7Jqp7ZWg65WMIOq3uCDqsJ3ssrTsmYAg7KCB7Jqp65CgIOq4sOuKpeydhCDrj5nsnbzsi5wg7ZWgIOyImCDsnojsnYxcbi8vICMg642w7J207YSw7JmAIOq4sOuKpeydhCDrj5nsnbzsi5ztlaAg7IiYIOyeiOycvOuvgOuhnCDri6TslpHtlZwg6riw64ql7J2EIOykkeyyqe2VtOyEnCDsoIHsmqntlaAg7IiYIOyeiOycvOupsCDsoIHsmqnrkJjripQg6riw64ql7J2YXG4vLyAjIOyInOyEnOyXkCDrlLDrnbwg64uk66W8IOqysOqzvOulvCDslrvsnYQg7IiYIOyeiOydjFxuXG5pbXBvcnQgQm94RGVjb3JhdG9yIGZyb20gXCIuL0JveERlY29yYXRvclwiO1xuaW1wb3J0IExpbmVOdW1iZXJEZWNvcmF0b3IgZnJvbSBcIi4vTGluZU51bWJlckRlY29yYXRvclwiO1xuaW1wb3J0IFNpZGVEZWNvcmF0b3IgZnJvbSBcIi4vU2lkZURlY29yYXRvclwiO1xuaW1wb3J0IFN0cmluZ3MgZnJvbSBcIi4vU3RyaW5nc1wiO1xuXG5jb25zdCBzdHJzID0gbmV3IFN0cmluZ3MoKTtcbnN0cnMuYWRkKFwiSGVsbG8hXCIpO1xuc3Rycy5hZGQoXCJNeSBuYW1lIGlzIEtpbSBIeW91bmctSnVuLlwiKTtcbnN0cnMuYWRkKFwiSSBhbSBhIEdJUyBEZXZlbG9wZXIuXCIpO1xuc3Rycy5hZGQoXCJEZXNpZ24tUGF0dGVybiBpcyBwb3dlcmZ1bCB0b29sLlwiKTtcblxuY29uc3QgZG9tUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInByZVwiKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGQxID0gbmV3IFNpZGVEZWNvcmF0b3Ioc3RycywgJ1wiJyk7XG4vLyBkMS5wcmludChkb21QcmUpO1xuXG5jb25zdCBkMiA9IG5ldyBMaW5lTnVtYmVyRGVjb3JhdG9yKGQxKTtcbi8vIGQyLnByaW50KGRvbVByZSk7XG5cbmNvbnN0IGQzID0gbmV3IEJveERlY29yYXRvcihkMik7XG5kMy5wcmludChkb21QcmUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9