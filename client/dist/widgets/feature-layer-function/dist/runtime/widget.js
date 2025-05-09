System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!**********************************************************************************!*\
  !*** ./exb-custom-widgets/widgets/feature-layer-function/src/runtime/widget.tsx ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
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

const { useState, useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
/**
 * This widget will show features from a configured feature layer
 */
function Widget(props) {
    const [query, setQuery] = useState(null);
    const cityNameRef = useRef(null);
    useEffect(() => {
        queryFunc();
    }, []);
    const isDsConfigured = () => {
        if (props.useDataSources &&
            props.useDataSources.length === 1 &&
            props.useDataSources[0].fields &&
            props.useDataSources[0].fields.length === 1) {
            return true;
        }
        return false;
    };
    const queryFunc = () => {
        if (!isDsConfigured()) {
            return;
        }
        const fieldName = props.useDataSources[0].fields[0];
        const w = cityNameRef.current && cityNameRef.current.value
            ? `${fieldName} like '%${cityNameRef.current.value}%'`
            : '1=1';
        setQuery({
            where: w,
            outFields: ['*'],
            pageSize: 10
        });
    };
    const dataRender = (ds, info) => {
        //createOutputDs(ds);
        const fName = props.useDataSources[0].fields[0];
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { placeholder: "Query value", ref: cityNameRef }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { onClick: queryFunc }, "Query")),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                "Query state: ",
                info.status),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                "Count: ",
                ds.count),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "record-list", style: { width: '100%', marginTop: '20px', height: 'calc(100% - 80px)', overflow: 'auto' } }, ds && ds.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded
                ? ds.getRecords().map((r, i) => {
                    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: i }, r.getData()[fName]);
                })
                : null));
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createOutputDs = (useDs) => {
        if (!props.outputDataSources) {
            return;
        }
        const outputDsId = props.outputDataSources[0];
        const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        if (dsManager.getDataSource(outputDsId)) {
            if (dsManager.getDataSource(outputDsId).getDataSourceJson().originDataSources[0].dataSourceId !== useDs.id) {
                dsManager.destroyDataSource(outputDsId);
            }
        }
        dsManager.createDataSource(outputDsId).then(ods => {
            ods.setRecords(useDs.getRecords());
        });
    };
    if (!isDsConfigured()) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null,
            "This widget demonstrates how to use a feature layer as a data source.",
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("br", null),
            "Configure the data source.");
    }
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-use-feature-layer", style: { width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", null, "This widget shows how to use a feature layer as a data source."),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: props.useDataSources[0], query: query, widgetId: props.id, queryCount: true }, dataRender));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9mZWF0dXJlLWxheWVyLWZ1bmN0aW9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFO0FBQ29MO0FBQ3RMLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLDRDQUFLO0FBRTdDOztHQUVHO0FBQ1ksU0FBUyxNQUFNLENBQUUsS0FBOEI7SUFDNUQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQTBCLElBQUksQ0FBQztJQUNqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQW1CLElBQUksQ0FBQztJQUVsRCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsU0FBUyxFQUFFO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtRQUMxQixJQUFJLEtBQUssQ0FBQyxjQUFjO1lBQ3RCLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDakMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENB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RyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLE9BQU87O1lBRUwsc0VBQU07eUNBRUg7SUFDUCxDQUFDO0lBQ0QsT0FBTyxvRUFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtRQUM3SCx3SUFFSztRQUVMLDJEQUFDLDBEQUFtQixJQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsVUFBVSxVQUN0RyxVQUFVLENBQ1MsQ0FDbEI7QUFDUixDQUFDO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXhiLWN1c3RvbS13aWRnZXRzL3dpZGdldHMvZmVhdHVyZS1sYXllci1mdW5jdGlvbi9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIElNRGF0YVNvdXJjZUluZm8sIHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZU1hbmFnZXIsIERhdGFTb3VyY2VTdGF0dXMsIHR5cGUgRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIERhdGFTb3VyY2VDb21wb25lbnQgfSBmcm9tICdqaW11LWNvcmUnXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9ID0gUmVhY3RcblxuLyoqXG4gKiBUaGlzIHdpZGdldCB3aWxsIHNob3cgZmVhdHVyZXMgZnJvbSBhIGNvbmZpZ3VyZWQgZmVhdHVyZSBsYXllclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnZXQgKHByb3BzOiBBbGxXaWRnZXRQcm9wczx1bmtub3duPikge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zPihudWxsKVxuICBjb25zdCBjaXR5TmFtZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcXVlcnlGdW5jKClcbiAgfSwgW10pXG5cbiAgY29uc3QgaXNEc0NvbmZpZ3VyZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb3BzLnVzZURhdGFTb3VyY2VzICYmXG4gICAgICBwcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEgJiZcbiAgICAgIHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcyAmJlxuICAgICAgcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBxdWVyeUZ1bmMgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0RzQ29uZmlndXJlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgZmllbGROYW1lID0gcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZmllbGRzWzBdXG4gICAgY29uc3QgdyA9IGNpdHlOYW1lUmVmLmN1cnJlbnQgJiYgY2l0eU5hbWVSZWYuY3VycmVudC52YWx1ZVxuICAgICAgPyBgJHtmaWVsZE5hbWV9IGxpa2UgJyUke2NpdHlOYW1lUmVmLmN1cnJlbnQudmFsdWV9JSdgXG4gICAgICA6ICcxPTEnXG4gICAgc2V0UXVlcnkoe1xuICAgICAgd2hlcmU6IHcsXG4gICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgcGFnZVNpemU6IDEwXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGRhdGFSZW5kZXIgPSAoZHM6IERhdGFTb3VyY2UsIGluZm86IElNRGF0YVNvdXJjZUluZm8pID0+IHtcbiAgICAvL2NyZWF0ZU91dHB1dERzKGRzKTtcbiAgICBjb25zdCBmTmFtZSA9IHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkc1swXVxuICAgIHJldHVybiA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUXVlcnkgdmFsdWVcIiByZWY9e2NpdHlOYW1lUmVmfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3F1ZXJ5RnVuY30+UXVlcnk8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5RdWVyeSBzdGF0ZToge2luZm8uc3RhdHVzfTwvZGl2PlxuICAgICAgPGRpdj5Db3VudDoge2RzLmNvdW50fTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29yZC1saXN0XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAnMjBweCcsIGhlaWdodDogJ2NhbGMoMTAwJSAtIDgwcHgpJywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAge1xuICAgICAgICAgIGRzICYmIGRzLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLkxvYWRlZFxuICAgICAgICAgICAgPyBkcy5nZXRSZWNvcmRzKCkubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0+e3IuZ2V0RGF0YSgpW2ZOYW1lXX08L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGNvbnN0IGNyZWF0ZU91dHB1dERzID0gKHVzZURzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5vdXRwdXREYXRhU291cmNlcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG91dHB1dERzSWQgPSBwcm9wcy5vdXRwdXREYXRhU291cmNlc1swXVxuICAgIGNvbnN0IGRzTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBpZiAoZHNNYW5hZ2VyLmdldERhdGFTb3VyY2Uob3V0cHV0RHNJZCkpIHtcbiAgICAgIGlmIChkc01hbmFnZXIuZ2V0RGF0YVNvdXJjZShvdXRwdXREc0lkKS5nZXREYXRhU291cmNlSnNvbigpLm9yaWdpbkRhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCAhPT0gdXNlRHMuaWQpIHtcbiAgICAgICAgZHNNYW5hZ2VyLmRlc3Ryb3lEYXRhU291cmNlKG91dHB1dERzSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGRzTWFuYWdlci5jcmVhdGVEYXRhU291cmNlKG91dHB1dERzSWQpLnRoZW4ob2RzID0+IHtcbiAgICAgIG9kcy5zZXRSZWNvcmRzKHVzZURzLmdldFJlY29yZHMoKSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKCFpc0RzQ29uZmlndXJlZCgpKSB7XG4gICAgcmV0dXJuIDxoMz5cbiAgICAgIFRoaXMgd2lkZ2V0IGRlbW9uc3RyYXRlcyBob3cgdG8gdXNlIGEgZmVhdHVyZSBsYXllciBhcyBhIGRhdGEgc291cmNlLlxuICAgICAgPGJyIC8+XG4gICAgICBDb25maWd1cmUgdGhlIGRhdGEgc291cmNlLlxuICAgIDwvaDM+XG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXVzZS1mZWF0dXJlLWxheWVyXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG1heEhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICA8aDM+XG4gICAgICBUaGlzIHdpZGdldCBzaG93cyBob3cgdG8gdXNlIGEgZmVhdHVyZSBsYXllciBhcyBhIGRhdGEgc291cmNlLlxuICAgIDwvaDM+XG5cbiAgICA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX0gcXVlcnk9e3F1ZXJ5fSB3aWRnZXRJZD17cHJvcHMuaWR9IHF1ZXJ5Q291bnQ+XG4gICAgICB7ZGF0YVJlbmRlcn1cbiAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+XG4gIDwvZGl2PlxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==