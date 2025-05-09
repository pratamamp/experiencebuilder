System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./exb-custom-widgets/widgets/add-layers/src/runtime/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./exb-custom-widgets/widgets/add-layers/src/runtime/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Add Layers',
    addLayer: 'Add Layer',
    featureServiceUrl: 'Feature Service URL',
    instructions: 'Copy/paste a FeatureService Layer URL here to add it to the map.'
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
/*!**********************************************************************!*\
  !*** ./exb-custom-widgets/widgets/add-layers/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./exb-custom-widgets/widgets/add-layers/src/runtime/translations/default.ts");
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



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            featureServiceUrlInput: '',
            jimuMapView: null
        };
        // Every time the input box value changes, this function gets called.
        // We set our component's state so we can use the value in the formSubmit function.
        this.handleFeatureServiceUrlInputChange = (event) => {
            this.setState({
                featureServiceUrlInput: event.target.value
            });
        };
        this.formSubmit = (evt) => {
            evt.preventDefault();
            // Error cases
            if (!this.state.jimuMapView) {
                // Data Source was not configured - we cannot do anything.
                console.error('Please configure a Data Source with the widget.');
                return;
            }
            if (this.state.featureServiceUrlInput === '') {
                // Nothing was typed into the box!
                alert('Please copy/paste in a FeatureService URL');
                return;
            }
            // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules
            // that we need - only once the "Add Layer" button is pressed.
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                // First create the Feature Layer from the URL that is in the box.
                const layer = new this.FeatureLayer({
                    url: this.state.featureServiceUrlInput
                });
                // Add the layer to the map (accessed through the Experience Builder Data Source)
                this.state.jimuMapView.view.map.add(layer);
                // After the layer is created, zoom to the layer's extent, if the setting is set for that.
                layer.on('layerview-create', (event) => {
                    if (this.props.config.hasOwnProperty('zoomToLayer') &&
                        this.props.config.zoomToLayer) {
                        const query = layer.createQuery();
                        query.where = '1=1';
                        query.outSpatialReference = new this.SpatialReference({
                            wkid: 102100
                        });
                        layer.queryExtent(query).then((results) => {
                            this.state.jimuMapView.view.extent = results.extent;
                        });
                    }
                    // Process of adding the layer is complete - remove the layer URL from the box so we can add another
                    this.setState({
                        featureServiceUrlInput: ''
                    });
                });
            });
        };
    }
    render() {
        var _a;
        const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      form > div {
        display: flex;
        justify-content: space-between;
        input {
          width: 100%;
        }
        button {
          min-width: 100px;
        }
      }
    `;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-addLayers jimu-widget p-2", css: style },
            this.props.hasOwnProperty('useMapWidgetIds') &&
                this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {
                    this.setState({
                        jimuMapView: jmv
                    });
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].instructions),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: this.formSubmit },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].featureServiceUrl, value: this.state.featureServiceUrlInput, onChange: this.handleFeatureServiceUrlInputChange }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].addLayer)))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hZGQtbGF5ZXJzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLFlBQVk7SUFDMUIsUUFBUSxFQUFFLFdBQVc7SUFDckIsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDLFlBQVksRUFDVixrRUFBa0U7Q0FDckU7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsMENBQTBDO0FBQzFDLGVBQWU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBQzhEO0FBSzVDO0FBSWdDO0FBT3JDLE1BQU0sTUFBTyxTQUFRLDRDQUFLLENBQUMsYUFHekM7SUFIRDs7UUFVRSxVQUFLLEdBQUc7WUFDTixzQkFBc0IsRUFBRSxFQUFFO1lBQzFCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCO1FBRUQscUVBQXFFO1FBQ3JFLG1GQUFtRjtRQUNuRix1Q0FBa0MsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osc0JBQXNCLEVBQUUsS0FBSyxDQUFDLE1B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O3FCQUNqQixDQUFDO2dCQUNKLENBQUMsR0FDRCxDQUNMO1lBRUQsMERBQUksNkRBQWUsQ0FBQyxZQUFZLENBQUs7WUFFckMseURBQU0sUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUM3QjtvQkFDRSwwREFDRSxJQUFJLEVBQUMsTUFBTSxFQUNYLFdBQVcsRUFBRSw2REFBZSxDQUFDLGlCQUFpQixFQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFDeEMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQ0FBa0MsR0FDakQ7b0JBQ0YsK0RBQVMsNkRBQWUsQ0FBQyxRQUFRLENBQVUsQ0FDdkMsQ0FDRCxDQUNILENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leGItY3VzdG9tLXdpZGdldHMvd2lkZ2V0cy9hZGQtbGF5ZXJzL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXhiLWN1c3RvbS13aWRnZXRzL3dpZGdldHMvYWRkLWxheWVycy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnQWRkIExheWVycycsXG4gIGFkZExheWVyOiAnQWRkIExheWVyJyxcbiAgZmVhdHVyZVNlcnZpY2VVcmw6ICdGZWF0dXJlIFNlcnZpY2UgVVJMJyxcbiAgaW5zdHJ1Y3Rpb25zOlxuICAgICdDb3B5L3Bhc3RlIGEgRmVhdHVyZVNlcnZpY2UgTGF5ZXIgVVJMIGhlcmUgdG8gYWRkIGl0IHRvIHRoZSBtYXAuJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLyoqIEBqc3gganN4ICovXG4vKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxuICB0eXBlIEppbXVNYXBWaWV3XG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBmZWF0dXJlU2VydmljZVVybElucHV0OiBzdHJpbmdcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG5BbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXG5JU3RhdGVcbj4ge1xuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XG4gIC8vIHRvIHRlbGwgVHlwZVNjcmlwdCB3aGF0IHR5cGVzIHRoZXkgYXJlLlxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXG4gIFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5XG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZVxuXG4gIHN0YXRlID0ge1xuICAgIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6ICcnLFxuICAgIGppbXVNYXBWaWV3OiBudWxsXG4gIH1cblxuICAvLyBFdmVyeSB0aW1lIHRoZSBpbnB1dCBib3ggdmFsdWUgY2hhbmdlcywgdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZC5cbiAgLy8gV2Ugc2V0IG91ciBjb21wb25lbnQncyBzdGF0ZSBzbyB3ZSBjYW4gdXNlIHRoZSB2YWx1ZSBpbiB0aGUgZm9ybVN1Ym1pdCBmdW5jdGlvbi5cbiAgaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGZvcm1TdWJtaXQgPSAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIEVycm9yIGNhc2VzXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAvLyBEYXRhIFNvdXJjZSB3YXMgbm90IGNvbmZpZ3VyZWQgLSB3ZSBjYW5ub3QgZG8gYW55dGhpbmcuXG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgY29uZmlndXJlIGEgRGF0YSBTb3VyY2Ugd2l0aCB0aGUgd2lkZ2V0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dCA9PT0gJycpIHtcbiAgICAgIC8vIE5vdGhpbmcgd2FzIHR5cGVkIGludG8gdGhlIGJveCFcbiAgICAgIGFsZXJ0KCdQbGVhc2UgY29weS9wYXN0ZSBpbiBhIEZlYXR1cmVTZXJ2aWNlIFVSTCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBMYXp5LWxvYWRpbmcgKG9ubHkgbG9hZCBpZi93aGVuIG5lZWRlZCkgdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHQgbW9kdWxlc1xuICAgIC8vIHRoYXQgd2UgbmVlZCAtIG9ubHkgb25jZSB0aGUgXCJBZGQgTGF5ZXJcIiBidXR0b24gaXMgcHJlc3NlZC5cbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInLFxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXG5cbiAgICAgIC8vIEZpcnN0IGNyZWF0ZSB0aGUgRmVhdHVyZSBMYXllciBmcm9tIHRoZSBVUkwgdGhhdCBpcyBpbiB0aGUgYm94LlxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xuICAgICAgICB1cmw6IHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dFxuICAgICAgfSlcblxuICAgICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgRGF0YSBTb3VyY2UpXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcilcblxuICAgICAgLy8gQWZ0ZXIgdGhlIGxheWVyIGlzIGNyZWF0ZWQsIHpvb20gdG8gdGhlIGxheWVyJ3MgZXh0ZW50LCBpZiB0aGUgc2V0dGluZyBpcyBzZXQgZm9yIHRoYXQuXG4gICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ3pvb21Ub0xheWVyJykgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9MYXllclxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgICBxdWVyeS53aGVyZSA9ICcxPTEnXG4gICAgICAgICAgcXVlcnkub3V0U3BhdGlhbFJlZmVyZW5jZSA9IG5ldyB0aGlzLlNwYXRpYWxSZWZlcmVuY2Uoe1xuICAgICAgICAgICAgd2tpZDogMTAyMTAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsYXllci5xdWVyeUV4dGVudChxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudCA9IHJlc3VsdHMuZXh0ZW50XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2Nlc3Mgb2YgYWRkaW5nIHRoZSBsYXllciBpcyBjb21wbGV0ZSAtIHJlbW92ZSB0aGUgbGF5ZXIgVVJMIGZyb20gdGhlIGJveCBzbyB3ZSBjYW4gYWRkIGFub3RoZXJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogJydcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXG4gICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxwPntkZWZhdWx0TWVzc2FnZXMuaW5zdHJ1Y3Rpb25zfTwvcD5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5mb3JtU3VibWl0fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZXNzYWdlcy5mZWF0dXJlU2VydmljZVVybH1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uPntkZWZhdWx0TWVzc2FnZXMuYWRkTGF5ZXJ9PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==