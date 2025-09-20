/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/15ChainOfResponsibilty/DomainHandler.ts":
/*!*****************************************************!*\
  !*** ./src/15ChainOfResponsibilty/DomainHandler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomainHandler)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/15ChainOfResponsibilty/Handler.ts");

class DomainHandler extends _Handler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    process(url) {
        const startIndex = url.indexOf("://");
        const lastIndex = url.lastIndexOf(":");
        if (startIndex === -1) {
            if (lastIndex === -1) {
                this.displayResult("DOMAIN", url);
            }
            else {
                this.displayResult("DOMAIN", url.substring(0, lastIndex));
            }
        }
        else if (startIndex !== lastIndex) {
            this.displayResult("DOMAIN", url.substring(startIndex + 3, lastIndex));
        }
        else if (startIndex === lastIndex) {
            this.displayResult("DOMAIN", url.substring(startIndex + 3));
        }
        else {
            this.displayResult("DOMAIN", "NONE");
        }
    }
}


/***/ }),

/***/ "./src/15ChainOfResponsibilty/Handler.ts":
/*!***********************************************!*\
  !*** ./src/15ChainOfResponsibilty/Handler.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
class Handler {
    nextHandler = null;
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    run(url) {
        this.process(url);
        if (this.nextHandler)
            this.nextHandler.run(url);
    }
    displayResult(title, content) {
        const domLayout = document.createElement("div");
        const domTitle = document.createElement("div");
        const domContent = document.createElement("div");
        domLayout.append(domTitle, domContent);
        domLayout.classList.add("layout");
        domTitle.classList.add("title");
        domContent.classList.add("content");
        domTitle.innerText = title;
        domContent.innerText = content;
        const domTarget = document.querySelector(".result");
        if (domTarget) {
            domTarget?.append(domLayout);
        }
    }
}


/***/ }),

/***/ "./src/15ChainOfResponsibilty/PortHandler.ts":
/*!***************************************************!*\
  !*** ./src/15ChainOfResponsibilty/PortHandler.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortHandler)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/15ChainOfResponsibilty/Handler.ts");

class PortHandler extends _Handler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    process(url) {
        const index = url.lastIndexOf(":");
        if (index !== -1) {
            const strPort = url.substring(index + 1);
            if (!isNaN(Number(strPort))) {
                this.displayResult("PORT", strPort);
                return;
            }
        }
        this.displayResult("PORT", "NONE");
    }
}


/***/ }),

/***/ "./src/15ChainOfResponsibilty/ProtocolHandler.ts":
/*!*******************************************************!*\
  !*** ./src/15ChainOfResponsibilty/ProtocolHandler.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProtocolHandler)
/* harmony export */ });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/15ChainOfResponsibilty/Handler.ts");

class ProtocolHandler extends _Handler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    process(url) {
        const index = url.indexOf("://");
        if (index !== -1) {
            this.displayResult("PROTOCOL", url.substring(0, index));
        }
        else {
            this.displayResult("PROTOCOL", "NONE");
        }
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
/*!*********************************************!*\
  !*** ./src/15ChainOfResponsibilty/index.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomainHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomainHandler */ "./src/15ChainOfResponsibilty/DomainHandler.ts");
/* harmony import */ var _PortHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortHandler */ "./src/15ChainOfResponsibilty/PortHandler.ts");
/* harmony import */ var _ProtocolHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProtocolHandler */ "./src/15ChainOfResponsibilty/ProtocolHandler.ts");
// Chain of Responsibuility design-Pattern
//  - 책임이란 무언가를 처리하는 기능(클래스)
//  - 역러개의 책임들을 동적으로 연결해서 순차적으로 실행하는 패턴
//  - 기능을 클래스 단위로 분리하여 구현함으로써 단일 책임의 원칙(SRP)을 자연스럽게 따르게 됨
//  ex)
//    url -> 책임(프로토콜) -> 책임2(도메인) -> 책임3(포트)
//    신용카드 -> 국민 -> 삼성 -> 현대
//
// [객체지향 설계원칙(SOLID)]
//  - 단일 책임 원칙(Single Responsiblity Principle): 각 클래스는 하나의 책임만 가져야 한다
//  - 개방-폐쇄 원칙(Open Closed Principle): 확장에는 열려 있고 수정에는 닫혀 있는, 즉 기존 코드를 변경하지 않으면서(Close).
//    기능을 추가할 수 있도록(Open) 설계 되어야 한다
//  - 리스코프 치환 원칙(Liskov Substitution Principle): 자식 클래스는 언제나 자신의 부모 클래를 대체할 수 있다.
//  - 인터페이스 분리 원칙(Interface Segregation Principle): 작은 기능별로 인터페이스를 작게 분리해야 한다.
//  - 의존 역전 원칙(Dependency Inversion Principle): 의존 관계를 맺을 때 변경이 자주 발생하는 것보다 변경이 거의 없는 것에 의존해야 한다는 것으로
//    최대한 인터페이스나 추상 클래스와 관계를 맺으라는 것임
//
//  [정리]
//  - Chain Of Respoinsibility 패턴은 기능 단위로 클래스를 분리하고 이 클래스의 객체를 연결해서 각 기능을 지정된 수서로 실행할 수 있는 패턴 입니다.
//  - 기능을 클래스 별로 분리하여 구현하도록 유도하므로 객체지향 설계 원칙 중 단일 책임 원칙 및 개방폐쇠원칙 등을 자연스럽게 따르게 됩니다.
//



const handler1 = new _ProtocolHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
const handler2 = new _DomainHandler__WEBPACK_IMPORTED_MODULE_0__["default"]();
const handler3 = new _PortHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
handler1.setNext(handler2).setNext(handler3); // return 문에 handler를 돌려줘서 chain처럼 연결된다
const domInput = document.querySelector("#url");
const domBtn = document.querySelector("#btn");
if (domBtn) {
    domBtn.addEventListener("click", () => {
        if (domInput) {
            const url = domInput.value;
            handler1.run(url);
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy8uL3NyYy8xNUNoYWluT2ZSZXNwb25zaWJpbHR5L0RvbWFpbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMTVDaGFpbk9mUmVzcG9uc2liaWx0eS9IYW5kbGVyLnRzIiwid2VicGFjazovL3RzLy4vc3JjLzE1Q2hhaW5PZlJlc3BvbnNpYmlsdHkvUG9ydEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMTVDaGFpbk9mUmVzcG9uc2liaWx0eS9Qcm90b2NvbEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy8uL3NyYy8xNUNoYWluT2ZSZXNwb25zaWJpbHR5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYW5kbGVyIGZyb20gXCIuL0hhbmRsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tYWluSGFuZGxlciBleHRlbmRzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB1cmwubGFzdEluZGV4T2YoXCI6XCIpO1xuXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICBpZiAobGFzdEluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJET01BSU5cIiwgdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIkRPTUFJTlwiLCB1cmwuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RhcnRJbmRleCAhPT0gbGFzdEluZGV4KSB7XG4gICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJET01BSU5cIiwgdXJsLnN1YnN0cmluZyhzdGFydEluZGV4ICsgMywgbGFzdEluZGV4KSk7XG4gICAgfSBlbHNlIGlmIChzdGFydEluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIkRPTUFJTlwiLCB1cmwuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIkRPTUFJTlwiLCBcIk5PTkVcIik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBIYW5kbGVyIHtcbiAgcHJvdGVjdGVkIG5leHRIYW5kbGVyOiBIYW5kbGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgc2V0TmV4dChoYW5kbGVyOiBIYW5kbGVyKTogSGFuZGxlciB7XG4gICAgdGhpcy5uZXh0SGFuZGxlciA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQ7XG4gIHJ1bih1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucHJvY2Vzcyh1cmwpO1xuICAgIGlmICh0aGlzLm5leHRIYW5kbGVyKSB0aGlzLm5leHRIYW5kbGVyLnJ1bih1cmwpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3BsYXlSZXN1bHQodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZG9tQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkb21MYXlvdXQuYXBwZW5kKGRvbVRpdGxlLCBkb21Db250ZW50KTtcbiAgICBkb21MYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICBkb21UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgZG9tQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcblxuICAgIGRvbVRpdGxlLmlubmVyVGV4dCA9IHRpdGxlO1xuICAgIGRvbUNvbnRlbnQuaW5uZXJUZXh0ID0gY29udGVudDtcblxuICAgIGNvbnN0IGRvbVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuICAgIGlmIChkb21UYXJnZXQpIHtcbiAgICAgIGRvbVRhcmdldD8uYXBwZW5kKGRvbUxheW91dCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnRIYW5kbGVyIGV4dGVuZHMgSGFuZGxlciB7XG4gIHByb3RlY3RlZCBwcm9jZXNzKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB1cmwubGFzdEluZGV4T2YoXCI6XCIpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3Qgc3RyUG9ydCA9IHVybC5zdWJzdHJpbmcoaW5kZXggKyAxKTtcbiAgICAgIGlmICghaXNOYU4oTnVtYmVyKHN0clBvcnQpKSkge1xuICAgICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJQT1JUXCIsIHN0clBvcnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlzcGxheVJlc3VsdChcIlBPUlRcIiwgXCJOT05FXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3RvY29sSGFuZGxlciBleHRlbmRzIEhhbmRsZXIge1xuICBwcm90ZWN0ZWQgcHJvY2Vzcyh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdXJsLmluZGV4T2YoXCI6Ly9cIik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5kaXNwbGF5UmVzdWx0KFwiUFJPVE9DT0xcIiwgdXJsLnN1YnN0cmluZygwLCBpbmRleCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlSZXN1bHQoXCJQUk9UT0NPTFwiLCBcIk5PTkVcIik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENoYWluIG9mIFJlc3BvbnNpYnVpbGl0eSBkZXNpZ24tUGF0dGVyblxuLy8gIC0g7LGF7J6E7J20656AIOustOyWuOqwgOulvCDsspjrpqztlZjripQg6riw64qlKO2BtOuemOyKpClcbi8vICAtIOyXreufrOqwnOydmCDssYXsnoTrk6TsnYQg64+Z7KCB7Jy866GcIOyXsOqysO2VtOyEnCDsiJzssKjsoIHsnLzroZwg7Iuk7ZaJ7ZWY64qUIO2MqO2EtFxuLy8gIC0g6riw64ql7J2EIO2BtOuemOyKpCDri6jsnITroZwg67aE66as7ZWY7JesIOq1rO2YhO2VqOycvOuhnOyNqCDri6jsnbwg7LGF7J6E7J2YIOybkOy5mShTUlAp7J2EIOyekOyXsOyKpOufveqyjCDrlLDrpbTqsowg65CoXG4vLyAgZXgpXG4vLyAgICB1cmwgLT4g7LGF7J6EKO2UhOuhnO2GoOy9nCkgLT4g7LGF7J6EMijrj4TrqZTsnbgpIC0+IOyxheyehDMo7Y+s7Yq4KVxuLy8gICAg7Iug7Jqp7Lm065OcIC0+IOq1reuvvCAtPiDsgrzshLEgLT4g7ZiE64yAXG4vL1xuLy8gW+qwneyytOyngO2WpSDshKTqs4Tsm5DsuZkoU09MSUQpXVxuLy8gIC0g64uo7J28IOyxheyehCDsm5DsuZkoU2luZ2xlIFJlc3BvbnNpYmxpdHkgUHJpbmNpcGxlKTog6rCBIO2BtOuemOyKpOuKlCDtlZjrgpjsnZgg7LGF7J6E66eMIOqwgOyguOyVvCDtlZzri6Rcbi8vICAtIOqwnOuwqS3tj5Dsh4Qg7JuQ7LmZKE9wZW4gQ2xvc2VkIFByaW5jaXBsZSk6IO2ZleyepeyXkOuKlCDsl7TroKQg7J6I6rOgIOyImOygleyXkOuKlCDri6vtmIAg7J6I64qULCDspokg6riw7KG0IOy9lOuTnOulvCDrs4Dqsr3tlZjsp4Ag7JWK7Jy866m07IScKENsb3NlKS5cbi8vICAgIOq4sOuKpeydhCDstpTqsIDtlaAg7IiYIOyeiOuPhOuhnShPcGVuKSDshKTqs4Qg65CY7Ja07JW8IO2VnOuLpFxuLy8gIC0g66as7Iqk7L2U7ZSEIOy5mO2ZmCDsm5DsuZkoTGlza292IFN1YnN0aXR1dGlvbiBQcmluY2lwbGUpOiDsnpDsi50g7YG0656Y7Iqk64qUIOyWuOygnOuCmCDsnpDsi6DsnZgg67aA66qoIO2BtOuemOulvCDrjIDssrTtlaAg7IiYIOyeiOuLpC5cbi8vICAtIOyduO2EsO2OmOydtOyKpCDrtoTrpqwg7JuQ7LmZKEludGVyZmFjZSBTZWdyZWdhdGlvbiBQcmluY2lwbGUpOiDsnpHsnYAg6riw64ql67OE66GcIOyduO2EsO2OmOydtOyKpOulvCDsnpHqsowg67aE66as7ZW07JW8IO2VnOuLpC5cbi8vICAtIOydmOyhtCDsl63soIQg7JuQ7LmZKERlcGVuZGVuY3kgSW52ZXJzaW9uIFByaW5jaXBsZSk6IOydmOyhtCDqtIDqs4Trpbwg66e67J2EIOuVjCDrs4Dqsr3snbQg7J6Q7KO8IOuwnOyDne2VmOuKlCDqsoPrs7Tri6Qg67OA6rK97J20IOqxsOydmCDsl4bripQg6rKD7JeQIOydmOyhtO2VtOyVvCDtlZzri6TripQg6rKD7Jy866GcXG4vLyAgICDstZzrjIDtlZwg7J247YSw7Y6Y7J207Iqk64KYIOy2lOyDgSDtgbTrnpjsiqTsmYAg6rSA6rOE66W8IOunuuycvOudvOuKlCDqsoPsnoRcbi8vXG4vLyAgW+ygleumrF1cbi8vICAtIENoYWluIE9mIFJlc3BvaW5zaWJpbGl0eSDtjKjthLTsnYAg6riw64qlIOuLqOychOuhnCDtgbTrnpjsiqTrpbwg67aE66as7ZWY6rOgIOydtCDtgbTrnpjsiqTsnZgg6rCd7LK066W8IOyXsOqysO2VtOyEnCDqsIEg6riw64ql7J2EIOyngOygleuQnCDsiJjshJzroZwg7Iuk7ZaJ7ZWgIOyImCDsnojripQg7Yyo7YS0IOyeheuLiOuLpC5cbi8vICAtIOq4sOuKpeydhCDtgbTrnpjsiqQg67OE66GcIOu2hOumrO2VmOyXrCDqtaztmITtlZjrj4TroZ0g7Jyg64+E7ZWY66+A66GcIOqwneyytOyngO2WpSDshKTqs4Qg7JuQ7LmZIOykkSDri6jsnbwg7LGF7J6EIOybkOy5mSDrsI8g6rCc67Cp7Y+Q7Ieg7JuQ7LmZIOuTseydhCDsnpDsl7DsiqTrn73qsowg65Sw66W06rKMIOuQqeuLiOuLpC5cbi8vXG5cbmltcG9ydCBEb21haW5IYW5kbGVyIGZyb20gXCIuL0RvbWFpbkhhbmRsZXJcIjtcbmltcG9ydCBQb3J0SGFuZGxlciBmcm9tIFwiLi9Qb3J0SGFuZGxlclwiO1xuaW1wb3J0IFByb3RvY29sSGFuZGxlciBmcm9tIFwiLi9Qcm90b2NvbEhhbmRsZXJcIjtcblxuY29uc3QgaGFuZGxlcjEgPSBuZXcgUHJvdG9jb2xIYW5kbGVyKCk7XG5jb25zdCBoYW5kbGVyMiA9IG5ldyBEb21haW5IYW5kbGVyKCk7XG5jb25zdCBoYW5kbGVyMyA9IG5ldyBQb3J0SGFuZGxlcigpO1xuXG5oYW5kbGVyMS5zZXROZXh0KGhhbmRsZXIyKS5zZXROZXh0KGhhbmRsZXIzKTsgLy8gcmV0dXJuIOusuOyXkCBoYW5kbGVy66W8IOuPjOugpOykmOyEnCBjaGFpbuyymOufvCDsl7DqsrDrkJzri6RcblxuY29uc3QgZG9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VybFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuY29uc3QgZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbmlmIChkb21CdG4pIHtcbiAgZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvbUlucHV0KSB7XG4gICAgICBjb25zdCB1cmwgPSBkb21JbnB1dC52YWx1ZTtcbiAgICAgIGhhbmRsZXIxLnJ1bih1cmwpO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=