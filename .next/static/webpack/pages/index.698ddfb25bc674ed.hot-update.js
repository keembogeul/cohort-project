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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortChartTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-table */ \"./node_modules/@tanstack/react-table/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst transformData = (data)=>{\n    return data.map((item)=>{\n        const flattened = {\n            standardDate: item.standardDate,\n            firstOrderUsers: item.firstOrderUsers,\n            ...item.retention\n        };\n        return flattened;\n    });\n};\nfunction CohortChartTable(param) {\n    let { data } = param;\n    _s();\n    console.log(data && Object.keys(data[0].retention));\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const columnHelper = (0,_tanstack_react_table__WEBPACK_IMPORTED_MODULE_2__.createColumnHelper)();\n    const transformData = data.map((item)=>{\n        const flattened = {\n            standardDate: item.standardDate,\n            firstOrderUsers: item.firstOrderUsers,\n            ...item.retention\n        };\n        return flattened;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(transformData);\n        setChartData(transformData);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data && data.map((row, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: row.standardDate\n            }, index, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                lineNumber: 59,\n                columnNumber: 18\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(CohortChartTable, \"LmsCyr6MQhwVasL7GTKlIjQ8Q1M=\");\n_c = CohortChartTable;\nvar _c;\n$RefreshReg$(_c, \"CohortChartTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLK0I7QUFDYTtBQW1CNUMsTUFBTUcsZ0JBQWdCLENBQUNDO0lBQ3JCLE9BQU9BLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQztRQUNmLE1BQU1DLFlBQVk7WUFDaEJDLGNBQWNGLEtBQUtFLFlBQVk7WUFDL0JDLGlCQUFpQkgsS0FBS0csZUFBZTtZQUNyQyxHQUFHSCxLQUFLSSxTQUFTO1FBQ25CO1FBQ0EsT0FBT0g7SUFDVDtBQUNGO0FBRWUsU0FBU0ksaUJBQWlCLEtBQTBCO1FBQTFCLEVBQUVQLElBQUksRUFBb0IsR0FBMUI7O0lBQ3ZDUSxRQUFRQyxHQUFHLENBQUNULFFBQVFVLE9BQU9DLElBQUksQ0FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQ00sU0FBUztJQUNqRCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR2YsK0NBQVFBO0lBQzFDLE1BQU1nQixlQUFlbEIseUVBQWtCQTtJQUN2QyxNQUFNRyxnQkFBZ0JDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQztRQUM5QixNQUFNQyxZQUFZO1lBQ2hCQyxjQUFjRixLQUFLRSxZQUFZO1lBQy9CQyxpQkFBaUJILEtBQUtHLGVBQWU7WUFDckMsR0FBR0gsS0FBS0ksU0FBUztRQUNuQjtRQUNBLE9BQU9IO0lBQ1Q7SUFFQU4sZ0RBQVNBLENBQUM7UUFDUlcsUUFBUUMsR0FBRyxDQUFDVjtRQUNaYyxhQUFhZDtJQUNmLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHQyxRQUNDQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ2MsS0FBS0M7WUFDYixxQkFBTyw4REFBQ0M7MEJBQWlCRixJQUFJWCxZQUFZO2VBQXhCWTs7Ozs7UUFDbkI7O0FBR1I7R0ExQndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3g/YjVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVDb2x1bW5IZWxwZXIsXG4gIGZsZXhSZW5kZXIsXG4gIGdldENvcmVSb3dNb2RlbCxcbiAgdXNlUmVhY3RUYWJsZSxcbn0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC10YWJsZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvaG9ydENoYXJ0UHJvcHMge1xuICBkYXRhOiBDb2hvcnRQcm9wc1tdO1xuICAvLyDri6Trpbgg7ZWE7JqU7ZWcIHByb3Bz66W8IOyXrOq4sOyXkCDstpTqsIDtlaAg7IiYIOyeiOyKteuLiOuLpC5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2hvcnRQcm9wcyB7XG4gIHN0YW5kYXJkRGF0ZTogc3RyaW5nO1xuICBmaXJzdE9yZGVyVXNlcnM6IG51bWJlcjtcbiAgcmV0ZW50aW9uOiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+O1xufVxuXG5pbnRlcmZhY2UgQ29ob3J0Q2hhcnREYXRhIHtcbiAgc3RhbmRhcmREYXRlOiBzdHJpbmc7XG4gIGZpcnN0T3JkZXJVc2VyczogbnVtYmVyO1xuICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmc7IC8vIFJldGVudGlvbiDrjbDsnbTthLDrpbwg7Y+s7ZWo7ZWY6riwIOychO2VnCDtg4DsnoUg7ZmV7J6lXG59XG5cbmNvbnN0IHRyYW5zZm9ybURhdGEgPSAoZGF0YTogYW55W10pOiBDb2hvcnRDaGFydERhdGFbXSA9PiB7XG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IHtcbiAgICAgIHN0YW5kYXJkRGF0ZTogaXRlbS5zdGFuZGFyZERhdGUsXG4gICAgICBmaXJzdE9yZGVyVXNlcnM6IGl0ZW0uZmlyc3RPcmRlclVzZXJzLFxuICAgICAgLi4uaXRlbS5yZXRlbnRpb24sIC8vIFJldGVudGlvbiDqsJ3ssrTrpbwg7ZKA7Ja07IScIOyDgeychCDroIjrsqjsnZgg7ZSE66Gc7Y287Yuw66GcIOy2lOqwgFxuICAgIH07XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2hvcnRDaGFydFRhYmxlKHsgZGF0YSB9OiBDb2hvcnRDaGFydFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YVswXS5yZXRlbnRpb24pKTtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPENvaG9ydENoYXJ0RGF0YT4oKTtcbiAgY29uc3QgY29sdW1uSGVscGVyID0gY3JlYXRlQ29sdW1uSGVscGVyKCk7XG4gIGNvbnN0IHRyYW5zZm9ybURhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IHtcbiAgICAgIHN0YW5kYXJkRGF0ZTogaXRlbS5zdGFuZGFyZERhdGUsXG4gICAgICBmaXJzdE9yZGVyVXNlcnM6IGl0ZW0uZmlyc3RPcmRlclVzZXJzLFxuICAgICAgLi4uaXRlbS5yZXRlbnRpb24sIC8vIFJldGVudGlvbiDqsJ3ssrTrpbwg7ZKA7Ja07IScIOyDgeychCDroIjrsqjsnZgg7ZSE66Gc7Y287Yuw66GcIOy2lOqwgFxuICAgIH07XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0cmFuc2Zvcm1EYXRhKTtcbiAgICBzZXRDaGFydERhdGEodHJhbnNmb3JtRGF0YSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YSAmJlxuICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9Pntyb3cuc3RhbmRhcmREYXRlfTwvZGl2PjtcbiAgICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29sdW1uSGVscGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0cmFuc2Zvcm1EYXRhIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJmbGF0dGVuZWQiLCJzdGFuZGFyZERhdGUiLCJmaXJzdE9yZGVyVXNlcnMiLCJyZXRlbnRpb24iLCJDb2hvcnRDaGFydFRhYmxlIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJjb2x1bW5IZWxwZXIiLCJyb3ciLCJpbmRleCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/CohortTable.tsx\n"));

/***/ })

});