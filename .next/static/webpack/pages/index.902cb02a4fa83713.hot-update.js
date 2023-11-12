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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortChartTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CohortChartTable(param) {\n    let { data } = param;\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnData, setColumnData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const transformData = data.map((item)=>{\n        const flattened = {\n            \"Month of First\": item.standardDate,\n            \"Coustomers per Month\": item.firstOrderUsers,\n            ...item.retention\n        };\n        return flattened;\n    });\n    // 모든 객체에서 키를 추출하여 고유한 컬럼 세트를 생성\n    const columns = transformData.reduce((cols, item)=>{\n        Object.keys(item).forEach((key)=>{\n            if (!cols.includes(key)) {\n                cols.push(key);\n            }\n        });\n        return cols;\n    }, []);\n    // Month of First\"와 \"Coustomers per Month\" 제거\n    const filteredHeaders = headers.filter((header)=>header !== \"Month of First\" && header !== \"Coustomers per Month\");\n    // 숫자로 변환하여 정렬\n    const sortedHeaders = filteredHeaders.sort((a, b)=>parseInt(a) - parseInt(b));\n    // \"Month of First\"와 \"Coustomers per Month\"를 맨 앞으로 추가\n    sortedHeaders.unshift(\"Coustomers per Month\", \"Month of First\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(columns);\n        setColumnData(columns);\n        setChartData(transformData);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: columnData && columnData.map((col, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: col\n                        }, index, false, {\n                            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 24\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(CohortChartTable, \"hlkHuP24RW4rNob+vVELE0OSjT8=\");\n_c = CohortChartTable;\nvar _c;\n$RefreshReg$(_c, \"CohortChartTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQW1CN0IsU0FBU0UsaUJBQWlCLEtBQTBCO1FBQTFCLEVBQUVDLElBQUksRUFBb0IsR0FBMUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUE7SUFDMUMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQTtJQUU1QyxNQUFNTyxnQkFBZ0JMLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQztRQUM5QixNQUFNQyxZQUFZO1lBQ2hCLGtCQUFrQkQsS0FBS0UsWUFBWTtZQUNuQyx3QkFBd0JGLEtBQUtHLGVBQWU7WUFDNUMsR0FBR0gsS0FBS0ksU0FBUztRQUNuQjtRQUNBLE9BQU9IO0lBQ1Q7SUFFQSxnQ0FBZ0M7SUFDaEMsTUFBTUksVUFBb0JQLGNBQWNRLE1BQU0sQ0FDNUMsQ0FBQ0MsTUFBZ0JQO1FBQ2ZRLE9BQU9DLElBQUksQ0FBQ1QsTUFBTVUsT0FBTyxDQUFDLENBQUNDO1lBQ3pCLElBQUksQ0FBQ0osS0FBS0ssUUFBUSxDQUFDRCxNQUFNO2dCQUN2QkosS0FBS00sSUFBSSxDQUFDRjtZQUNaO1FBQ0Y7UUFDQSxPQUFPSjtJQUNULEdBQ0EsRUFBRTtJQUdKLDZDQUE2QztJQUM3QyxNQUFNTyxrQkFBa0JDLFFBQVFDLE1BQU0sQ0FDcEMsQ0FBQ0MsU0FBV0EsV0FBVyxvQkFBb0JBLFdBQVc7SUFHeEQsY0FBYztJQUNkLE1BQU1DLGdCQUFnQkosZ0JBQWdCSyxJQUFJLENBQ3hDLENBQUNDLEdBQUdDLElBQU1DLFNBQVNGLEtBQUtFLFNBQVNEO0lBR25DLHFEQUFxRDtJQUNyREgsY0FBY0ssT0FBTyxDQUFDLHdCQUF3QjtJQUU5Q2pDLGdEQUFTQSxDQUFDO1FBQ1JrQyxRQUFRQyxHQUFHLENBQUNwQjtRQUNaUixjQUFjUTtRQUNkVixhQUFhRztJQUNmLEdBQUc7UUFBQ0w7S0FBSztJQUVULHFCQUNFO2tCQUNFLDRFQUFDaUM7c0JBQ0MsNEVBQUNDOzBCQUNDLDRFQUFDQzs4QkFDRWhDLGNBQ0NBLFdBQVdHLEdBQUcsQ0FBQyxDQUFDOEIsS0FBS0M7d0JBQ25CLHFCQUFPLDhEQUFDQztzQ0FBZ0JGOzJCQUFSQzs7Ozs7b0JBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1kO0dBM0R3QnRDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0NvaG9ydFRhYmxlLnRzeD9iNWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb2hvcnRDaGFydFByb3BzIHtcbiAgZGF0YTogQ29ob3J0UHJvcHNbXTtcbiAgLy8g64uk66W4IO2VhOyalO2VnCBwcm9wc+ulvCDsl6zquLDsl5Ag7LaU6rCA7ZWgIOyImCDsnojsirXri4jri6QuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ob3J0UHJvcHMge1xuICBzdGFuZGFyZERhdGU6IHN0cmluZztcbiAgZmlyc3RPcmRlclVzZXJzOiBudW1iZXI7XG4gIHJldGVudGlvbjogUmVjb3JkPG51bWJlciwgbnVtYmVyPjtcbn1cblxuaW50ZXJmYWNlIENvaG9ydENoYXJ0RGF0YSB7XG4gIFwiTW9udGggb2YgRmlyc3RcIjogc3RyaW5nO1xuICBcIkNvdXN0b21lcnMgcGVyIE1vbnRoXCI6IG51bWJlcjtcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nOyAvLyBSZXRlbnRpb24g642w7J207YSw66W8IO2PrO2VqO2VmOq4sCDsnITtlZwg7YOA7J6FIO2ZleyepVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2hvcnRDaGFydFRhYmxlKHsgZGF0YSB9OiBDb2hvcnRDaGFydFByb3BzKSB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxDb2hvcnRDaGFydERhdGFbXT4oKTtcbiAgY29uc3QgW2NvbHVtbkRhdGEsIHNldENvbHVtbkRhdGFdID0gdXNlU3RhdGU8c3RyaW5nW10+KCk7XG5cbiAgY29uc3QgdHJhbnNmb3JtRGF0YSA9IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZmxhdHRlbmVkID0ge1xuICAgICAgXCJNb250aCBvZiBGaXJzdFwiOiBpdGVtLnN0YW5kYXJkRGF0ZSxcbiAgICAgIFwiQ291c3RvbWVycyBwZXIgTW9udGhcIjogaXRlbS5maXJzdE9yZGVyVXNlcnMsXG4gICAgICAuLi5pdGVtLnJldGVudGlvbiwgLy8gUmV0ZW50aW9uIOqwneyytOulvCDtkoDslrTshJwg7IOB7JyEIOugiOuyqOydmCDtlITroZztjbzti7DroZwg7LaU6rCAXG4gICAgfTtcbiAgICByZXR1cm4gZmxhdHRlbmVkO1xuICB9KTtcblxuICAvLyDrqqjrk6Ag6rCd7LK07JeQ7IScIO2CpOulvCDstpTstpztlZjsl6wg6rOg7Jyg7ZWcIOy7rOufvCDshLjtirjrpbwg7IOd7ISxXG4gIGNvbnN0IGNvbHVtbnM6IHN0cmluZ1tdID0gdHJhbnNmb3JtRGF0YS5yZWR1Y2UoXG4gICAgKGNvbHM6IHN0cmluZ1tdLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghY29scy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgY29scy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbHM7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIE1vbnRoIG9mIEZpcnN0XCLsmYAgXCJDb3VzdG9tZXJzIHBlciBNb250aFwiIOygnOqxsFxuICBjb25zdCBmaWx0ZXJlZEhlYWRlcnMgPSBoZWFkZXJzLmZpbHRlcihcbiAgICAoaGVhZGVyKSA9PiBoZWFkZXIgIT09IFwiTW9udGggb2YgRmlyc3RcIiAmJiBoZWFkZXIgIT09IFwiQ291c3RvbWVycyBwZXIgTW9udGhcIlxuICApO1xuXG4gIC8vIOyIq+yekOuhnCDrs4DtmZjtlZjsl6wg7KCV66CsXG4gIGNvbnN0IHNvcnRlZEhlYWRlcnMgPSBmaWx0ZXJlZEhlYWRlcnMuc29ydChcbiAgICAoYSwgYikgPT4gcGFyc2VJbnQoYSkgLSBwYXJzZUludChiKVxuICApO1xuXG4gIC8vIFwiTW9udGggb2YgRmlyc3RcIuyZgCBcIkNvdXN0b21lcnMgcGVyIE1vbnRoXCLrpbwg66eoIOyVnuycvOuhnCDstpTqsIBcbiAgc29ydGVkSGVhZGVycy51bnNoaWZ0KFwiQ291c3RvbWVycyBwZXIgTW9udGhcIiwgXCJNb250aCBvZiBGaXJzdFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbHVtbnMpO1xuICAgIHNldENvbHVtbkRhdGEoY29sdW1ucyk7XG4gICAgc2V0Q2hhcnREYXRhKHRyYW5zZm9ybURhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtjb2x1bW5EYXRhICYmXG4gICAgICAgICAgICAgIGNvbHVtbkRhdGEubWFwKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2luZGV4fT57Y29sfTwvdGg+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvaG9ydENoYXJ0VGFibGUiLCJkYXRhIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwiY29sdW1uRGF0YSIsInNldENvbHVtbkRhdGEiLCJ0cmFuc2Zvcm1EYXRhIiwibWFwIiwiaXRlbSIsImZsYXR0ZW5lZCIsInN0YW5kYXJkRGF0ZSIsImZpcnN0T3JkZXJVc2VycyIsInJldGVudGlvbiIsImNvbHVtbnMiLCJyZWR1Y2UiLCJjb2xzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsInB1c2giLCJmaWx0ZXJlZEhlYWRlcnMiLCJoZWFkZXJzIiwiZmlsdGVyIiwiaGVhZGVyIiwic29ydGVkSGVhZGVycyIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50IiwidW5zaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJjb2wiLCJpbmRleCIsInRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/CohortTable.tsx\n"));

/***/ })

});