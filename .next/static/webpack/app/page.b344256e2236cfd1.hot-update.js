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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_man_behind_computer_emoji_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/man-behind-computer-emoji.png */ \"(app-pages-browser)/./src/assets/images/man-behind-computer-emoji.png\");\n/* harmony import */ var _assets_images_grain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/grain.jpg */ \"(app-pages-browser)/./src/assets/images/grain.jpg\");\n/* harmony import */ var _assets_icons_gmail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/gmail.svg */ \"(app-pages-browser)/./src/assets/icons/gmail.svg\");\n/* harmony import */ var _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/linkedin.svg */ \"(app-pages-browser)/./src/assets/icons/linkedin.svg\");\n/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/icons/github.svg */ \"(app-pages-browser)/./src/assets/icons/github.svg\");\n/* harmony import */ var _assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/music/elevator-music.mp3 */ \"(app-pages-browser)/./src/assets/music/elevator-music.mp3\");\n/* harmony import */ var _assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ HeroSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const togglePlay = ()=>{\n        if (!audioRef.current) return;\n        if (isPlaying) {\n            audioRef.current.pause();\n        } else {\n            audioRef.current.play();\n        }\n        setIsPlaying(!isPlaying);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 -z-30 opacity-15\",\n                style: {\n                    backgroundImage: \"url(\".concat(_assets_images_grain_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-3 flex flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: (_assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8___default()),\n                                loop: true\n                            }, void 0, false, {\n                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xs md:text-sm font-medium\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: togglePlay,\n                                        children: isPlaying ? \"⏸\" : \"▶\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    \" \",\n                                    \"elevator-music.mp3\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-xs md:text-sm font-medium\",\n                            children: \"\\uD83D\\uDCCD Toronto, Canada\"\n                        }, void 0, false, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-32 md:py-48 lg:py-48 relative z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _assets_images_man_behind_computer_emoji_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    className: \"size-[100px]\",\n                                    alt: \"Dark-skin man peeking from behind laptop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-red-500 size-2.5 rounded-full relative\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-red-500 absolute inset-0 rounded-full animate-ping-large\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm font-medium\",\n                                            children: \"Busy with my last semester\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-lg mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative group inline-block h-[3em]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"font-serif text-5xl md:text-6xl text-center mt-8 tracking-wide absolute top-0 left-0 w-full transition-transform duration-500 group-hover:-translate-y-full\",\n                                            children: \"FIRST LAST\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"font-serif text-5xl md:text-6xl text-center mt-8 tracking-wide absolute top-full left-0 w-full transition-transform duration-500 group-hover:-translate-y-full\",\n                                            children: \"NEW TEXT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-7 text-center text-white/75 md:text-lg\",\n                                    children: [\n                                        \"Tech enthusiast with a\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-yellow-300\",\n                                            children: \"passion\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        \" for innovative development and creating meaningful solutions.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-center gap-8 mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:ibidun.isaac@gmail.com\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_gmail_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.linkedin.com/in/isaac-ibidun/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://github.com/mayowaibi\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeroSection, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = HeroSection;\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9IZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNWO0FBQ3lDO0FBQ3JCO0FBQ0Y7QUFDTTtBQUNKO0FBQ1c7QUFFdkQsTUFBTVMsY0FBYzs7SUFDMUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1XLFdBQVdaLDZDQUFNQSxDQUFtQjtJQUUxQyxNQUFNYSxhQUFhO1FBQ2xCLElBQUksQ0FBQ0QsU0FBU0UsT0FBTyxFQUFFO1FBQ3ZCLElBQUlKLFdBQVc7WUFDZEUsU0FBU0UsT0FBTyxDQUFDQyxLQUFLO1FBQ3ZCLE9BQU87WUFDTkgsU0FBU0UsT0FBTyxDQUFDRSxJQUFJO1FBQ3RCO1FBQ0FMLGFBQWEsQ0FBQ0Q7SUFDZjtJQUNBLHFCQUNDOzswQkFDQyw4REFBQ087Z0JBQ0FDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ05DLGlCQUFpQixPQUFzQixPQUFmaEIsZ0VBQVVBLENBQUNpQixHQUFHLEVBQUM7Z0JBQ3hDOzs7Ozs7MEJBR0QsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDSTtnQ0FBTUMsS0FBS1g7Z0NBQVVTLEtBQUtiLHlFQUFhQTtnQ0FBRWdCLElBQUk7Ozs7OzswQ0FDOUMsOERBQUNQO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ087d0NBQU9DLFNBQVNiO2tEQUFhSCxZQUFZLE1BQU07Ozs7OztvQ0FBYztvQ0FBSTs7Ozs7Ozs7Ozs7OztrQ0FJcEUsOERBQUNPO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9sRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FFZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDaEIsa0RBQUtBO29DQUNMbUIsS0FBS2xCLG9GQUFXQTtvQ0FDaEJlLFdBQVU7b0NBQ1ZTLEtBQUk7Ozs7Ozs4Q0FFTCw4REFBQ1Y7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDZCw0RUFBQ0Q7Z0RBQUlDLFdBQVU7Ozs7Ozs7Ozs7O3NEQUVoQiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT3ZDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNEO29DQUFJQyxXQUFVOztzREFFZCw4REFBQ1U7NENBQUdWLFdBQVU7c0RBQThKOzs7Ozs7c0RBSTVLLDhEQUFDVTs0Q0FBR1YsV0FBVTtzREFBaUs7Ozs7Ozs7Ozs7Ozs4Q0FJaEwsOERBQUNXO29DQUFFWCxXQUFVOzt3Q0FBNEM7d0NBQ2pDO3NEQUN2Qiw4REFBQ1k7NENBQUtaLFdBQVU7c0RBQWtCOzs7Ozs7d0NBQWM7Ozs7Ozs7Ozs7Ozs7c0NBTWxELDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNhO29DQUFFQyxNQUFLOzhDQUNQLDRFQUFDUDt3Q0FBT1AsV0FBVTtrREFDakIsNEVBQUNiLCtEQUFTQTs0Q0FBQ2EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHdkIsOERBQUNhO29DQUNBQyxNQUFLO29DQUNMQyxRQUFPO29DQUNQQyxLQUFJOzhDQUNKLDRFQUFDVDt3Q0FBT1AsV0FBVTtrREFDakIsNEVBQUNaLGtFQUFZQTs0Q0FBQ1ksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHMUIsOERBQUNhO29DQUNBQyxNQUFLO29DQUNMQyxRQUFPO29DQUNQQyxLQUFJOzhDQUNKLDRFQUFDVDt3Q0FBT1AsV0FBVTtrREFDakIsNEVBQUNYLGdFQUFVQTs0Q0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUIsRUFBRTtHQXhHV1Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL0hlcm8udHN4PzY4OTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBtZW1vamlJbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL21hbi1iZWhpbmQtY29tcHV0ZXItZW1vamkucG5nXCI7XG5pbXBvcnQgZ3JhaW5JbWFnZSBmcm9tIFwiQC9hc3NldHMvaW1hZ2VzL2dyYWluLmpwZ1wiO1xuaW1wb3J0IEdtYWlsSWNvbiBmcm9tIFwiQC9hc3NldHMvaWNvbnMvZ21haWwuc3ZnXCI7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gXCJAL2Fzc2V0cy9pY29ucy9saW5rZWRpbi5zdmdcIjtcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gXCJAL2Fzc2V0cy9pY29ucy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgZWxldmF0b3JNdXNpYyBmcm9tIFwiQC9hc3NldHMvbXVzaWMvZWxldmF0b3ItbXVzaWMubXAzXCI7XG5cbmV4cG9ydCBjb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XG5cblx0Y29uc3QgdG9nZ2xlUGxheSA9ICgpID0+IHtcblx0XHRpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHJldHVybjtcblx0XHRpZiAoaXNQbGF5aW5nKSB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuXHRcdH1cblx0XHRzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCAtei0zMCBvcGFjaXR5LTE1XCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtncmFpbkltYWdlLnNyY30pYCxcblx0XHRcdFx0fX0+PC9kaXY+XG5cblx0XHRcdHsvKiBNVVNJQyBBTkQgTE9DQVRJT04gKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0tMyBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgcHktMS41IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCByb3VuZGVkLXhsXCI+XG5cdFx0XHRcdFx0PGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17ZWxldmF0b3JNdXNpY30gbG9vcCAvPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9Pntpc1BsYXlpbmcgPyBcIuKPuFwiIDogXCLilrZcIn08L2J1dHRvbj57XCIgXCJ9XG5cdFx0XHRcdFx0XHRlbGV2YXRvci1tdXNpYy5tcDNcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBweC00IHB5LTEuNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcm91bmRlZC14bFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG5cdFx0XHRcdFx0XHTwn5ONIFRvcm9udG8sIENhbmFkYVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyogSEVSTyBTRUNUSU9OICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0zMiBtZDpweS00OCBsZzpweS00OCByZWxhdGl2ZSB6LTBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHR7LyogQ0hBUkFDVEVSIEVNT0pJIEFORCBTVEFUVVMgKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdHNyYz17bWVtb2ppSW1hZ2V9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNpemUtWzEwMHB4XVwiXG5cdFx0XHRcdFx0XHRcdGFsdD1cIkRhcmstc2tpbiBtYW4gcGVla2luZyBmcm9tIGJlaGluZCBsYXB0b3BcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05NTAgYm9yZGVyIGJvcmRlci1ncmF5LTgwMCBweC00IHB5LTEuNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcm91bmRlZC14bFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MDAgc2l6ZS0yLjUgcm91bmRlZC1mdWxsIHJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGFic29sdXRlIGluc2V0LTAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcGluZy1sYXJnZVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0QnVzeSB3aXRoIG15IGxhc3Qgc2VtZXN0ZXJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiBOQU1FIEFORCBERVNDUklQVElPTiAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIG14LWF1dG9cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXAgaW5saW5lLWJsb2NrIGgtWzNlbV1cIj5cblx0XHRcdFx0XHRcdFx0ey8qIE9yaWdpbmFsIFRleHQgKi99XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtNXhsIG1kOnRleHQtNnhsIHRleHQtY2VudGVyIG10LTggdHJhY2tpbmctd2lkZSBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXktZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdEZJUlNUIExBU1Rcblx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdFx0ey8qIEhvdmVyIFRleHQgKi99XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtNXhsIG1kOnRleHQtNnhsIHRleHQtY2VudGVyIG10LTggdHJhY2tpbmctd2lkZSBhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTAgdy1mdWxsIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXktZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdE5FVyBURVhUXG5cdFx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTcgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS83NSBtZDp0ZXh0LWxnXCI+XG5cdFx0XHRcdFx0XHRcdFRlY2ggZW50aHVzaWFzdCB3aXRoIGF7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTMwMFwiPnBhc3Npb248L3NwYW4+IGZvciBpbm5vdmF0aXZlXG5cdFx0XHRcdFx0XHRcdGRldmVsb3BtZW50IGFuZCBjcmVhdGluZyBtZWFuaW5nZnVsIHNvbHV0aW9ucy5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiBCVVRUT05TIEZPUiBTT0NJQUxTICovfVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtOCBtdC04XCI+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwibWFpbHRvOmliaWR1bi5pc2FhY0BnbWFpbC5jb21cIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgaC0xNiByb3VuZGVkLXhsIGhvdmVyOmJnLXdoaXRlLzEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEdtYWlsSWNvbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaXNhYWMtaWJpZHVuL1wiXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgaC0xNiByb3VuZGVkLXhsIGhvdmVyOmJnLXdoaXRlLzEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmtlZGluSWNvbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWF5b3dhaWJpXCJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItd2hpdGUvMTUgcHgtNCBoLTE2IHJvdW5kZWQteGwgaG92ZXI6Ymctd2hpdGUvMTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8R2l0SHViSWNvbiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJJbWFnZSIsIm1lbW9qaUltYWdlIiwiZ3JhaW5JbWFnZSIsIkdtYWlsSWNvbiIsIkxpbmtlZGluSWNvbiIsIkdpdEh1Ykljb24iLCJlbGV2YXRvck11c2ljIiwiSGVyb1NlY3Rpb24iLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb1JlZiIsInRvZ2dsZVBsYXkiLCJjdXJyZW50IiwicGF1c2UiLCJwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJhdWRpbyIsInJlZiIsImxvb3AiLCJidXR0b24iLCJvbkNsaWNrIiwiYWx0IiwiaDEiLCJwIiwic3BhbiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Hero.tsx\n"));

/***/ })

});