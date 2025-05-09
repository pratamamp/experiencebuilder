System.register(["jimu-core","calcite-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "calcite-components":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

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
/*!*********************************************************************************!*\
  !*** ./exb-custom-widgets/widgets/use-coding-components/src/runtime/widget.tsx ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calcite-components */ "calcite-components");


const Widget = (props) => {
    var _a;
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const [feature, setFeature] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const useDs = (_a = props.useDataSources) === null || _a === void 0 ? void 0 : _a[0];
    function loadESMScript(url) {
        return new Promise(function (resolve, reject) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = url;
            script.onload = function () {
                resolve(true);
            };
            script.onerror = function (event) {
                reject(new Error('Load script error:' + url));
            };
            document.head.appendChild(script);
        });
    }
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        Promise.all([
            loadESMScript('https://jsdev.arcgis.com/coding-components/4.31/arcgis-coding-components.esm.js'),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('https://jsdev.arcgis.com/coding-components/4.31/arcgis-coding-components.css')
        ]).then(() => {
            console.log('ArcGIS Coding Components loaded');
        });
    });
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!ref.current || !feature) {
            return;
        }
        const arcadeEditorElt = ref.current;
        // Tell the Arcade Editor to use a custom profile and provide the necessary data.
        arcadeEditorElt.profile = {
            bundles: ['core', 'dataAccess', 'geometry', 'portal'],
            variables: [
                {
                    name: '$feature',
                    type: 'feature',
                    description: 'The feature passed to the script during execution.',
                    definition: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(useDs.dataSourceId).layer
                }
            ]
        };
        arcadeEditorElt.testData = {
            profileVariableInstances: {
                $feature: feature
            },
            spatialReference: { wkid: 3857 }
        };
    }, [feature, useDs]);
    const onInfoChange = (info) => {
        const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(props.useDataSources[0].dataSourceId);
        if (ds && ds.getRecords().length > 0) {
            setFeature(ds.getRecords()[0].feature);
        }
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "jimu-widget m-2" },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-arcade-editor", { ref: ref }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: useDs, query: { outFields: ['*'] }, widgetId: props.id, onDataSourceInfoChange: onInfoChange })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy91c2UtY29kaW5nLWNvbXBvbmVudHMvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONko7QUFDckw7QUFFM0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUErQyxFQUFFLEVBQUU7O0lBQ2pFLE1BQU0sR0FBRyxHQUFHLDRDQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM5QixNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLDRDQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNsRCxNQUFNLEtBQUssR0FBRyxXQUFLLENBQUMsY0FBYywwQ0FBRyxDQUFDLENBQUM7SUFFdkMsU0FBUyxhQUFhLENBQUUsR0FBRztRQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDL0MsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRztZQUNoQixNQUFNLENBQUMsTUFBTSxHQUFHO2dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUs7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCw0Q0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNWLGFBQWEsQ0FBQyxpRkFBaUYsQ0FBQztZQUNoRyxtREFBWSxDQUFDLFVBQVUsQ0FBQyw4RUFBOEUsQ0FBQztTQUN4RyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRUYsNENBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsT0FBTTtRQUNSLENBQUM7UUFDRCxNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUMsT0FBTztRQUNuQyxpRkFBaUY7UUFDakYsZUFBZSxDQUFDLE9BQU8sR0FBRztZQUN4QixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7WUFDckQsU0FBUyxFQUFFO2dCQUNUO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsU0FBUztvQkFDZixXQUFXLEVBQUUsb0RBQW9EO29CQUNqRSxVQUFVLEVBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQTRCLENBQUMsS0FBSztpQkFDaEg7YUFDRjtTQUNGO1FBRUQsZUFBZSxDQUFDLFFBQVEsR0FBRztZQUN6Qix3QkFBd0IsRUFBRTtnQkFDeEIsUUFBUSxFQUFFLE9BQU87YUFDbEI7WUFDRCxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7U0FDakM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFcEIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFzQixFQUFFLEVBQUU7UUFDOUMsTUFBTSxFQUFFLEdBQUcsd0RBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQzlGLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckMsVUFBVSxDQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQXVCLENBQUMsT0FBTyxDQUFDO1FBQy9ELENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyxpQkFBaUI7UUFDOUIscUZBQXNCLEdBQUcsRUFBRSxHQUFHLEdBQUc7UUFDakMsMkRBQUMsMERBQW1CLElBQ2xCLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQXVCLEVBQ3RFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUNsQixzQkFBc0IsRUFBRSxZQUFZLEdBQUcsQ0FDckMsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leGItY3VzdG9tLXdpZGdldHMvd2lkZ2V0cy91c2UtY29kaW5nLWNvbXBvbmVudHMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7IG1vZHVsZUxvYWRlciwgRGF0YVNvdXJjZUNvbXBvbmVudCwgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSU1EYXRhU291cmNlSW5mbywgdHlwZSBGZWF0dXJlRGF0YVJlY29yZCwgdHlwZSBBcmNHSVNRdWVyeVBhcmFtcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCAnY2FsY2l0ZS1jb21wb25lbnRzJ1xuXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPHsgW2tleTogc3RyaW5nXTogbmV2ZXIgfT4pID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpXG4gIGNvbnN0IFtmZWF0dXJlLCBzZXRGZWF0dXJlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHVzZURzID0gcHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxuXG4gIGZ1bmN0aW9uIGxvYWRFU01TY3JpcHQgKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJ1xuICAgICAgc2NyaXB0LnNyYyA9IHVybFxuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignTG9hZCBzY3JpcHQgZXJyb3I6JyArIHVybCkpXG4gICAgICB9XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbiAgICB9KVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBsb2FkRVNNU2NyaXB0KCdodHRwczovL2pzZGV2LmFyY2dpcy5jb20vY29kaW5nLWNvbXBvbmVudHMvNC4zMS9hcmNnaXMtY29kaW5nLWNvbXBvbmVudHMuZXNtLmpzJyksXG4gICAgICBtb2R1bGVMb2FkZXIubG9hZE1vZHVsZSgnaHR0cHM6Ly9qc2Rldi5hcmNnaXMuY29tL2NvZGluZy1jb21wb25lbnRzLzQuMzEvYXJjZ2lzLWNvZGluZy1jb21wb25lbnRzLmNzcycpXG4gICAgXSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnQXJjR0lTIENvZGluZyBDb21wb25lbnRzIGxvYWRlZCcpXG4gICAgfSlcbiAgfSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcmVmLmN1cnJlbnQgfHwgIWZlYXR1cmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhcmNhZGVFZGl0b3JFbHQgPSByZWYuY3VycmVudFxuICAgIC8vIFRlbGwgdGhlIEFyY2FkZSBFZGl0b3IgdG8gdXNlIGEgY3VzdG9tIHByb2ZpbGUgYW5kIHByb3ZpZGUgdGhlIG5lY2Vzc2FyeSBkYXRhLlxuICAgIGFyY2FkZUVkaXRvckVsdC5wcm9maWxlID0ge1xuICAgICAgYnVuZGxlczogWydjb3JlJywgJ2RhdGFBY2Nlc3MnLCAnZ2VvbWV0cnknLCAncG9ydGFsJ10sXG4gICAgICB2YXJpYWJsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICckZmVhdHVyZScsXG4gICAgICAgICAgdHlwZTogJ2ZlYXR1cmUnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGZlYXR1cmUgcGFzc2VkIHRvIHRoZSBzY3JpcHQgZHVyaW5nIGV4ZWN1dGlvbi4nLFxuICAgICAgICAgIGRlZmluaXRpb246IChEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UodXNlRHMuZGF0YVNvdXJjZUlkKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlKS5sYXllclxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgYXJjYWRlRWRpdG9yRWx0LnRlc3REYXRhID0ge1xuICAgICAgcHJvZmlsZVZhcmlhYmxlSW5zdGFuY2VzOiB7XG4gICAgICAgICRmZWF0dXJlOiBmZWF0dXJlXG4gICAgICB9LFxuICAgICAgc3BhdGlhbFJlZmVyZW5jZTogeyB3a2lkOiAzODU3IH1cbiAgICB9XG4gIH0sIFtmZWF0dXJlLCB1c2VEc10pXG5cbiAgY29uc3Qgb25JbmZvQ2hhbmdlID0gKGluZm86IElNRGF0YVNvdXJjZUluZm8pID0+IHtcbiAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShwcm9wcy51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQpXG4gICAgaWYgKGRzICYmIGRzLmdldFJlY29yZHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRGZWF0dXJlKChkcy5nZXRSZWNvcmRzKClbMF0gYXMgRmVhdHVyZURhdGFSZWNvcmQpLmZlYXR1cmUpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqaW11LXdpZGdldCBtLTJcIj5cbiAgICAgIDxhcmNnaXMtYXJjYWRlLWVkaXRvciByZWY9e3JlZn0vPlxuICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRHN9IHF1ZXJ5PXt7IG91dEZpZWxkczogWycqJ10gfSBhcyBBcmNHSVNRdWVyeVBhcmFtc31cbiAgICAgICAgd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXtvbkluZm9DaGFuZ2V9Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=