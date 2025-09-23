/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/18Builder/Builder.ts":
/*!**********************************!*\
  !*** ./src/18Builder/Builder.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Builder)
/* harmony export */ });
class Builder {
    _data;
    constructor(data) {
        this._data = data;
    }
}


/***/ }),

/***/ "./src/18Builder/Car.ts":
/*!******************************!*\
  !*** ./src/18Builder/Car.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Car)
/* harmony export */ });
class Car {
    _engine; // 엔진 이름
    _airbag; // 에어백 여부
    _color; // 차량 색상
    _cameraSensor; // 카메라 센서 유무
    _AEB; // 자동급제동장치 유무
    constructor(engine, airbag, color, cameraSensor, AEB) {
        this._engine = engine;
        this._airbag = airbag;
        this._color = color;
        this._cameraSensor = cameraSensor;
        this._AEB = AEB;
    }
    print() {
        //console.table(this); 이거 필드가 설정만 하고 사용하지 않는다는 오류 제거를 위해 이렇게 적어야 함
        console.table({
            engine: this._engine,
            airbag: this._airbag,
            color: this._color,
            cameraSensor: this._cameraSensor,
            AEB: this._AEB,
        });
    }
}


/***/ }),

/***/ "./src/18Builder/CarBuilder.ts":
/*!*************************************!*\
  !*** ./src/18Builder/CarBuilder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarBuilder)
/* harmony export */ });
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/18Builder/Car.ts");
// Builder 1형

class CarBuilder {
    _engine = undefined; // 엔진 이름
    _airbag = false; // 에어백 여부
    _color = undefined; // 차량 색상
    _cameraSensor = false; // 카메라 센서 유무
    _AEB = undefined; // 자동급제동장치 유무
    setEngine(v) {
        this._engine = v;
        return this;
    }
    setAirbag(v) {
        this._airbag = v;
        return this;
    }
    setColor(v) {
        this._color = v;
        return this;
    }
    setCameraSensor(v) {
        this._cameraSensor = v;
        return this;
    }
    setAEB(v) {
        this._AEB = v;
        return this;
    }
    build() {
        if (this._engine == undefined)
            return null;
        if (this._color == undefined)
            return null;
        if (this._AEB == undefined)
            return null;
        return new _Car__WEBPACK_IMPORTED_MODULE_0__["default"](this._engine, this._airbag, this._color, this._cameraSensor, this._AEB);
    }
}


/***/ }),

/***/ "./src/18Builder/Data.ts":
/*!*******************************!*\
  !*** ./src/18Builder/Data.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Data)
/* harmony export */ });
class Data {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}


/***/ }),

/***/ "./src/18Builder/Director.ts":
/*!***********************************!*\
  !*** ./src/18Builder/Director.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Director)
/* harmony export */ });
class Director {
    _builder;
    constructor(builder) {
        this._builder = builder;
    }
    build() {
        return `${this._builder.head()}${this._builder.body()}${this._builder.foot()}`;
    }
}


/***/ }),

/***/ "./src/18Builder/JSONBuilder.ts":
/*!**************************************!*\
  !*** ./src/18Builder/JSONBuilder.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JSONBuilder)
/* harmony export */ });
/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder */ "./src/18Builder/Builder.ts");

class JSONBuilder extends _Builder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    head() {
        return "{ ";
    }
    body() {
        return `"Name": "${this._data.name}", "Age": ${this._data.age}`;
    }
    foot() {
        return " }";
    }
    constructor(data) {
        super(data);
    }
}


/***/ }),

/***/ "./src/18Builder/PlainTextBuilder.ts":
/*!*******************************************!*\
  !*** ./src/18Builder/PlainTextBuilder.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlainTextBuilder)
/* harmony export */ });
/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder */ "./src/18Builder/Builder.ts");

class PlainTextBuilder extends _Builder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    head() {
        return "";
    }
    body() {
        return `Name: ${this._data.name}, Age: ${this._data.age}`;
    }
    foot() {
        return "";
    }
    constructor(data) {
        super(data);
    }
}


/***/ }),

/***/ "./src/18Builder/XMLBuilder.ts":
/*!*************************************!*\
  !*** ./src/18Builder/XMLBuilder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XMLBuilder)
/* harmony export */ });
/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder */ "./src/18Builder/Builder.ts");

class XMLBuilder extends _Builder__WEBPACK_IMPORTED_MODULE_0__["default"] {
    head() {
        return '<?xml version="1.0" encoding="utf-8"?><DATA>';
    }
    body() {
        return `<NAME>${this._data.name}</NAME><AGE>${this._data.age}</AGE>`;
    }
    foot() {
        return "</DATA>";
    }
    constructor(data) {
        super(data);
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
/*!********************************!*\
  !*** ./src/18Builder/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/18Builder/Car.ts");
/* harmony import */ var _CarBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarBuilder */ "./src/18Builder/CarBuilder.ts");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Data */ "./src/18Builder/Data.ts");
/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Director */ "./src/18Builder/Director.ts");
/* harmony import */ var _PlainTextBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlainTextBuilder */ "./src/18Builder/PlainTextBuilder.ts");
/* harmony import */ var _JSONBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JSONBuilder */ "./src/18Builder/JSONBuilder.ts");
/* harmony import */ var _XMLBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./XMLBuilder */ "./src/18Builder/XMLBuilder.ts");
// Builder Pattern
//  - 복잡하게 구성된 객체를 효과적으로 생성하는 패턴
//  - 알려지 Builder 패턴은 2가지임
//    1) 생성시 지정해야 할 인자가 많을 때 사용하는 패턴
//    2) 객체 생성시 여러 단계를 순차적으로 거칠 때, 이 단계의 순서를 결정해 두고 각 단계를 다양하게 구현할 수 있도록 하는 패턴
//
// [패턴 정리]
//  - Builder 패턴은 복잡한 설정으로 구성된 객체를 좀더 효과적으로 생성하기 위한 패턴으로...
//  - Builder 패턴의 목적은 2가지로
//    (1) 객체 생성 시 생성자의 인자가 너무 많을 경우에 좀더 효과적으로 생성하기 위해 사용되거나,
//    (2) 여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용됩니다.
//
// 패턴1 import


// 패턴2 import





// 패턴1 예제
const car1 = new _Car__WEBPACK_IMPORTED_MODULE_0__["default"]("V7", true, "black", true, false);
car1.print();
const car2 = new _CarBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]()
    .setEngine("v9")
    .setAirbag(false)
    .setCameraSensor(true)
    .setColor("white")
    .setAEB(false)
    .build();
car2?.print();
const carBuilder = new _CarBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]();
const blackCar = carBuilder
    .setEngine("v9")
    .setAirbag(false)
    .setCameraSensor(true)
    .setColor("black")
    .setAEB(false)
    .build();
// 원하는 속성만 변경
const whiteCar = carBuilder.setColor("white").build();
// engine, airbag 등은 기존 설정값 사용
blackCar?.print();
whiteCar?.print();
// 패턴2 예제 (통상 빌트패턴이라고 호칭하는 주된 패턴)
const data = new _Data__WEBPACK_IMPORTED_MODULE_2__["default"]("Jane", 76);
const builder = new _PlainTextBuilder__WEBPACK_IMPORTED_MODULE_4__["default"](data);
const director = new _Director__WEBPACK_IMPORTED_MODULE_3__["default"](builder);
const result = director.build();
console.log(result);
const jsonBuilder = new _JSONBuilder__WEBPACK_IMPORTED_MODULE_5__["default"](data);
const jsonDirector = new _Director__WEBPACK_IMPORTED_MODULE_3__["default"](jsonBuilder);
const jsonResult = jsonDirector.build();
console.log(jsonResult);
const xmlBuilder = new _XMLBuilder__WEBPACK_IMPORTED_MODULE_6__["default"](data);
const xmlDirector = new _Director__WEBPACK_IMPORTED_MODULE_3__["default"](xmlBuilder);
const xmlResult = xmlDirector.build();
console.log(xmlResult);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsSUFBSSx5REFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxNQUFNLFFBQVEsR0FBRyxJQUFJLGlEQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFcEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxvREFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLE1BQU0sWUFBWSxHQUFHLElBQUksaURBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMvQyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV4QixNQUFNLFVBQVUsR0FBRyxJQUFJLG1EQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxpREFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMvLi9zcmMvMThCdWlsZGVyL0J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMThCdWlsZGVyL0Nhci50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy8xOEJ1aWxkZXIvQ2FyQnVpbGRlci50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy8xOEJ1aWxkZXIvRGF0YS50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy8xOEJ1aWxkZXIvRGlyZWN0b3IudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMThCdWlsZGVyL0pTT05CdWlsZGVyLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzE4QnVpbGRlci9QbGFpblRleHRCdWlsZGVyLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzE4QnVpbGRlci9YTUxCdWlsZGVyLnRzIiwid2VicGFjazovL3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMThCdWlsZGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCdWlsZGVyIHtcbiAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IERhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuICBhYnN0cmFjdCBoZWFkKCk6IHN0cmluZztcbiAgYWJzdHJhY3QgYm9keSgpOiBzdHJpbmc7XG4gIGFic3RyYWN0IGZvb3QoKTogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcbiAgcHJpdmF0ZSBfZW5naW5lOiBzdHJpbmc7IC8vIOyXlOynhCDsnbTrpoRcbiAgcHJpdmF0ZSBfYWlyYmFnOiBib29sZWFuOyAvLyDsl5DslrTrsLEg7Jes67aAXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7IC8vIOywqOufiSDsg4nsg4FcbiAgcHJpdmF0ZSBfY2FtZXJhU2Vuc29yOiBib29sZWFuOyAvLyDsubTrqZTrnbwg7IS87IScIOycoOustFxuICBwcml2YXRlIF9BRUI6IGJvb2xlYW47IC8vIOyekOuPmeq4ieygnOuPmeyepey5mCDsnKDrrLRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbmdpbmU6IHN0cmluZyxcbiAgICBhaXJiYWc6IGJvb2xlYW4sXG4gICAgY29sb3I6IHN0cmluZyxcbiAgICBjYW1lcmFTZW5zb3I6IGJvb2xlYW4sXG4gICAgQUVCOiBib29sZWFuXG4gICkge1xuICAgIHRoaXMuX2VuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLl9haXJiYWcgPSBhaXJiYWc7XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLl9jYW1lcmFTZW5zb3IgPSBjYW1lcmFTZW5zb3I7XG4gICAgdGhpcy5fQUVCID0gQUVCO1xuICB9XG5cbiAgcHJpbnQoKTogdm9pZCB7XG4gICAgLy9jb25zb2xlLnRhYmxlKHRoaXMpOyDsnbTqsbAg7ZWE65Oc6rCAIOyEpOygleunjCDtlZjqs6Ag7IKs7Jqp7ZWY7KeAIOyViuuKlOuLpOuKlCDsmKTrpZgg7KCc6rGw66W8IOychO2VtCDsnbTroIfqsowg7KCB7Ja07JW8IO2VqFxuICAgIGNvbnNvbGUudGFibGUoe1xuICAgICAgZW5naW5lOiB0aGlzLl9lbmdpbmUsXG4gICAgICBhaXJiYWc6IHRoaXMuX2FpcmJhZyxcbiAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcbiAgICAgIGNhbWVyYVNlbnNvcjogdGhpcy5fY2FtZXJhU2Vuc29yLFxuICAgICAgQUVCOiB0aGlzLl9BRUIsXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIEJ1aWxkZXIgMe2YlVxuaW1wb3J0IENhciBmcm9tIFwiLi9DYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyQnVpbGRlciB7XG4gIHByaXZhdGUgX2VuZ2luZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOyAvLyDsl5Tsp4Qg7J2066aEXG4gIHByaXZhdGUgX2FpcmJhZzogYm9vbGVhbiA9IGZhbHNlOyAvLyDsl5DslrTrsLEg7Jes67aAXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7IC8vIOywqOufiSDsg4nsg4FcbiAgcHJpdmF0ZSBfY2FtZXJhU2Vuc29yOiBib29sZWFuID0gZmFsc2U7IC8vIOy5tOuplOudvCDshLzshJwg7Jyg66y0XG4gIHByaXZhdGUgX0FFQjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDsgLy8g7J6Q64+Z6riJ7KCc64+Z7J6l7LmYIOycoOustFxuXG4gIHNldEVuZ2luZSh2OiBzdHJpbmcgfCB1bmRlZmluZWQpOiB0aGlzIHtcbiAgICB0aGlzLl9lbmdpbmUgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QWlyYmFnKHY6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9haXJiYWcgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29sb3Iodjogc3RyaW5nIHwgdW5kZWZpbmVkKTogdGhpcyB7XG4gICAgdGhpcy5fY29sb3IgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q2FtZXJhU2Vuc29yKHY6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLl9jYW1lcmFTZW5zb3IgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QUVCKHY6IGJvb2xlYW4gfCB1bmRlZmluZWQpOiB0aGlzIHtcbiAgICB0aGlzLl9BRUIgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogQ2FyIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuX2VuZ2luZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLl9jb2xvciA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLl9BRUIgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBuZXcgQ2FyKFxuICAgICAgdGhpcy5fZW5naW5lLFxuICAgICAgdGhpcy5fYWlyYmFnLFxuICAgICAgdGhpcy5fY29sb3IsXG4gICAgICB0aGlzLl9jYW1lcmFTZW5zb3IsXG4gICAgICB0aGlzLl9BRUJcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhIHtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9hZ2U6IG51bWJlcjtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2FnZSA9IGFnZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIGdldCBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgQnVpbGRlciBmcm9tIFwiLi9CdWlsZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9yIHtcbiAgcHJpdmF0ZSBfYnVpbGRlcjogQnVpbGRlcjtcbiAgY29uc3RydWN0b3IoYnVpbGRlcjogQnVpbGRlcikge1xuICAgIHRoaXMuX2J1aWxkZXIgPSBidWlsZGVyO1xuICB9XG4gIGJ1aWxkKCkge1xuICAgIHJldHVybiBgJHt0aGlzLl9idWlsZGVyLmhlYWQoKX0ke3RoaXMuX2J1aWxkZXIuYm9keSgpfSR7dGhpcy5fYnVpbGRlci5mb290KCl9YDtcbiAgfVxufVxuIiwiaW1wb3J0IEJ1aWxkZXIgZnJvbSBcIi4vQnVpbGRlclwiO1xuaW1wb3J0IHR5cGUgRGF0YSBmcm9tIFwiLi9EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05CdWlsZGVyIGV4dGVuZHMgQnVpbGRlciB7XG4gIGhlYWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ7IFwiO1xuICB9XG5cbiAgYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgXCJOYW1lXCI6IFwiJHt0aGlzLl9kYXRhLm5hbWV9XCIsIFwiQWdlXCI6ICR7dGhpcy5fZGF0YS5hZ2V9YDtcbiAgfVxuXG4gIGZvb3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIgfVwiO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZGF0YTogRGF0YSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgQnVpbGRlciBmcm9tIFwiLi9CdWlsZGVyXCI7XG5pbXBvcnQgdHlwZSBEYXRhIGZyb20gXCIuL0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0QnVpbGRlciBleHRlbmRzIEJ1aWxkZXIge1xuICBoZWFkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgTmFtZTogJHt0aGlzLl9kYXRhLm5hbWV9LCBBZ2U6ICR7dGhpcy5fZGF0YS5hZ2V9YDtcbiAgfVxuICBmb290KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihkYXRhOiBEYXRhKSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCBCdWlsZGVyIGZyb20gXCIuL0J1aWxkZXJcIjtcbmltcG9ydCB0eXBlIERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxCdWlsZGVyIGV4dGVuZHMgQnVpbGRlciB7XG4gIGhlYWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cInV0Zi04XCI/PjxEQVRBPic7XG4gIH1cblxuICBib2R5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8TkFNRT4ke3RoaXMuX2RhdGEubmFtZX08L05BTUU+PEFHRT4ke3RoaXMuX2RhdGEuYWdlfTwvQUdFPmA7XG4gIH1cblxuICBmb290KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiPC9EQVRBPlwiO1xuICB9XG4gIGNvbnN0cnVjdG9yKGRhdGE6IERhdGEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBCdWlsZGVyIFBhdHRlcm5cbi8vICAtIOuzteyeoe2VmOqyjCDqtazshLHrkJwg6rCd7LK066W8IO2aqOqzvOyggeycvOuhnCDsg53shLHtlZjripQg7Yyo7YS0XG4vLyAgLSDslYzroKTsp4AgQnVpbGRlciDtjKjthLTsnYAgMuqwgOyngOyehFxuLy8gICAgMSkg7IOd7ISx7IucIOyngOygle2VtOyVvCDtlaAg7J247J6Q6rCAIOunjuydhCDrlYwg7IKs7Jqp7ZWY64qUIO2MqO2EtFxuLy8gICAgMikg6rCd7LK0IOyDneyEseyLnCDsl6zrn6wg64uo6rOE66W8IOyInOywqOyggeycvOuhnCDqsbDsuaAg65WMLCDsnbQg64uo6rOE7J2YIOyInOyEnOulvCDqsrDsoJXtlbQg65GQ6rOgIOqwgSDri6jqs4Trpbwg64uk7JaR7ZWY6rKMIOq1rO2YhO2VoCDsiJgg7J6I64+E66GdIO2VmOuKlCDtjKjthLRcbi8vXG4vLyBb7Yyo7YS0IOygleumrF1cbi8vICAtIEJ1aWxkZXIg7Yyo7YS07J2AIOuzteyeoe2VnCDshKTsoJXsnLzroZwg6rWs7ISx65CcIOqwneyytOulvCDsooDrjZQg7Zqo6rO87KCB7Jy866GcIOyDneyEse2VmOq4sCDsnITtlZwg7Yyo7YS07Jy866GcLi4uXG4vLyAgLSBCdWlsZGVyIO2MqO2EtOydmCDrqqnsoIHsnYAgMuqwgOyngOuhnFxuLy8gICAgKDEpIOqwneyytCDsg53shLEg7IucIOyDneyEseyekOydmCDsnbjsnpDqsIAg64SI66y0IOunjuydhCDqsr3smrDsl5Ag7KKA642UIO2aqOqzvOyggeycvOuhnCDsg53shLHtlZjquLAg7JyE7ZW0IOyCrOyaqeuQmOqxsOuCmCxcbi8vICAgICgyKSDsl6zrn6wg64uo6rOE7JeQIOqxuOyzkCDqsJ3ssrTqsIAg7IOd7ISx65CgIOuVjCDqsIEg64uo6rOE66W8IOuLpOyWke2VnCDrqqnsoIHsl5Ag65Sw6528IOq1rO2YhO2VmOq4sCDsnITtlbQg7IKs7Jqp65Cp64uI64ukLlxuLy9cbi8vIO2MqO2EtDEgaW1wb3J0XG5pbXBvcnQgQ2FyIGZyb20gXCIuL0NhclwiO1xuaW1wb3J0IENhckJ1aWxkZXIgZnJvbSBcIi4vQ2FyQnVpbGRlclwiO1xuXG4vLyDtjKjthLQyIGltcG9ydFxuaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuaW1wb3J0IERpcmVjdG9yIGZyb20gXCIuL0RpcmVjdG9yXCI7XG5pbXBvcnQgUGxhaW5UZXh0QnVpbGRlciBmcm9tIFwiLi9QbGFpblRleHRCdWlsZGVyXCI7XG5pbXBvcnQgSlNPTkJ1aWxkZXIgZnJvbSBcIi4vSlNPTkJ1aWxkZXJcIjtcbmltcG9ydCBYTUxCdWlsZGVyIGZyb20gXCIuL1hNTEJ1aWxkZXJcIjtcblxuLy8g7Yyo7YS0MSDsmIjsoJxcbmNvbnN0IGNhcjEgPSBuZXcgQ2FyKFwiVjdcIiwgdHJ1ZSwgXCJibGFja1wiLCB0cnVlLCBmYWxzZSk7XG5cbmNhcjEucHJpbnQoKTtcblxuY29uc3QgY2FyMiA9IG5ldyBDYXJCdWlsZGVyKClcbiAgLnNldEVuZ2luZShcInY5XCIpXG4gIC5zZXRBaXJiYWcoZmFsc2UpXG4gIC5zZXRDYW1lcmFTZW5zb3IodHJ1ZSlcbiAgLnNldENvbG9yKFwid2hpdGVcIilcbiAgLnNldEFFQihmYWxzZSlcbiAgLmJ1aWxkKCk7XG5cbmNhcjI/LnByaW50KCk7XG5cbmNvbnN0IGNhckJ1aWxkZXIgPSBuZXcgQ2FyQnVpbGRlcigpO1xuY29uc3QgYmxhY2tDYXIgPSBjYXJCdWlsZGVyXG4gIC5zZXRFbmdpbmUoXCJ2OVwiKVxuICAuc2V0QWlyYmFnKGZhbHNlKVxuICAuc2V0Q2FtZXJhU2Vuc29yKHRydWUpXG4gIC5zZXRDb2xvcihcImJsYWNrXCIpXG4gIC5zZXRBRUIoZmFsc2UpXG4gIC5idWlsZCgpO1xuLy8g7JuQ7ZWY64qUIOyGjeyEseunjCDrs4Dqsr1cbmNvbnN0IHdoaXRlQ2FyID0gY2FyQnVpbGRlci5zZXRDb2xvcihcIndoaXRlXCIpLmJ1aWxkKCk7XG4vLyBlbmdpbmUsIGFpcmJhZyDrk7HsnYAg6riw7KG0IOyEpOygleqwkiDsgqzsmqlcblxuYmxhY2tDYXI/LnByaW50KCk7XG53aGl0ZUNhcj8ucHJpbnQoKTtcblxuLy8g7Yyo7YS0MiDsmIjsoJwgKO2GteyDgSDruYztirjtjKjthLTsnbTrnbzqs6Ag7Zi47Lmt7ZWY64qUIOyjvOuQnCDtjKjthLQpXG5jb25zdCBkYXRhID0gbmV3IERhdGEoXCJKYW5lXCIsIDc2KTtcblxuY29uc3QgYnVpbGRlciA9IG5ldyBQbGFpblRleHRCdWlsZGVyKGRhdGEpO1xuY29uc3QgZGlyZWN0b3IgPSBuZXcgRGlyZWN0b3IoYnVpbGRlcik7XG5jb25zdCByZXN1bHQgPSBkaXJlY3Rvci5idWlsZCgpO1xuXG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5jb25zdCBqc29uQnVpbGRlciA9IG5ldyBKU09OQnVpbGRlcihkYXRhKTtcbmNvbnN0IGpzb25EaXJlY3RvciA9IG5ldyBEaXJlY3Rvcihqc29uQnVpbGRlcik7XG5jb25zdCBqc29uUmVzdWx0ID0ganNvbkRpcmVjdG9yLmJ1aWxkKCk7XG5cbmNvbnNvbGUubG9nKGpzb25SZXN1bHQpO1xuXG5jb25zdCB4bWxCdWlsZGVyID0gbmV3IFhNTEJ1aWxkZXIoZGF0YSk7XG5jb25zdCB4bWxEaXJlY3RvciA9IG5ldyBEaXJlY3Rvcih4bWxCdWlsZGVyKTtcbmNvbnN0IHhtbFJlc3VsdCA9IHhtbERpcmVjdG9yLmJ1aWxkKCk7XG5cbmNvbnNvbGUubG9nKHhtbFJlc3VsdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=