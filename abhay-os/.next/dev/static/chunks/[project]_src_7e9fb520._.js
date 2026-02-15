(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/OSContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OSProvider",
    ()=>OSProvider,
    "useOS",
    ()=>useOS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const OSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const OSProvider = ({ children })=>{
    _s();
    // loading aur lock phase zaroor rakhna
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("boot");
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // CHANGE: Default 'normal', option 'chaos' (pehle bakchodi tha)
    const [osMode, setOsMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("normal");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OSProvider.useEffect": ()=>{
            const checkDevice = {
                "OSProvider.useEffect.checkDevice": ()=>{
                    setIsMobile(window.innerWidth <= 768);
                }
            }["OSProvider.useEffect.checkDevice"];
            checkDevice();
            window.addEventListener("resize", checkDevice);
            return ({
                "OSProvider.useEffect": ()=>window.removeEventListener("resize", checkDevice)
            })["OSProvider.useEffect"];
        }
    }["OSProvider.useEffect"], []);
    const handleLogin = ()=>{
        if (window.innerWidth <= 768) {
            setPhase("mobile");
        } else {
            setPhase("desktop");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OSContext.Provider, {
        value: {
            phase,
            setPhase,
            isMobile,
            handleLogin,
            osMode,
            setOsMode
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/OSContext.js",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OSProvider, "iwX5w9thAcVeA2ndzqHLIGHLmFU=");
_c = OSProvider;
const useOS = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OSContext);
};
_s1(useOS, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "OSProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/core/BootScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BootScreen = ()=>{
    _s();
    const { setPhase } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const textLines = [
        "Initializing AbhayOS Kernel...",
        "Loading Portfolio Engine v2.0...",
        "Bypassing Security Protocols...",
        "Mounting Virtual File System...",
        "ACCESS GRANTED.",
        "Booting System..."
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BootScreen.useEffect": ()=>{
            let delay = 0;
            textLines.forEach({
                "BootScreen.useEffect": (line)=>{
                    delay += Math.random() * 300 + 200;
                    setTimeout({
                        "BootScreen.useEffect": ()=>{
                            setLines({
                                "BootScreen.useEffect": (prev)=>[
                                        ...prev,
                                        line
                                    ]
                            }["BootScreen.useEffect"]);
                        }
                    }["BootScreen.useEffect"], delay);
                }
            }["BootScreen.useEffect"]);
            // IMPORTANT: Yahan 'loading' set karna hai, 'login' nahi
            setTimeout({
                "BootScreen.useEffect": ()=>{
                    setPhase("loading");
                }
            }["BootScreen.useEffect"], delay + 800);
        }
    }["BootScreen.useEffect"], []);
    // ... (Baaki return code same rakhna jo pehle tha)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.content,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: styles.logo,
                    children: [
                        "AbhayOS ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '12px'
                            },
                            children: "BOOTLOADER"
                        }, void 0, false, {
                            fileName: "[project]/src/components/core/BootScreen.jsx",
                            lineNumber: 38,
                            columnNumber: 41
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/core/BootScreen.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.barContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            width: "0%"
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 3,
                            ease: "easeInOut"
                        },
                        style: styles.progressBar
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/BootScreen.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/core/BootScreen.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.terminal,
                    children: [
                        lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.line,
                                children: `> ${line}`
                            }, i, false, {
                                fileName: "[project]/src/components/core/BootScreen.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: styles.cursor,
                            children: "_"
                        }, void 0, false, {
                            fileName: "[project]/src/components/core/BootScreen.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/core/BootScreen.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/core/BootScreen.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/core/BootScreen.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BootScreen, "CaRMoLtE04PRZ4Rb1pL494llRM8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = BootScreen;
const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Courier New, monospace"
    },
    content: {
        width: "350px"
    },
    logo: {
        color: "#fff",
        marginBottom: "20px",
        textAlign: "center",
        letterSpacing: "2px"
    },
    barContainer: {
        width: "100%",
        height: "4px",
        background: "#333",
        marginBottom: "20px"
    },
    progressBar: {
        height: "100%",
        background: "#0f0",
        boxShadow: "0 0 10px #0f0"
    },
    terminal: {
        color: "#0f0",
        fontSize: "14px",
        height: "150px",
        overflow: "hidden"
    },
    line: {
        margin: "5px 0"
    },
    cursor: {
        animation: "blink 1s infinite"
    }
};
const __TURBOPACK__default__export__ = BootScreen;
var _c;
__turbopack_context__.k.register(_c, "BootScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/core/WindowsLoadScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WindowsLoadScreen = ()=>{
    _s();
    const { setPhase } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsLoadScreen.useEffect": ()=>{
            const timer = setTimeout({
                "WindowsLoadScreen.useEffect.timer": ()=>{
                    setPhase("lock");
                }
            }["WindowsLoadScreen.useEffect.timer"], 4500); // Thoda time badhaya taaki loader dikhe
            return ({
                "WindowsLoadScreen.useEffect": ()=>clearTimeout(timer)
            })["WindowsLoadScreen.useEffect"];
        }
    }["WindowsLoadScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.logo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.square
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.square
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.square
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.square
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "win-loader",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "win-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "win-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "win-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "win-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "win-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/core/WindowsLoadScreen.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WindowsLoadScreen, "AR4UvuoAyjGHI/Daiv4xBvywLYs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = WindowsLoadScreen;
const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    },
    logo: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4px",
        width: "100px",
        height: "100px",
        marginBottom: "20px",
        transform: "translateX(-20px)"
    },
    square: {
        background: "#00a4ef"
    }
};
const __TURBOPACK__default__export__ = WindowsLoadScreen;
var _c;
__turbopack_context__.k.register(_c, "WindowsLoadScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/core/LockScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const LoginScreen = ()=>{
    _s();
    const { handleLogin, setOsMode, osMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    // --- TYPEWRITER LOGIC ---
    const roles = [
        "Full Stack Developer",
        "Competitive Programmer",
        "MERN Stack Specialist",
        "Problem Solver",
        "System Architect"
    ];
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loopNum, setLoopNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typingSpeed, setTypingSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(150);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginScreen.useEffect": ()=>{
            const handleType = {
                "LoginScreen.useEffect.handleType": ()=>{
                    const i = loopNum % roles.length;
                    const fullText = roles[i];
                    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
                    setTypingSpeed(isDeleting ? 40 : 100);
                    if (!isDeleting && text === fullText) setTimeout({
                        "LoginScreen.useEffect.handleType": ()=>setIsDeleting(true)
                    }["LoginScreen.useEffect.handleType"], 2000);
                    else if (isDeleting && text === "") {
                        setIsDeleting(false);
                        setLoopNum(loopNum + 1);
                    }
                }
            }["LoginScreen.useEffect.handleType"];
            const timer = setTimeout(handleType, typingSpeed);
            return ({
                "LoginScreen.useEffect": ()=>clearTimeout(timer)
            })["LoginScreen.useEffect"];
        }
    }["LoginScreen.useEffect"], [
        text,
        isDeleting,
        loopNum
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.mainContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.bgImage
            }, void 0, false, {
                fileName: "[project]/src/components/core/LockScreen.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                style: styles.contentWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.leftPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.brandLogo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '40px'
                                    },
                                    children: "⌘"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 51,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: styles.brandTitle,
                                children: [
                                    "AbhayOS ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: styles.version,
                                        children: "v2.0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/core/LockScreen.jsx",
                                        lineNumber: 53,
                                        columnNumber: 49
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.typingContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.jobTitle,
                                    children: [
                                        text,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.cursor,
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LockScreen.jsx",
                                            lineNumber: 57,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.description,
                                children: [
                                    "Initializing secure environment.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/core/LockScreen.jsx",
                                        lineNumber: 61,
                                        columnNumber: 45
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Accessing portfolio database..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.divider
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.instruction,
                                children: "Select the user profile to begin."
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/core/LockScreen.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.rightPanel,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            whileHover: {
                                scale: 1.02
                            },
                            style: styles.profileCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.avatarWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/profile.jpg",
                                            alt: "Profile",
                                            style: styles.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LockScreen.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.statusDot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LockScreen.jsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.userName,
                                    children: "Abhay Jha"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: styles.userStatus,
                                    children: "Administrator"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.toggleContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: osMode === 'normal' ? '#fff' : '#555',
                                                fontSize: '12px'
                                            },
                                            children: "Safe Mode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LockScreen.jsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.toggleTrack,
                                                background: osMode === 'chaos' ? '#ff0055' : '#444'
                                            },
                                            onClick: ()=>setOsMode(osMode === 'normal' ? 'chaos' : 'normal'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                layout: true,
                                                style: styles.toggleThumb,
                                                animate: {
                                                    x: osMode === 'chaos' ? 22 : 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/core/LockScreen.jsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LockScreen.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: osMode === 'chaos' ? '#ff0055' : '#555',
                                                fontSize: '12px',
                                                fontWeight: 'bold'
                                            },
                                            children: osMode === 'chaos' ? 'Chaos Mode 🔥' : 'Chaos Mode'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LockScreen.jsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: styles.loginBtn,
                                    onClick: handleLogin,
                                    children: osMode === 'chaos' ? "ENTER AT YOUR OWN RISK" : "Login to System"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LockScreen.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/core/LockScreen.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/LockScreen.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/core/LockScreen.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/core/LockScreen.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginScreen, "tb3Jkiihjqvi8W8kQOC9jIIRONI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = LoginScreen;
const styles = {
    mainContainer: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        color: "#fff"
    },
    bgImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop') center/cover",
        filter: "blur(30px) brightness(0.4)",
        zIndex: -1,
        transform: "scale(1.1)"
    },
    contentWrapper: {
        display: "flex",
        width: "80%",
        maxWidth: "1000px",
        height: "550px",
        background: "rgba(20, 20, 30, 0.4)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        overflow: "hidden"
    },
    leftPanel: {
        flex: 1,
        padding: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)"
    },
    brandTitle: {
        fontSize: "3rem",
        fontWeight: "700",
        marginBottom: "5px"
    },
    version: {
        fontSize: "1rem",
        color: "var(--primary-color)",
        verticalAlign: "super"
    },
    typingContainer: {
        height: "40px",
        marginBottom: "20px"
    },
    jobTitle: {
        color: "var(--primary-color)",
        fontSize: "1.4rem",
        fontWeight: "400",
        fontFamily: "monospace"
    },
    cursor: {
        color: "#fff",
        animation: "blink 1s infinite"
    },
    description: {
        fontFamily: "monospace",
        fontSize: "0.9rem",
        color: "#888",
        lineHeight: "1.6"
    },
    divider: {
        height: "1px",
        width: "50px",
        background: "var(--primary-color)",
        margin: "30px 0"
    },
    instruction: {
        fontSize: "0.9rem",
        color: "#aaa"
    },
    rightPanel: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    profileCard: {
        textAlign: "center",
        padding: "30px",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatarWrapper: {
        position: "relative",
        width: "120px",
        height: "120px",
        margin: "0 auto 20px"
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "3px solid rgba(255,255,255,0.2)",
        objectFit: "cover"
    },
    statusDot: {
        position: "absolute",
        bottom: "5px",
        right: "5px",
        width: "18px",
        height: "18px",
        background: "#00ff88",
        borderRadius: "50%",
        border: "3px solid #1a1a1a"
    },
    userName: {
        fontSize: "1.8rem",
        marginBottom: "5px"
    },
    userStatus: {
        color: "var(--primary-color)",
        fontSize: "0.9rem",
        marginBottom: "25px",
        textTransform: "uppercase",
        letterSpacing: "1px"
    },
    // Toggle Switch Styles
    toggleContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "25px",
        background: "rgba(0,0,0,0.2)",
        padding: "10px 20px",
        borderRadius: "30px"
    },
    toggleTrack: {
        width: "46px",
        height: "24px",
        borderRadius: "12px",
        background: "#444",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.3s"
    },
    toggleThumb: {
        width: "20px",
        height: "20px",
        background: "#fff",
        borderRadius: "50%",
        position: "absolute",
        top: "2px",
        left: "2px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
    },
    loginBtn: {
        background: "var(--primary-color)",
        border: "none",
        padding: "12px 40px",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#000",
        marginTop: "10px",
        width: "100%"
    }
};
const __TURBOPACK__default__export__ = LoginScreen;
var _c;
__turbopack_context__.k.register(_c, "LoginScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/core/LoginScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const LoginScreen = ()=>{
    _s();
    const { handleLogin, setOsMode, osMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    // --- TYPEWRITER LOGIC ---
    const roles = [
        "Full Stack Developer",
        "Competitive Programmer",
        "MERN Stack Specialist",
        "Problem Solver",
        "System Architect"
    ];
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loopNum, setLoopNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typingSpeed, setTypingSpeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(150);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginScreen.useEffect": ()=>{
            const handleType = {
                "LoginScreen.useEffect.handleType": ()=>{
                    const i = loopNum % roles.length;
                    const fullText = roles[i];
                    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
                    setTypingSpeed(isDeleting ? 40 : 100);
                    if (!isDeleting && text === fullText) setTimeout({
                        "LoginScreen.useEffect.handleType": ()=>setIsDeleting(true)
                    }["LoginScreen.useEffect.handleType"], 2000);
                    else if (isDeleting && text === "") {
                        setIsDeleting(false);
                        setLoopNum(loopNum + 1);
                    }
                }
            }["LoginScreen.useEffect.handleType"];
            const timer = setTimeout(handleType, typingSpeed);
            return ({
                "LoginScreen.useEffect": ()=>clearTimeout(timer)
            })["LoginScreen.useEffect"];
        }
    }["LoginScreen.useEffect"], [
        text,
        isDeleting,
        loopNum
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.mainContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.bgImage
            }, void 0, false, {
                fileName: "[project]/src/components/core/LoginScreen.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                style: styles.contentWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.leftPanel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.brandLogo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '40px'
                                    },
                                    children: "⌘"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 52,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: styles.brandTitle,
                                children: [
                                    "AbhayOS ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: styles.version,
                                        children: "v2.0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/core/LoginScreen.jsx",
                                        lineNumber: 54,
                                        columnNumber: 49
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.typingContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.jobTitle,
                                    children: [
                                        text,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.cursor,
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                                            lineNumber: 57,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.description,
                                children: [
                                    "Initializing secure environment.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/core/LoginScreen.jsx",
                                        lineNumber: 61,
                                        columnNumber: 45
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Accessing portfolio database..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.divider
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: styles.instruction,
                                children: "Select the user profile to begin."
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/core/LoginScreen.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.rightPanel,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            whileHover: {
                                scale: 1.02
                            },
                            style: styles.profileCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.avatarWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/profile.jpg",
                                            alt: "Profile",
                                            style: styles.avatar
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.statusDot
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.userName,
                                    children: "Abhay Jha"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: styles.userStatus,
                                    children: "Administrator"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.toggleRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '12px',
                                                color: '#aaa'
                                            },
                                            children: "Safe"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setOsMode(osMode === 'normal' ? 'chaos' : 'normal'),
                                            style: {
                                                width: '40px',
                                                height: '20px',
                                                background: osMode === 'chaos' ? '#ff0055' : '#444',
                                                borderRadius: '20px',
                                                position: 'relative',
                                                cursor: 'pointer',
                                                transition: '0.3s'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                animate: {
                                                    x: osMode === 'chaos' ? 20 : 2
                                                },
                                                style: {
                                                    width: '16px',
                                                    height: '16px',
                                                    background: '#fff',
                                                    borderRadius: '50%',
                                                    top: '2px',
                                                    position: 'absolute'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '12px',
                                                color: osMode === 'chaos' ? '#ff0055' : '#aaa',
                                                fontWeight: 'bold'
                                            },
                                            children: osMode === 'chaos' ? 'CHAOS 💀' : 'Chaos'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    style: {
                                        ...styles.loginBtn,
                                        background: osMode === 'chaos' ? '#ff0055' : 'var(--primary-color)'
                                    },
                                    onClick: handleLogin,
                                    children: osMode === 'chaos' ? "ENTER AT YOUR OWN RISK" : "Login to System"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/core/LoginScreen.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/core/LoginScreen.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/LoginScreen.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/core/LoginScreen.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.bottomBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.powerOption,
                        onClick: ()=>window.location.reload(),
                        onMouseEnter: (e)=>e.target.style.color = "#fff",
                        onMouseLeave: (e)=>e.target.style.color = "#aaa",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '18px'
                                },
                                children: "↺"
                            }, void 0, false, {
                                fileName: "[project]/src/components/core/LoginScreen.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Restart Portfolio"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/core/LoginScreen.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.powerOption,
                        children: "🔋 Power: Online"
                    }, void 0, false, {
                        fileName: "[project]/src/components/core/LoginScreen.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/core/LoginScreen.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/core/LoginScreen.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginScreen, "tb3Jkiihjqvi8W8kQOC9jIIRONI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = LoginScreen;
const styles = {
    mainContainer: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        color: "#fff"
    },
    bgImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop') center/cover",
        filter: "blur(30px) brightness(0.4)",
        zIndex: -1,
        transform: "scale(1.1)"
    },
    contentWrapper: {
        display: "flex",
        width: "80%",
        maxWidth: "1000px",
        height: "550px",
        background: "rgba(20, 20, 30, 0.4)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        overflow: "hidden"
    },
    leftPanel: {
        flex: 1,
        padding: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)"
    },
    brandTitle: {
        fontSize: "3rem",
        fontWeight: "700",
        marginBottom: "5px"
    },
    version: {
        fontSize: "1rem",
        color: "var(--primary-color)",
        verticalAlign: "super"
    },
    typingContainer: {
        height: "40px",
        marginBottom: "20px"
    },
    jobTitle: {
        color: "var(--primary-color)",
        fontSize: "1.4rem",
        fontWeight: "400",
        fontFamily: "monospace"
    },
    cursor: {
        color: "#fff",
        animation: "blink 1s infinite"
    },
    description: {
        fontFamily: "monospace",
        fontSize: "0.9rem",
        color: "#888",
        lineHeight: "1.6"
    },
    divider: {
        height: "1px",
        width: "50px",
        background: "var(--primary-color)",
        margin: "30px 0"
    },
    instruction: {
        fontSize: "0.9rem",
        color: "#aaa"
    },
    rightPanel: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    profileCard: {
        textAlign: "center",
        padding: "30px",
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatarWrapper: {
        position: "relative",
        width: "120px",
        height: "120px",
        margin: "0 auto 20px"
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "3px solid rgba(255,255,255,0.2)",
        objectFit: "cover"
    },
    statusDot: {
        position: "absolute",
        bottom: "5px",
        right: "5px",
        width: "18px",
        height: "18px",
        background: "#00ff88",
        borderRadius: "50%",
        border: "3px solid #1a1a1a"
    },
    userName: {
        fontSize: "1.8rem",
        marginBottom: "5px"
    },
    userStatus: {
        color: "var(--primary-color)",
        fontSize: "0.9rem",
        marginBottom: "20px",
        textTransform: "uppercase",
        letterSpacing: "1px"
    },
    toggleRow: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    },
    loginBtn: {
        border: "none",
        padding: "12px 40px",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#000",
        marginTop: "10px",
        width: "100%",
        transition: "0.3s"
    },
    // Bottom Bar Styles
    bottomBar: {
        position: "absolute",
        bottom: "30px",
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        color: "#aaa",
        fontSize: "0.9rem",
        zIndex: 10
    },
    powerOption: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "color 0.3s"
    }
};
const __TURBOPACK__default__export__ = LoginScreen;
var _c;
__turbopack_context__.k.register(_c, "LoginScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desktop/Taskbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Taskbar = ()=>{
    _s();
    const { osMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [chaosStyle, setChaosStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Taskbar.useEffect": ()=>{
            const timer = setInterval({
                "Taskbar.useEffect.timer": ()=>setTime(new Date())
            }["Taskbar.useEffect.timer"], 1000);
            return ({
                "Taskbar.useEffect": ()=>clearInterval(timer)
            })["Taskbar.useEffect"];
        }
    }["Taskbar.useEffect"], []);
    // --- CHAOS MODE: Makes the Taskbar Tilt ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Taskbar.useEffect": ()=>{
            if (osMode !== "chaos") {
                setChaosStyle({});
                return;
            }
            const interval = setInterval({
                "Taskbar.useEffect.interval": ()=>{
                    setChaosStyle({
                        transform: `rotate(${Math.random() * 2 - 1}deg) translateY(${Math.random() * 5}px)`,
                        transition: "all 0.5s ease"
                    });
                }
            }["Taskbar.useEffect.interval"], 2000);
            return ({
                "Taskbar.useEffect": ()=>clearInterval(interval)
            })["Taskbar.useEffect"];
        }
    }["Taskbar.useEffect"], [
        osMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "taskbar",
        style: chaosStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "taskbar-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon",
                        title: "Start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/windows-11.png",
                            alt: "Start"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon",
                        title: "File Explorer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/folder-invoices--v1.png",
                            alt: "Explorer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon active",
                        title: "Google Chrome",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/color/48/chrome--v1.png",
                            alt: "Chrome"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon",
                        title: "Notepad",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/notepad.png",
                            alt: "Notepad"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon",
                        title: "Paint",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/paint-palette.png",
                            alt: "Paint"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon",
                        title: "Mail",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/mail.png",
                            alt: "Mail"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "system-tray",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tray-icon",
                        children: "^"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tray-icon",
                        children: "📶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tray-icon",
                        children: "🔊"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "clock",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: time.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: time.toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tray-icon",
                        style: {
                            marginLeft: 10
                        },
                        children: "🔔"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desktop/Taskbar.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Taskbar, "tgfyln8xThe+kEVD1XzEZdSiDpM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = Taskbar;
const __TURBOPACK__default__export__ = Taskbar;
var _c;
__turbopack_context__.k.register(_c, "Taskbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desktop/DesktopIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const DesktopIcon = ({ label, iconSrc, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "desktop-icon",
        onClick: onClick,
        children: [
            typeof iconSrc === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: iconSrc,
                alt: label,
                className: "icon-img"
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/DesktopIcon.jsx",
                lineNumber: 9,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "icon-img flex items-center justify-center text-3xl",
                children: iconSrc
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/DesktopIcon.jsx",
                lineNumber: 11,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "icon-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/DesktopIcon.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desktop/DesktopIcon.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DesktopIcon;
const __TURBOPACK__default__export__ = DesktopIcon;
var _c;
__turbopack_context__.k.register(_c, "DesktopIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/desktop/Desktop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$Taskbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desktop/Taskbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desktop/DesktopIcon.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Desktop = ()=>{
    _s();
    const { osMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const [bgStyle, setBgStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Chaos Mode Effect on Wallpaper
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Desktop.useEffect": ()=>{
            if (osMode !== "chaos") {
                setBgStyle({});
                return;
            }
            const interval = setInterval({
                "Desktop.useEffect.interval": ()=>{
                    setBgStyle({
                        filter: `hue-rotate(${Math.random() * 360}deg)`,
                        transform: `scale(1.02)`,
                        transition: "all 2s ease"
                    });
                }
            }["Desktop.useEffect.interval"], 3000);
            return ({
                "Desktop.useEffect": ()=>clearInterval(interval)
            })["Desktop.useEffect"];
        }
    }["Desktop.useEffect"], [
        osMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "desktop-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wallpaper-layer",
                style: {
                    // Use your wallpaper.jpg from public folder. 
                    // If not available, this gradient mimics the blue Windows 11 bloom.
                    backgroundImage: "url('/wallpaper.jpg'), linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                    ...bgStyle
                }
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-text-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "hero-name",
                    children: "Abhay kumar Jha"
                }, void 0, false, {
                    fileName: "[project]/src/components/desktop/Desktop.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "icons-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "About Me",
                        iconSrc: "https://i.postimg.cc/cLbyKrVB/image.png",
                        onClick: ()=>console.log("Open About")
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "My Projects",
                        iconSrc: "https://img.icons8.com/color/48/project-setup.png",
                        onClick: ()=>console.log("Open Projects")
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Achievements",
                        iconSrc: "https://img.icons8.com/color/48/trophy.png",
                        onClick: ()=>console.log("Open Achievements")
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "My Resume",
                        iconSrc: "https://img.icons8.com/color/48/pdf-2--v1.png",
                        onClick: ()=>console.log("Open Resume")
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Contact Me",
                        iconSrc: "https://img.icons8.com/color/48/gmail-new.png",
                        onClick: ()=>console.log("Open Contact")
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$Taskbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desktop/Desktop.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Desktop, "tsNNB5F5AWfQxB/7xN/XJ4Kj9Z0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = Desktop;
const __TURBOPACK__default__export__ = Desktop;
var _c;
__turbopack_context__.k.register(_c, "Desktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$BootScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/core/BootScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$WindowsLoadScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/core/WindowsLoadScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$LockScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/core/LockScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$LoginScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/core/LoginScreen.jsx [app-client] (ecmascript)");
// New Import
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$Desktop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desktop/Desktop.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const OSManager = ()=>{
    _s();
    const { phase } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            phase === "boot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$BootScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 15,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            phase === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$WindowsLoadScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 16,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            phase === "lock" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$LockScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 17,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0)),
            phase === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$core$2f$LoginScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 18,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            phase === "desktop" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$Desktop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 21,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            phase === "mobile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    color: 'white',
                    padding: 50
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "📱 Android Mode Loaded (Coming Soon)"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 25,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OSManager, "vIyN0rCaZ+6WxJsO5a6ioobgtog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = OSManager;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OSProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OSManager, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "OSManager");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_src_7e9fb520._.js.map