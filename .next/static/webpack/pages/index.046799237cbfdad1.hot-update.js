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

/***/ "./src/pages/components/CohortCalculate.tsx":
/*!**************************************************!*\
  !*** ./src/pages/components/CohortCalculate.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortCalculate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_cohortSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/cohortSlice */ \"./src/pages/slices/cohortSlice.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/hooks */ \"./src/pages/store/hooks.ts\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CohortTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CohortTable */ \"./src/pages/components/CohortTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CohortCalculate() {\n    _s();\n    const [cohortData, setCohortData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [regionData, setRegionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const rowData = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.cohort.data);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const fetchDataFromAPI = async ()=>{\n        try {\n            await dispatch((0,_slices_cohortSlice__WEBPACK_IMPORTED_MODULE_2__.fetchData)());\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchDataFromAPI();\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (rowData.length > 0) {\n            const cohortData = calculateCohortData(rowData);\n            setCohortData(cohortData);\n            const uniqRegionRow = lodash__WEBPACK_IMPORTED_MODULE_4___default().uniqBy(rowData, \"region\");\n            const regionData = uniqRegionRow.map((row)=>{\n                return row.region;\n            });\n            console.log(regionData);\n            setRegionData(regionData);\n        }\n    }, [\n        rowData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {}, void 0, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            cohortData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CohortTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: cohortData\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                lineNumber: 53,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CohortCalculate, \"hT9SQw7l1cRFutTMf82NhA4NvYY=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = CohortCalculate;\nconst calculateCohortData = (rowData)=>{\n    // uid 기준으로 가장 작은 standardDate(첫 주문)인 rowData\n    const minDatesByUid = Object.values(rowData.reduce((acc, row)=>{\n        const key = row.uid.toString();\n        if (!acc[key] || row.standardDate.slice(0, 7) < acc[key].standardDate.slice(0, 7)) {\n            acc[key] = row;\n        }\n        return acc;\n    }, {}));\n    // standardDate 기준으로 sort\n    const sortedMinDatesByUid = minDatesByUid.sort((a, b)=>a.standardDate.slice(0, 7).localeCompare(b.standardDate.slice(0, 7)));\n    // standardDate로 그룹화하고 각 그룹의 uid 개수를 length로 만들기\n    const groupData = lodash__WEBPACK_IMPORTED_MODULE_4___default().groupBy(sortedMinDatesByUid, (row)=>row.standardDate.slice(0, 7));\n    const groupedByDate = Object.entries(groupData).map((param)=>{\n        let [standardDate, array] = param;\n        return {\n            standardDate,\n            firstOrderUsers: array.length\n        };\n    });\n    let minDate = groupedByDate[0].standardDate;\n    let maxDate = groupedByDate[0].standardDate;\n    groupedByDate.forEach((item)=>{\n        if (item.standardDate < minDate) {\n            minDate = item.standardDate;\n        }\n        if (item.standardDate > maxDate) {\n            maxDate = item.standardDate;\n        }\n    });\n    // 잔존율 데이터 계산\n    const finalData = calculateMonthlyRetention(minDatesByUid, rowData, minDate, maxDate);\n    return finalData;\n};\n// 날짜에 달을 더하는 함수\nconst addMonths = (dateStr, months)=>{\n    let date = new Date(dateStr);\n    date.setMonth(date.getMonth() + months);\n    return date.toISOString().split(\"T\")[0];\n};\n// 월별 잔존율 계산 함수\nconst calculateMonthlyRetention = (minDatesByUid, allOrders, startDate, endDate)=>{\n    const groupedData = {};\n    // 첫 주문을 월별로 그룹화\n    minDatesByUid.forEach((order)=>{\n        const monthKey = order.standardDate.slice(0, 7); // 년-월 기준으로 그룹화\n        if (!groupedData[monthKey]) {\n            groupedData[monthKey] = [];\n        }\n        groupedData[monthKey].push(order);\n    });\n    const retentionData = [];\n    Object.keys(groupedData).forEach((month)=>{\n        const monthlyData = groupedData[month];\n        const retention = {};\n        let currentDate = startDate;\n        let i = 0;\n        while(currentDate < endDate){\n            // 잔존율 계산\n            currentDate = addMonths(month, i).slice(0, 7);\n            if (i !== 0) {\n                retention[i] = (monthlyData.filter((user)=>allOrders.some((order)=>order.uid === user.uid && order.standardDate > currentDate)).length / monthlyData.length * 100).toFixed(2) + \"%\";\n            }\n            i++;\n        }\n        retentionData.push({\n            standardDate: month,\n            firstOrderUsers: monthlyData.length,\n            retention\n        });\n    });\n    return retentionData;\n};\nvar _c;\n$RefreshReg$(_c, \"CohortCalculate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRDYWxjdWxhdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNTO0FBQ0k7QUFDekM7QUFDeUQ7QUFRakUsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQTtJQUM1QyxNQUFNVyxVQUFVVCw0REFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNDLElBQUk7SUFDM0QsTUFBTUMsV0FBV1osNERBQWNBO0lBRS9CLE1BQU1hLG1CQUFtQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUQsU0FBU2QsOERBQVNBO1FBQzFCLEVBQUUsT0FBT2dCLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQWxCLGdEQUFTQSxDQUFDO1FBQ1JpQjtJQUNGLEdBQUc7UUFBQ0Q7S0FBUztJQUViaEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxRQUFRUyxNQUFNLEdBQUcsR0FBRztZQUN0QixNQUFNYixhQUFhYyxvQkFBb0JWO1lBQ3ZDSCxjQUFjRDtZQUVkLE1BQU1lLGdCQUFnQmxCLG9EQUFRLENBQUNPLFNBQVM7WUFFeEMsTUFBTUYsYUFBYWEsY0FBY0UsR0FBRyxDQUFDLENBQUNDO2dCQUNwQyxPQUFPQSxJQUFJQyxNQUFNO1lBQ25CO1lBRUFSLFFBQVFDLEdBQUcsQ0FBQ1Y7WUFFWkMsY0FBY0Q7UUFDaEI7SUFDRixHQUFHO1FBQUNFO0tBQVE7SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNnQjswQkFDQyw0RUFBQ0M7Ozs7Ozs7Ozs7WUFFRnJCLDRCQUFjLDhEQUFDRixvREFBZ0JBO2dCQUFDUyxNQUFNUDs7Ozs7Ozs7QUFHN0M7R0EzQ3dCRDs7UUFHTkosd0RBQWNBO1FBQ2JDLHdEQUFjQTs7O0tBSlRHO0FBNkN4QixNQUFNZSxzQkFBc0IsQ0FBQ1Y7SUFDM0IsNkNB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QUNDLE9BQ25CZixVQUFVZ0IsSUFBSSxDQUNaLENBQUNaLFFBQ0NBLE1BQU1sQyxHQUFHLEtBQUs2QyxLQUFLN0MsR0FBRyxJQUFJa0MsTUFBTWhDLFlBQVksR0FBR3dDLGNBRW5EekQsTUFBTSxHQUNOdUQsWUFBWXZELE1BQU0sR0FDcEIsR0FBRSxFQUNGOEQsT0FBTyxDQUFDLEtBQUs7WUFDbkI7WUFDQUo7UUFDRjtRQUNBTixjQUFjRCxJQUFJLENBQUM7WUFDakJsQyxjQUFjcUM7WUFDZHpCLGlCQUFpQjBCLFlBQVl2RCxNQUFNO1lBQ25Dd0Q7UUFDRjtJQUNGO0lBRUEsT0FBT0o7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRDYWxjdWxhdGUudHN4PzRkNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERhdGFUeXBlLCBmZXRjaERhdGEgfSBmcm9tIFwiLi4vc2xpY2VzL2NvaG9ydFNsaWNlXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vc3RvcmUvaG9va3NcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDb2hvcnRDaGFydFRhYmxlLCB7IENvaG9ydENoYXJ0UHJvcHMsIENvaG9ydFByb3BzIH0gZnJvbSBcIi4vQ29ob3J0VGFibGVcIjtcblxudHlwZSBGaXJzdE9yZGVyRGF0YSA9IHtcbiAgc3RhbmRhcmREYXRlOiBzdHJpbmc7XG4gIGZpcnN0T3JkZXJVc2VyczogbnVtYmVyO1xuICByZXRlbnRpb246IFJlY29yZDxudW1iZXIsIHN0cmluZz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2hvcnRDYWxjdWxhdGUoKSB7XG4gIGNvbnN0IFtjb2hvcnREYXRhLCBzZXRDb2hvcnREYXRhXSA9IHVzZVN0YXRlPENvaG9ydFByb3BzW10+KCk7XG4gIGNvbnN0IFtyZWdpb25EYXRhLCBzZXRSZWdpb25EYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJvd0RhdGEgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvaG9ydC5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGZldGNoRGF0YUZyb21BUEkgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoRGF0YSgpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YUZyb21BUEkoKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm93RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb2hvcnREYXRhID0gY2FsY3VsYXRlQ29ob3J0RGF0YShyb3dEYXRhKTtcbiAgICAgIHNldENvaG9ydERhdGEoY29ob3J0RGF0YSk7XG5cbiAgICAgIGNvbnN0IHVuaXFSZWdpb25Sb3cgPSBfLnVuaXFCeShyb3dEYXRhLCBcInJlZ2lvblwiKTtcblxuICAgICAgY29uc3QgcmVnaW9uRGF0YSA9IHVuaXFSZWdpb25Sb3cubWFwKChyb3cpID0+IHtcbiAgICAgICAgcmV0dXJuIHJvdy5yZWdpb247XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2cocmVnaW9uRGF0YSk7XG5cbiAgICAgIHNldFJlZ2lvbkRhdGEocmVnaW9uRGF0YSk7XG4gICAgfVxuICB9LCBbcm93RGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3Q+PC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjb2hvcnREYXRhICYmIDxDb2hvcnRDaGFydFRhYmxlIGRhdGE9e2NvaG9ydERhdGF9IC8+fVxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBjYWxjdWxhdGVDb2hvcnREYXRhID0gKHJvd0RhdGE6IERhdGFUeXBlW10pID0+IHtcbiAgLy8gdWlkIOq4sOykgOycvOuhnCDqsIDsnqUg7J6R7J2AIHN0YW5kYXJkRGF0ZSjssqsg7KO866y4KeyduCByb3dEYXRhXG4gIGNvbnN0IG1pbkRhdGVzQnlVaWQ6IERhdGFUeXBlW10gPSBPYmplY3QudmFsdWVzKFxuICAgIHJvd0RhdGEucmVkdWNlKChhY2M6IFJlY29yZDxzdHJpbmcsIERhdGFUeXBlPiwgcm93KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSByb3cudWlkLnRvU3RyaW5nKCk7XG4gICAgICBpZiAoXG4gICAgICAgICFhY2Nba2V5XSB8fFxuICAgICAgICByb3cuc3RhbmRhcmREYXRlLnNsaWNlKDAsIDcpIDwgYWNjW2tleV0uc3RhbmRhcmREYXRlLnNsaWNlKDAsIDcpXG4gICAgICApIHtcbiAgICAgICAgYWNjW2tleV0gPSByb3c7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KVxuICApO1xuXG4gIC8vIHN0YW5kYXJkRGF0ZSDquLDspIDsnLzroZwgc29ydFxuICBjb25zdCBzb3J0ZWRNaW5EYXRlc0J5VWlkID0gbWluRGF0ZXNCeVVpZC5zb3J0KChhLCBiKSA9PlxuICAgIGEuc3RhbmRhcmREYXRlLnNsaWNlKDAsIDcpLmxvY2FsZUNvbXBhcmUoYi5zdGFuZGFyZERhdGUuc2xpY2UoMCwgNykpXG4gICk7XG5cbiAgLy8gc3RhbmRhcmREYXRl66GcIOq3uOujue2ZlO2VmOqzoCDqsIEg6re466O57J2YIHVpZCDqsJzsiJjrpbwgbGVuZ3Ro66GcIOunjOuTpOq4sFxuICBjb25zdCBncm91cERhdGEgPSBfLmdyb3VwQnkoc29ydGVkTWluRGF0ZXNCeVVpZCwgKHJvdykgPT5cbiAgICByb3cuc3RhbmRhcmREYXRlLnNsaWNlKDAsIDcpXG4gICk7XG4gIGNvbnN0IGdyb3VwZWRCeURhdGU6IHsgc3RhbmRhcmREYXRlOiBzdHJpbmc7IGZpcnN0T3JkZXJVc2VyczogbnVtYmVyIH1bXSA9XG4gICAgT2JqZWN0LmVudHJpZXMoZ3JvdXBEYXRhKS5tYXAoKFtzdGFuZGFyZERhdGUsIGFycmF5XSkgPT4gKHtcbiAgICAgIHN0YW5kYXJkRGF0ZSxcbiAgICAgIGZpcnN0T3JkZXJVc2VyczogYXJyYXkubGVuZ3RoLFxuICAgIH0pKTtcblxuICBsZXQgbWluRGF0ZSA9IGdyb3VwZWRCeURhdGVbMF0uc3RhbmRhcmREYXRlO1xuICBsZXQgbWF4RGF0ZSA9IGdyb3VwZWRCeURhdGVbMF0uc3RhbmRhcmREYXRlO1xuXG4gIGdyb3VwZWRCeURhdGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLnN0YW5kYXJkRGF0ZSA8IG1pbkRhdGUpIHtcbiAgICAgIG1pbkRhdGUgPSBpdGVtLnN0YW5kYXJkRGF0ZTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uc3RhbmRhcmREYXRlID4gbWF4RGF0ZSkge1xuICAgICAgbWF4RGF0ZSA9IGl0ZW0uc3RhbmRhcmREYXRlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8g7J6U7KG07JyoIOuNsOydtO2EsCDqs4TsgrBcbiAgY29uc3QgZmluYWxEYXRhID0gY2FsY3VsYXRlTW9udGhseVJldGVudGlvbihcbiAgICBtaW5EYXRlc0J5VWlkLFxuICAgIHJvd0RhdGEsXG4gICAgbWluRGF0ZSxcbiAgICBtYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIGZpbmFsRGF0YTtcbn07XG5cbi8vIOuCoOynnOyXkCDri6zsnYQg642U7ZWY64qUIO2VqOyImFxuY29uc3QgYWRkTW9udGhzID0gKGRhdGVTdHI6IHN0cmluZywgbW9udGhzOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIG1vbnRocyk7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xufTtcblxuLy8g7JuU67OEIOyelOyhtOycqCDqs4TsgrAg7ZWo7IiYXG5jb25zdCBjYWxjdWxhdGVNb250aGx5UmV0ZW50aW9uID0gKFxuICBtaW5EYXRlc0J5VWlkOiBEYXRhVHlwZVtdLFxuICBhbGxPcmRlcnM6IERhdGFUeXBlW10sXG4gIHN0YXJ0RGF0ZTogc3RyaW5nLFxuICBlbmREYXRlOiBzdHJpbmdcbik6IEZpcnN0T3JkZXJEYXRhW10gPT4ge1xuICBjb25zdCBncm91cGVkRGF0YTogUmVjb3JkPHN0cmluZywgRGF0YVR5cGVbXT4gPSB7fTtcblxuICAvLyDssqsg7KO866y47J2EIOyblOuzhOuhnCDqt7jro7ntmZRcbiAgbWluRGF0ZXNCeVVpZC5mb3JFYWNoKChvcmRlcikgPT4ge1xuICAgIGNvbnN0IG1vbnRoS2V5ID0gb3JkZXIuc3RhbmRhcmREYXRlLnNsaWNlKDAsIDcpOyAvLyDrhYQt7JuUIOq4sOykgOycvOuhnCDqt7jro7ntmZRcblxuICAgIGlmICghZ3JvdXBlZERhdGFbbW9udGhLZXldKSB7XG4gICAgICBncm91cGVkRGF0YVttb250aEtleV0gPSBbXTtcbiAgICB9XG4gICAgZ3JvdXBlZERhdGFbbW9udGhLZXldLnB1c2gob3JkZXIpO1xuICB9KTtcblxuICBjb25zdCByZXRlbnRpb25EYXRhOiBGaXJzdE9yZGVyRGF0YVtdID0gW107XG5cbiAgT2JqZWN0LmtleXMoZ3JvdXBlZERhdGEpLmZvckVhY2goKG1vbnRoKSA9PiB7XG4gICAgY29uc3QgbW9udGhseURhdGEgPSBncm91cGVkRGF0YVttb250aF07XG4gICAgY29uc3QgcmV0ZW50aW9uOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge307XG5cbiAgICBsZXQgY3VycmVudERhdGUgPSBzdGFydERhdGU7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50RGF0ZSA8IGVuZERhdGUpIHtcbiAgICAgIC8vIOyelOyhtOycqCDqs4TsgrBcbiAgICAgIGN1cnJlbnREYXRlID0gYWRkTW9udGhzKG1vbnRoLCBpKS5zbGljZSgwLCA3KTtcbiAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHJldGVudGlvbltpXSA9XG4gICAgICAgICAgKFxuICAgICAgICAgICAgKG1vbnRobHlEYXRhLmZpbHRlcigodXNlcikgPT5cbiAgICAgICAgICAgICAgYWxsT3JkZXJzLnNvbWUoXG4gICAgICAgICAgICAgICAgKG9yZGVyKSA9PlxuICAgICAgICAgICAgICAgICAgb3JkZXIudWlkID09PSB1c2VyLnVpZCAmJiBvcmRlci5zdGFuZGFyZERhdGUgPiBjdXJyZW50RGF0ZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLmxlbmd0aCAvXG4gICAgICAgICAgICAgIG1vbnRobHlEYXRhLmxlbmd0aCkgKlxuICAgICAgICAgICAgMTAwXG4gICAgICAgICAgKS50b0ZpeGVkKDIpICsgXCIlXCI7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldGVudGlvbkRhdGEucHVzaCh7XG4gICAgICBzdGFuZGFyZERhdGU6IG1vbnRoLFxuICAgICAgZmlyc3RPcmRlclVzZXJzOiBtb250aGx5RGF0YS5sZW5ndGgsXG4gICAgICByZXRlbnRpb24sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXRlbnRpb25EYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2hEYXRhIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsIl8iLCJDb2hvcnRDaGFydFRhYmxlIiwiQ29ob3J0Q2FsY3VsYXRlIiwiY29ob3J0RGF0YSIsInNldENvaG9ydERhdGEiLCJyZWdpb25EYXRhIiwic2V0UmVnaW9uRGF0YSIsInJvd0RhdGEiLCJzdGF0ZSIsImNvaG9ydCIsImRhdGEiLCJkaXNwYXRjaCIsImZldGNoRGF0YUZyb21BUEkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjYWxjdWxhdGVDb2hvcnREYXRhIiwidW5pcVJlZ2lvblJvdyIsInVuaXFCeSIsIm1hcCIsInJvdyIsInJlZ2lvbiIsImRpdiIsInNlbGVjdCIsIm1pbkRhdGVzQnlVaWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJ1aWQiLCJ0b1N0cmluZyIsInN0YW5kYXJkRGF0ZSIsInNsaWNlIiwic29ydGVkTWluRGF0ZXNCeVVpZCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJncm91cERhdGEiLCJncm91cEJ5IiwiZ3JvdXBlZEJ5RGF0ZSIsImVudHJpZXMiLCJhcnJheSIsImZpcnN0T3JkZXJVc2VycyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJmaW5hbERhdGEiLCJjYWxjdWxhdGVNb250aGx5UmV0ZW50aW9uIiwiYWRkTW9udGhzIiwiZGF0ZVN0ciIsIm1vbnRocyIsImRhdGUiLCJEYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhbGxPcmRlcnMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ3JvdXBlZERhdGEiLCJvcmRlciIsIm1vbnRoS2V5IiwicHVzaCIsInJldGVudGlvbkRhdGEiLCJrZXlzIiwibW9udGgiLCJtb250aGx5RGF0YSIsInJldGVudGlvbiIsImN1cnJlbnREYXRlIiwiaSIsImZpbHRlciIsInVzZXIiLCJzb21lIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/CohortCalculate.tsx\n"));

/***/ })

});