"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/sections/Hero.tsx":
/*!*******************************!*\
  !*** ./src/sections/Hero.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_man_behind_computer_emoji_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/man-behind-computer-emoji.png */ \"(app-pages-browser)/./src/assets/images/man-behind-computer-emoji.png\");\n/* harmony import */ var _assets_images_grain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/grain.jpg */ \"(app-pages-browser)/./src/assets/images/grain.jpg\");\n/* harmony import */ var _assets_icons_gmail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/gmail.svg */ \"(app-pages-browser)/./src/assets/icons/gmail.svg\");\n/* harmony import */ var _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/linkedin.svg */ \"(app-pages-browser)/./src/assets/icons/linkedin.svg\");\n/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/icons/github.svg */ \"(app-pages-browser)/./src/assets/icons/github.svg\");\n/* harmony import */ var _assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/music/elevator-music.mp3 */ \"(app-pages-browser)/./src/assets/music/elevator-music.mp3\");\n/* harmony import */ var _assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ HeroSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const togglePlay = ()=>{\n        if (!audioRef.current) return;\n        if (isPlaying) {\n            audioRef.current.pause();\n        } else {\n            audioRef.current.play();\n        }\n        setIsPlaying(!isPlaying);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 -z-30 opacity-10\",\n                style: {\n                    backgroundImage: \"url(\".concat(_assets_images_grain_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-3 flex flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: (_assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8___default()),\n                                loop: true\n                            }, void 0, false, {\n                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xs md:text-sm font-medium\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: togglePlay,\n                                    children: [\n                                        isPlaying ? \"⏸\" : \"▶\",\n                                        \" elevator-music.mp3\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-xs md:text-sm font-medium\",\n                            children: \"\\uD83D\\uDCCD Toronto, Canada\"\n                        }, void 0, false, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-32 md:py-48 lg:py-48 relative z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _assets_images_man_behind_computer_emoji_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    className: \"size-[100px]\",\n                                    alt: \"Dark-skin man peeking from behind laptop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-red-500 size-2.5 rounded-full relative\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-red-500 absolute inset-0 rounded-full animate-ping-large\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm font-medium\",\n                                            children: \"Busy with my last semester\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-lg mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-serif text-5xl md:text-6xl text-center mt-8 tracking-wide relative overflow-hidden\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"block transition-transform duration-500 transform group-hover:-translate-x-full\",\n                                            children: \"FIRST LAST\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute inset-0 flex items-center justify-center transition-transform duration-500 transform translate-x-full group-hover:translate-x-0\",\n                                            children: \"NEW TEXT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-7 text-center text-white/75 md:text-lg\",\n                                    children: [\n                                        \"Tech enthusiast with a\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-yellow-200 hover:text-yellow-400 hover:cursor-pointer\",\n                                            children: \"passion\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        \" \",\n                                        \"for innovative development and creating meaningful solutions.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-center gap-8 mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:ibidun.isaac@gmail.com\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_gmail_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.linkedin.com/in/isaac-ibidun/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://github.com/mayowaibi\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeroSection, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = HeroSection;\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9IZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNWO0FBQ3lDO0FBQ3JCO0FBQ0Y7QUFDTTtBQUNKO0FBQ1c7QUFFdkQsTUFBTVMsY0FBYzs7SUFDMUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1XLFdBQVdaLDZDQUFNQSxDQUFtQjtJQUUxQyxNQUFNYSxhQUFhO1FBQ2xCLElBQUksQ0FBQ0QsU0FBU0UsT0FBTyxFQUFFO1FBQ3ZCLElBQUlKLFdBQVc7WUFDZEUsU0FBU0UsT0FBTyxDQUFDQyxLQUFLO1FBQ3ZCLE9BQU87WUFDTkgsU0FBU0UsT0FBTyxDQUFDRSxJQUFJO1FBQ3RCO1FBQ0FMLGFBQWEsQ0FBQ0Q7SUFDZjtJQUNBLHFCQUNDOzswQkFDQyw4REFBQ087Z0JBQ0FDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ05DLGlCQUFpQixPQUFzQixPQUFmaEIsZ0VBQVVBLENBQUNpQixHQUFHLEVBQUM7Z0JBQ3hDOzs7Ozs7MEJBR0QsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDSTtnQ0FBTUMsS0FBS1g7Z0NBQVVTLEtBQUtiLHlFQUFhQTtnQ0FBRWdCLElBQUk7Ozs7OzswQ0FDOUMsOERBQUNQO2dDQUFJQyxXQUFVOzBDQUNkLDRFQUFDTztvQ0FBT0MsU0FBU2I7O3dDQUNmSCxZQUFZLE1BQU07d0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJMUIsOERBQUNPO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9sRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FFZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDaEIsa0RBQUtBO29DQUNMbUIsS0FBS2xCLG9GQUFXQTtvQ0FDaEJlLFdBQVU7b0NBQ1ZTLEtBQUk7Ozs7Ozs4Q0FFTCw4REFBQ1Y7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDZCw0RUFBQ0Q7Z0RBQUlDLFdBQVU7Ozs7Ozs7Ozs7O3NEQUVoQiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT3ZDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNVO29DQUFHVixXQUFVOztzREFDYiw4REFBQ1c7NENBQUtYLFdBQVU7c0RBQWtGOzs7Ozs7c0RBR2xHLDhEQUFDVzs0Q0FBS1gsV0FBVTtzREFBMkk7Ozs7Ozs7Ozs7Ozs4Q0FJNUosOERBQUNZO29DQUFFWixXQUFVOzt3Q0FBNEM7d0NBQ2pDO3NEQUN2Qiw4REFBQ1c7NENBQUtYLFdBQVU7c0RBQTZEOzs7Ozs7d0NBRXJFO3dDQUFJOzs7Ozs7Ozs7Ozs7O3NDQU1kLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNhO29DQUFFQyxNQUFLOzhDQUNQLDRFQUFDUDt3Q0FBT1AsV0FBVTtrREFDakIsNEVBQUNiLCtEQUFTQTs0Q0FBQ2EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHdkIsOERBQUNhO29DQUNBQyxNQUFLO29DQUNMQyxRQUFPO29DQUNQQyxLQUFJOzhDQUNKLDRFQUFDVDt3Q0FBT1AsV0FBVTtrREFDakIsNEVBQUNaLGtFQUFZQTs0Q0FBQ1ksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHMUIsOERBQUNhO29DQUNBQyxNQUFLO29DQUNMQyxRQUFPO29DQUNQQyxLQUFJOzhDQUNKLDRFQUFDVDt3Q0FBT1AsV0FBVTtrREFDakIsNEVBQUNYLGdFQUFVQTs0Q0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUIsRUFBRTtHQXpHV1Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0hlcm8udHN4PzY4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBtZW1vamlJbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL21hbi1iZWhpbmQtY29tcHV0ZXItZW1vamkucG5nXCI7XG5pbXBvcnQgZ3JhaW5JbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL2dyYWluLmpwZ1wiO1xuaW1wb3J0IEdtYWlsSWNvbiBmcm9tIFwiQC9hc3NldHMvaWNvbnMvZ21haWwuc3ZnXCI7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gXCJAL2Fzc2V0cy9pY29ucy9saW5rZWRpbi5zdmdcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAL2Fzc2V0cy9pY29ucy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgZWxldmF0b3JNdXNpYyBmcm9tIFwiQC9hc3NldHMvbXVzaWMvZWxldmF0b3ItbXVzaWMubXAzXCI7XG5cbmV4cG9ydCBjb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG5cblx0Y29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcblx0XHRpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHJldHVybjtcblx0XHRpZiAoaXNQbGF5aW5nKSB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuXHRcdH1cblx0XHRzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCAtei0zMCBvcGFjaXR5LTEwXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtncmFpbkltYWdlLnNyY30pYCxcblx0XHRcdFx0fX0+PC9kaXY+XG5cblx0XHRcdHsvKiBNVVNJQyBBTkQgTE9DQVRJT04gKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0tMyBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgcHktMS41IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCByb3VuZGVkLXhsXCI+XG5cdFx0XHRcdFx0PGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17ZWxldmF0b3JNdXNpY30gbG9vcCAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9PlxuXHRcdFx0XHRcdFx0XHR7aXNQbGF5aW5nID8gXCLij7hcIiA6IFwi4pa2XCJ9IGVsZXZhdG9yLW11c2ljLm1wM1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItd2hpdGUvMTUgcHgtNCBweS0xLjUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC00IHJvdW5kZWQteGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSBmb250LW1lZGl1bVwiPlxuXHRcdFx0XHRcdFx08J+TjSBUb3JvbnRvLCBDYW5hZGFcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0ey8qIEhFUk8gU0VDVElPTiAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMzIgbWQ6cHktNDggbGc6cHktNDggcmVsYXRpdmUgei0wXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0ey8qIENIQVJBQ1RFUiBFTU9KSSBBTkQgU1RBVFVTICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRzcmM9e21lbW9qaUltYWdlfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzaXplLVsxMDBweF1cIlxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJEYXJrLXNraW4gbWFuIHBlZWtpbmcgZnJvbSBiZWhpbmQgbGFwdG9wXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIGJvcmRlciBib3JkZXItZ3JheS04MDAgcHgtNCBweS0xLjUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC00IHJvdW5kZWQteGxcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHNpemUtMi41IHJvdW5kZWQtZnVsbCByZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtZnVsbCBhbmltYXRlLXBpbmctbGFyZ2VcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPlxuXHRcdFx0XHRcdFx0XHRcdEJ1c3kgd2l0aCBteSBsYXN0IHNlbWVzdGVyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogTkFNRSBBTkQgREVTQ1JJUFRJT04gKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCB0ZXh0LWNlbnRlciBtdC04IHRyYWNraW5nLXdpZGUgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS14LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0XHRGSVJTVCBMQVNUXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIHRyYW5zbGF0ZS14LWZ1bGwgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMFwiPlxuXHRcdFx0XHRcdFx0XHRcdE5FVyBURVhUXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC03IHRleHQtY2VudGVyIHRleHQtd2hpdGUvNzUgbWQ6dGV4dC1sZ1wiPlxuXHRcdFx0XHRcdFx0XHRUZWNoIGVudGh1c2lhc3Qgd2l0aCBhe1wiIFwifVxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy0yMDAgaG92ZXI6dGV4dC15ZWxsb3ctNDAwIGhvdmVyOmN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0cGFzc2lvblxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRmb3IgaW5ub3ZhdGl2ZSBkZXZlbG9wbWVudCBhbmQgY3JlYXRpbmcgbWVhbmluZ2Z1bCBzb2x1dGlvbnMuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogQlVUVE9OUyBGT1IgU09DSUFMUyAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTggbXQtOFwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIm1haWx0bzppYmlkdW4uaXNhYWNAZ21haWwuY29tXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBweC00IGgtMTYgcm91bmRlZC14bCBob3ZlcjpiZy13aGl0ZS8xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxHbWFpbEljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2lzYWFjLWliaWR1bi9cIlxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBweC00IGgtMTYgcm91bmRlZC14bCBob3ZlcjpiZy13aGl0ZS8xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rZWRpbkljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21heW93YWliaVwiXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgaC0xNiByb3VuZGVkLXhsIGhvdmVyOmJnLXdoaXRlLzEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEdpdEh1Ykljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJtZW1vamlJbWFnZSIsImdyYWluSW1hZ2UiLCJHbWFpbEljb24iLCJMaW5rZWRpbkljb24iLCJHaXRIdWJJY29uIiwiZWxldmF0b3JNdXNpYyIsIkhlcm9TZWN0aW9uIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiYXVkaW9SZWYiLCJ0b2dnbGVQbGF5IiwiY3VycmVudCIsInBhdXNlIiwicGxheSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic3JjIiwiYXVkaW8iLCJyZWYiLCJsb29wIiwiYnV0dG9uIiwib25DbGljayIsImFsdCIsImgxIiwic3BhbiIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Hero.tsx\n"));

/***/ })

});