System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./exb-custom-widgets/widgets/demo/src/runtime/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./exb-custom-widgets/widgets/demo/src/runtime/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
  Licensing

  Copyright 2020 Esri

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Demo (Class)',
    widgetProperties: 'Widget Properties',
    widgetFunctions: 'Widget Functions',
    widgetName: 'widget name:',
    widgetProps: 'widget props:'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/*!****************************************************************!*\
  !*** ./exb-custom-widgets/widgets/demo/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./exb-custom-widgets/widgets/demo/src/runtime/translations/default.ts");
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
        this.nls = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"][id] }) : id;
        };
    }
    render() {
        const styleLiteral = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      color: ${this.props.theme.colors.danger};
      font-size: 1.25rem;
    `;
        const styleObject = {
            backgroundColor: this.props.theme.colors.palette.light[500],
            padding: '1rem'
        };
        const StyledButton = jimu_core__WEBPACK_IMPORTED_MODULE_0__.styled.button `
      color: white;
      background-color: ${this.props.theme.colors.primary};
      transition: 0.15s ease-in all;
      &:hover {
        background-color: ${this.props.theme.colors.danger};
      }
    `;
        const StyledBSButton = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.styled)((0,jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button)) `
      background-color: hotpink !important;
      border: 0 !important;
      transition: 0.15s ease-in all;
      &:hover {
        background-color: purple !important;
      }
    `;
        const styleTag = `
      .danger-color {
        color: red;
      }
    `;
        const rtlStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      border: solid 1px;
      width: 100px;
      padding-left: 20px;
    `;
        const propsTr = Object.keys(this.props).map((prop, i) => {
            if (['manifest', 'user', 'intl'].includes(prop) ||
                typeof this.props[prop] === 'string') {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { key: i },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null, prop),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null, this.props[prop] && this.props[prop].toString()));
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { key: i },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null, prop),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null, JSON.stringify(this.props[prop], null, 2)));
        });
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-demo jimu-widget", style: { overflow: 'auto' } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "widgetProperties", title: this.nls('widgetProperties') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title font-weight-bold" }, "NLS messages from jimu-core (OK)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "content" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "ok", defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.ok })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: styleLiteral },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: styleObject }, "Theme danger color")),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, null, "A styled HTML Button"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBSButton, null, "A Re-styled Button Component"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: rtlStyle }, "right to left demo"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", null, styleTag),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "danger-color" }, "Text color is from a named CSS class"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title font-weight-bold" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "widgetName", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].widgetName })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "content" }, this.props.intl.formatMessage({ id: '_widgetLabel', defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]._widgetLabel })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "title font-weight-bold" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "widgetProps", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].widgetProps })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "content" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", null, propsTr)))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "widgetFunctions", title: this.nls('widgetFunctions') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "TODO"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9kZW1vL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDRixpRUFBZTtJQUNiLFlBQVksRUFBRSxjQUFjO0lBQzVCLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxjQUFjO0lBQzFCLFdBQVcsRUFBRSxlQUFlO0NBQzdCOzs7Ozs7Ozs7Ozs7QUN6QkQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUNtSTtBQUUxRjtBQUNTO0FBRXJDLE1BQU0sTUFBTyxTQUFRLDRDQUFLLENBQUMsYUFBNEM7SUFBdEY7O1FBQ0UsUUFBRyxHQUFHLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxj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d0JBQXdCO3dCQUFDLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFFLDZEQUFlLENBQUMsVUFBVSxHQUFHLENBQU07b0JBQzdILHdEQUFLLFNBQVMsRUFBQyxTQUFTLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsNkRBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFPO29CQUVwSSx3REFBSyxTQUFTLEVBQUMsd0JBQXdCO3dCQUFDLCtDQUFDLHVEQUFnQixJQUFDLEVBQUUsRUFBQyxhQUFhLEVBQUMsY0FBYyxFQUFFLDZEQUFlLENBQUMsV0FBVyxHQUFHLENBQU07b0JBQy9ILHdEQUFLLFNBQVMsRUFBQyxTQUFTO3dCQUN0Qjs0QkFDRSw4REFBUSxPQUFPLENBQVMsQ0FDbEIsQ0FDSixDQUNGO2dCQUNOLCtDQUFDLHdDQUFHLElBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO29CQUMxRCxpRUFBVyxDQUNQLENBQ0QsQ0FDSDtJQUNSLENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4Yi1jdXN0b20td2lkZ2V0cy93aWRnZXRzL2RlbW8vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4Yi1jdXN0b20td2lkZ2V0cy93aWRnZXRzL2RlbW8vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjAgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnRGVtbyAoQ2xhc3MpJyxcbiAgd2lkZ2V0UHJvcGVydGllczogJ1dpZGdldCBQcm9wZXJ0aWVzJyxcbiAgd2lkZ2V0RnVuY3Rpb25zOiAnV2lkZ2V0IEZ1bmN0aW9ucycsXG4gIHdpZGdldE5hbWU6ICd3aWRnZXQgbmFtZTonLFxuICB3aWRnZXRQcm9wczogJ3dpZGdldCBwcm9wczonXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIEZvcm1hdHRlZE1lc3NhZ2UsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11Q29yZURlZmF1bHRNZXNzYWdlLCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCwgc3R5bGVkIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IFRhYnMsIFRhYiwgQnV0dG9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIGFueT4ge1xuICBubHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmludGwgPyB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0gfSkgOiBpZFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzdHlsZUxpdGVyYWwgPSBjc3NgXG4gICAgICBjb2xvcjogJHt0aGlzLnByb3BzLnRoZW1lLmNvbG9ycy5kYW5nZXJ9O1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGBcblxuICAgIGNvbnN0IHN0eWxlT2JqZWN0ID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLnRoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzUwMF0sXG4gICAgICBwYWRkaW5nOiAnMXJlbSdcbiAgICB9XG5cbiAgICBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4gYWxsO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5wcm9wcy50aGVtZS5jb2xvcnMuZGFuZ2VyfTtcbiAgICAgIH1cbiAgICBgXG5cbiAgICBjb25zdCBTdHlsZWRCU0J1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluayAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluIGFsbDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICBgXG5cbiAgICBjb25zdCBzdHlsZVRhZyA9IGBcbiAgICAgIC5kYW5nZXItY29sb3Ige1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIGBcblxuICAgIGNvbnN0IHJ0bFN0eWxlID0gY3NzYFxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYFxuXG4gICAgY29uc3QgcHJvcHNUciA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLm1hcCgocHJvcCwgaSkgPT4ge1xuICAgICAgaWYgKFsnbWFuaWZlc3QnLCAndXNlcicsICdpbnRsJ10uaW5jbHVkZXMocHJvcCkgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMucHJvcHNbcHJvcF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiA8dHIga2V5PXtpfT48dGQ+e3Byb3B9PC90ZD48dGQ+e3RoaXMucHJvcHNbcHJvcF0gJiYgdGhpcy5wcm9wc1twcm9wXS50b1N0cmluZygpfTwvdGQ+PC90cj5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDx0ciBrZXk9e2l9PlxuICAgICAgICA8dGQ+e3Byb3B9PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHNbcHJvcF0sIG51bGwsIDIpXG4gICAgICAgICAgfVxuICAgICAgICA8L3RkPjwvdHI+XG4gICAgfSlcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1kZW1vIGppbXUtd2lkZ2V0XCIgc3R5bGU9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgIDxUYWJzPlxuICAgICAgICA8VGFiIGlkPVwid2lkZ2V0UHJvcGVydGllc1wiIHRpdGxlPXt0aGlzLm5scygnd2lkZ2V0UHJvcGVydGllcycpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGZvbnQtd2VpZ2h0LWJvbGRcIj5OTFMgbWVzc2FnZXMgZnJvbSBqaW11LWNvcmUgKE9LKTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwib2tcIiBkZWZhdWx0TWVzc2FnZT17amltdUNvcmVEZWZhdWx0TWVzc2FnZS5va30+PC9Gb3JtYXR0ZWRNZXNzYWdlPjwvZGl2PlxuICAgICAgICAgIDxoci8+XG4gICAgICAgICAgey8qIGRlbW8gaG93IHRvIHVzZSB0aGVtZSB2YXJpYWJsZXMgKi99XG4gICAgICAgICAgPGRpdiBjc3M9e3N0eWxlTGl0ZXJhbH0+PHNwYW4gY3NzPXtzdHlsZU9iamVjdH0+VGhlbWUgZGFuZ2VyIGNvbG9yPC9zcGFuPjwvZGl2PlxuICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICA8U3R5bGVkQnV0dG9uPkEgc3R5bGVkIEhUTUwgQnV0dG9uPC9TdHlsZWRCdXR0b24+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgPFN0eWxlZEJTQnV0dG9uPkEgUmUtc3R5bGVkIEJ1dHRvbiBDb21wb25lbnQ8L1N0eWxlZEJTQnV0dG9uPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cblxuICAgICAgICAgIDxkaXYgY3NzPXtydGxTdHlsZX0+cmlnaHQgdG8gbGVmdCBkZW1vPC9kaXY+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAge3N0eWxlVGFnfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGFuZ2VyLWNvbG9yXCI+XG4gICAgICAgICAgICBUZXh0IGNvbG9yIGlzIGZyb20gYSBuYW1lZCBDU1MgY2xhc3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgey8qIGRlbW8gaG93IHRvIGZvcm1hdCBzdHJpbmcgYnkgY2FsbCBBUEkgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmb250LXdlaWdodC1ib2xkXCI+PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJ3aWRnZXROYW1lXCIgZGVmYXVsdE1lc3NhZ2U9e2RlZmF1bHRNZXNzYWdlcy53aWRnZXROYW1lfS8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdfd2lkZ2V0TGFiZWwnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLl93aWRnZXRMYWJlbCB9KX08L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgZm9udC13ZWlnaHQtYm9sZFwiPjxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwid2lkZ2V0UHJvcHNcIiBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLndpZGdldFByb3BzfS8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0Ym9keT57cHJvcHNUcn08L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UYWI+XG4gICAgICAgIDxUYWIgaWQ9XCJ3aWRnZXRGdW5jdGlvbnNcIiB0aXRsZT17dGhpcy5ubHMoJ3dpZGdldEZ1bmN0aW9ucycpfT5cbiAgICAgICAgICA8cD5UT0RPPC9wPlxuICAgICAgICA8L1RhYj5cbiAgICAgIDwvVGFicz5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==