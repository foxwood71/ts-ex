/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/12Mediator/CoolAircon.ts":
/*!**************************************!*\
  !*** ./src/12Mediator/CoolAircon.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoolAircon)
/* harmony export */ });
/* harmony import */ var _Participaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participaint */ "./src/12Mediator/Participaint.ts");

class CoolAircon extends _Participaint__WEBPACK_IMPORTED_MODULE_0__["default"] {
    displayState(dom) {
        dom.innerHTML = this._bOff ? "에어컨 꺼짐" : "에어컨 가동중";
        if (this._bOff)
            dom.classList.remove("hilighting");
        else
            dom.classList.add("hilighting");
    }
    _bOff = true;
    constructor(mediator) {
        super(mediator);
    }
    on() {
        if (!this._bOff)
            return;
        this._bOff = false;
        this._mediator.participantChanged(this);
    }
    off() {
        if (this._bOff)
            return;
        this._bOff = true;
        this._mediator.participantChanged(this);
    }
    isRunning() {
        return !this._bOff;
    }
}


/***/ }),

/***/ "./src/12Mediator/Door.ts":
/*!********************************!*\
  !*** ./src/12Mediator/Door.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Door)
/* harmony export */ });
/* harmony import */ var _Participaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participaint */ "./src/12Mediator/Participaint.ts");

class Door extends _Participaint__WEBPACK_IMPORTED_MODULE_0__["default"] {
    displayState(dom) {
        dom.innerHTML = this._bClosed ? "문 CLOSE" : "문 OPEN";
        if (this._bClosed)
            dom.classList.remove("hilighting");
        else
            dom.classList.add("hilighting");
    }
    _bClosed = true;
    constructor(mediator) {
        super(mediator);
    }
    open() {
        if (!this._bClosed)
            return;
        this._bClosed = false;
        this._mediator.participantChanged(this);
    }
    close() {
        if (this._bClosed)
            return;
        this._bClosed = true;
        this._mediator.participantChanged(this);
    }
    isClosed() {
        return this._bClosed;
    }
}


/***/ }),

/***/ "./src/12Mediator/HeatBoler.ts":
/*!*************************************!*\
  !*** ./src/12Mediator/HeatBoler.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeatBoiler)
/* harmony export */ });
/* harmony import */ var _Participaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participaint */ "./src/12Mediator/Participaint.ts");

class HeatBoiler extends _Participaint__WEBPACK_IMPORTED_MODULE_0__["default"] {
    displayState(dom) {
        dom.innerHTML = this._bOff ? "보일러 꺼짐" : "보일러 가동중";
        if (this._bOff)
            dom.classList.remove("hilighting");
        else
            dom.classList.add("hilighting");
    }
    _bOff = true;
    constructor(mediator) {
        super(mediator);
    }
    on() {
        if (!this._bOff)
            return;
        this._bOff = false;
        this._mediator.participantChanged(this);
    }
    off() {
        if (this._bOff)
            return;
        this._bOff = true;
        this._mediator.participantChanged(this);
    }
    isRunning() {
        return !this._bOff;
    }
}


/***/ }),

/***/ "./src/12Mediator/Participaint.ts":
/*!****************************************!*\
  !*** ./src/12Mediator/Participaint.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Participaint)
/* harmony export */ });
class Participaint {
    _mediator;
    constructor(mediator) {
        this._mediator = mediator;
    }
}


/***/ }),

/***/ "./src/12Mediator/SmartHome.ts":
/*!*************************************!*\
  !*** ./src/12Mediator/SmartHome.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartHome)
/* harmony export */ });
/* harmony import */ var _CoolAircon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoolAircon */ "./src/12Mediator/CoolAircon.ts");
/* harmony import */ var _Door__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Door */ "./src/12Mediator/Door.ts");
/* harmony import */ var _Widnow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Widnow */ "./src/12Mediator/Widnow.ts");
/* harmony import */ var _HeatBoler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeatBoler */ "./src/12Mediator/HeatBoler.ts");




class SmartHome {
    door = new _Door__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    window = new _Widnow__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    aircon = new _CoolAircon__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    boiler = new _HeatBoler__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    display() {
        const domDoor = document.querySelector(".door");
        const domWindow = document.querySelector(".window");
        const domAircon = document.querySelector(".coolaricon");
        const domBoiler = document.querySelector(".heatboiler");
        this.door.displayState(domDoor);
        this.window.displayState(domWindow);
        this.aircon.displayState(domAircon);
        this.boiler.displayState(domBoiler);
    }
    install() {
        const domDoor = document.querySelector(".door");
        const domWindow = document.querySelector(".window");
        const domBoiler = document.querySelector(".heatboiler");
        const domAircon = document.querySelector(".coolaricon");
        domDoor.addEventListener("click", () => {
            this.door.isClosed() ? this.door.open() : this.door.close();
            this.display();
        });
        domWindow.addEventListener("click", () => {
            this.window.isClosed() ? this.window.open() : this.window.close();
            this.display();
        });
        domBoiler.addEventListener("click", () => {
            this.boiler.isRunning() ? this.boiler.off() : this.boiler.on();
            this.display();
        });
        domAircon.addEventListener("click", () => {
            this.aircon.isRunning() ? this.aircon.off() : this.aircon.on();
            this.display();
        });
        this.display();
    }
    participantChanged(participant) {
        if (participant === this.door && !this.door.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant === this.window && !this.window.isClosed()) {
            this.aircon.off();
            this.boiler.off();
        }
        if (participant === this.aircon && this.aircon.isRunning()) {
            this.boiler.off();
            this.door.close();
            this.window.close();
        }
        if (participant === this.boiler && this.boiler.isRunning()) {
            this.aircon.off();
            this.window.close();
            this.door.close();
        }
    }
}


/***/ }),

/***/ "./src/12Mediator/Widnow.ts":
/*!**********************************!*\
  !*** ./src/12Mediator/Widnow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _Participaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participaint */ "./src/12Mediator/Participaint.ts");

class Window extends _Participaint__WEBPACK_IMPORTED_MODULE_0__["default"] {
    displayState(dom) {
        dom.innerHTML = this._bClosed ? "창 CLOSE" : "창 OPEN";
        if (this._bClosed)
            dom.classList.remove("hilighting");
        else
            dom.classList.add("hilighting");
    }
    _bClosed = true;
    constructor(mediator) {
        super(mediator);
    }
    open() {
        if (!this._bClosed)
            return;
        this._bClosed = false;
        this._mediator.participantChanged(this);
    }
    close() {
        if (this._bClosed)
            return;
        this._bClosed = true;
        this._mediator.participantChanged(this);
    }
    isClosed() {
        return this._bClosed;
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
/*!*********************************!*\
  !*** ./src/12Mediator/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SmartHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmartHome */ "./src/12Mediator/SmartHome.ts");
// Mediator: 중재자
// [정리]
// - Mediator 패턴은 많은 객체들 간의 복잡한 관계를 중재자를 두어 단순화 시킵니다.
// - 또한 객체의 상태 변경으로 인해 다른 객체를 제어할 때 제어에 대한 흩어진 코드를
//   중재자로 모아 모두 처리해 줌으로써 객체들의 복잡한 관계를 제거 합니다.

const home = new _SmartHome__WEBPACK_IMPORTED_MODULE_0__["default"]();
home.install();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFakMsWUFBWSxRQUFrQjtRQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7Ozs7OztVQy9CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRCw2Q0FBNkM7QUFFVDtBQUVwQyxNQUFNLElBQUksR0FBRyxJQUFJLGtEQUFTLEVBQUUsQ0FBQztBQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy8uL3NyYy8xMk1lZGlhdG9yL0Nvb2xBaXJjb24udHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMTJNZWRpYXRvci9Eb29yLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzEyTWVkaWF0b3IvSGVhdEJvbGVyLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzEyTWVkaWF0b3IvUGFydGljaXBhaW50LnRzIiwid2VicGFjazovL3RzLy4vc3JjLzEyTWVkaWF0b3IvU21hcnRIb21lLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzEyTWVkaWF0b3IvV2lkbm93LnRzIiwid2VicGFjazovL3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMTJNZWRpYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBNZWRpYXRvciBmcm9tIFwiLi9NZWRpYXRvclwiO1xuaW1wb3J0IFBhcnRpY2lwYWludCBmcm9tIFwiLi9QYXJ0aWNpcGFpbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29vbEFpcmNvbiBleHRlbmRzIFBhcnRpY2lwYWludCB7XG4gIGRpc3BsYXlTdGF0ZShkb206IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgZG9tLmlubmVySFRNTCA9IHRoaXMuX2JPZmYgPyBcIuyXkOyWtOy7qCDqurzsp5BcIiA6IFwi7JeQ7Ja07LuoIOqwgOuPmeykkVwiO1xuICAgIGlmICh0aGlzLl9iT2ZmKSBkb20uY2xhc3NMaXN0LnJlbW92ZShcImhpbGlnaHRpbmdcIik7XG4gICAgZWxzZSBkb20uY2xhc3NMaXN0LmFkZChcImhpbGlnaHRpbmdcIik7XG4gIH1cblxuICBwcml2YXRlIF9iT2ZmOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICBzdXBlcihtZWRpYXRvcik7XG4gIH1cblxuICBvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2JPZmYpIHJldHVybjtcbiAgICB0aGlzLl9iT2ZmID0gZmFsc2U7XG4gICAgdGhpcy5fbWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgb2ZmKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9iT2ZmKSByZXR1cm47XG4gICAgdGhpcy5fYk9mZiA9IHRydWU7XG4gICAgdGhpcy5fbWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5fYk9mZjtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgTWVkaWF0b3IgZnJvbSBcIi4vTWVkaWF0b3JcIjtcbmltcG9ydCBQYXJ0aWNpcGFpbnQgZnJvbSBcIi4vUGFydGljaXBhaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvb3IgZXh0ZW5kcyBQYXJ0aWNpcGFpbnQge1xuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLl9iQ2xvc2VkID8gXCLrrLggQ0xPU0VcIiA6IFwi66y4IE9QRU5cIjtcbiAgICBpZiAodGhpcy5fYkNsb3NlZCkgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYkNsb3NlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2JDbG9zZWQpIHJldHVybjtcbiAgICB0aGlzLl9iQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fbWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2JDbG9zZWQpIHJldHVybjtcbiAgICB0aGlzLl9iQ2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc0Nsb3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYkNsb3NlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgTWVkaWF0b3IgZnJvbSBcIi4vTWVkaWF0b3JcIjtcbmltcG9ydCBQYXJ0aWNpcGFpbnQgZnJvbSBcIi4vUGFydGljaXBhaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYXRCb2lsZXIgZXh0ZW5kcyBQYXJ0aWNpcGFpbnQge1xuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLl9iT2ZmID8gXCLrs7Tsnbzrn6wg6rq87KeQXCIgOiBcIuuztOydvOufrCDqsIDrj5nspJFcIjtcbiAgICBpZiAodGhpcy5fYk9mZikgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYk9mZjogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9iT2ZmKSByZXR1cm47XG4gICAgdGhpcy5fYk9mZiA9IGZhbHNlO1xuICAgIHRoaXMuX21lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIG9mZigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYk9mZikgcmV0dXJuO1xuICAgIHRoaXMuX2JPZmYgPSB0cnVlO1xuICAgIHRoaXMuX21lZGlhdG9yLnBhcnRpY2lwYW50Q2hhbmdlZCh0aGlzKTtcbiAgfVxuXG4gIGlzUnVubmluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuX2JPZmY7XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIE1lZGlhdG9yIGZyb20gXCIuL01lZGlhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhcnRpY2lwYWludCB7XG4gIHByb3RlY3RlZCBfbWVkaWF0b3I6IE1lZGlhdG9yO1xuXG4gIGNvbnN0cnVjdG9yKG1lZGlhdG9yOiBNZWRpYXRvcikge1xuICAgIHRoaXMuX21lZGlhdG9yID0gbWVkaWF0b3I7XG4gIH1cbiAgYWJzdHJhY3QgZGlzcGxheVN0YXRlKGRvbTogSFRNTEVsZW1lbnQpOiB2b2lkO1xufVxuIiwiaW1wb3J0IENvb2xBaXJjb24gZnJvbSBcIi4vQ29vbEFpcmNvblwiO1xuaW1wb3J0IERvb3IgZnJvbSBcIi4vRG9vclwiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9XaWRub3dcIjtcbmltcG9ydCBIZWF0Qm9pbGVyIGZyb20gXCIuL0hlYXRCb2xlclwiO1xuaW1wb3J0IHR5cGUgTWVkaWF0b3IgZnJvbSBcIi4vTWVkaWF0b3JcIjtcbmltcG9ydCB0eXBlIFBhcnRpY2lwYWludCBmcm9tIFwiLi9QYXJ0aWNpcGFpbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRIb21lIGltcGxlbWVudHMgTWVkaWF0b3Ige1xuICBkb29yID0gbmV3IERvb3IodGhpcyk7XG4gIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcyk7XG4gIGFpcmNvbiA9IG5ldyBDb29sQWlyY29uKHRoaXMpO1xuICBib2lsZXIgPSBuZXcgSGVhdEJvaWxlcih0aGlzKTtcblxuICBkaXNwbGF5KCkge1xuICAgIGNvbnN0IGRvbURvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvb3JcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3dcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tQWlyY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29sYXJpY29uXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUJvaWxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhdGJvaWxlclwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIHRoaXMuZG9vci5kaXNwbGF5U3RhdGUoZG9tRG9vcik7XG4gICAgdGhpcy53aW5kb3cuZGlzcGxheVN0YXRlKGRvbVdpbmRvdyk7XG4gICAgdGhpcy5haXJjb24uZGlzcGxheVN0YXRlKGRvbUFpcmNvbik7XG4gICAgdGhpcy5ib2lsZXIuZGlzcGxheVN0YXRlKGRvbUJvaWxlcik7XG4gIH1cblxuICBpbnN0YWxsKCkge1xuICAgIGNvbnN0IGRvbURvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvb3JcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3dcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZG9tQm9pbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWF0Ym9pbGVyXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGRvbUFpcmNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29vbGFyaWNvblwiKSBhcyBIVE1MRWxlbWVudDtcblxuICAgIGRvbURvb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZG9vci5pc0Nsb3NlZCgpID8gdGhpcy5kb29yLm9wZW4oKSA6IHRoaXMuZG9vci5jbG9zZSgpO1xuICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgfSk7XG4gICAgZG9tV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLndpbmRvdy5pc0Nsb3NlZCgpID8gdGhpcy53aW5kb3cub3BlbigpIDogdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZG9tQm9pbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmJvaWxlci5pc1J1bm5pbmcoKSA/IHRoaXMuYm9pbGVyLm9mZigpIDogdGhpcy5ib2lsZXIub24oKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgZG9tQWlyY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmFpcmNvbi5pc1J1bm5pbmcoKSA/IHRoaXMuYWlyY29uLm9mZigpIDogdGhpcy5haXJjb24ub24oKTtcbiAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNwbGF5KCk7XG4gIH1cblxuICBwYXJ0aWNpcGFudENoYW5nZWQocGFydGljaXBhbnQ6IFBhcnRpY2lwYWludCk6IHZvaWQge1xuICAgIGlmIChwYXJ0aWNpcGFudCA9PT0gdGhpcy5kb29yICYmICF0aGlzLmRvb3IuaXNDbG9zZWQoKSkge1xuICAgICAgdGhpcy5haXJjb24ub2ZmKCk7XG4gICAgICB0aGlzLmJvaWxlci5vZmYoKTtcbiAgICB9XG4gICAgaWYgKHBhcnRpY2lwYW50ID09PSB0aGlzLndpbmRvdyAmJiAhdGhpcy53aW5kb3cuaXNDbG9zZWQoKSkge1xuICAgICAgdGhpcy5haXJjb24ub2ZmKCk7XG4gICAgICB0aGlzLmJvaWxlci5vZmYoKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMuYWlyY29uICYmIHRoaXMuYWlyY29uLmlzUnVubmluZygpKSB7XG4gICAgICB0aGlzLmJvaWxlci5vZmYoKTtcbiAgICAgIHRoaXMuZG9vci5jbG9zZSgpO1xuICAgICAgdGhpcy53aW5kb3cuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGljaXBhbnQgPT09IHRoaXMuYm9pbGVyICYmIHRoaXMuYm9pbGVyLmlzUnVubmluZygpKSB7XG4gICAgICB0aGlzLmFpcmNvbi5vZmYoKTtcbiAgICAgIHRoaXMud2luZG93LmNsb3NlKCk7XG4gICAgICB0aGlzLmRvb3IuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIE1lZGlhdG9yIGZyb20gXCIuL01lZGlhdG9yXCI7XG5pbXBvcnQgUGFydGljaXBhaW50IGZyb20gXCIuL1BhcnRpY2lwYWludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBQYXJ0aWNpcGFpbnQge1xuICBkaXNwbGF5U3RhdGUoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGRvbS5pbm5lckhUTUwgPSB0aGlzLl9iQ2xvc2VkID8gXCLssL0gQ0xPU0VcIiA6IFwi7LC9IE9QRU5cIjtcbiAgICBpZiAodGhpcy5fYkNsb3NlZCkgZG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWxpZ2h0aW5nXCIpO1xuICAgIGVsc2UgZG9tLmNsYXNzTGlzdC5hZGQoXCJoaWxpZ2h0aW5nXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYkNsb3NlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IobWVkaWF0b3I6IE1lZGlhdG9yKSB7XG4gICAgc3VwZXIobWVkaWF0b3IpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2JDbG9zZWQpIHJldHVybjtcbiAgICB0aGlzLl9iQ2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fbWVkaWF0b3IucGFydGljaXBhbnRDaGFuZ2VkKHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2JDbG9zZWQpIHJldHVybjtcbiAgICB0aGlzLl9iQ2xvc2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9tZWRpYXRvci5wYXJ0aWNpcGFudENoYW5nZWQodGhpcyk7XG4gIH1cblxuICBpc0Nsb3NlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYkNsb3NlZDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBNZWRpYXRvcjog7KSR7J6s7J6QXG4vLyBb7KCV66asXVxuLy8gLSBNZWRpYXRvciDtjKjthLTsnYAg66eO7J2AIOqwneyytOuTpCDqsITsnZgg67O17J6h7ZWcIOq0gOqzhOulvCDspJHsnqzsnpDrpbwg65GQ7Ja0IOuLqOyInO2ZlCDsi5ztgrXri4jri6QuXG4vLyAtIOuYkO2VnCDqsJ3ssrTsnZgg7IOB7YOcIOuzgOqyveycvOuhnCDsnbjtlbQg64uk66W4IOqwneyytOulvCDsoJzslrTtlaAg65WMIOygnOyWtOyXkCDrjIDtlZwg7Z2p7Ja07KeEIOy9lOuTnOulvFxuLy8gICDspJHsnqzsnpDroZwg66qo7JWEIOuqqOuRkCDsspjrpqztlbQg7KSM7Jy866Gc7I2oIOqwneyytOuTpOydmCDrs7XsnqHtlZwg6rSA6rOE66W8IOygnOqxsCDtlanri4jri6QuXG5cbmltcG9ydCBTbWFydEhvbWUgZnJvbSBcIi4vU21hcnRIb21lXCI7XG5cbmNvbnN0IGhvbWUgPSBuZXcgU21hcnRIb21lKCk7XG5ob21lLmluc3RhbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==