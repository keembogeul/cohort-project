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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CohortCalculate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_cohortSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/cohortSlice */ \"./src/pages/slices/cohortSlice.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/hooks */ \"./src/pages/store/hooks.ts\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CohortTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CohortTable */ \"./src/pages/components/CohortTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CohortCalculate() {\n    _s();\n    const [cohortData, setCohortData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [regionData, setRegionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const rowData = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.cohort.data);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const fetchDataFromAPI = async ()=>{\n        try {\n            await dispatch((0,_slices_cohortSlice__WEBPACK_IMPORTED_MODULE_2__.fetchData)());\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchDataFromAPI();\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (rowData.length > 0) {\n            const cohortData = calculateCohortData(rowData);\n            setCohortData(cohortData);\n            const uniqRegionRow = lodash__WEBPACK_IMPORTED_MODULE_4___default().uniqBy(rowData, \"region\");\n            let regionData = uniqRegionRow.map((row)=>{\n                return row.region;\n            });\n            regionData.unshift(\"전체\");\n            setRegionData(regionData);\n        }\n    }, [\n        rowData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    children: regionData === null || regionData === void 0 ? void 0 : regionData.map((region, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            children: region\n                        }, index, false, {\n                            fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            cohortData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CohortTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: cohortData\n            }, void 0, false, {\n                fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n                lineNumber: 63,\n                columnNumber: 22\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kimboseul/bonnie/cohort-project/src/pages/components/CohortCalculate.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(CohortCalculate, \"hT9SQw7l1cRFutTMf82NhA4NvYY=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = CohortCalculate;\nconst calculateCohortData = (rowData)=>{\n    // uid 기준으로 가장 작은 standardDate(첫 주문)인 rowData\n    const minDatesByUid = Object.values(rowData.reduce((acc, row)=>{\n        const key = row.uid.toString();\n        if (!acc[key] || row.standardDate.slice(0, 7) < acc[key].standardDate.slice(0, 7)) {\n            acc[key] = row;\n        }\n        return acc;\n    }, {}));\n    // standardDate 기준으로 sort\n    const sortedMinDatesByUid = minDatesByUid.sort((a, b)=>a.standardDate.slice(0, 7).localeCompare(b.standardDate.slice(0, 7)));\n    // standardDate로 그룹화하고 각 그룹의 uid 개수를 length로 만들기\n    const groupData = lodash__WEBPACK_IMPORTED_MODULE_4___default().groupBy(sortedMinDatesByUid, (row)=>row.standardDate.slice(0, 7));\n    const groupedByDate = Object.entries(groupData).map((param)=>{\n        let [standardDate, array] = param;\n        return {\n            standardDate,\n            firstOrderUsers: array.length\n        };\n    });\n    let minDate = groupedByDate[0].standardDate;\n    let maxDate = groupedByDate[0].standardDate;\n    groupedByDate.forEach((item)=>{\n        if (item.standardDate < minDate) {\n            minDate = item.standardDate;\n        }\n        if (item.standardDate > maxDate) {\n            maxDate = item.standardDate;\n        }\n    });\n    // 잔존율 데이터 계산\n    const finalData = calculateMonthlyRetention(minDatesByUid, rowData, minDate, maxDate);\n    return finalData;\n};\n// 날짜에 달을 더하는 함수\nconst addMonths = (dateStr, months)=>{\n    let date = new Date(dateStr);\n    date.setMonth(date.getMonth() + months);\n    return date.toISOString().split(\"T\")[0];\n};\n// 월별 잔존율 계산 함수\nconst calculateMonthlyRetention = (minDatesByUid, allOrders, startDate, endDate)=>{\n    const groupedData = {};\n    // 첫 주문을 월별로 그룹화\n    minDatesByUid.forEach((order)=>{\n        const monthKey = order.standardDate.slice(0, 7); // 년-월 기준으로 그룹화\n        if (!groupedData[monthKey]) {\n            groupedData[monthKey] = [];\n        }\n        groupedData[monthKey].push(order);\n    });\n    const retentionData = [];\n    Object.keys(groupedData).forEach((month)=>{\n        const monthlyData = groupedData[month];\n        const retention = {};\n        let currentDate = startDate;\n        let i = 0;\n        while(currentDate < endDate){\n            // 잔존율 계산\n            currentDate = addMonths(month, i).slice(0, 7);\n            if (i !== 0) {\n                retention[i] = (monthlyData.filter((user)=>allOrders.some((order)=>order.uid === user.uid && order.standardDate > currentDate)).length / monthlyData.length * 100).toFixed(2) + \"%\";\n            }\n            i++;\n        }\n        retentionData.push({\n            standardDate: month,\n            firstOrderUsers: monthlyData.length,\n            retention\n        });\n    });\n    return retentionData;\n};\nvar _c;\n$RefreshReg$(_c, \"CohortCalculate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db2hvcnRDYWxjdWxhdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNTO0FBQ0k7QUFDekM7QUFDeUQ7QUFRakUsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQTtJQUM1QyxNQUFNVyxVQUFVVCw0REFBY0EsQ0FBQyxDQUFDVSxRQUFVQSxNQUFNQyxNQUFNLENBQUNDLElBQUk7SUFDM0QsTUFBTUMsV0FBV1osNERBQWNBO0lBRS9CLE1BQU1hLG1CQUFtQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUQsU0FBU2QsOERBQVNBO1FBQzFCLEVBQUUsT0FBT2dCLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQWxCLGdEQUFTQSxDQUFDO1FBQ1JpQjtJQUNGLEdBQUc7UUFBQ0Q7S0FBUztJQUViaEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxRQUFRUyxNQUFNLEdBQUcsR0FBRztZQUN0QixNQUFNYixhQUFhYyxvQkFBb0JWO1lBQ3ZDSCxjQUFjRDtZQUVkLE1BQU1lLGdCQUFnQmxCLG9EQUFRLENBQUNPLFNBQVM7WUFFeEMsSUFBSUYsYUFBYWEsY0FBY0UsR0FBRyxDQUFDLENBQUNDO2dCQUNsQyxPQUFPQSxJQUFJQyxNQUFNO1lBQ25CO1lBRUFqQixXQUFXa0IsT0FBTyxDQUFDO1lBRW5CakIsY0FBY0Q7UUFDaEI7SUFDRixHQUFHO1FBQUNFO0tBQVE7SUFFWixxQkFDRSw4REFBQ2lCO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLGVBQWU7UUFDakI7OzBCQUVBLDhEQUFDSjswQkFDQyw0RUFBQ0s7OEJBQ0V4Qix1QkFBQUEsaUNBQUFBLFdBQVllLEdBQUcsQ0FBQyxDQUFDRSxRQUFRUTt3QkFDeEIscUJBQU8sOERBQUNDO3NDQUFvQlQ7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O1FBQ2xCLElBQUlZLElBQUk7UUFDUixNQUFPRCxjQUFjVixRQUFTO1lBQzVCLFNBQVM7WUFDVFUsY0FBY3JCLFVBQVVrQixPQUFPSSxHQUFHeEMsS0FBSyxDQUFDLEdBQUc7WUFDM0MsSUFBSXdDLE1BQU0sR0FBRztnQkFDWEYsU0FBUyxDQUFDRSxFQUFFLEdBQ1YsQ0FDRSxZQUFhQyxNQUFNLENBQUMsQ0FBQ0MsT0FDbkJmLFVBQVVnQixJQUFJLENBQ1osQ0FBQ1osUUFDQ0EsTUFBTWxDLEdBQUcsS0FBSzZDLEtBQUs3QyxHQUFHLElBQUlrQyxNQUFNaEMsWUFBWSxHQUFHd0MsY0FFbkRoRSxNQUFNLEdBQ044RCxZQUFZOUQsTUFBTSxHQUNwQixHQUFFLEVBQ0ZxRSxPQUFPLENBQUMsS0FBSztZQUNuQjtZQUNBSjtRQUNGO1FBQ0FOLGNBQWNELElBQUksQ0FBQztZQUNqQmxDLGNBQWNxQztZQUNkekIsaUJBQWlCMEIsWUFBWTlELE1BQU07WUFDbkMrRDtRQUNGO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0NvaG9ydENhbGN1bGF0ZS50c3g/NGQ2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0YVR5cGUsIGZldGNoRGF0YSB9IGZyb20gXCIuLi9zbGljZXMvY29ob3J0U2xpY2VcIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9zdG9yZS9ob29rc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IENvaG9ydENoYXJ0VGFibGUsIHsgQ29ob3J0Q2hhcnRQcm9wcywgQ29ob3J0UHJvcHMgfSBmcm9tIFwiLi9Db2hvcnRUYWJsZVwiO1xuXG50eXBlIEZpcnN0T3JkZXJEYXRhID0ge1xuICBzdGFuZGFyZERhdGU6IHN0cmluZztcbiAgZmlyc3RPcmRlclVzZXJzOiBudW1iZXI7XG4gIHJldGVudGlvbjogUmVjb3JkPG51bWJlciwgc3RyaW5nPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvaG9ydENhbGN1bGF0ZSgpIHtcbiAgY29uc3QgW2NvaG9ydERhdGEsIHNldENvaG9ydERhdGFdID0gdXNlU3RhdGU8Q29ob3J0UHJvcHNbXT4oKTtcbiAgY29uc3QgW3JlZ2lvbkRhdGEsIHNldFJlZ2lvbkRhdGFdID0gdXNlU3RhdGU8c3RyaW5nW10+KCk7XG4gIGNvbnN0IHJvd0RhdGEgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvaG9ydC5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGZldGNoRGF0YUZyb21BUEkgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoRGF0YSgpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YUZyb21BUEkoKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm93RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb2hvcnREYXRhID0gY2FsY3VsYXRlQ29ob3J0RGF0YShyb3dEYXRhKTtcbiAgICAgIHNldENvaG9ydERhdGEoY29ob3J0RGF0YSk7XG5cbiAgICAgIGNvbnN0IHVuaXFSZWdpb25Sb3cgPSBfLnVuaXFCeShyb3dEYXRhLCBcInJlZ2lvblwiKTtcblxuICAgICAgbGV0IHJlZ2lvbkRhdGEgPSB1bmlxUmVnaW9uUm93Lm1hcCgocm93KSA9PiB7XG4gICAgICAgIHJldHVybiByb3cucmVnaW9uO1xuICAgICAgfSk7XG5cbiAgICAgIHJlZ2lvbkRhdGEudW5zaGlmdChcIuyghOyytFwiKTtcblxuICAgICAgc2V0UmVnaW9uRGF0YShyZWdpb25EYXRhKTtcbiAgICB9XG4gIH0sIFtyb3dEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAge3JlZ2lvbkRhdGE/Lm1hcCgocmVnaW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0+e3JlZ2lvbn08L29wdGlvbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICB7Y29ob3J0RGF0YSAmJiA8Q29ob3J0Q2hhcnRUYWJsZSBkYXRhPXtjb2hvcnREYXRhfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgY2FsY3VsYXRlQ29ob3J0RGF0YSA9IChyb3dEYXRhOiBEYXRhVHlwZVtdKSA9PiB7XG4gIC8vIHVpZCDquLDspIDsnLzroZwg6rCA7J6lIOyekeydgCBzdGFuZGFyZERhdGUo7LKrIOyjvOusuCnsnbggcm93RGF0YVxuICBjb25zdCBtaW5EYXRlc0J5VWlkOiBEYXRhVHlwZVtdID0gT2JqZWN0LnZhbHVlcyhcbiAgICByb3dEYXRhLnJlZHVjZSgoYWNjOiBSZWNvcmQ8c3RyaW5nLCBEYXRhVHlwZT4sIHJvdykgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gcm93LnVpZC50b1N0cmluZygpO1xuICAgICAgaWYgKFxuICAgICAgICAhYWNjW2tleV0gfHxcbiAgICAgICAgcm93LnN0YW5kYXJkRGF0ZS5zbGljZSgwLCA3KSA8IGFjY1trZXldLnN0YW5kYXJkRGF0ZS5zbGljZSgwLCA3KVxuICAgICAgKSB7XG4gICAgICAgIGFjY1trZXldID0gcm93O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSlcbiAgKTtcblxuICAvLyBzdGFuZGFyZERhdGUg6riw7KSA7Jy866GcIHNvcnRcbiAgY29uc3Qgc29ydGVkTWluRGF0ZXNCeVVpZCA9IG1pbkRhdGVzQnlVaWQuc29ydCgoYSwgYikgPT5cbiAgICBhLnN0YW5kYXJkRGF0ZS5zbGljZSgwLCA3KS5sb2NhbGVDb21wYXJlKGIuc3RhbmRhcmREYXRlLnNsaWNlKDAsIDcpKVxuICApO1xuXG4gIC8vIHN0YW5kYXJkRGF0ZeuhnCDqt7jro7ntmZTtlZjqs6Ag6rCBIOq3uOujueydmCB1aWQg6rCc7IiY66W8IGxlbmd0aOuhnCDrp4zrk6TquLBcbiAgY29uc3QgZ3JvdXBEYXRhID0gXy5ncm91cEJ5KHNvcnRlZE1pbkRhdGVzQnlVaWQsIChyb3cpID0+XG4gICAgcm93LnN0YW5kYXJkRGF0ZS5zbGljZSgwLCA3KVxuICApO1xuICBjb25zdCBncm91cGVkQnlEYXRlOiB7IHN0YW5kYXJkRGF0ZTogc3RyaW5nOyBmaXJzdE9yZGVyVXNlcnM6IG51bWJlciB9W10gPVxuICAgIE9iamVjdC5lbnRyaWVzKGdyb3VwRGF0YSkubWFwKChbc3RhbmRhcmREYXRlLCBhcnJheV0pID0+ICh7XG4gICAgICBzdGFuZGFyZERhdGUsXG4gICAgICBmaXJzdE9yZGVyVXNlcnM6IGFycmF5Lmxlbmd0aCxcbiAgICB9KSk7XG5cbiAgbGV0IG1pbkRhdGUgPSBncm91cGVkQnlEYXRlWzBdLnN0YW5kYXJkRGF0ZTtcbiAgbGV0IG1heERhdGUgPSBncm91cGVkQnlEYXRlWzBdLnN0YW5kYXJkRGF0ZTtcblxuICBncm91cGVkQnlEYXRlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5zdGFuZGFyZERhdGUgPCBtaW5EYXRlKSB7XG4gICAgICBtaW5EYXRlID0gaXRlbS5zdGFuZGFyZERhdGU7XG4gICAgfVxuICAgIGlmIChpdGVtLnN0YW5kYXJkRGF0ZSA+IG1heERhdGUpIHtcbiAgICAgIG1heERhdGUgPSBpdGVtLnN0YW5kYXJkRGF0ZTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIOyelOyhtOycqCDrjbDsnbTthLAg6rOE7IKwXG4gIGNvbnN0IGZpbmFsRGF0YSA9IGNhbGN1bGF0ZU1vbnRobHlSZXRlbnRpb24oXG4gICAgbWluRGF0ZXNCeVVpZCxcbiAgICByb3dEYXRhLFxuICAgIG1pbkRhdGUsXG4gICAgbWF4RGF0ZVxuICApO1xuXG4gIHJldHVybiBmaW5hbERhdGE7XG59O1xuXG4vLyDrgqDsp5zsl5Ag64us7J2EIOuNlO2VmOuKlCDtlajsiJhcbmNvbnN0IGFkZE1vbnRocyA9IChkYXRlU3RyOiBzdHJpbmcsIG1vbnRoczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBtb250aHMpO1xuICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbn07XG5cbi8vIOyblOuzhCDsnpTsobTsnKgg6rOE7IKwIO2VqOyImFxuY29uc3QgY2FsY3VsYXRlTW9udGhseVJldGVudGlvbiA9IChcbiAgbWluRGF0ZXNCeVVpZDogRGF0YVR5cGVbXSxcbiAgYWxsT3JkZXJzOiBEYXRhVHlwZVtdLFxuICBzdGFydERhdGU6IHN0cmluZyxcbiAgZW5kRGF0ZTogc3RyaW5nXG4pOiBGaXJzdE9yZGVyRGF0YVtdID0+IHtcbiAgY29uc3QgZ3JvdXBlZERhdGE6IFJlY29yZDxzdHJpbmcsIERhdGFUeXBlW10+ID0ge307XG5cbiAgLy8g7LKrIOyjvOusuOydhCDsm5Trs4TroZwg6re466O57ZmUXG4gIG1pbkRhdGVzQnlVaWQuZm9yRWFjaCgob3JkZXIpID0+IHtcbiAgICBjb25zdCBtb250aEtleSA9IG9yZGVyLnN0YW5kYXJkRGF0ZS5zbGljZSgwLCA3KTsgLy8g64WELeyblCDquLDspIDsnLzroZwg6re466O57ZmUXG5cbiAgICBpZiAoIWdyb3VwZWREYXRhW21vbnRoS2V5XSkge1xuICAgICAgZ3JvdXBlZERhdGFbbW9udGhLZXldID0gW107XG4gICAgfVxuICAgIGdyb3VwZWREYXRhW21vbnRoS2V5XS5wdXNoKG9yZGVyKTtcbiAgfSk7XG5cbiAgY29uc3QgcmV0ZW50aW9uRGF0YTogRmlyc3RPcmRlckRhdGFbXSA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGdyb3VwZWREYXRhKS5mb3JFYWNoKChtb250aCkgPT4ge1xuICAgIGNvbnN0IG1vbnRobHlEYXRhID0gZ3JvdXBlZERhdGFbbW9udGhdO1xuICAgIGNvbnN0IHJldGVudGlvbjogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHt9O1xuXG4gICAgbGV0IGN1cnJlbnREYXRlID0gc3RhcnREYXRlO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPCBlbmREYXRlKSB7XG4gICAgICAvLyDsnpTsobTsnKgg6rOE7IKwXG4gICAgICBjdXJyZW50RGF0ZSA9IGFkZE1vbnRocyhtb250aCwgaSkuc2xpY2UoMCwgNyk7XG4gICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICByZXRlbnRpb25baV0gPVxuICAgICAgICAgIChcbiAgICAgICAgICAgIChtb250aGx5RGF0YS5maWx0ZXIoKHVzZXIpID0+XG4gICAgICAgICAgICAgIGFsbE9yZGVycy5zb21lKFxuICAgICAgICAgICAgICAgIChvcmRlcikgPT5cbiAgICAgICAgICAgICAgICAgIG9yZGVyLnVpZCA9PT0gdXNlci51aWQgJiYgb3JkZXIuc3RhbmRhcmREYXRlID4gY3VycmVudERhdGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKS5sZW5ndGggL1xuICAgICAgICAgICAgICBtb250aGx5RGF0YS5sZW5ndGgpICpcbiAgICAgICAgICAgIDEwMFxuICAgICAgICAgICkudG9GaXhlZCgyKSArIFwiJVwiO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXRlbnRpb25EYXRhLnB1c2goe1xuICAgICAgc3RhbmRhcmREYXRlOiBtb250aCxcbiAgICAgIGZpcnN0T3JkZXJVc2VyczogbW9udGhseURhdGEubGVuZ3RoLFxuICAgICAgcmV0ZW50aW9uLFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcmV0ZW50aW9uRGF0YTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJfIiwiQ29ob3J0Q2hhcnRUYWJsZSIsIkNvaG9ydENhbGN1bGF0ZSIsImNvaG9ydERhdGEiLCJzZXRDb2hvcnREYXRhIiwicmVnaW9uRGF0YSIsInNldFJlZ2lvbkRhdGEiLCJyb3dEYXRhIiwic3RhdGUiLCJjb2hvcnQiLCJkYXRhIiwiZGlzcGF0Y2giLCJmZXRjaERhdGFGcm9tQVBJIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY2FsY3VsYXRlQ29ob3J0RGF0YSIsInVuaXFSZWdpb25Sb3ciLCJ1bmlxQnkiLCJtYXAiLCJyb3ciLCJyZWdpb24iLCJ1bnNoaWZ0IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwic2VsZWN0IiwiaW5kZXgiLCJvcHRpb24iLCJtaW5EYXRlc0J5VWlkIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwidWlkIiwidG9TdHJpbmciLCJzdGFuZGFyZERhdGUiLCJzbGljZSIsInNvcnRlZE1pbkRhdGVzQnlVaWQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZ3JvdXBEYXRhIiwiZ3JvdXBCeSIsImdyb3VwZWRCeURhdGUiLCJlbnRyaWVzIiwiYXJyYXkiLCJmaXJzdE9yZGVyVXNlcnMiLCJtaW5EYXRlIiwibWF4RGF0ZSIsImZvckVhY2giLCJpdGVtIiwiZmluYWxEYXRhIiwiY2FsY3VsYXRlTW9udGhseVJldGVudGlvbiIsImFkZE1vbnRocyIsImRhdGVTdHIiLCJtb250aHMiLCJkYXRlIiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiYWxsT3JkZXJzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdyb3VwZWREYXRhIiwib3JkZXIiLCJtb250aEtleSIsInB1c2giLCJyZXRlbnRpb25EYXRhIiwia2V5cyIsIm1vbnRoIiwibW9udGhseURhdGEiLCJyZXRlbnRpb24iLCJjdXJyZW50RGF0ZSIsImkiLCJmaWx0ZXIiLCJ1c2VyIiwic29tZSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/CohortCalculate.tsx\n"));

/***/ })

});