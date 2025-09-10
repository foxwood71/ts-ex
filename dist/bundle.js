/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/08Flyweight/Digit.ts":
/*!**********************************!*\
  !*** ./src/08Flyweight/Digit.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Digit)
/* harmony export */ });
class Digit {
    _data = null;
    _url;
    constructor(url) {
        this._url = url;
    }
    load(url, domOutput) {
        fetch(url)
            .then((response) => {
            return response.json();
        })
            .then((json) => {
            this._data = json;
            if (domOutput)
                this.put(domOutput);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    put(dom) {
        if (!this._data)
            this.load(this._url, dom);
        else {
            dom.innerHTML = '<div class="digit-layout"></div>';
            const domLayout = dom.querySelector(".digit-layout");
            this._data.forEach((item) => {
                const len = item.length;
                for (let i = 0; i < len; i++) {
                    const domCell = document.createElement("div");
                    // 주의
                    //  #ff00 -> rgba: RGB + Alpha(last digit)
                    //  #ff0 -> rgb: RGB
                    domCell.style.backgroundColor = item[i] === "1" ? "#ff0" : "#333";
                    domLayout?.append(domCell);
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/08Flyweight/DigitFactory.ts":
/*!*****************************************!*\
  !*** ./src/08Flyweight/DigitFactory.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DigitFactory)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/08Flyweight/Digit.ts");

class DigitFactory {
    pool = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    getDigit(n) {
        if (!this.pool[n])
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"](`./data/${n}.json`);
        return this.pool[n];
    }
}


/***/ }),

/***/ "./src/08Flyweight/Number.ts":
/*!***********************************!*\
  !*** ./src/08Flyweight/Number.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Number)
/* harmony export */ });
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/08Flyweight/DigitFactory.ts");

class Number {
    _factory;
    _num;
    constructor(factory, num) {
        this._factory = factory;
        this._num = num;
    }
    put(dom) {
        const strNum = this._num.toString();
        dom.innerHTML = "";
        // strNum[i]에서 'string | undefined' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
        // 'undefined' 형식은 'string' 형식에 할당할 수 없습니다." 에러가 발생
        //
        // strictNullChecks 옵션이 켜져 있으면 열이나 문자열에서 인덱스를 사용해 특정 요소에 접근(strNum[i])할 때
        // 그 결과값의 타입은 원본 타입과 undefined의 유니온 타입(string | undefined)으로 추론
        //
        // const len = strNum.length;
        //     for (let i = 0; i < len; i++) {
        //   const div = document.createElement("div");
        //   this._factory.getDigit(parseInt(strNum[i])).put(div);
        //   dom.append(div);
        // }
        // 상기 지적 개선
        for (const char of strNum) {
            const div = document.createElement("div");
            this._factory.getDigit(parseInt(char)).put(div);
            dom.append(div);
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
/*!**********************************!*\
  !*** ./src/08Flyweight/index.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/08Flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/08Flyweight/Number.ts");
// Flyweight Design-Pattern
// [개념]
// - 어떤 객체를 사용할 때마다 매번 생성하지 않고 한번만 생성하고 다시 필요해 질때는 이전에 생성된 객체를 재사용함
// - 즉 미리 생성된 객체를 공유해서 사용한다는 개념으로 특히 객체를 생성할 때 많은 자원(메모리, 소요시간 등)이 소모될 경우
//   유용 할 수 있음
// [정리]
// - Flyweight Design-Pattern은 동일한 객체를 여러 번 생성하지 않고 미리 생성해 두고 공유해 사용할 수 있음
// - Flyweight Design-Pattern을 통해 미리 생성해둔 객체는 공유의 개념으로 사용되므로 공유할 속성과 공유하지 않을 속성을 구분하여
//   설계할 필요가 있음
//


const factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
const domTaget = document.querySelector("#tmp");
let value = 100000;
setInterval(() => {
    const number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
    if (domTaget)
        number.put(domTaget);
}, 100);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWU7QUFDZixFQUFFO0FBRXdDO0FBQ1o7QUFFOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxxREFBWSxFQUFFLENBQUM7QUFDbkMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVoRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFbkIsV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUNmLE1BQU0sTUFBTSxHQUFHLElBQUksK0NBQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1QyxJQUFJLFFBQVE7UUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLy4vc3JjLzA4Rmx5d2VpZ2h0L0RpZ2l0LnRzIiwid2VicGFjazovL3RzLy4vc3JjLzA4Rmx5d2VpZ2h0L0RpZ2l0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy8wOEZseXdlaWdodC9OdW1iZXIudHMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy8uL3NyYy8wOEZseXdlaWdodC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdCB7XG4gIHByaXZhdGUgX2RhdGE6IEFycmF5PHN0cmluZz4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91cmwgPSB1cmw7XG4gIH1cblxuICBwcml2YXRlIGxvYWQodXJsOiBzdHJpbmcsIGRvbU91dHB1dDogRWxlbWVudCkge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBqc29uO1xuICAgICAgICBpZiAoZG9tT3V0cHV0KSB0aGlzLnB1dChkb21PdXRwdXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdXQoZG9tOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9kYXRhKSB0aGlzLmxvYWQodGhpcy5fdXJsLCBkb20pO1xuICAgIGVsc2Uge1xuICAgICAgZG9tLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZGlnaXQtbGF5b3V0XCI+PC9kaXY+JztcbiAgICAgIGNvbnN0IGRvbUxheW91dCA9IGRvbS5xdWVyeVNlbGVjdG9yKFwiLmRpZ2l0LWxheW91dFwiKTtcblxuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgbGVuID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBkb21DZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAvLyDso7zsnZhcbiAgICAgICAgICAvLyAgI2ZmMDAgLT4gcmdiYTogUkdCICsgQWxwaGEobGFzdCBkaWdpdClcbiAgICAgICAgICAvLyAgI2ZmMCAtPiByZ2I6IFJHQlxuICAgICAgICAgIGRvbUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaXRlbVtpXSA9PT0gXCIxXCIgPyBcIiNmZjBcIiA6IFwiIzMzM1wiO1xuICAgICAgICAgIGRvbUxheW91dD8uYXBwZW5kKGRvbUNlbGwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBEaWdpdCBmcm9tIFwiLi9EaWdpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdEZhY3Rvcnkge1xuICBwcml2YXRlIHBvb2w6IEFycmF5PERpZ2l0IHwgbnVsbD4gPSBbXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgXTtcblxuICBnZXREaWdpdChuOiBudW1iZXIpOiBEaWdpdCB7XG4gICAgaWYgKCF0aGlzLnBvb2xbbl0pIHRoaXMucG9vbFtuXSA9IG5ldyBEaWdpdChgLi9kYXRhLyR7bn0uanNvbmApO1xuICAgIHJldHVybiB0aGlzLnBvb2xbbl0hO1xuICB9XG59XG4iLCJpbXBvcnQgRGlnaXRGYWN0b3J5IGZyb20gXCIuL0RpZ2l0RmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXIge1xuICBwcml2YXRlIF9mYWN0b3J5OiBEaWdpdEZhY3Rvcnk7XG4gIHByaXZhdGUgX251bTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGZhY3Rvcnk6IERpZ2l0RmFjdG9yeSwgbnVtOiBudW1iZXIpIHtcbiAgICB0aGlzLl9mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB0aGlzLl9udW0gPSBudW07XG4gIH1cblxuICBwdXQoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3Qgc3RyTnVtID0gdGhpcy5fbnVtLnRvU3RyaW5nKCk7XG4gICAgZG9tLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBzdHJOdW1baV3sl5DshJwgJ3N0cmluZyB8IHVuZGVmaW5lZCcg7ZiV7Iud7J2YIOyduOyImOuKlCAnc3RyaW5nJyDtmJXsi53snZgg66ek6rCcIOuzgOyImOyXkCDtlaDri7nrkKAg7IiYIOyXhuyKteuLiOuLpC5cbiAgICAvLyAndW5kZWZpbmVkJyDtmJXsi53snYAgJ3N0cmluZycg7ZiV7Iud7JeQIO2VoOuLue2VoCDsiJgg7JeG7Iq164uI64ukLlwiIOyXkOufrOqwgCDrsJzsg51cbiAgICAvL1xuICAgIC8vIHN0cmljdE51bGxDaGVja3Mg7Ji17IWY7J20IOy8nOyguCDsnojsnLzrqbQg7Je07J2064KYIOusuOyekOyXtOyXkOyEnCDsnbjrjbHsiqTrpbwg7IKs7Jqp7ZW0IO2KueyglSDsmpTshozsl5Ag7KCR6re8KHN0ck51bVtpXSntlaAg65WMXG4gICAgLy8g6re4IOqysOqzvOqwkuydmCDtg4DsnoXsnYAg7JuQ67O4IO2DgOyeheqzvCB1bmRlZmluZWTsnZgg7Jyg64uI7JioIO2DgOyehShzdHJpbmcgfCB1bmRlZmluZWQp7Jy866GcIOy2lOuhoFxuICAgIC8vXG4gICAgLy8gY29uc3QgbGVuID0gc3RyTnVtLmxlbmd0aDtcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAvLyAgIHRoaXMuX2ZhY3RvcnkuZ2V0RGlnaXQocGFyc2VJbnQoc3RyTnVtW2ldKSkucHV0KGRpdik7XG4gICAgLy8gICBkb20uYXBwZW5kKGRpdik7XG4gICAgLy8gfVxuXG4gICAgLy8g7IOB6riwIOyngOyggSDqsJzshKBcbiAgICBmb3IgKGNvbnN0IGNoYXIgb2Ygc3RyTnVtKSB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGhpcy5fZmFjdG9yeS5nZXREaWdpdChwYXJzZUludChjaGFyKSkucHV0KGRpdik7XG4gICAgICBkb20uYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEZseXdlaWdodCBEZXNpZ24tUGF0dGVyblxuLy8gW+qwnOuFkF1cbi8vIC0g7Ja065akIOqwneyytOulvCDsgqzsmqntlaAg65WM66eI64ukIOunpOuyiCDsg53shLHtlZjsp4Ag7JWK6rOgIO2VnOuyiOunjCDsg53shLHtlZjqs6Ag64uk7IucIO2VhOyalO2VtCDsp4jrlYzripQg7J207KCE7JeQIOyDneyEseuQnCDqsJ3ssrTrpbwg7J6s7IKs7Jqp7ZWoXG4vLyAtIOymiSDrr7jrpqwg7IOd7ISx65CcIOqwneyytOulvCDqs7XsnKDtlbTshJwg7IKs7Jqp7ZWc64uk64qUIOqwnOuFkOycvOuhnCDtirntnogg6rCd7LK066W8IOyDneyEse2VoCDrlYwg66eO7J2AIOyekOybkCjrqZTrqqjrpqwsIOyGjOyalOyLnOqwhCDrk7Ep7J20IOyGjOuqqOuQoCDqsr3smrBcbi8vICAg7Jyg7JqpIO2VoCDsiJgg7J6I7J2MXG4vLyBb7KCV66asXVxuLy8gLSBGbHl3ZWlnaHQgRGVzaWduLVBhdHRlcm7snYAg64+Z7J287ZWcIOqwneyytOulvCDsl6zrn6wg67KIIOyDneyEse2VmOyngCDslYrqs6Ag66+466asIOyDneyEse2VtCDrkZDqs6Ag6rO17Jyg7ZW0IOyCrOyaqe2VoCDsiJgg7J6I7J2MXG4vLyAtIEZseXdlaWdodCBEZXNpZ24tUGF0dGVybuydhCDthrXtlbQg66+466asIOyDneyEse2VtOuRlCDqsJ3ssrTripQg6rO17Jyg7J2YIOqwnOuFkOycvOuhnCDsgqzsmqnrkJjrr4DroZwg6rO17Jyg7ZWgIOyGjeyEseqzvCDqs7XsnKDtlZjsp4Ag7JWK7J2EIOyGjeyEseydhCDqtazrtoTtlZjsl6xcbi8vICAg7ISk6rOE7ZWgIO2VhOyalOqwgCDsnojsnYxcbi8vXG5cbmltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSBcIi4vRGlnaXRGYWN0b3J5XCI7XG5pbXBvcnQgTnVtYmVyIGZyb20gXCIuL051bWJlclwiO1xuXG5jb25zdCBmYWN0b3J5ID0gbmV3IERpZ2l0RmFjdG9yeSgpO1xuY29uc3QgZG9tVGFnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RtcFwiKTtcblxubGV0IHZhbHVlID0gMTAwMDAwO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IG5ldyBOdW1iZXIoZmFjdG9yeSwgdmFsdWUrKyk7XG4gIGlmIChkb21UYWdldCkgbnVtYmVyLnB1dChkb21UYWdldCk7XG59LCAxMDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9