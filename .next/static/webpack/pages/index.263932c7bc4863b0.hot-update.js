"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/CohortTable.tsx":
/*!**********************************************!*\
  !*** ./src/pages/components/CohortTable.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortChartTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CohortChartTable(param) {\n    let { data } = param;\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const transformData = data.map((item)=>{\n        const flattened = {\n            standardDate: item.standardDate,\n            firstOrderUsers: item.firstOrderUsers,\n            ...item.retention\n        };\n        return flattened;\n    });\n    // 모든 객체에서 키를 추출하여 고유한 컬럼 세트를 생성\n    const columns = transformData.reduce((cols, item)=>{\n        Object.keys(item).forEach((key)=>{\n            if (!cols.includes(key)) {\n                cols.push(key);\n            }\n        });\n        return cols;\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(columns);\n        setChartData(transformData);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: columns.map((col, index)=>{\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: col\n                        }, index, false, {\n                            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(CohortChartTable, \"LmsCyr6MQhwVasL7GTKlIjQ8Q1M=\");\n_c = CohortChartTable;\nvar _c;\n$RefreshReg$(_c, \"CohortChartTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQW1CN0IsU0FBU0UsaUJBQWlCLEtBQTBCO1FBQTFCLEVBQUVDLElBQUksRUFBb0IsR0FBMUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUE7SUFFMUMsTUFBTUssZ0JBQWdCSCxLQUFLSSxHQUFHLENBQUMsQ0FBQ0M7UUFDOUIsTUFBTUMsWUFBWTtZQUNoQkMsY0FBY0YsS0FBS0UsWUFBWTtZQUMvQkMsaUJBQWlCSCxLQUFLRyxlQUFlO1lBQ3JDLEdBQUdILEtBQUtJLFNBQVM7UUFDbkI7UUFDQSxPQUFPSDtJQUNUO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1JLFVBQW9CUCxjQUFjUSxNQUFNLENBQzVDLENBQUNDLE1BQWdCUDtRQUNmUSxPQUFPQyxJQUFJLENBQUNULE1BQU1VLE9BQU8sQ0FBQyxDQUFDQztZQUN6QixJQUFJLENBQUNKLEtBQUtLLFFBQVEsQ0FBQ0QsTUFBTTtnQkFDdkJKLEtBQUtNLElBQUksQ0FBQ0Y7WUFDWjtRQUNGO1FBQ0EsT0FBT0o7SUFDVCxHQUNBLEVBQUU7SUFHSmYsZ0RBQVNBLENBQUM7UUFDUnNCLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDWlIsYUFBYUM7SUFDZixHQUFHO1FBQUNIO0tBQUs7SUFFVCxxQkFDRTtrQkFDRSw0RUFBQ3FCO3NCQUNDLDRFQUFDQzswQkFDQyw0RUFBQ0M7OEJBQ0ViLFFBQVFOLEdBQUcsQ0FBQyxDQUFDb0IsS0FBS0M7c0NBQ2pCLDhEQUFDQztzQ0FBZ0JGOzJCQUFSQzs7Ozs7b0JBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0EzQ3dCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvQ29ob3J0VGFibGUudHN4P2I1YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvaG9ydENoYXJ0UHJvcHMge1xuICBkYXRhOiBDb2hvcnRQcm9wc1tdO1xuICAvLyDri6Trpbgg7ZWE7JqU7ZWcIHByb3Bz66W8IOyXrOq4sOyXkCDstpTqsIDtlaAg7IiYIOyeiOyKteuLiOuLpC5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2hvcnRQcm9wcyB7XG4gIHN0YW5kYXJkRGF0ZTogc3RyaW5nO1xuICBmaXJzdE9yZGVyVXNlcnM6IG51bWJlcjtcbiAgcmV0ZW50aW9uOiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+O1xufVxuXG5pbnRlcmZhY2UgQ29ob3J0Q2hhcnREYXRhIHtcbiAgc3RhbmRhcmREYXRlOiBzdHJpbmc7XG4gIGZpcnN0T3JkZXJVc2VyczogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmc7IC8vIFJldGVudGlvbiDrjbDsnbTthLDrpbwg7Y+s7ZWo7ZWY6riwIOychO2VnCDtg4DsnoUg7ZmV7J6lXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvaG9ydENoYXJ0VGFibGUoeyBkYXRhIH06IENvaG9ydENoYXJ0UHJvcHMpIHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPENvaG9ydENoYXJ0RGF0YVtdPigpO1xuXG4gIGNvbnN0IHRyYW5zZm9ybURhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IHtcbiAgICAgIHN0YW5kYXJkRGF0ZTogaXRlbS5zdGFuZGFyZERhdGUsXG4gICAgICBmaXJzdE9yZGVyVXNlcnM6IGl0ZW0uZmlyc3RPcmRlclVzZXJzLFxuICAgICAgLi4uaXRlbS5yZXRlbnRpb24sIC8vIFJldGVudGlvbiDqsJ3ssrTrpbwg7ZKA7Ja07IScIOyDgeychCDroIjrsqjsnZgg7ZSE66Gc7Y287Yuw66GcIOy2lOqwgFxuICAgIH07XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbiAgfSk7XG5cbiAgLy8g66qo65OgIOqwneyytOyXkOyEnCDtgqTrpbwg7LaU7Lac7ZWY7JesIOqzoOycoO2VnCDsu6zrn7wg7IS47Yq466W8IOyDneyEsVxuICBjb25zdCBjb2x1bW5zOiBzdHJpbmdbXSA9IHRyYW5zZm9ybURhdGEucmVkdWNlKFxuICAgIChjb2xzOiBzdHJpbmdbXSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIWNvbHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGNvbHMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb2xzO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgIHNldENoYXJ0RGF0YSh0cmFuc2Zvcm1EYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9Pntjb2x9PC90aD47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvaG9ydENoYXJ0VGFibGUiLCJkYXRhIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwidHJhbnNmb3JtRGF0YSIsIm1hcCIsIml0ZW0iLCJmbGF0dGVuZWQiLCJzdGFuZGFyZERhdGUiLCJmaXJzdE9yZGVyVXNlcnMiLCJyZXRlbnRpb24iLCJjb2x1bW5zIiwicmVkdWNlIiwiY29scyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInRhYmxlIiwidGhlYWQiLCJ0ciIsImNvbCIsImluZGV4IiwidGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/CohortTable.tsx\n"));

/***/ })

});