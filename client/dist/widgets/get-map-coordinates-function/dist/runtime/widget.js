System.register(["jimu-core","jimu-core/react","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./exb-custom-widgets/widgets/get-map-coordinates-function/src/runtime/translations/default.ts":
/*!*****************************************************************************************************!*\
  !*** ./exb-custom-widgets/widgets/get-map-coordinates-function/src/runtime/translations/default.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Get Map Coordinates (Function)',
    latLon: 'Lat/Lon',
    zoom: 'Zoom',
    latLonWillBeHere: 'Lat/Lon (None - please mouse over map)'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************************************************!*\
  !*** ./exb-custom-widgets/widgets/get-map-coordinates-function/src/runtime/widget.tsx ***!
  \****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./exb-custom-widgets/widgets/get-map-coordinates-function/src/runtime/translations/default.ts");
/* eslint-disable no-prototype-builtins */
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
    var _a;
    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [scale, setScale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [mapViewReady, setMapViewReady] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const activeViewChangeHandler = (jmv) => {
        if (jmv) {
            // When the extent moves, update the state with all the updated values.
            jmv.view.watch('extent', evt => {
                setLatitude(jmv.view.center.latitude.toFixed(3));
                setLongitude(jmv.view.center.longitude.toFixed(3));
                setScale(Math.round(jmv.view.scale * 1) / 1);
                setZoom(jmv.view.zoom);
                // this is set to false initially, then once we have the first set of data (and all subsequent) it's set
                // to true, so that we can hide the text until everything is ready:
                setMapViewReady(true);
            });
            // When the pointer moves, take the pointer location and create a Point
            // Geometry out of it (`view.toMap(...)`), then update the state.
            jmv.view.on('pointer-move', evt => {
                const point = jmv.view.toMap({
                    x: evt.x,
                    y: evt.y
                });
                setLatitude(point.latitude.toFixed(3));
                setLongitude(point.longitude.toFixed(3));
                setScale(Math.round(jmv.view.scale * 1) / 1);
                setZoom(jmv.view.zoom);
                setMapViewReady(true);
            });
        }
    };
    const sections = [];
    sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
        _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].latLon,
        " ",
        latitude,
        " ",
        longitude));
    if (props.config.showZoom) {
        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
            "Zoom ",
            zoom.toFixed(0)));
    }
    if (props.config.showScale) {
        sections.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
            "Scale 1:",
            scale));
    }
    // We have 1, 2, or 3 JSX Elements in our array, we want to join them
    // with " | " between them. You cannot use `sections.join(" | ")`, sadly.
    // So we use array.reduce(...) to return an array of JSX elements.
    const allSections = sections.reduce((previousValue, currentValue) => {
        return previousValue === null
            ? [currentValue]
            : [...previousValue, ' | ', currentValue];
    }, null);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-get-map-coordinates jimu-widget m-2" },
        props.hasOwnProperty('useMapWidgetIds') &&
            props.useMapWidgetIds &&
            props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewComponent, { useMapWidgetId: (_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: activeViewChangeHandler })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, mapViewReady ? allSections : _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].latLonWillBeHere)));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9nZXQtbWFwLWNvb3JkaW5hdGVzLWZ1bmN0aW9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxnQ0FBZ0M7SUFDOUMsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixnQkFBZ0IsRUFBRSx3Q0FBd0M7Q0FDM0Q7Ozs7Ozs7Ozs7OztBQ0xEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5ELDBDQUEwQztBQUMxQyxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUNrRDtBQUNwQjtBQUVvQztBQUloQjtBQUVwRCw2QkFBZSxvQ0FBVSxLQUErQjs7SUFDdEQsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRywrQ0FBUSxDQUFTLEVBQUUsQ0FBQztJQUNwRCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLCtDQUFRLENBQVMsRUFBRSxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxD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TyxDQUNMLHdEQUFLLFNBQVMsRUFBQyw0Q0FBNEM7UUFDeEQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0QyxLQUFLLENBQUMsZUFBZTtZQUNyQixLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FDcEMsK0NBQUMsNkRBQW9CLElBQ25CLGNBQWMsRUFBRSxXQUFLLENBQUMsZUFBZSwwQ0FBRyxDQUFDLENBQUMsRUFDMUMsa0JBQWtCLEVBQUUsdUJBQXVCLEdBQzNDLENBQ0w7UUFHRCwwREFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsNkRBQWUsQ0FBQyxnQkFBZ0IsQ0FBSyxDQUNsRSxDQUNQO0FBQ0gsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4Yi1jdXN0b20td2lkZ2V0cy93aWRnZXRzL2dldC1tYXAtY29vcmRpbmF0ZXMtZnVuY3Rpb24vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4Yi1jdXN0b20td2lkZ2V0cy93aWRnZXRzL2dldC1tYXAtY29vcmRpbmF0ZXMtZnVuY3Rpb24vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIF93aWRnZXRMYWJlbDogJ0dldCBNYXAgQ29vcmRpbmF0ZXMgKEZ1bmN0aW9uKScsXG4gIGxhdExvbjogJ0xhdC9Mb24nLFxuICB6b29tOiAnWm9vbScsXG4gIGxhdExvbldpbGxCZUhlcmU6ICdMYXQvTG9uIChOb25lIC0gcGxlYXNlIG1vdXNlIG92ZXIgbWFwKSdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8qKiBAanN4IGpzeCAqL1xuLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmltcG9ydCB0eXBlIFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnXG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pIHtcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBbc2NhbGUsIHNldFNjYWxlXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgY29uc3QgW21hcFZpZXdSZWFkeSwgc2V0TWFwVmlld1JlYWR5XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIGNvbnN0IGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoam12KSB7XG4gICAgICAvLyBXaGVuIHRoZSBleHRlbnQgbW92ZXMsIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCBhbGwgdGhlIHVwZGF0ZWQgdmFsdWVzLlxuICAgICAgam12LnZpZXcud2F0Y2goJ2V4dGVudCcsIGV2dCA9PiB7XG4gICAgICAgIHNldExhdGl0dWRlKGptdi52aWV3LmNlbnRlci5sYXRpdHVkZS50b0ZpeGVkKDMpKVxuICAgICAgICBzZXRMb25naXR1ZGUoam12LnZpZXcuY2VudGVyLmxvbmdpdHVkZS50b0ZpeGVkKDMpKVxuICAgICAgICBzZXRTY2FsZShNYXRoLnJvdW5kKGptdi52aWV3LnNjYWxlICogMSkgLyAxKVxuICAgICAgICBzZXRab29tKGptdi52aWV3Lnpvb20pXG5cbiAgICAgICAgLy8gdGhpcyBpcyBzZXQgdG8gZmFsc2UgaW5pdGlhbGx5LCB0aGVuIG9uY2Ugd2UgaGF2ZSB0aGUgZmlyc3Qgc2V0IG9mIGRhdGEgKGFuZCBhbGwgc3Vic2VxdWVudCkgaXQncyBzZXRcbiAgICAgICAgLy8gdG8gdHJ1ZSwgc28gdGhhdCB3ZSBjYW4gaGlkZSB0aGUgdGV4dCB1bnRpbCBldmVyeXRoaW5nIGlzIHJlYWR5OlxuICAgICAgICBzZXRNYXBWaWV3UmVhZHkodHJ1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIFdoZW4gdGhlIHBvaW50ZXIgbW92ZXMsIHRha2UgdGhlIHBvaW50ZXIgbG9jYXRpb24gYW5kIGNyZWF0ZSBhIFBvaW50XG4gICAgICAvLyBHZW9tZXRyeSBvdXQgb2YgaXQgKGB2aWV3LnRvTWFwKC4uLilgKSwgdGhlbiB1cGRhdGUgdGhlIHN0YXRlLlxuICAgICAgam12LnZpZXcub24oJ3BvaW50ZXItbW92ZScsIGV2dCA9PiB7XG4gICAgICAgIGNvbnN0IHBvaW50OiBQb2ludCA9IGptdi52aWV3LnRvTWFwKHtcbiAgICAgICAgICB4OiBldnQueCxcbiAgICAgICAgICB5OiBldnQueVxuICAgICAgICB9KVxuICAgICAgICBzZXRMYXRpdHVkZShwb2ludC5sYXRpdHVkZS50b0ZpeGVkKDMpKVxuICAgICAgICBzZXRMb25naXR1ZGUocG9pbnQubG9uZ2l0dWRlLnRvRml4ZWQoMykpXG4gICAgICAgIHNldFNjYWxlKE1hdGgucm91bmQoam12LnZpZXcuc2NhbGUgKiAxKSAvIDEpXG4gICAgICAgIHNldFpvb20oam12LnZpZXcuem9vbSlcbiAgICAgICAgc2V0TWFwVmlld1JlYWR5KHRydWUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlY3Rpb25zID0gW11cblxuICBzZWN0aW9ucy5wdXNoKFxuICAgIDxzcGFuPlxuICAgICAge2RlZmF1bHRNZXNzYWdlcy5sYXRMb259IHtsYXRpdHVkZX0ge2xvbmdpdHVkZX1cbiAgICA8L3NwYW4+XG4gIClcblxuICBpZiAocHJvcHMuY29uZmlnLnNob3dab29tKSB7XG4gICAgc2VjdGlvbnMucHVzaCg8c3Bhbj5ab29tIHt6b29tLnRvRml4ZWQoMCl9PC9zcGFuPilcbiAgfVxuXG4gIGlmIChwcm9wcy5jb25maWcuc2hvd1NjYWxlKSB7XG4gICAgc2VjdGlvbnMucHVzaCg8c3Bhbj5TY2FsZSAxOntzY2FsZX08L3NwYW4+KVxuICB9XG5cbiAgLy8gV2UgaGF2ZSAxLCAyLCBvciAzIEpTWCBFbGVtZW50cyBpbiBvdXIgYXJyYXksIHdlIHdhbnQgdG8gam9pbiB0aGVtXG4gIC8vIHdpdGggXCIgfCBcIiBiZXR3ZWVuIHRoZW0uIFlvdSBjYW5ub3QgdXNlIGBzZWN0aW9ucy5qb2luKFwiIHwgXCIpYCwgc2FkbHkuXG4gIC8vIFNvIHdlIHVzZSBhcnJheS5yZWR1Y2UoLi4uKSB0byByZXR1cm4gYW4gYXJyYXkgb2YgSlNYIGVsZW1lbnRzLlxuICBjb25zdCBhbGxTZWN0aW9ucyA9IHNlY3Rpb25zLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgPT09IG51bGxcbiAgICAgID8gW2N1cnJlbnRWYWx1ZV1cbiAgICAgIDogWy4uLnByZXZpb3VzVmFsdWUsICcgfCAnLCBjdXJyZW50VmFsdWVdXG4gIH0sIG51bGwpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1nZXQtbWFwLWNvb3JkaW5hdGVzIGppbXUtd2lkZ2V0IG0tMlwiPlxuICAgICAge3Byb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxuICAgICAgICBwcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgcHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXG4gICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17cHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2FjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7LyogT25seSBzaG93IHRoZSBkYXRhIG9uY2UgdGhlIE1hcFZpZXcgaXMgcmVhZHkgKi99XG4gICAgICA8cD57bWFwVmlld1JlYWR5ID8gYWxsU2VjdGlvbnMgOiBkZWZhdWx0TWVzc2FnZXMubGF0TG9uV2lsbEJlSGVyZX08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=