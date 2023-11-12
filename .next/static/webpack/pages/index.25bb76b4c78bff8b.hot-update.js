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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortCalculate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_cohortSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/cohortSlice */ \"./src/pages/slices/cohortSlice.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/hooks */ \"./src/pages/store/hooks.ts\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CohortTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CohortTable */ \"./src/pages/components/CohortTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CohortCalculate() {\n    _s();\n    const [cohortData, setCohortData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [regionData, setRegionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const rowData = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.cohort.data);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const fetchDataFromAPI = async ()=>{\n        try {\n            await dispatch((0,_slices_cohortSlice__WEBPACK_IMPORTED_MODULE_2__.fetchData)());\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchDataFromAPI();\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (rowData.length > 0) {\n            const cohortData = calculateCohortData(rowData);\n            setCohortData(cohortData);\n            const uniqRegionRow = lodash__WEBPACK_IMPORTED_MODULE_4___default().uniqBy(rowData, \"region\");\n            let regionData = uniqRegionRow.map((row)=>{\n                return row.region;\n            });\n            regionData.unshift(\"전체\");\n            setRegionData(regionData);\n        }\n    }, [\n        rowData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            flexDirection: \"column\",\n            padding: \"15px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    children: regionData === null || regionData === void 0 ? void 0 : regionData.map((region, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: region\n                        }, index, false, {\n                            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            cohortData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CohortTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: cohortData\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                lineNumber: 64,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(CohortCalculate, \"hT9SQw7l1cRFutTMf82NhA4NvYY=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = CohortCalculate;\nconst calculateCohortData = (rowData)=>{\n    // uid 기준으로 가장 작은 standardDate(첫 주문)인 rowData\n    const minDatesByUid = Object.values(rowData.reduce((acc, row)=>{\n        const key = row.uid.toString();\n        if (!acc[key] || row.standardDate.slice(0, 7) < acc[key].standardDate.slice(0, 7)) {\n            acc[key] = row;\n        }\n        return acc;\n    }, {}));\n    // standardDate 기준으로 sort\n    const sortedMinDatesByUid = minDatesByUid.sort((a, b)=>a.standardDate.slice(0, 7).localeCompare(b.standardDate.slice(0, 7)));\n    // standardDate로 그룹화하고 각 그룹의 uid 개수를 length로 만들기\n    const groupData = lodash__WEBPACK_IMPORTED_MODULE_4___default().groupBy(sortedMinDatesByUid, (row)=>row.standardDate.slice(0, 7));\n    const groupedByDate = Object.entries(groupData).map((param)=>{\n        let [standardDate, array] = param;\n        return {\n            standardDate,\n            firstOrderUsers: array.length\n        };\n    });\n    let minDate = groupedByDate[0].standardDate;\n    let maxDate = groupedByDate[0].standardDate;\n    groupedByDate.forEach((item)=>{\n        if (item.standardDate < minDate) {\n            minDate = item.standardDate;\n        }\n        if (item.standardDate > maxDate) {\n            maxDate = item.standardDate;\n        }\n    });\n    // 잔존율 데이터 계산\n    const finalData = calculateMonthlyRetention(minDatesByUid, rowData, minDate, maxDate);\n    return finalData;\n};\n// 날짜에 달을 더하는 함수\nconst addMonths = (dateStr, months)=>{\n    let date = new Date(dateStr);\n    date.setMonth(date.getMonth() + months);\n    return date.toISOString().split(\"T\")[0];\n};\n// 월별 잔존율 계산 함수\nconst calculateMonthlyRetention = (minDatesByUid, allOrders, startDate, endDate)=>{\n    const groupedData = {};\n    // 첫 주문을 월별로 그룹화\n    minDatesByUid.forEach((order)=>{\n        const monthKey = order.standardDate.slice(0, 7); // 년-월 기준으로 그룹화\n        if (!groupedData[monthKey]) {\n            groupedData[monthKey] = [];\n        }\n        groupedData[monthKey].push(order);\n    });\n    const retentionData = [];\n    Object.keys(groupedData).forEach((month)=>{\n        const monthlyData = groupedData[month];\n        const retention = {};\n        let currentDate = startDate;\n        let i = 0;\n        while(currentDate < endDate){\n            // 잔존율 계산\n            currentDate = addMonths(month, i).slice(0, 7);\n            if (i !== 0) {\n                retention[i] = (monthlyData.filter((user)=>allOrders.some((order)=>order.uid === user.uid && order.standardDate > currentDate)).length / monthlyData.length * 100).toFixed(2) + \"%\";\n            }\n            i++;\n        }\n        retentionData.push({\n            standardDate: month,\n            firstOrderUsers: monthlyData.length,\n            retention\n        });\n    });\n    return retentionData;\n};\nvar _c;\n$RefreshReg$(_c, \"CohortCalculate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRDYWxjdWxhdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNTO0FBQ0k7QUFDekM7QUFDeUQ7QUFRakUsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQTtJQUM1QyxNQUFNVyxVQUFVVCw0REFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNDLElBQUk7SUFDM0QsTUFBTUMsV0FBV1osNERBQWNBO0lBRS9CLE1BQU1hLG1CQUFtQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUQsU0FBU2QsOERBQVNBO1FBQzFCLEVBQUUsT0FBT2dCLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQWxCLGdEQUFTQSxDQUFDO1FBQ1JpQjtJQUNGLEdBQUc7UUFBQ0Q7S0FBUztJQUViaEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxRQUFRUyxNQUFNLEdBQUcsR0FBRztZQUN0QixNQUFNYixhQUFhYyxvQkFBb0JWO1lBQ3ZDSCxjQUFjRDtZQUVkLE1BQU1lLGdCQUFnQmxCLG9EQUFRLENBQUNPLFNBQVM7WUFFeEMsSUFBSUYsYUFBYWEsY0FBY0UsR0FBRyxDQUFDLENBQUNDO2dCQUNsQyxPQUFPQSxJQUFJQyxNQUFNO1lBQ25CO1lBRUFqQixXQUFXa0IsT0FBTyxDQUFDO1lBRW5CakIsY0FBY0Q7UUFDaEI7SUFDRixHQUFHO1FBQUNFO0tBQVE7SUFFWixxQkFDRSw4REFBQ2lCO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLGVBQWU7WUFDZkMsU0FBUztRQUNYOzswQkFFQSw4REFBQ0w7MEJBQ0MsNEVBQUNNOzhCQUNFekIsdUJBQUFBLGlDQUFBQSxXQUFZZSxHQUFHLENBQUMsQ0FBQ0UsUUFBUVM7d0JBQ3hCLHFCQUFPLDhEQUFD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LElBQUlDLGNBQWNYO1FBQ2xCLElBQUlZLElBQUk7UUFDUixNQUFPRCxjQUFjVixRQUFTO1lBQzVCLFNBQVM7WUFDVFUsY0FBY3JCLFVBQVVrQixPQUFPSSxHQUFHeEMsS0FBSyxDQUFDLEdBQUc7WUFDM0MsSUFBSXdDLE1BQU0sR0FBRztnQkFDWEYsU0FBUyxDQUFDRSxFQUFFLEdBQ1YsQ0FDRSxZQUFhQyxNQUFNLENBQUMsQ0FBQ0MsT0FDbkJmLFVBQVVnQixJQUFJLENBQ1osQ0FBQ1osUUFDQ0EsTUFBTWxDLEdBQUcsS0FBSzZDLEtBQUs3QyxHQUFHLElBQUlrQyxNQUFNaEMsWUFBWSxHQUFHd0MsY0FFbkRqRSxNQUFNLEdBQ04rRCxZQUFZL0QsTUFBTSxHQUNwQixHQUFFLEVBQ0ZzRSxPQUFPLENBQUMsS0FBSztZQUNuQjtZQUNBSjtRQUNGO1FBQ0FOLGNBQWNELElBQUksQ0FBQztZQUNqQmxDLGNBQWNxQztZQUNkekIsaUJBQWlCMEIsWUFBWS9ELE1BQU07WUFDbkNnRTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0NvaG9ydENhbGN1bGF0ZS50c3g/NGQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0YVR5cGUsIGZldGNoRGF0YSB9IGZyb20gXCIuLi9zbGljZXMvY29ob3J0U2xpY2VcIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zdG9yZS9ob29rc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IENvaG9ydENoYXJ0VGFibGUsIHsgQ29ob3J0Q2hhcnRQcm9wcywgQ29ob3J0UHJvcHMgfSBmcm9tIFwiLi9Db2hvcnRUYWJsZVwiO1xuXG50eXBlIEZpcnN0T3JkZXJEYXRhID0ge1xuICBzdGFuZGFyZERhdGU6IHN0cmluZztcbiAgZmlyc3RPcmRlclVzZXJzOiBudW1iZXI7XG4gIHJldGVudGlvbjogUmVjb3JkPG51bWJlciwgc3RyaW5nPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvaG9ydENhbGN1bGF0ZSgpIHtcbiAgY29uc3QgW2NvaG9ydERhdGEsIHNldENvaG9ydERhdGFdID0gdXNlU3RhdGU8Q29ob3J0UHJvcHNbXT4oKTtcbiAgY29uc3QgW3JlZ2lvbkRhdGEsIHNldFJlZ2lvbkRhdGFdID0gdXNlU3RhdGU8c3RyaW5nW10+KCk7XG4gIGNvbnN0IHJvd0RhdGEgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvaG9ydC5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGZldGNoRGF0YUZyb21BUEkgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoRGF0YSgpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YUZyb21BUEkoKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm93RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb2hvcnREYXRhID0gY2FsY3VsYXRlQ29ob3J0RGF0YShyb3dEYXRhKTtcbiAgICAgIHNldENvaG9ydERhdGEoY29ob3J0RGF0YSk7XG5cbiAgICAgIGNvbnN0IHVuaXFSZWdpb25Sb3cgPSBfLnVuaXFCeShyb3dEYXRhLCBcInJlZ2lvblwiKTtcblxuICAgICAgbGV0IHJlZ2lvbkRhdGEgPSB1bmlxUmVnaW9uUm93Lm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cucmVnaW9uO1xuICAgICAgfSk7XG5cbiAgICAgIHJlZ2lvbkRhdGEudW5zaGlmdChcIuyghOyytFwiKTtcblxuICAgICAgc2V0UmVnaW9uRGF0YShyZWdpb25EYXRhKTtcbiAgICB9XG4gIH0sIFtyb3dEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgIHtyZWdpb25EYXRhPy5tYXAoKHJlZ2lvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9PntyZWdpb259PC9vcHRpb24+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAge2NvaG9ydERhdGEgJiYgPENvaG9ydENoYXJ0VGFibGUgZGF0YT17Y29ob3J0RGF0YX0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGNhbGN1bGF0ZUNvaG9ydERhdGEgPSAocm93RGF0YTogRGF0YVR5cGVbXSkgPT4ge1xuICAvLyB1aWQg6riw7KSA7Jy866GcIOqwgOyepSDsnpHsnYAgc3RhbmRhcmREYXRlKOyyqyDso7zrrLgp7J24IHJvd0RhdGFcbiAgY29uc3QgbWluRGF0ZXNCeVVpZDogRGF0YVR5cGVbXSA9IE9iamVjdC52YWx1ZXMoXG4gICAgcm93RGF0YS5yZWR1Y2UoKGFjYzogUmVjb3JkPHN0cmluZywgRGF0YVR5cGU+LCByb3cpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHJvdy51aWQudG9TdHJpbmcoKTtcbiAgICAgIGlmIChcbiAgICAgICAgIWFjY1trZXldIHx8XG4gICAgICAgIHJvdy5zdGFuZGFyZERhdGUuc2xpY2UoMCwgNykgPCBhY2Nba2V5XS5zdGFuZGFyZERhdGUuc2xpY2UoMCwgNylcbiAgICAgICkge1xuICAgICAgICBhY2Nba2V5XSA9IHJvdztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pXG4gICk7XG5cbiAgLy8gc3RhbmRhcmREYXRlIOq4sOykgOycvOuhnCBzb3J0XG4gIGNvbnN0IHNvcnRlZE1pbkRhdGVzQnlVaWQgPSBtaW5EYXRlc0J5VWlkLnNvcnQoKGEsIGIpID0+XG4gICAgYS5zdGFuZGFyZERhdGUuc2xpY2UoMCwgNykubG9jYWxlQ29tcGFyZShiLnN0YW5kYXJkRGF0ZS5zbGljZSgwLCA3KSlcbiAgKTtcblxuICAvLyBzdGFuZGFyZERhdGXroZwg6re466O57ZmU7ZWY6rOgIOqwgSDqt7jro7nsnZggdWlkIOqwnOyImOulvCBsZW5ndGjroZwg66eM65Ok6riwXG4gIGNvbnN0IGdyb3VwRGF0YSA9IF8uZ3JvdXBCeShzb3J0ZWRNaW5EYXRlc0J5VWlkLCAocm93KSA9PlxuICAgIHJvdy5zdGFuZGFyZERhdGUuc2xpY2UoMCwgNylcbiAgKTtcbiAgY29uc3QgZ3JvdXBlZEJ5RGF0ZTogeyBzdGFuZGFyZERhdGU6IHN0cmluZzsgZmlyc3RPcmRlclVzZXJzOiBudW1iZXIgfVtdID1cbiAgICBPYmplY3QuZW50cmllcyhncm91cERhdGEpLm1hcCgoW3N0YW5kYXJkRGF0ZSwgYXJyYXldKSA9PiAoe1xuICAgICAgc3RhbmRhcmREYXRlLFxuICAgICAgZmlyc3RPcmRlclVzZXJzOiBhcnJheS5sZW5ndGgsXG4gICAgfSkpO1xuXG4gIGxldCBtaW5EYXRlID0gZ3JvdXBlZEJ5RGF0ZVswXS5zdGFuZGFyZERhdGU7XG4gIGxldCBtYXhEYXRlID0gZ3JvdXBlZEJ5RGF0ZVswXS5zdGFuZGFyZERhdGU7XG5cbiAgZ3JvdXBlZEJ5RGF0ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uc3RhbmRhcmREYXRlIDwgbWluRGF0ZSkge1xuICAgICAgbWluRGF0ZSA9IGl0ZW0uc3RhbmRhcmREYXRlO1xuICAgIH1cbiAgICBpZiAoaXRlbS5zdGFuZGFyZERhdGUgPiBtYXhEYXRlKSB7XG4gICAgICBtYXhEYXRlID0gaXRlbS5zdGFuZGFyZERhdGU7XG4gICAgfVxuICB9KTtcblxuICAvLyDsnpTsobTsnKgg642w7J207YSwIOqzhOyCsFxuICBjb25zdCBmaW5hbERhdGEgPSBjYWxjdWxhdGVNb250aGx5UmV0ZW50aW9uKFxuICAgIG1pbkRhdGVzQnlVaWQsXG4gICAgcm93RGF0YSxcbiAgICBtaW5EYXRlLFxuICAgIG1heERhdGVcbiAgKTtcblxuICByZXR1cm4gZmluYWxEYXRhO1xufTtcblxuLy8g64Kg7Kec7JeQIOuLrOydhCDrjZTtlZjripQg7ZWo7IiYXG5jb25zdCBhZGRNb250aHMgPSAoZGF0ZVN0cjogc3RyaW5nLCBtb250aHM6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgbW9udGhzKTtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG59O1xuXG4vLyDsm5Trs4Qg7J6U7KG07JyoIOqzhOyCsCDtlajsiJhcbmNvbnN0IGNhbGN1bGF0ZU1vbnRobHlSZXRlbnRpb24gPSAoXG4gIG1pbkRhdGVzQnlVaWQ6IERhdGFUeXBlW10sXG4gIGFsbE9yZGVyczogRGF0YVR5cGVbXSxcbiAgc3RhcnREYXRlOiBzdHJpbmcsXG4gIGVuZERhdGU6IHN0cmluZ1xuKTogRmlyc3RPcmRlckRhdGFbXSA9PiB7XG4gIGNvbnN0IGdyb3VwZWREYXRhOiBSZWNvcmQ8c3RyaW5nLCBEYXRhVHlwZVtdPiA9IHt9O1xuXG4gIC8vIOyyqyDso7zrrLjsnYQg7JuU67OE66GcIOq3uOujue2ZlFxuICBtaW5EYXRlc0J5VWlkLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgY29uc3QgbW9udGhLZXkgPSBvcmRlci5zdGFuZGFyZERhdGUuc2xpY2UoMCwgNyk7IC8vIOuFhC3sm5Qg6riw7KSA7Jy866GcIOq3uOujue2ZlFxuXG4gICAgaWYgKCFncm91cGVkRGF0YVttb250aEtleV0pIHtcbiAgICAgIGdyb3VwZWREYXRhW21vbnRoS2V5XSA9IFtdO1xuICAgIH1cbiAgICBncm91cGVkRGF0YVttb250aEtleV0ucHVzaChvcmRlcik7XG4gIH0pO1xuXG4gIGNvbnN0IHJldGVudGlvbkRhdGE6IEZpcnN0T3JkZXJEYXRhW10gPSBbXTtcblxuICBPYmplY3Qua2V5cyhncm91cGVkRGF0YSkuZm9yRWFjaCgobW9udGgpID0+IHtcbiAgICBjb25zdCBtb250aGx5RGF0YSA9IGdyb3VwZWREYXRhW21vbnRoXTtcbiAgICBjb25zdCByZXRlbnRpb246IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7fTtcblxuICAgIGxldCBjdXJyZW50RGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnREYXRlIDwgZW5kRGF0ZSkge1xuICAgICAgLy8g7J6U7KG07JyoIOqzhOyCsFxuICAgICAgY3VycmVudERhdGUgPSBhZGRNb250aHMobW9udGgsIGkpLnNsaWNlKDAsIDcpO1xuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgcmV0ZW50aW9uW2ldID1cbiAgICAgICAgICAoXG4gICAgICAgICAgICAobW9udGhseURhdGEuZmlsdGVyKCh1c2VyKSA9PlxuICAgICAgICAgICAgICBhbGxPcmRlcnMuc29tZShcbiAgICAgICAgICAgICAgICAob3JkZXIpID0+XG4gICAgICAgICAgICAgICAgICBvcmRlci51aWQgPT09IHVzZXIudWlkICYmIG9yZGVyLnN0YW5kYXJkRGF0ZSA+IGN1cnJlbnREYXRlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkubGVuZ3RoIC9cbiAgICAgICAgICAgICAgbW9udGhseURhdGEubGVuZ3RoKSAqXG4gICAgICAgICAgICAxMDBcbiAgICAgICAgICApLnRvRml4ZWQoMikgKyBcIiVcIjtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0ZW50aW9uRGF0YS5wdXNoKHtcbiAgICAgIHN0YW5kYXJkRGF0ZTogbW9udGgsXG4gICAgICBmaXJzdE9yZGVyVXNlcnM6IG1vbnRobHlEYXRhLmxlbmd0aCxcbiAgICAgIHJldGVudGlvbixcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldGVudGlvbkRhdGE7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwiXyIsIkNvaG9ydENoYXJ0VGFibGUiLCJDb2hvcnRDYWxjdWxhdGUiLCJjb2hvcnREYXRhIiwic2V0Q29ob3J0RGF0YSIsInJlZ2lvbkRhdGEiLCJzZXRSZWdpb25EYXRhIiwicm93RGF0YSIsInN0YXRlIiwiY29ob3J0IiwiZGF0YSIsImRpc3BhdGNoIiwiZmV0Y2hEYXRhRnJvbUFQSSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNhbGN1bGF0ZUNvaG9ydERhdGEiLCJ1bmlxUmVnaW9uUm93IiwidW5pcUJ5IiwibWFwIiwicm93IiwicmVnaW9uIiwidW5zaGlmdCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJzZWxlY3QiLCJpbmRleCIsIm9wdGlvbiIsIm1pbkRhdGVzQnlVaWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJ1aWQiLCJ0b1N0cmluZyIsInN0YW5kYXJkRGF0ZSIsInNsaWNlIiwic29ydGVkTWluRGF0ZXNCeVVpZCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJncm91cERhdGEiLCJncm91cEJ5IiwiZ3JvdXBlZEJ5RGF0ZSIsImVudHJpZXMiLCJhcnJheSIsImZpcnN0T3JkZXJVc2VycyIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJmaW5hbERhdGEiLCJjYWxjdWxhdGVNb250aGx5UmV0ZW50aW9uIiwiYWRkTW9udGhzIiwiZGF0ZVN0ciIsIm1vbnRocyIsImRhdGUiLCJEYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhbGxPcmRlcnMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ3JvdXBlZERhdGEiLCJvcmRlciIsIm1vbnRoS2V5IiwicHVzaCIsInJldGVudGlvbkRhdGEiLCJrZXlzIiwibW9udGgiLCJtb250aGx5RGF0YSIsInJldGVudGlvbiIsImN1cnJlbnREYXRlIiwiaSIsImZpbHRlciIsInVzZXIiLCJzb21lIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/CohortCalculate.tsx\n"));

/***/ })

});