System.register(["jimu-core","esri/views/MapView","esri/geometry/Extent","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_views_MapView__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_views_MapView__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_esri_views_MapView__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__[key] = module[key];
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

/***/ "esri/geometry/Extent":
/*!***************************************!*\
  !*** external "esri/geometry/Extent" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Extent__;

/***/ }),

/***/ "esri/views/MapView":
/*!*************************************!*\
  !*** external "esri/views/MapView" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_views_MapView__;

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
/*!********************************************************************!*\
  !*** ./exb-custom-widgets/widgets/map-view/src/runtime/widget.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var esri_views_MapView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/views/MapView */ "esri/views/MapView");
/* harmony import */ var esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/geometry/Extent */ "esri/geometry/Extent");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
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




class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.mapContainer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.mvManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_3__.MapViewManager.getInstance();
        this.onDsCreated = (webmapDs) => {
            var _a;
            if (!webmapDs) {
                return;
            }
            if (!this.mvManager.getJimuMapViewById(this.props.id)) {
                const options = {
                    map: webmapDs.map,
                    container: this.mapContainer.current
                };
                if ((_a = this.props.queryObject) === null || _a === void 0 ? void 0 : _a[this.props.id]) {
                    const extentStr = this.props.queryObject[this.props.id].substr('extent='.length);
                    let extent;
                    try {
                        extent = new esri_geometry_Extent__WEBPACK_IMPORTED_MODULE_2__["default"](JSON.parse(extentStr));
                    }
                    catch (err) {
                        console.error('Bad extent URL parameter.');
                    }
                    if (extent) {
                        options.extent = extent;
                    }
                }
                this.mvManager.createJimuMapView({
                    mapWidgetId: this.props.id,
                    view: new esri_views_MapView__WEBPACK_IMPORTED_MODULE_1__["default"](options),
                    dataSourceId: webmapDs.id,
                    isActive: true,
                    mapViewManager: this.mvManager
                }).then(jimuMapView => {
                    if (!this.extentWatch) {
                        this.extentWatch = jimuMapView.view.watch('extent', (extent) => {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changeQueryObject({
                                [this.props.id]: `extent=${JSON.stringify(extent.toJSON())}`
                            });
                        });
                    }
                });
            }
        };
        this.mapNode = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-map", style: { width: '100%', height: '100%' }, ref: this.mapContainer });
    }
    render() {
        if (!this.props.useDataSources || this.props.useDataSources.length === 0) {
            return 'Select a webmap in the settings panel';
        }
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.useDataSources[0], onDataSourceCreated: this.onDsCreated }, this.mapNode);
    }
}
Widget.mapExtraStateProps = (state) => {
    return {
        queryObject: state.queryObject
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9tYXAtdmlldy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUMwSDtBQUVwRjtBQUVDO0FBRTBCO0FBTW5FLE1BQXFCLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBQTREO0lBQXRHOztRQUNFLGlCQUFZLEdBQUcsNENBQUssQ0FBQyxTQUFTLEVBQWtCO1FBS2hELGNBQVMsR0FBbUIsdURBQWMsQ0FBQyxXQUFXLEVBQUU7UUFReEQsZ0JBQVcsR0FBRyxDQUFDLFFBQTBCLEVBQUUsRUFBRTs7WUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNkLE9BQU07WUFDUixDQUFDO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN0RCxNQUFNLE9BQU8sR0FBNkI7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dGVudFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS92aWV3cy9NYXBWaWV3XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leGItY3VzdG9tLXdpZGdldHMvd2lkZ2V0cy9tYXAtdmlldy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X0V4dGVudF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3ZpZXdzX01hcFZpZXdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyBSZWFjdCwgamltdUhpc3RvcnksIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIHR5cGUgSU1TdGF0ZSwgdHlwZSBJTVVybFBhcmFtZXRlcnMgfSBmcm9tICdqaW11LWNvcmUnXG5cbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldydcbmltcG9ydCB0eXBlIFdlYk1hcCBmcm9tICdlc3JpL1dlYk1hcCdcbmltcG9ydCBFeHRlbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG5cbmltcG9ydCB7IE1hcFZpZXdNYW5hZ2VyLCB0eXBlIFdlYk1hcERhdGFTb3VyY2UgfSBmcm9tICdqaW11LWFyY2dpcydcblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBxdWVyeU9iamVjdDogSU1VcmxQYXJhbWV0ZXJzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8dW5rbm93bj4gJiBFeHRyYVByb3BzLCB1bmtub3duPiB7XG4gIG1hcENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxuICBtYXBWaWV3OiBNYXBWaWV3XG4gIHdlYk1hcDogV2ViTWFwXG4gIGV4dGVudFdhdGNoOiBfX2VzcmkuV2F0Y2hIYW5kbGVcblxuICBtdk1hbmFnZXI6IE1hcFZpZXdNYW5hZ2VyID0gTWFwVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuXG4gIHN0YXRpYyBtYXBFeHRyYVN0YXRlUHJvcHMgPSAoc3RhdGU6IElNU3RhdGUpOiBFeHRyYVByb3BzID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlPYmplY3Q6IHN0YXRlLnF1ZXJ5T2JqZWN0XG4gICAgfVxuICB9XG5cbiAgb25Ec0NyZWF0ZWQgPSAod2VibWFwRHM6IFdlYk1hcERhdGFTb3VyY2UpID0+IHtcbiAgICBpZiAoIXdlYm1hcERzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubXZNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLnByb3BzLmlkKSkge1xuICAgICAgY29uc3Qgb3B0aW9uczogX19lc3JpLk1hcFZpZXdQcm9wZXJ0aWVzID0ge1xuICAgICAgICBtYXA6IHdlYm1hcERzLm1hcCxcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLm1hcENvbnRhaW5lci5jdXJyZW50XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5xdWVyeU9iamVjdD8uW3RoaXMucHJvcHMuaWRdKSB7XG4gICAgICAgIGNvbnN0IGV4dGVudFN0ciA9IHRoaXMucHJvcHMucXVlcnlPYmplY3RbdGhpcy5wcm9wcy5pZF0uc3Vic3RyKCdleHRlbnQ9Jy5sZW5ndGgpXG4gICAgICAgIGxldCBleHRlbnRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KEpTT04ucGFyc2UoZXh0ZW50U3RyKSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQmFkIGV4dGVudCBVUkwgcGFyYW1ldGVyLicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0ZW50KSB7XG4gICAgICAgICAgb3B0aW9ucy5leHRlbnQgPSBleHRlbnRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5tdk1hbmFnZXIuY3JlYXRlSmltdU1hcFZpZXcoe1xuICAgICAgICBtYXBXaWRnZXRJZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgICAgdmlldzogbmV3IE1hcFZpZXcob3B0aW9ucyksXG4gICAgICAgIGRhdGFTb3VyY2VJZDogd2VibWFwRHMuaWQsXG4gICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgICAgICBtYXBWaWV3TWFuYWdlcjogdGhpcy5tdk1hbmFnZXJcbiAgICAgIH0pLnRoZW4oamltdU1hcFZpZXcgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZXh0ZW50V2F0Y2gpIHtcbiAgICAgICAgICB0aGlzLmV4dGVudFdhdGNoID0gamltdU1hcFZpZXcudmlldy53YXRjaCgnZXh0ZW50JywgKGV4dGVudDogX19lc3JpLkV4dGVudCkgPT4ge1xuICAgICAgICAgICAgamltdUhpc3RvcnkuY2hhbmdlUXVlcnlPYmplY3Qoe1xuICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5pZF06IGBleHRlbnQ9JHtKU09OLnN0cmluZ2lmeShleHRlbnQudG9KU09OKCkpfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBtYXBOb2RlID0gPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtbWFwXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0gcmVmPXt0aGlzLm1hcENvbnRhaW5lcn0+PC9kaXY+XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgfHwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnU2VsZWN0IGEgd2VibWFwIGluIHRoZSBzZXR0aW5ncyBwYW5lbCdcbiAgICB9XG4gICAgcmV0dXJuIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF19IG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25Ec0NyZWF0ZWR9PlxuICAgICAge3RoaXMubWFwTm9kZX1cbiAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+XG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=