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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortChartTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CohortChartTable(param) {\n    let { data } = param;\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const transformData = data.map((item)=>{\n        const flattened = {\n            standardDate: item.standardDate,\n            firstOrderUsers: item.firstOrderUsers,\n            ...item.retention\n        };\n        return flattened;\n    });\n    // 모든 객체에서 키를 추출하여 고유한 컬럼 세트를 생성\n    const columns = transformData.reduce((cols, item)=>{\n        Object.keys(item).forEach((key)=>{\n            if (!cols.includes(key)) {\n                cols.push(key);\n            }\n        });\n        return cols;\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(columns);\n        setChartData(transformData);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: chartData && chartData.map((row, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: row.standardDate\n                }, index, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 20\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(CohortChartTable, \"LmsCyr6MQhwVasL7GTKlIjQ8Q1M=\");\n_c = CohortChartTable;\nvar _c;\n$RefreshReg$(_c, \"CohortChartTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQW1CN0IsU0FBU0UsaUJBQWlCLEtBQTBCO1FBQTFCLEVBQUVDLElBQUksRUFBb0IsR0FBMUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUE7SUFFMUMsTUFBTUssZ0JBQWdCSCxLQUFLSSxHQUFHLENBQUMsQ0FBQ0M7UUFDOUIsTUFBTUMsWUFBWTtZQUNoQkMsY0FBY0YsS0FBS0UsWUFBWTtZQUMvQkMsaUJBQWlCSCxLQUFLRyxlQUFlO1lBQ3JDLEdBQUdILEtBQUtJLFNBQVM7UUFDbkI7UUFDQSxPQUFPSDtJQUNUO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1JLFVBQW9CUCxjQUFjUSxNQUFNLENBQzVDLENBQUNDLE1BQWdCUDtRQUNmUSxPQUFPQyxJQUFJLENBQUNULE1BQU1VLE9BQU8sQ0FBQyxDQUFDQztZQUN6QixJQUFJLENBQUNKLEtBQUtLLFFBQVEsQ0FBQ0QsTUFBTTtnQkFDdkJKLEtBQUtNLElBQUksQ0FBQ0Y7WUFDWjtRQUNGO1FBQ0EsT0FBT0o7SUFDVCxHQUNBLEVBQUU7SUFHSmYsZ0RBQVNBLENBQUM7UUFDUnNCLFFBQVFDLEdBQUcsQ0FBQ1Y7UUFDWlIsYUFBYUM7SUFDZixHQUFHO1FBQUNIO0tBQUs7SUFFVCxxQkFDRTtrQkFDRSw0RUFBQ3FCO3NCQUNFcEIsYUFDQ0EsVUFBVUcsR0FBRyxDQUFDLENBQUNrQixLQUFLQztnQkFDbEIscUJBQU8sOERBQUNDOzhCQUFpQkYsSUFBSWYsWUFBWTttQkFBeEJnQjs7Ozs7WUFDbkI7Ozs7Ozs7QUFJVjtHQXhDd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3g/YjVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ob3J0Q2hhcnRQcm9wcyB7XG4gIGRhdGE6IENvaG9ydFByb3BzW107XG4gIC8vIOuLpOuluCDtlYTsmpTtlZwgcHJvcHPrpbwg7Jes6riw7JeQIOy2lOqwgO2VoCDsiJgg7J6I7Iq164uI64ukLlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvaG9ydFByb3BzIHtcbiAgc3RhbmRhcmREYXRlOiBzdHJpbmc7XG4gIGZpcnN0T3JkZXJVc2VyczogbnVtYmVyO1xuICByZXRlbnRpb246IFJlY29yZDxudW1iZXIsIG51bWJlcj47XG59XG5cbmludGVyZmFjZSBDb2hvcnRDaGFydERhdGEge1xuICBzdGFuZGFyZERhdGU6IHN0cmluZztcbiAgZmlyc3RPcmRlclVzZXJzOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZzsgLy8gUmV0ZW50aW9uIOuNsOydtO2EsOulvCDtj6ztlajtlZjquLAg7JyE7ZWcIO2DgOyehSDtmZXsnqVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ob3J0Q2hhcnRUYWJsZSh7IGRhdGEgfTogQ29ob3J0Q2hhcnRQcm9wcykge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8Q29ob3J0Q2hhcnREYXRhW10+KCk7XG5cbiAgY29uc3QgdHJhbnNmb3JtRGF0YSA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZmxhdHRlbmVkID0ge1xuICAgICAgc3RhbmRhcmREYXRlOiBpdGVtLnN0YW5kYXJkRGF0ZSxcbiAgICAgIGZpcnN0T3JkZXJVc2VyczogaXRlbS5maXJzdE9yZGVyVXNlcnMsXG4gICAgICAuLi5pdGVtLnJldGVudGlvbiwgLy8gUmV0ZW50aW9uIOqwneyytOulvCDtkoDslrTshJwg7IOB7JyEIOugiOuyqOydmCDtlITroZztjbzti7DroZwg7LaU6rCAXG4gICAgfTtcbiAgICByZXR1cm4gZmxhdHRlbmVkO1xuICB9KTtcblxuICAvLyDrqqjrk6Ag6rCd7LK07JeQ7IScIO2CpOulvCDstpTstpztlZjsl6wg6rOg7Jyg7ZWcIOy7rOufvCDshLjtirjrpbwg7IOd7ISxXG4gIGNvbnN0IGNvbHVtbnM6IHN0cmluZ1tdID0gdHJhbnNmb3JtRGF0YS5yZWR1Y2UoXG4gICAgKGNvbHM6IHN0cmluZ1tdLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghY29scy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgY29scy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbHM7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29sdW1ucyk7XG4gICAgc2V0Q2hhcnREYXRhKHRyYW5zZm9ybURhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAge2NoYXJ0RGF0YSAmJlxuICAgICAgICAgIGNoYXJ0RGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9Pntyb3cuc3RhbmRhcmREYXRlfTwvZGl2PjtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2hvcnRDaGFydFRhYmxlIiwiZGF0YSIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsInRyYW5zZm9ybURhdGEiLCJtYXAiLCJpdGVtIiwiZmxhdHRlbmVkIiwic3RhbmRhcmREYXRlIiwiZmlyc3RPcmRlclVzZXJzIiwicmV0ZW50aW9uIiwiY29sdW1ucyIsInJlZHVjZSIsImNvbHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImluY2x1ZGVzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJ0YWJsZSIsInJvdyIsImluZGV4IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/CohortTable.tsx\n"));

/***/ })

});