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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortChartTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CohortChartTable(param) {\n    let { data } = param;\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [columnData, setColumnData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const transformData = data.map((item)=>{\n        const flattened = {\n            \"Month of First\": item.standardDate,\n            \"Coustomers per Month\": item.firstOrderUsers,\n            ...item.retention\n        };\n        return flattened;\n    });\n    // 모든 객체에서 키를 추출하여 고유한 컬럼 세트를 생성\n    const columns = transformData.reduce((cols, item)=>{\n        Object.keys(item).forEach((key)=>{\n            if (!cols.includes(key)) {\n                cols.push(key);\n            }\n        });\n        return cols;\n    }, []);\n    // Month of First\"와 \"Coustomers per Month\" 제거\n    const filteredHeaders = columns.filter((header)=>header !== \"Month of First\" && header !== \"Coustomers per Month\");\n    // 숫자로 변환하여 정렬\n    const sortedHeaders = filteredHeaders.sort((a, b)=>parseInt(a) - parseInt(b));\n    // \"Month of First\"와 \"Coustomers per Month\"를 맨 앞으로 추가\n    sortedHeaders.unshift(\"Month of First\", \"Coustomers per Month\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(sortedHeaders);\n        setColumnData(sortedHeaders);\n        setChartData(transformData);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: columnData && columnData.map((col, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: col\n                        }, index, false, {\n                            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 22\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: chartData && chartData.map((item, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: columnData && columnData.map((col, colIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: item[col] || \"\"\n                            }, colIndex, false, {\n                                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 19\n                            }, this) // 데이터 셀 생성\n                        )\n                    }, rowIndex, false, {\n                        fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortTable.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(CohortChartTable, \"hlkHuP24RW4rNob+vVELE0OSjT8=\");\n_c = CohortChartTable;\nvar _c;\n$RefreshReg$(_c, \"CohortChartTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQW1CN0IsU0FBU0UsaUJBQWlCLEtBQTBCO1FBQTFCLEVBQUVDLElBQUksRUFBb0IsR0FBMUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUE7SUFDMUMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQTtJQUU1QyxNQUFNTyxnQkFBZ0JMLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQztRQUM5QixNQUFNQyxZQUFZO1lBQ2hCLGtCQUFrQkQsS0FBS0UsWUFBWTtZQUNuQyx3QkFBd0JGLEtBQUtHLGVBQWU7WUFDNUMsR0FBR0gsS0FBS0ksU0FBUztRQUNuQjtRQUNBLE9BQU9IO0lBQ1Q7SUFFQSxnQ0FBZ0M7SUFDaEMsTUFBTUksVUFBb0JQLGNBQWNRLE1BQU0sQ0FDNUMsQ0FBQ0MsTUFBZ0JQO1FBQ2ZRLE9BQU9DLElBQUksQ0FBQ1QsTUFBTVUsT0FBTyxDQUFDLENBQUNDO1lBQ3pCLElBQUksQ0FBQ0osS0FBS0ssUUFBUSxDQUFDRCxNQUFNO2dCQUN2QkosS0FBS00sSUFBSSxDQUFDRjtZQUNaO1FBQ0Y7UUFDQSxPQUFPSjtJQUNULEdBQ0EsRUFBRTtJQUdKLDZDQUE2QztJQUM3QyxNQUFNTyxrQkFBa0JULFFBQVFVLE1BQU0sQ0FDcEMsQ0FBQ0MsU0FBV0EsV0FBVyxvQkFBb0JBLFdBQVc7SUFHeEQsY0FBYztJQUNkLE1BQU1DLGdCQUFnQkgsZ0JBQWdCSSxJQUFJLENBQ3hDLENBQUNDLEdBQUdDLElBQU1DLFNBQVNGLEtBQUtFLFNBQVNEO0lBR25DLHFEQUFxRDtJQUNyREgsY0FBY0ssT0FBTyxDQUFDLGtCQUFrQjtJQUV4Q2hDLGdEQUFTQSxDQUFDO1FBQ1JpQyxRQUFRQyxHQUFHLENBQUNQO1FBQ1pwQixjQUFjb0I7UUFDZHRCLGFBQWFHO0lBQ2YsR0FBRztRQUFDTDtLQUFLO0lBRVQscUJBQ0UsOERBQUNnQztRQUFNQyxXQUFVOzswQkFDZiw4REFBQ0M7MEJBQ0MsNEVBQUNDOzhCQUNFaEMsY0FDQ0EsV0FBV0csR0FBRyxDQUFDLENBQUM4QixLQUFLQzt3QkFDbkIscUJBQU8sOERBQUNDO3NDQUFnQkY7MkJBQVJDOzs7OztvQkFDbEI7Ozs7Ozs7Ozs7OzBCQUdOLDhEQUFDRTswQkFDRXRDLGFBQ0NBLFVBQVVLLEdBQUcsQ0FBQyxDQUFDQyxNQUFNaUMseUJBQ25CLDhEQUFDTDtrQ0FDRWhDLGNBQ0NBLFdBQVdHLEdBQUcsQ0FBQyxDQUFDOEIsS0FBS0sseUJBQ25CLDhEQUFDQzswQ0FBbUJuQyxJQUFJLENBQUM2QixJQUFJLElBQUk7K0JBQXhCSzs7OztxQ0FBaUMsV0FBVzs7dUJBSGxERDs7Ozs7Ozs7Ozs7Ozs7OztBQVVyQjtHQXBFd0J6QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRUYWJsZS50c3g/YjVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ob3J0Q2hhcnRQcm9wcyB7XG4gIGRhdGE6IENvaG9ydFByb3BzW107XG4gIC8vIOuLpOuluCDtlYTsmpTtlZwgcHJvcHPrpbwg7Jes6riw7JeQIOy2lOqwgO2VoCDsiJgg7J6I7Iq164uI64ukLlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvaG9ydFByb3BzIHtcbiAgc3RhbmRhcmREYXRlOiBzdHJpbmc7XG4gIGZpcnN0T3JkZXJVc2VyczogbnVtYmVyO1xuICByZXRlbnRpb246IFJlY29yZDxudW1iZXIsIHN0cmluZz47XG59XG5cbmludGVyZmFjZSBDb2hvcnRDaGFydERhdGEge1xuICBcIk1vbnRoIG9mIEZpcnN0XCI6IHN0cmluZztcbiAgXCJDb3VzdG9tZXJzIHBlciBNb250aFwiOiBudW1iZXI7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZzsgLy8gUmV0ZW50aW9uIOuNsOydtO2EsOulvCDtj6ztlajtlZjquLAg7JyE7ZWcIO2DgOyehSDtmZXsnqVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ob3J0Q2hhcnRUYWJsZSh7IGRhdGEgfTogQ29ob3J0Q2hhcnRQcm9wcykge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGU8Q29ob3J0Q2hhcnREYXRhW10+KCk7XG4gIGNvbnN0IFtjb2x1bW5EYXRhLCBzZXRDb2x1bW5EYXRhXSA9IHVzZVN0YXRlPHN0cmluZ1tdPigpO1xuXG4gIGNvbnN0IHRyYW5zZm9ybURhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IHtcbiAgICAgIFwiTW9udGggb2YgRmlyc3RcIjogaXRlbS5zdGFuZGFyZERhdGUsXG4gICAgICBcIkNvdXN0b21lcnMgcGVyIE1vbnRoXCI6IGl0ZW0uZmlyc3RPcmRlclVzZXJzLFxuICAgICAgLi4uaXRlbS5yZXRlbnRpb24sIC8vIFJldGVudGlvbiDqsJ3ssrTrpbwg7ZKA7Ja07IScIOyDgeychCDroIjrsqjsnZgg7ZSE66Gc7Y287Yuw66GcIOy2lOqwgFxuICAgIH07XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbiAgfSk7XG5cbiAgLy8g66qo65OgIOqwneyytOyXkOyEnCDtgqTrpbwg7LaU7Lac7ZWY7JesIOqzoOycoO2VnCDsu6zrn7wg7IS47Yq466W8IOyDneyEsVxuICBjb25zdCBjb2x1bW5zOiBzdHJpbmdbXSA9IHRyYW5zZm9ybURhdGEucmVkdWNlKFxuICAgIChjb2xzOiBzdHJpbmdbXSwgaXRlbTogYW55KSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIWNvbHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGNvbHMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb2xzO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyBNb250aCBvZiBGaXJzdFwi7JmAIFwiQ291c3RvbWVycyBwZXIgTW9udGhcIiDsoJzqsbBcbiAgY29uc3QgZmlsdGVyZWRIZWFkZXJzID0gY29sdW1ucy5maWx0ZXIoXG4gICAgKGhlYWRlcikgPT4gaGVhZGVyICE9PSBcIk1vbnRoIG9mIEZpcnN0XCIgJiYgaGVhZGVyICE9PSBcIkNvdXN0b21lcnMgcGVyIE1vbnRoXCJcbiAgKTtcblxuICAvLyDsiKvsnpDroZwg67OA7ZmY7ZWY7JesIOygleugrFxuICBjb25zdCBzb3J0ZWRIZWFkZXJzID0gZmlsdGVyZWRIZWFkZXJzLnNvcnQoXG4gICAgKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYilcbiAgKTtcblxuICAvLyBcIk1vbnRoIG9mIEZpcnN0XCLsmYAgXCJDb3VzdG9tZXJzIHBlciBNb250aFwi66W8IOunqCDslZ7snLzroZwg7LaU6rCAXG4gIHNvcnRlZEhlYWRlcnMudW5zaGlmdChcIk1vbnRoIG9mIEZpcnN0XCIsIFwiQ291c3RvbWVycyBwZXIgTW9udGhcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWRIZWFkZXJzKTtcbiAgICBzZXRDb2x1bW5EYXRhKHNvcnRlZEhlYWRlcnMpO1xuICAgIHNldENoYXJ0RGF0YSh0cmFuc2Zvcm1EYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAge2NvbHVtbkRhdGEgJiZcbiAgICAgICAgICAgIGNvbHVtbkRhdGEubWFwKChjb2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtpbmRleH0+e2NvbH08L3RoPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge2NoYXJ0RGF0YSAmJlxuICAgICAgICAgIGNoYXJ0RGF0YS5tYXAoKGl0ZW0sIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtyb3dJbmRleH0+XG4gICAgICAgICAgICAgIHtjb2x1bW5EYXRhICYmXG4gICAgICAgICAgICAgICAgY29sdW1uRGF0YS5tYXAoKGNvbCwgY29sSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbEluZGV4fT57aXRlbVtjb2xdIHx8IFwiXCJ9PC90ZD4gLy8g642w7J207YSwIOyFgCDsg53shLFcbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2hvcnRDaGFydFRhYmxlIiwiZGF0YSIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsImNvbHVtbkRhdGEiLCJzZXRDb2x1bW5EYXRhIiwidHJhbnNmb3JtRGF0YSIsIm1hcCIsIml0ZW0iLCJmbGF0dGVuZWQiLCJzdGFuZGFyZERhdGUiLCJmaXJzdE9yZGVyVXNlcnMiLCJyZXRlbnRpb24iLCJjb2x1bW5zIiwicmVkdWNlIiwiY29scyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJwdXNoIiwiZmlsdGVyZWRIZWFkZXJzIiwiZmlsdGVyIiwiaGVhZGVyIiwic29ydGVkSGVhZGVycyIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50IiwidW5zaGlmdCIsImNvbnNvbGUiLCJsb2ciLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJjb2wiLCJpbmRleCIsInRoIiwidGJvZHkiLCJyb3dJbmRleCIsImNvbEluZGV4IiwidGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/CohortTable.tsx\n"));

/***/ })

});