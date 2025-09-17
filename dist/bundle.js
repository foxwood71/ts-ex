/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/13Memento/BlindMan.ts":
/*!***********************************!*\
  !*** ./src/13Memento/BlindMan.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   ActionNames: () => (/* binding */ ActionNames),
/* harmony export */   Memento: () => (/* binding */ Memento),
/* harmony export */   "default": () => (/* binding */ BlindMan)
/* harmony export */ });
//'erasableSyntaxOnly' 옵션을 활성화하면 TypeScript에서 enum 구문을 사용할 수 없음
// 그외에도 enum, namespace, class parameter property
//
// export enum Action {
//   UP = 1,
//   DOWN,
//   LEFT,
//   RIGHT,
// }
const Action = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
};
// 값 → 문자열 맵 enum의 역방향 참조 제시
const ActionNames = {
    [Action.UP]: "UP",
    [Action.DOWN]: "DOWN",
    [Action.LEFT]: "LEFT",
    [Action.RIGHT]: "RIGHT",
};
class Memento {
    _actions = new Array();
    _x;
    _y;
    get action() {
        return this._actions;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    constructor(x, y, actions) {
        this._x = x;
        this._y = y;
        this._actions = structuredClone(actions);
        //this._actions = JSON.parse(JOSN.stringify(actions)); // structuredClone 이 구문이 지원하지 않는 환경
    }
}
class BlindMan {
    _currentX;
    _currentY;
    _targetX;
    _targetY;
    _actions = new Array();
    constructor(crruntX, currentY, targetX, targety) {
        this._currentX = crruntX;
        this._currentY = currentY;
        this._targetX = targetX;
        this._targetY = targety;
    }
    walk(action) {
        this._actions.push(action);
        if (action === Action.UP)
            this._currentY += 1;
        else if (action === Action.RIGHT)
            this._currentX += 1;
        else if (action === Action.DOWN)
            this._currentY -= 1;
        else if (action === Action.LEFT)
            this._currentX -= 1;
        return Math.sqrt(Math.pow(this._targetX - this._currentX, 2) +
            Math.pow(this._targetY - this._currentY, 2));
    }
    createMemento() {
        const memonto = new Memento(this._currentX, this._currentY, this._actions);
        return memonto;
    }
    restoreMemento(memento) {
        this._currentX = memento.x;
        this._currentY = memento.y;
        this._actions = structuredClone(memento.action);
    }
    resultPath() {
        // return this._actions.map((action) => Action[action]).join("->");
        return this._actions.map((action) => ActionNames[action]).join("->");
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
  !*** ./src/13Memento/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlindMan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlindMan */ "./src/13Memento/BlindMan.ts");
// Memento Pattern
//  - Memento의 뜻은 "추억", "과거의 기억"
//  - 객체의 상태를 기억해 두었다가 필요할때 기억해둔 상태로 객체를 되돌린다
//  - 객체의 상테에 대한 기억은 다른 객체에서도 읽기 전용으로 접근할수 있다
//  - 객체의 상태에 대한 기억에 생성은 오직 해당 객체만 할 수 있다.
//  [정리]
//    - Memento Pattern은 객체의 상태를 기억해 두고 필요할때 다시 복원하기 위한 패턴입니다.
//    - 어떤 기능의 실행 이력 보관, 실행 취소, 재실행 등의 목적을 위해 활용될 수 있는 패턴입니다.
//    - 이미 기억된 객체의 상태가 변경되지 않도록 주의해야 합니다.
//
//

const blindMan = new _BlindMan__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 10, 10);
let minDistance = Number.MAX_VALUE;
let memento = null;
// enum 미사용 -- ACTION_VALUES 타입 단언으로 안전하게 처리
const ACTION_VALUES = Object.values(_BlindMan__WEBPACK_IMPORTED_MODULE_0__.Action);
// enum 미사용 --  랜덤 선택 함수
function getRandomAction() {
    const idx = Math.floor(Math.random() * ACTION_VALUES.length);
    const result = ACTION_VALUES[idx];
    if (result === undefined) {
        throw new Error("랜덤 인덱스 오류!");
    }
    return result;
}
while (true) {
    // enum 사용시
    //const action: Action = Math.floor(Math.random() * 4) + 1;
    // enum 미사용 --
    const action = getRandomAction();
    const distance = blindMan.walk(action);
    // enum 사용시
    //console.log(Action[action], distance);
    // enum 미 사용시
    console.log(_BlindMan__WEBPACK_IMPORTED_MODULE_0__.ActionNames[action], distance);
    if (distance === 0.0) {
        console.log("도착!");
        break;
    }
    // 이동시 거리가 멀어지면 기억해둔 최근의 좌표로 이동한다
    if (distance < minDistance) {
        minDistance = distance;
        memento = blindMan.createMemento();
    }
    else {
        if (memento != null) {
            blindMan.restoreMemento(memento);
            console.log(">> 최근 저장된 기억으로 이동!!"); // action array도 변화를 준다
        }
    }
}
console.log(blindMan.resultPath());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDO1FBQ3ZCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQztTQUFNLENBQUM7UUFDTixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNwQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUM3RCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMvLi9zcmMvMTNNZW1lbnRvL0JsaW5kTWFuLnRzIiwid2VicGFjazovL3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMvLi9zcmMvMTNNZW1lbnRvL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vJ2VyYXNhYmxlU3ludGF4T25seScg7Ji17IWY7J2EIO2ZnOyEse2ZlO2VmOuptCBUeXBlU2NyaXB07JeQ7IScIGVudW0g6rWs66y47J2EIOyCrOyaqe2VoCDsiJgg7JeG7J2MXG4vLyDqt7jsmbjsl5Drj4QgZW51bSwgbmFtZXNwYWNlLCBjbGFzcyBwYXJhbWV0ZXIgcHJvcGVydHlcbi8vXG4vLyBleHBvcnQgZW51bSBBY3Rpb24ge1xuLy8gICBVUCA9IDEsXG4vLyAgIERPV04sXG4vLyAgIExFRlQsXG4vLyAgIFJJR0hULFxuLy8gfVxuXG5leHBvcnQgY29uc3QgQWN0aW9uID0ge1xuICBVUDogMSxcbiAgRE9XTjogMixcbiAgTEVGVDogMyxcbiAgUklHSFQ6IDQsXG59IGFzIGNvbnN0O1xuXG4vLyDqsJIg4oaSIOusuOyekOyXtCDrp7UgZW51beydmCDsl63rsKntlqUg7LC47KGwIOygnOyLnFxuZXhwb3J0IGNvbnN0IEFjdGlvbk5hbWVzOiBSZWNvcmQ8QWN0aW9uLCBzdHJpbmc+ID0ge1xuICBbQWN0aW9uLlVQXTogXCJVUFwiLFxuICBbQWN0aW9uLkRPV05dOiBcIkRPV05cIixcbiAgW0FjdGlvbi5MRUZUXTogXCJMRUZUXCIsXG4gIFtBY3Rpb24uUklHSFRdOiBcIlJJR0hUXCIsXG59O1xuXG5leHBvcnQgdHlwZSBBY3Rpb24gPSAodHlwZW9mIEFjdGlvbilba2V5b2YgdHlwZW9mIEFjdGlvbl07XG5cbmV4cG9ydCBjbGFzcyBNZW1lbnRvIHtcbiAgcHJpdmF0ZSBfYWN0aW9ucyA9IG5ldyBBcnJheTxBY3Rpb24+KCk7XG4gIHByaXZhdGUgX3g6IG51bWJlcjtcbiAgcHJpdmF0ZSBfeTogbnVtYmVyO1xuXG4gIGdldCBhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnM7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLl95O1xuICB9XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFjdGlvbnM6IEFycmF5PEFjdGlvbj4pIHtcbiAgICB0aGlzLl94ID0geDtcbiAgICB0aGlzLl95ID0geTtcbiAgICB0aGlzLl9hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKGFjdGlvbnMpO1xuICAgIC8vdGhpcy5fYWN0aW9ucyA9IEpTT04ucGFyc2UoSk9TTi5zdHJpbmdpZnkoYWN0aW9ucykpOyAvLyBzdHJ1Y3R1cmVkQ2xvbmUg7J20IOq1rOusuOydtCDsp4Dsm5DtlZjsp4Ag7JWK64qUIO2ZmOqyvVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsaW5kTWFuIHtcbiAgcHJpdmF0ZSBfY3VycmVudFg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY3VycmVudFk6IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGFyZ2V0WDogbnVtYmVyO1xuICBwcml2YXRlIF90YXJnZXRZOiBudW1iZXI7XG4gIHByaXZhdGUgX2FjdGlvbnMgPSBuZXcgQXJyYXk8QWN0aW9uPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNycnVudFg6IG51bWJlcixcbiAgICBjdXJyZW50WTogbnVtYmVyLFxuICAgIHRhcmdldFg6IG51bWJlcixcbiAgICB0YXJnZXR5OiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5fY3VycmVudFggPSBjcnJ1bnRYO1xuICAgIHRoaXMuX2N1cnJlbnRZID0gY3VycmVudFk7XG4gICAgdGhpcy5fdGFyZ2V0WCA9IHRhcmdldFg7XG4gICAgdGhpcy5fdGFyZ2V0WSA9IHRhcmdldHk7XG4gIH1cblxuICB3YWxrKGFjdGlvbjogQWN0aW9uKTogbnVtYmVyIHtcbiAgICB0aGlzLl9hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICBpZiAoYWN0aW9uID09PSBBY3Rpb24uVVApIHRoaXMuX2N1cnJlbnRZICs9IDE7XG4gICAgZWxzZSBpZiAoYWN0aW9uID09PSBBY3Rpb24uUklHSFQpIHRoaXMuX2N1cnJlbnRYICs9IDE7XG4gICAgZWxzZSBpZiAoYWN0aW9uID09PSBBY3Rpb24uRE9XTikgdGhpcy5fY3VycmVudFkgLT0gMTtcbiAgICBlbHNlIGlmIChhY3Rpb24gPT09IEFjdGlvbi5MRUZUKSB0aGlzLl9jdXJyZW50WCAtPSAxO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KHRoaXMuX3RhcmdldFggLSB0aGlzLl9jdXJyZW50WCwgMikgK1xuICAgICAgICBNYXRoLnBvdyh0aGlzLl90YXJnZXRZIC0gdGhpcy5fY3VycmVudFksIDIpXG4gICAgKTtcbiAgfVxuICBjcmVhdGVNZW1lbnRvKCk6IE1lbWVudG8ge1xuICAgIGNvbnN0IG1lbW9udG8gPSBuZXcgTWVtZW50byh0aGlzLl9jdXJyZW50WCwgdGhpcy5fY3VycmVudFksIHRoaXMuX2FjdGlvbnMpO1xuICAgIHJldHVybiBtZW1vbnRvO1xuICB9XG4gIHJlc3RvcmVNZW1lbnRvKG1lbWVudG86IE1lbWVudG8pOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50WCA9IG1lbWVudG8ueDtcbiAgICB0aGlzLl9jdXJyZW50WSA9IG1lbWVudG8ueTtcbiAgICB0aGlzLl9hY3Rpb25zID0gc3RydWN0dXJlZENsb25lKG1lbWVudG8uYWN0aW9uKTtcbiAgfVxuXG4gIHJlc3VsdFBhdGgoKTogc3RyaW5nIHtcbiAgICAvLyByZXR1cm4gdGhpcy5fYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gQWN0aW9uW2FjdGlvbl0pLmpvaW4oXCItPlwiKTtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gQWN0aW9uTmFtZXNbYWN0aW9uXSkuam9pbihcIi0+XCIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE1lbWVudG8gUGF0dGVyblxuLy8gIC0gTWVtZW50b+ydmCDrnLvsnYAgXCLstpTslrVcIiwgXCLqs7zqsbDsnZgg6riw7Ja1XCJcbi8vICAtIOqwneyytOydmCDsg4Htg5zrpbwg6riw7Ja17ZW0IOuRkOyXiOuLpOqwgCDtlYTsmpTtlaDrlYwg6riw7Ja17ZW065GUIOyDge2DnOuhnCDqsJ3ssrTrpbwg65CY64+M66aw64ukXG4vLyAgLSDqsJ3ssrTsnZgg7IOB7YWM7JeQIOuMgO2VnCDquLDslrXsnYAg64uk66W4IOqwneyytOyXkOyEnOuPhCDsnb3quLAg7KCE7Jqp7Jy866GcIOygkeq3vO2VoOyImCDsnojri6Rcbi8vICAtIOqwneyytOydmCDsg4Htg5zsl5Ag64yA7ZWcIOq4sOyWteyXkCDsg53shLHsnYAg7Jik7KeBIO2VtOuLuSDqsJ3ssrTrp4wg7ZWgIOyImCDsnojri6QuXG4vLyAgW+ygleumrF1cbi8vICAgIC0gTWVtZW50byBQYXR0ZXJu7J2AIOqwneyytOydmCDsg4Htg5zrpbwg6riw7Ja17ZW0IOuRkOqzoCDtlYTsmpTtlaDrlYwg64uk7IucIOuzteybkO2VmOq4sCDsnITtlZwg7Yyo7YS07J6F64uI64ukLlxuLy8gICAgLSDslrTrlqQg6riw64ql7J2YIOyLpO2WiSDsnbTroKUg67O06rSALCDsi6Ttlokg7Leo7IaMLCDsnqzsi6Ttlokg65Ox7J2YIOuqqeyggeydhCDsnITtlbQg7Zmc7Jqp65CgIOyImCDsnojripQg7Yyo7YS07J6F64uI64ukLlxuLy8gICAgLSDsnbTrr7gg6riw7Ja165CcIOqwneyytOydmCDsg4Htg5zqsIAg67OA6rK965CY7KeAIOyViuuPhOuhnSDso7zsnZjtlbTslbwg7ZWp64uI64ukLlxuLy9cbi8vXG5cbmltcG9ydCBCbGluZE1hbiwgeyBNZW1lbnRvLCBBY3Rpb24sIEFjdGlvbk5hbWVzIH0gZnJvbSBcIi4vQmxpbmRNYW5cIjtcblxuY29uc3QgYmxpbmRNYW4gPSBuZXcgQmxpbmRNYW4oMCwgMCwgMTAsIDEwKTtcbmxldCBtaW5EaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG5sZXQgbWVtZW50bzogTWVtZW50byB8IG51bGwgPSBudWxsO1xuXG4vLyBlbnVtIOuvuOyCrOyaqSAtLSBBQ1RJT05fVkFMVUVTIO2DgOyehSDri6jslrjsnLzroZwg7JWI7KCE7ZWY6rKMIOyymOumrFxuY29uc3QgQUNUSU9OX1ZBTFVFUyA9IE9iamVjdC52YWx1ZXMoQWN0aW9uKSBhcyBBY3Rpb25bXTtcblxuLy8gZW51bSDrr7jsgqzsmqkgLS0gIOuenOuNpCDshKDtg50g7ZWo7IiYXG5mdW5jdGlvbiBnZXRSYW5kb21BY3Rpb24oKTogQWN0aW9uIHtcbiAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUNUSU9OX1ZBTFVFUy5sZW5ndGgpO1xuICBjb25zdCByZXN1bHQgPSBBQ1RJT05fVkFMVUVTW2lkeF07XG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIuuenOuNpCDsnbjrjbHsiqQg7Jik66WYIVwiKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG53aGlsZSAodHJ1ZSkge1xuICAvLyBlbnVtIOyCrOyaqeyLnFxuICAvL2NvbnN0IGFjdGlvbjogQWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxO1xuICAvLyBlbnVtIOuvuOyCrOyaqSAtLVxuICBjb25zdCBhY3Rpb246IEFjdGlvbiA9IGdldFJhbmRvbUFjdGlvbigpO1xuICBjb25zdCBkaXN0YW5jZSA9IGJsaW5kTWFuLndhbGsoYWN0aW9uKTtcblxuICAvLyBlbnVtIOyCrOyaqeyLnFxuICAvL2NvbnNvbGUubG9nKEFjdGlvblthY3Rpb25dLCBkaXN0YW5jZSk7XG4gIC8vIGVudW0g66+4IOyCrOyaqeyLnFxuICBjb25zb2xlLmxvZyhBY3Rpb25OYW1lc1thY3Rpb25dLCBkaXN0YW5jZSk7XG5cbiAgaWYgKGRpc3RhbmNlID09PSAwLjApIHtcbiAgICBjb25zb2xlLmxvZyhcIuuPhOywqSFcIik7XG4gICAgYnJlYWs7XG4gIH1cbiAgLy8g7J2064+Z7IucIOqxsOumrOqwgCDrqYDslrTsp4DrqbQg6riw7Ja17ZW065GUIOy1nOq3vOydmCDsooztkZzroZwg7J2064+Z7ZWc64ukXG4gIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBtZW1lbnRvID0gYmxpbmRNYW4uY3JlYXRlTWVtZW50bygpO1xuICB9IGVsc2Uge1xuICAgIGlmIChtZW1lbnRvICE9IG51bGwpIHtcbiAgICAgIGJsaW5kTWFuLnJlc3RvcmVNZW1lbnRvKG1lbWVudG8pO1xuICAgICAgY29uc29sZS5sb2coXCI+PiDstZzqt7wg7KCA7J6l65CcIOq4sOyWteycvOuhnCDsnbTrj5khIVwiKTsgLy8gYWN0aW9uIGFycmF564+EIOuzgO2ZlOulvCDspIDri6RcbiAgICB9XG4gIH1cbn1cblxuY29uc29sZS5sb2coYmxpbmRNYW4ucmVzdWx0UGF0aCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==