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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_man_behind_computer_emoji_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/man-behind-computer-emoji.png */ \"(app-pages-browser)/./src/assets/images/man-behind-computer-emoji.png\");\n/* harmony import */ var _assets_images_grain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/grain.jpg */ \"(app-pages-browser)/./src/assets/images/grain.jpg\");\n/* harmony import */ var _assets_icons_gmail_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/gmail.svg */ \"(app-pages-browser)/./src/assets/icons/gmail.svg\");\n/* harmony import */ var _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/linkedin.svg */ \"(app-pages-browser)/./src/assets/icons/linkedin.svg\");\n/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/icons/github.svg */ \"(app-pages-browser)/./src/assets/icons/github.svg\");\n/* harmony import */ var _assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/music/elevator-music.mp3 */ \"(app-pages-browser)/./src/assets/music/elevator-music.mp3\");\n/* harmony import */ var _assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ HeroSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const togglePlay = ()=>{\n        if (!audioRef.current) return;\n        if (isPlaying) {\n            audioRef.current.pause();\n        } else {\n            audioRef.current.play();\n        }\n        setIsPlaying(!isPlaying);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 -z-30 opacity-10\",\n                style: {\n                    backgroundImage: \"url(\".concat(_assets_images_grain_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-3 flex flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                                ref: audioRef,\n                                src: (_assets_music_elevator_music_mp3__WEBPACK_IMPORTED_MODULE_8___default()),\n                                loop: true\n                            }, void 0, false, {\n                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-md md:text-lg font-medium\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: togglePlay,\n                                    children: [\n                                        isPlaying ? \"⏸\" : \"▶\",\n                                        \" elevator-music.mp3\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border border-white/15 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-md md:text-lg font-medium\",\n                            children: \"\\uD83D\\uDCCD Toronto, Canada\"\n                        }, void 0, false, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-36 md:py-48 lg:py-48 relative z-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: _assets_images_man_behind_computer_emoji_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    className: \"size-[100px]\",\n                                    alt: \"Dark-skin man peeking from behind laptop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-black border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-xl\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-red-500 size-2.5 rounded-full relative\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-red-500 absolute inset-0 rounded-full animate-ping-large\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-md\",\n                                            children: \"Busy with my last semester\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-lg mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"group\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-serif text-5xl md:text-6xl text-center mt-8 tracking-tighter relative overflow-hidden\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"block transition-transform duration-200 transform group-hover:-translate-y-full\",\n                                                children: \"ISAAC IBIDUN\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute inset-0 md:flex items-center justify-center transition-transform duration-200 transform translate-y-full group-hover:translate-y-0\",\n                                                children: \"MAYOWA IBIDUN\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-7 text-center text-white/85 md:text-xl\",\n                                    children: [\n                                        \"Computer science undergraduate and tech enthusiast with a\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-yellow-200 hover:text-yellow-400 hover:cursor-pointer\",\n                                            children: \"passion\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        \" \",\n                                        \"for innovative development and creating meaningful solutions.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-center gap-8 mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:ibidun.isaac@gmail.com\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_gmail_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.linkedin.com/in/isaac-ibidun/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://github.com/mayowaibi\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"border border-white/15 px-4 h-16 rounded-xl hover:bg-white/10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"w-10 h-10\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/isaac/Desktop/Projects/ibidun.dev/src/sections/Hero.tsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HeroSection, \"sL4xjVLmTF7f1+jWdlUm6K/Qvq0=\");\n_c = HeroSection;\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9IZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNWO0FBQ3lDO0FBQ3JCO0FBQ0Y7QUFDTTtBQUNKO0FBQ1c7QUFFdkQsTUFBTVMsY0FBYzs7SUFDMUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU1XLFdBQVdaLDZDQUFNQSxDQUFtQjtJQUUxQyxNQUFNYSxhQUFhO1FBQ2xCLElBQUksQ0FBQ0QsU0FBU0UsT0FBTyxFQUFFO1FBQ3ZCLElBQUlKLFdBQVc7WUFDZEUsU0FBU0UsT0FBTyxDQUFDQyxLQUFLO1FBQ3ZCLE9BQU87WUFDTkgsU0FBU0UsT0FBTyxDQUFDRSxJQUFJO1FBQ3RCO1FBQ0FMLGFBQWEsQ0FBQ0Q7SUFDZjtJQUNBLHFCQUNDOzswQkFDQyw4REFBQ087Z0JBQ0FDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ05DLGlCQUFpQixPQUFzQixPQUFmaEIsZ0VBQVVBLENBQUNpQixHQUFHLEVBQUM7Z0JBQ3hDOzs7Ozs7MEJBR0QsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDSTtnQ0FBTUMsS0FBS1g7Z0NBQVVTLEtBQUtiLHlFQUFhQTtnQ0FBRWdCLElBQUk7Ozs7OzswQ0FDOUMsOERBQUNQO2dDQUFJQyxXQUFVOzBDQUNkLDRFQUFDTztvQ0FBT0MsU0FBU2I7O3dDQUNmSCxZQUFZLE1BQU07d0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJMUIsOERBQUNPO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9sRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FFZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDaEIsa0RBQUtBO29DQUNMbUIsS0FBS2xCLG9GQUFXQTtvQ0FDaEJlLFdBQVU7b0NBQ1ZTLEtBQUk7Ozs7Ozs4Q0FFTCw4REFBQ1Y7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFDZCw0RUFBQ0Q7Z0RBQUlDLFdBQVU7Ozs7Ozs7Ozs7O3NEQUVoQiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLM0IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2QsNEVBQUNVO3dDQUFHVixXQUFVOzswREFDYiw4REFBQ1c7Z0RBQUtYLFdBQVU7MERBQWtGOzs7Ozs7MERBR2xHLDhEQUFDVztnREFBS1gsV0FBVTswREFBOEk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtoSyw4REFBQ1k7b0NBQUVaLFdBQVU7O3dDQUE0Qzt3Q0FDRTtzREFDMUQsOERBQUNXOzRDQUFLWCxXQUFVO3NEQUE2RDs7Ozs7O3dDQUVyRTt3Q0FBSTs7Ozs7Ozs7Ozs7OztzQ0FNZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDYTtvQ0FBRUMsTUFBSzs4Q0FDUCw0RUFBQ1A7d0NBQU9QLFdBQVU7a0RBQ2pCLDRFQUFDYiwrREFBU0E7NENBQUNhLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3ZCLDhEQUFDYTtvQ0FDQUMsTUFBSztvQ0FDTEMsUUFBTztvQ0FDUEMsS0FBSTs4Q0FDSiw0RUFBQ1Q7d0NBQU9QLFdBQVU7a0RBQ2pCLDRFQUFDWixrRUFBWUE7NENBQUNZLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBRzFCLDhEQUFDYTtvQ0FDQUMsTUFBSztvQ0FDTEMsUUFBTztvQ0FDUEMsS0FBSTs4Q0FDSiw0RUFBQ1Q7d0NBQU9QLFdBQVU7a0RBQ2pCLDRFQUFDWCxnRUFBVUE7NENBQUNXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlCLEVBQUU7R0F6R1dUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9IZXJvLnRzeD82ODk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgbWVtb2ppSW1hZ2UgZnJvbSBcIkAvYXNzZXRzL2ltYWdlcy9tYW4tYmVoaW5kLWNvbXB1dGVyLWVtb2ppLnBuZ1wiO1xuaW1wb3J0IGdyYWluSW1hZ2UgZnJvbSBcIkAvYXNzZXRzL2ltYWdlcy9ncmFpbi5qcGdcIjtcbmltcG9ydCBHbWFpbEljb24gZnJvbSBcIkAvYXNzZXRzL2ljb25zL2dtYWlsLnN2Z1wiO1xuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tIFwiQC9hc3NldHMvaWNvbnMvbGlua2VkaW4uc3ZnXCI7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQC9hc3NldHMvaWNvbnMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IGVsZXZhdG9yTXVzaWMgZnJvbSBcIkAvYXNzZXRzL211c2ljL2VsZXZhdG9yLW11c2ljLm1wM1wiO1xuXG5leHBvcnQgY29uc3QgSGVyb1NlY3Rpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG5cdGNvbnN0IHRvZ2dsZVBsYXkgPSAoKSA9PiB7XG5cdFx0aWYgKCFhdWRpb1JlZi5jdXJyZW50KSByZXR1cm47XG5cdFx0aWYgKGlzUGxheWluZykge1xuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcblx0XHR9XG5cdFx0c2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgLXotMzAgb3BhY2l0eS0xMFwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Z3JhaW5JbWFnZS5zcmN9KWAsXG5cdFx0XHRcdH19PjwvZGl2PlxuXG5cdFx0XHR7LyogTVVTSUMgQU5EIExPQ0FUSU9OICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtLTMgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBweC00IHB5LTEuNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcm91bmRlZC14bFwiPlxuXHRcdFx0XHRcdDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e2VsZXZhdG9yTXVzaWN9IGxvb3AgLz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWQgbWQ6dGV4dC1sZyBmb250LW1lZGl1bVwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVQbGF5fT5cblx0XHRcdFx0XHRcdFx0e2lzUGxheWluZyA/IFwi4o+4XCIgOiBcIuKWtlwifSBlbGV2YXRvci1tdXNpYy5tcDNcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgcHktMS41IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCByb3VuZGVkLXhsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kIG1kOnRleHQtbGcgZm9udC1tZWRpdW1cIj5cblx0XHRcdFx0XHRcdPCfk40gVG9yb250bywgQ2FuYWRhXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsvKiBIRVJPIFNFQ1RJT04gKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTM2IG1kOnB5LTQ4IGxnOnB5LTQ4IHJlbGF0aXZlIHotMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHsvKiBDSEFSQUNURVIgRU1PSkkgQU5EIFNUQVRVUyAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0c3JjPXttZW1vamlJbWFnZX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2l6ZS1bMTAwcHhdXCJcblx0XHRcdFx0XHRcdFx0YWx0PVwiRGFyay1za2luIG1hbiBwZWVraW5nIGZyb20gYmVoaW5kIGxhcHRvcFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLWdyYXktODAwIHB4LTQgcHktMS41IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCByb3VuZGVkLXhsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBzaXplLTIuNSByb3VuZGVkLWZ1bGwgcmVsYXRpdmVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC01MDAgYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1waW5nLWxhcmdlXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWRcIj5CdXN5IHdpdGggbXkgbGFzdCBzZW1lc3RlcjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogTkFNRSBBTkQgREVTQ1JJUFRJT04gKi99XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtNXhsIG1kOnRleHQtNnhsIHRleHQtY2VudGVyIG10LTggdHJhY2tpbmctdGlnaHRlciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGdyb3VwLWhvdmVyOi10cmFuc2xhdGUteS1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRJU0FBQyBJQklEVU5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIHRyYW5zbGF0ZS15LWZ1bGwgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0TUFZT1dBIElCSURVTlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtNyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzg1IG1kOnRleHQteGxcIj5cblx0XHRcdFx0XHRcdFx0Q29tcHV0ZXIgc2NpZW5jZSB1bmRlcmdyYWR1YXRlIGFuZCB0ZWNoIGVudGh1c2lhc3Qgd2l0aCBhe1wiIFwifVxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy0yMDAgaG92ZXI6dGV4dC15ZWxsb3ctNDAwIGhvdmVyOmN1cnNvci1wb2ludGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0cGFzc2lvblxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+e1wiIFwifVxuXHRcdFx0XHRcdFx0XHRmb3IgaW5ub3ZhdGl2ZSBkZXZlbG9wbWVudCBhbmQgY3JlYXRpbmcgbWVhbmluZ2Z1bCBzb2x1dGlvbnMuXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogQlVUVE9OUyBGT1IgU09DSUFMUyAqL31cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgZ2FwLTggbXQtOFwiPlxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIm1haWx0bzppYmlkdW4uaXNhYWNAZ21haWwuY29tXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBweC00IGgtMTYgcm91bmRlZC14bCBob3ZlcjpiZy13aGl0ZS8xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxHbWFpbEljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2lzYWFjLWliaWR1bi9cIlxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8xNSBweC00IGgtMTYgcm91bmRlZC14bCBob3ZlcjpiZy13aGl0ZS8xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rZWRpbkljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21heW93YWliaVwiXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTQgaC0xNiByb3VuZGVkLXhsIGhvdmVyOmJnLXdoaXRlLzEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEdpdEh1Ykljb24gY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiSW1hZ2UiLCJtZW1vamlJbWFnZSIsImdyYWluSW1hZ2UiLCJHbWFpbEljb24iLCJMaW5rZWRpbkljb24iLCJHaXRIdWJJY29uIiwiZWxldmF0b3JNdXNpYyIsIkhlcm9TZWN0aW9uIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiYXVkaW9SZWYiLCJ0b2dnbGVQbGF5IiwiY3VycmVudCIsInBhdXNlIiwicGxheSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic3JjIiwiYXVkaW8iLCJyZWYiLCJsb29wIiwiYnV0dG9uIiwib25DbGljayIsImFsdCIsImgxIiwic3BhbiIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Hero.tsx\n"));

/***/ })

});