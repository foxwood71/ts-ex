/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/14Proxy/ProxyImage.ts":
/*!***********************************!*\
  !*** ./src/14Proxy/ProxyImage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PorxyImage)
/* harmony export */ });
/* harmony import */ var _RealImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RealImage */ "./src/14Proxy/RealImage.ts");

class PorxyImage {
    _image = null;
    _domLayout = null;
    _domTitle = null;
    _title;
    _url;
    _parent;
    constructor(title, url, parent) {
        this._title = title;
        this._url = url;
        this._parent = parent;
        this._domLayout = document.createElement("div");
        this._domLayout.classList.add("layout");
        this._parent.append(this._domLayout);
        this._domTitle = document.createElement("div");
        this._domTitle.classList.add("title-proxy");
        this._domTitle.innerHTML = `<span>${this._title}</span><br/><span>Click to load</span>`;
        this._domLayout.append(this._domTitle);
    }
    append() {
        if (this._image)
            return;
        if (this._domLayout) {
            // 외부에서 null 체크를 해도, 그 값이 콜백(addEventListener 내부 등)에서 실행되는 시점까지 동일하다는 보장이 없다고 TypeScript가 판단
            // 특히 클로저나 비동기 함수에서는 이 현상이 두드러집니다. 타입 가드(if문 등)의 효력이 블록/스코프 내에서만 인정되기 때문.
            this._domLayout.addEventListener("click", () => {
                if (this._domLayout) {
                    this._domLayout.style.border = "none";
                    this._domLayout.innerHTML = "";
                    this._image = new _RealImage__WEBPACK_IMPORTED_MODULE_0__["default"](this._title, this._url, this._domLayout);
                    this._image.append();
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/14Proxy/RealImage.ts":
/*!**********************************!*\
  !*** ./src/14Proxy/RealImage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RealImage)
/* harmony export */ });
class RealImage {
    _title;
    _url;
    _parent;
    _domLayout = null;
    _domTitle = null;
    _domImage = null;
    _domLoading = null;
    constructor(title, url, parent) {
        this._title = title;
        this._url = url;
        this._parent = parent;
        this._domLayout = document.createElement("div");
        this._domLayout.classList.add("layout");
        this._parent.append(this._domLayout);
        this._domTitle = document.createElement("div");
        this._domTitle.classList.add("title");
        this._domTitle.innerText = this._title;
        this._domLayout.append(this._domTitle);
        this._domLoading = document.createElement("div");
        this._domLoading.classList.add("loading");
        this._domLoading.innerText = "Loading...";
    }
    append() {
        if (this._domImage)
            return;
        this._domImage = new Image();
        if (this._domLayout && this._domLoading) {
            this._domLayout.append(this._domLoading);
        }
        else {
            throw console.error();
        }
        this._domImage.src = this._url;
        this._domImage.onload = () => {
            setTimeout(() => {
                // Optional Chaining과 Nullish Coalescing(널 병합연산자) 연산자 활용
                // Optional Chaining(?.) this._domLayout이 null이나 undefined일 경우 에러없이 처리
                // Nullish Coalescing(??) => const parentDom = this._domLayout ?? document.body; // Null | Undefined 일경우 오른쪽 값을제시
                // 타입단언=> null이 들어올 확율이 없다 강조!
                // 그 모든것을 무시하고 null or Undefined 여부를 확인하여 실행
                if (this._domLayout && this._domLoading && this._domImage) {
                    this._domLayout.removeChild(this._domLoading);
                    this._domLayout.append(this._domImage);
                }
                else {
                    // 1. console.error(): 이 부분은 브라우저의 개발자 도구나 Node.js 환경의 콘솔에 에러 메시지를 출력합니다.
                    //    일반적으로 이 함수는 에러 로그를 남기는 데 사용되지만, 실제로 프로그램의 실행을 멈추지는 않습니다.
                    // 2. throw: 이 키워드는 뒤에 오는 값을 **예외(exception)**로 던져서 프로그램의 일반적인 흐름을 중단시킵니다.
                    //    throw 뒤에는 숫자, 문자열, 객체 등 어떤 것이든 올 수 있지만, 보통은 new Error() 객체를 던져서
                    //    에러의 스택 트레이스(호출 경로)를 확인할 수 있게 합니다.
                    //
                    // console.error() 함수를 실행하여 에러 메시지를 콘솔에 출력한 다음,
                    // **console.error()가 반환하는 값(undefined)**을 예외로 던져서 프로그램의 실행을 멈춥니다.
                    // 권장은 throw new Error("오류 메시지"); 요게 더 좋음 오류의 원인을 상세하게 설명하고
                    // 디버깅에 필수적인 호출 스택 정보를 담고 있기 때문임.
                    //
                    throw console.error();
                }
            }, Math.random() * 5000 + 3000);
        };
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
/*!******************************!*\
  !*** ./src/14Proxy/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyImage */ "./src/14Proxy/ProxyImage.ts");
// Proxy의 뜻은 "대리인"
// - 어떤 작업의 실행을 대리인을 통해 실행하도록 하는 패턴
//
// [정리]
// - Proxy 패턴의 종류에는 가상 Proxy, 원격 Proxy, 보호 Proxy등이 있음.
// - 가상 Proxy는 필요한 시점까지 객체의 생성을 연기하고 마치 생성된 것 처럼 동작하다가 필요한 시점에 실제 객체를 생성해서 사용함
// - Proxy 패턴은 실제 기능 실행을 대리인(Proxy)을 통해 실행하도록 하는 것이 근복적인 목적임
//import RealImage from "./RealImage";

const items = [
    [
        "설산야경",
        "https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp",
    ],
    [
        "외로운늑대",
        "https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp",
    ],
    [
        "강변황혼",
        "https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp",
    ],
    [
        "일출",
        "https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp",
    ],
    [
        "지구탈출",
        "https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp",
    ],
    [
        "고양이",
        "https://wallpapers.com/images/hd/cute-praying-animal-kitten-fhuzpz6q5d3l5qpw.webp",
    ],
    [
        "사마귀",
        "https://wallpapers.com/images/high/sparkling-brown-praying-mantis-brhsitcpcco26pcl.webp",
    ],
    [
        "앵무새",
        "https://wallpapers.com/images/high/golden-conure-parrots-bifvcsdpuwm1gxlf.webp",
    ],
    [
        "비둘기",
        "https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp",
    ],
    [
        "벌",
        "https://wallpapers.com/images/high/bee-desktop-wallpaper-c0hpghgtppnmux5f.webp",
    ],
    [
        "닭",
        "https://wallpapers.com/images/high/rooster-tied-in-rock-9x6089a6edflz844.webp",
    ],
    [
        "도마뱀",
        "https://wallpapers.com/images/high/green-gecko-reptile-atv6058gd3fj8ors.webp",
    ],
    [
        "노란앵무새",
        "https://wallpapers.com/images/high/two-conure-parrots-with-blurry-backdrop-elrhq1l9840e79xd.webp",
    ],
    [
        "하얀비둘기",
        "https://wallpapers.com/images/high/elegant-white-indian-fantail-pigeons-cxlk42hr0htvks8p.webp",
    ],
    [
        "부엉이",
        "https://wallpapers.com/images/high/little-owlet-animal-lg0huhcfvtwb6kci.webp",
    ],
    [
        "무지개비둘기",
        "https://wallpapers.com/images/high/colorful-homing-pigeon-birds-macro-shot-64tnhxlh4t361yxq.webp",
    ],
    [
        "뱀",
        "https://wallpapers.com/images/high/cobra-close-up-hissing-tongue-4l5lbdbi3rblrsjj.webp",
    ],
];
const domList = document.querySelector(".list");
items.forEach((item) => {
    const title = item[0];
    const url = item[1];
    if (!domList)
        return;
    // const img = new RealImage(title, url, domList);
    const img = new _ProxyImage__WEBPACK_IMPORTED_MODULE_0__["default"](title, url, domList);
    img.append();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLy4vc3JjLzE0UHJveHkvUHJveHlJbWFnZS50cyIsIndlYnBhY2s6Ly90cy8uL3NyYy8xNFByb3h5L1JlYWxJbWFnZS50cyIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLy4vc3JjLzE0UHJveHkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmltcG9ydCBSZWFsSW1hZ2UgZnJvbSBcIi4vUmVhbEltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcnh5SW1hZ2UgaW1wbGVtZW50cyBJbWFnZSB7XG4gIHByaXZhdGUgX2ltYWdlOiBSZWFsSW1hZ2UgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZG9tTGF5b3V0OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9kb21UaXRsZTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BhcmVudDogRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcGFyZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuXG4gICAgdGhpcy5fZG9tTGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLl9kb21MYXlvdXQuY2xhc3NMaXN0LmFkZChcImxheW91dFwiKTtcbiAgICB0aGlzLl9wYXJlbnQuYXBwZW5kKHRoaXMuX2RvbUxheW91dCk7XG5cbiAgICB0aGlzLl9kb21UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5fZG9tVGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlLXByb3h5XCIpO1xuICAgIHRoaXMuX2RvbVRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj4ke3RoaXMuX3RpdGxlfTwvc3Bhbj48YnIvPjxzcGFuPkNsaWNrIHRvIGxvYWQ8L3NwYW4+YDtcbiAgICB0aGlzLl9kb21MYXlvdXQuYXBwZW5kKHRoaXMuX2RvbVRpdGxlKTtcbiAgfVxuXG4gIGFwcGVuZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW1hZ2UpIHJldHVybjtcbiAgICBpZiAodGhpcy5fZG9tTGF5b3V0KSB7XG4gICAgICAvLyDsmbjrtoDsl5DshJwgbnVsbCDssrTtgazrpbwg7ZW064+ELCDqt7gg6rCS7J20IOy9nOuwsShhZGRFdmVudExpc3RlbmVyIOuCtOu2gCDrk7Ep7JeQ7IScIOyLpO2WieuQmOuKlCDsi5zsoJDquYzsp4Ag64+Z7J287ZWY64uk64qUIOuztOyepeydtCDsl4bri6Tqs6AgVHlwZVNjcmlwdOqwgCDtjJDri6hcbiAgICAgIC8vIO2Kue2eiCDtgbTroZzsoIDrgpgg67mE64+Z6riwIO2VqOyImOyXkOyEnOuKlCDsnbQg7ZiE7IOB7J20IOuRkOuTnOufrOynkeuLiOuLpC4g7YOA7J6FIOqwgOuTnChpZuusuCDrk7Ep7J2YIO2aqOugpeydtCDruJTroZ0v7Iqk7L2U7ZSEIOuCtOyXkOyEnOunjCDsnbjsoJXrkJjquLAg65WM66y4LlxuICAgICAgdGhpcy5fZG9tTGF5b3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9kb21MYXlvdXQpIHtcbiAgICAgICAgICB0aGlzLl9kb21MYXlvdXQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgICAgdGhpcy5fZG9tTGF5b3V0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgdGhpcy5faW1hZ2UgPSBuZXcgUmVhbEltYWdlKHRoaXMuX3RpdGxlLCB0aGlzLl91cmwsIHRoaXMuX2RvbUxheW91dCk7XG4gICAgICAgICAgdGhpcy5faW1hZ2UuYXBwZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhbEltYWdlIGltcGxlbWVudHMgSW1hZ2Uge1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuICBwcml2YXRlIF91cmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfcGFyZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9kb21MYXlvdXQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2RvbVRpdGxlOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9kb21JbWFnZTogSFRNTEltYWdlRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9kb21Mb2FkaW5nOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBwYXJlbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLl9kb21MYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuX2RvbUxheW91dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0XCIpO1xuICAgIHRoaXMuX3BhcmVudC5hcHBlbmQodGhpcy5fZG9tTGF5b3V0KTtcblxuICAgIHRoaXMuX2RvbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLl9kb21UaXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGhpcy5fZG9tVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZG9tTGF5b3V0LmFwcGVuZCh0aGlzLl9kb21UaXRsZSk7XG5cbiAgICB0aGlzLl9kb21Mb2FkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLl9kb21Mb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xuICAgIHRoaXMuX2RvbUxvYWRpbmcuaW5uZXJUZXh0ID0gXCJMb2FkaW5nLi4uXCI7XG4gIH1cblxuICBhcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2RvbUltYWdlKSByZXR1cm47XG4gICAgdGhpcy5fZG9tSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGlmICh0aGlzLl9kb21MYXlvdXQgJiYgdGhpcy5fZG9tTG9hZGluZykge1xuICAgICAgdGhpcy5fZG9tTGF5b3V0LmFwcGVuZCh0aGlzLl9kb21Mb2FkaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgY29uc29sZS5lcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMuX2RvbUltYWdlLnNyYyA9IHRoaXMuX3VybDtcbiAgICB0aGlzLl9kb21JbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gT3B0aW9uYWwgQ2hhaW5pbmfqs7wgTnVsbGlzaCBDb2FsZXNjaW5nKOuEkCDrs5Htlansl7DsgrDsnpApIOyXsOyCsOyekCDtmZzsmqlcbiAgICAgICAgLy8gT3B0aW9uYWwgQ2hhaW5pbmcoPy4pIHRoaXMuX2RvbUxheW91dOydtCBudWxs7J2064KYIHVuZGVmaW5lZOydvCDqsr3smrAg7JeQ65+s7JeG7J20IOyymOumrFxuICAgICAgICAvLyBOdWxsaXNoIENvYWxlc2NpbmcoPz8pID0+IGNvbnN0IHBhcmVudERvbSA9IHRoaXMuX2RvbUxheW91dCA/PyBkb2N1bWVudC5ib2R5OyAvLyBOdWxsIHwgVW5kZWZpbmVkIOydvOqyveyasCDsmKTrpbjsqr0g6rCS7J2E7KCc7IucXG4gICAgICAgIC8vIO2DgOyeheuLqOyWuD0+IG51bGzsnbQg65Ok7Ja07JisIO2ZleycqOydtCDsl4bri6Qg6rCV7KGwIVxuICAgICAgICAvLyDqt7gg66qo65Og6rKD7J2EIOustOyLnO2VmOqzoCBudWxsIG9yIFVuZGVmaW5lZCDsl6zrtoDrpbwg7ZmV7J247ZWY7JesIOyLpO2WiVxuICAgICAgICBpZiAodGhpcy5fZG9tTGF5b3V0ICYmIHRoaXMuX2RvbUxvYWRpbmcgJiYgdGhpcy5fZG9tSW1hZ2UpIHtcbiAgICAgICAgICB0aGlzLl9kb21MYXlvdXQucmVtb3ZlQ2hpbGQodGhpcy5fZG9tTG9hZGluZyk7XG4gICAgICAgICAgdGhpcy5fZG9tTGF5b3V0LmFwcGVuZCh0aGlzLl9kb21JbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gMS4gY29uc29sZS5lcnJvcigpOiDsnbQg67aA67aE7J2AIOu4jOudvOyasOyggOydmCDqsJzrsJzsnpAg64+E6rWs64KYIE5vZGUuanMg7ZmY6rK97J2YIOy9mOyGlOyXkCDsl5Drn6wg66mU7Iuc7KeA66W8IOy2nOugpe2VqeuLiOuLpC5cbiAgICAgICAgICAvLyAgICDsnbzrsJjsoIHsnLzroZwg7J20IO2VqOyImOuKlCDsl5Drn6wg66Gc6re466W8IOuCqOq4sOuKlCDrjbAg7IKs7Jqp65CY7KeA66eMLCDsi6TsoJzroZwg7ZSE66Gc6re4656o7J2YIOyLpO2WieydhCDrqYjstpTsp4DripQg7JWK7Iq164uI64ukLlxuICAgICAgICAgIC8vIDIuIHRocm93OiDsnbQg7YKk7JuM65Oc64qUIOuSpOyXkCDsmKTripQg6rCS7J2EICoq7JiI7Jm4KGV4Y2VwdGlvbikqKuuhnCDrjZjsoLjshJwg7ZSE66Gc6re4656o7J2YIOydvOuwmOyggeyduCDtnZDrpoTsnYQg7KSR64uo7Iuc7YK164uI64ukLlxuICAgICAgICAgIC8vICAgIHRocm93IOuSpOyXkOuKlCDsiKvsnpAsIOusuOyekOyXtCwg6rCd7LK0IOuTsSDslrTrlqQg6rKD7J2065OgIOyYrCDsiJgg7J6I7KeA66eMLCDrs7TthrXsnYAgbmV3IEVycm9yKCkg6rCd7LK066W8IOuNmOyguOyEnFxuICAgICAgICAgIC8vICAgIOyXkOufrOydmCDsiqTtg50g7Yq466CI7J207IqkKO2YuOy2nCDqsr3roZwp66W8IO2ZleyduO2VoCDsiJgg7J6I6rKMIO2VqeuLiOuLpC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoKSDtlajsiJjrpbwg7Iuk7ZaJ7ZWY7JesIOyXkOufrCDrqZTsi5zsp4Drpbwg7L2Y7IaU7JeQIOy2nOugpe2VnCDri6TsnYwsXG4gICAgICAgICAgLy8gKipjb25zb2xlLmVycm9yKCnqsIAg67CY7ZmY7ZWY64qUIOqwkih1bmRlZmluZWQpKirsnYQg7JiI7Jm466GcIOuNmOyguOyEnCDtlITroZzqt7jrnqjsnZgg7Iuk7ZaJ7J2EIOupiOy2peuLiOuLpC5cbiAgICAgICAgICAvLyDqtozsnqXsnYAgdGhyb3cgbmV3IEVycm9yKFwi7Jik66WYIOuplOyLnOyngFwiKTsg7JqU6rKMIOuNlCDsoovsnYwg7Jik66WY7J2YIOybkOyduOydhCDsg4HshLjtlZjqsowg7ISk66qF7ZWY6rOgXG4gICAgICAgICAgLy8g65SU67KE6rmF7JeQIO2VhOyImOyggeyduCDtmLjstpwg7Iqk7YOdIOygleuztOulvCDri7Tqs6Ag7J6I6riwIOuVjOusuOyehC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDUwMDAgKyAzMDAwKTtcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFByb3h57J2YIOucu+ydgCBcIuuMgOumrOyduFwiXG4vLyAtIOyWtOuWpCDsnpHsl4XsnZgg7Iuk7ZaJ7J2EIOuMgOumrOyduOydhCDthrXtlbQg7Iuk7ZaJ7ZWY64+E66GdIO2VmOuKlCDtjKjthLRcbi8vXG4vLyBb7KCV66asXVxuLy8gLSBQcm94eSDtjKjthLTsnZgg7KKF66WY7JeQ64qUIOqwgOyDgSBQcm94eSwg7JuQ6rKpIFByb3h5LCDrs7TtmLggUHJveHnrk7HsnbQg7J6I7J2MLlxuLy8gLSDqsIDsg4EgUHJveHnripQg7ZWE7JqU7ZWcIOyLnOygkOq5jOyngCDqsJ3ssrTsnZgg7IOd7ISx7J2EIOyXsOq4sO2VmOqzoCDrp4jsuZgg7IOd7ISx65CcIOqygyDsspjrn7wg64+Z7J6R7ZWY64uk6rCAIO2VhOyalO2VnCDsi5zsoJDsl5Ag7Iuk7KCcIOqwneyytOulvCDsg53shLHtlbTshJwg7IKs7Jqp7ZWoXG4vLyAtIFByb3h5IO2MqO2EtOydgCDsi6TsoJwg6riw64qlIOyLpO2WieydhCDrjIDrpqzsnbgoUHJveHkp7J2EIO2Gte2VtCDsi6TtlontlZjrj4TroZ0g7ZWY64qUIOqyg+ydtCDqt7zrs7XsoIHsnbgg66qp7KCB7J6EXG5cbi8vaW1wb3J0IFJlYWxJbWFnZSBmcm9tIFwiLi9SZWFsSW1hZ2VcIjtcbmltcG9ydCBQcm94eUltYWdlIGZyb20gXCIuL1Byb3h5SW1hZ2VcIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gIFtcbiAgICBcIuyEpOyCsOyVvOqyvVwiLFxuICAgIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vc25vdy1tb3VudGFpbi1uaWdodC13YWxscGFwZXItODEzMDVfdzYzNS53ZWJwXCIsXG4gIF0sXG4gIFtcbiAgICBcIuyZuOuhnOyatOuKkeuMgFwiLFxuICAgIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vZmFudGFzeS13b3JsZC13YWxscGFwZXItMjk4OTdfdzYzNS53ZWJwXCIsXG4gIF0sXG4gIFtcbiAgICBcIuqwleuzgO2Zqe2YvFwiLFxuICAgIFwiaHR0cHM6Ly9jZG4uYmhkdy5uZXQvaW0vc3Vuc2V0LW1pbmltYWxpc3Qtd2FsbHBhcGVyLTgxMDcyX3c2MzUud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLsnbzstpxcIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL3N1bnNldC1zY2VuZXJ5LW1pbmltYWxpc3Qtd2FsbHBhcGVyLTgxMzc5X3c2MzUud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLsp4Dqtaztg4jstpxcIixcbiAgICBcImh0dHBzOi8vY2RuLmJoZHcubmV0L2ltL21vdW50YWluLXNjZW5lcnktYXJ0LXdhbGxwYXBlci04MTA5NV93NjM1LndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi6rOg7JaR7J20XCIsXG4gICAgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oZC9jdXRlLXByYXlpbmctYW5pbWFsLWtpdHRlbi1maHV6cHo2cTVkM2w1cXB3LndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi7IKs66eI6reAXCIsXG4gICAgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL3NwYXJrbGluZy1icm93bi1wcmF5aW5nLW1hbnRpcy1icmhzaXRjcGNjbzI2cGNsLndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi7JW166y07IOIXCIsXG4gICAgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2dvbGRlbi1jb251cmUtcGFycm90cy1iaWZ2Y3NkcHV3bTFneGxmLndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi67mE65GY6riwXCIsXG4gICAgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2ZseWluZy1ob21pbmctcGlnZW9uLWxvdy1hbmdsZS1zaG90LWJsaXE5NXYwMndqdDJkN2Iud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLrsoxcIixcbiAgICBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvYmVlLWRlc2t0b3Atd2FsbHBhcGVyLWMwaHBnaGd0cHBubXV4NWYud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLri61cIixcbiAgICBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvcm9vc3Rlci10aWVkLWluLXJvY2stOXg2MDg5YTZlZGZsejg0NC53ZWJwXCIsXG4gIF0sXG4gIFtcbiAgICBcIuuPhOuniOuxgFwiLFxuICAgIFwiaHR0cHM6Ly93YWxscGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9ncmVlbi1nZWNrby1yZXB0aWxlLWF0djYwNThnZDNmajhvcnMud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLrhbjrnoDslbXrrLTsg4hcIixcbiAgICBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvdHdvLWNvbnVyZS1wYXJyb3RzLXdpdGgtYmx1cnJ5LWJhY2tkcm9wLWVscmhxMWw5ODQwZTc5eGQud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLtlZjsloDruYTrkZjquLBcIixcbiAgICBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvZWxlZ2FudC13aGl0ZS1pbmRpYW4tZmFudGFpbC1waWdlb25zLWN4bGs0MmhyMGh0dmtzOHAud2VicFwiLFxuICBdLFxuICBbXG4gICAgXCLrtoDsl4nsnbRcIixcbiAgICBcImh0dHBzOi8vd2FsbHBhcGVycy5jb20vaW1hZ2VzL2hpZ2gvbGl0dGxlLW93bGV0LWFuaW1hbC1sZzBodWhjZnZ0d2I2a2NpLndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi66y07KeA6rCc67mE65GY6riwXCIsXG4gICAgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2NvbG9yZnVsLWhvbWluZy1waWdlb24tYmlyZHMtbWFjcm8tc2hvdC02NHRuaHhsaDR0MzYxeXhxLndlYnBcIixcbiAgXSxcbiAgW1xuICAgIFwi67GAXCIsXG4gICAgXCJodHRwczovL3dhbGxwYXBlcnMuY29tL2ltYWdlcy9oaWdoL2NvYnJhLWNsb3NlLXVwLWhpc3NpbmctdG9uZ3VlLTRsNWxiZGJpM3JibHJzamoud2VicFwiLFxuICBdLFxuXTtcblxuY29uc3QgZG9tTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcblxuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGl0ZW1bMF0gYXMgc3RyaW5nO1xuICBjb25zdCB1cmwgPSBpdGVtWzFdIGFzIHN0cmluZztcbiAgaWYgKCFkb21MaXN0KSByZXR1cm47XG4gIC8vIGNvbnN0IGltZyA9IG5ldyBSZWFsSW1hZ2UodGl0bGUsIHVybCwgZG9tTGlzdCk7XG4gIGNvbnN0IGltZyA9IG5ldyBQcm94eUltYWdlKHRpdGxlLCB1cmwsIGRvbUxpc3QpO1xuICBpbWcuYXBwZW5kKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==