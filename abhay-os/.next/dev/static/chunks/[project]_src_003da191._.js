(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/apps/FileExplorer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FileExplorer = ()=>{
    _s();
    // --- STATE ---
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Quick Access");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Quick Access"
    ]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- DATA: Windows 11 Style Icons ---
    const icons = {
        folder: "https://img.icons8.com/fluency/96/folder-invoices--v1.png",
        folder_empty: "https://img.icons8.com/fluency/96/folder-invoices--v1.png",
        disk: "https://img.icons8.com/fluency/96/ssd.png",
        txt: "https://img.icons8.com/fluency/96/txt.png",
        pdf: "https://img.icons8.com/fluency/96/pdf.png",
        img: "https://img.icons8.com/fluency/96/image.png",
        code: "https://img.icons8.com/fluency/96/code-file.png",
        exe: "https://img.icons8.com/fluency/96/console.png"
    };
    const fileSystem = {
        "Quick Access": [
            {
                id: 1,
                name: "Desktop",
                type: "folder",
                icon: "https://img.icons8.com/fluency/96/desktop-mac.png"
            },
            {
                id: 2,
                name: "Downloads",
                type: "folder",
                icon: "https://img.icons8.com/fluency/96/downloads-folder.png"
            },
            {
                id: 3,
                name: "Documents",
                type: "folder",
                icon: "https://img.icons8.com/fluency/96/documents.png"
            },
            {
                id: 4,
                name: "Pictures",
                type: "folder",
                icon: "https://img.icons8.com/fluency/96/image-folder.png"
            },
            {
                id: 5,
                name: "This PC",
                type: "folder",
                icon: "https://img.icons8.com/fluency/96/monitor--v1.png"
            }
        ],
        "Desktop": [
            {
                id: 11,
                name: "Project Alpha",
                type: "folder",
                icon: icons.folder
            },
            {
                id: 12,
                name: "Portfolio Website",
                type: "folder",
                icon: icons.code
            },
            {
                id: 13,
                name: "Resume.pdf",
                type: "file",
                icon: icons.pdf,
                size: "1.2 MB"
            },
            {
                id: 14,
                name: "Chrome.lnk",
                type: "file",
                icon: "https://img.icons8.com/fluency/96/chrome.png",
                size: "2 KB"
            }
        ],
        "Downloads": [
            {
                id: 21,
                name: "vsc_setup.exe",
                type: "file",
                icon: icons.exe,
                size: "85 MB"
            },
            {
                id: 22,
                name: "funny_cat.png",
                type: "file",
                icon: icons.img,
                size: "2.4 MB"
            },
            {
                id: 23,
                name: "notes.txt",
                type: "file",
                icon: icons.txt,
                size: "12 KB"
            }
        ],
        "Documents": [
            {
                id: 31,
                name: "Work Stuff",
                type: "folder",
                icon: icons.folder
            },
            {
                id: 32,
                name: "Salary_Slip.pdf",
                type: "file",
                icon: icons.pdf,
                size: "400 KB"
            }
        ],
        "This PC": [
            {
                id: 91,
                name: "Windows (C:)",
                type: "disk",
                icon: icons.disk,
                size: "120 GB free"
            },
            {
                id: 92,
                name: "Data (D:)",
                type: "disk",
                icon: icons.disk,
                size: "500 GB free"
            }
        ],
        // Empty folders handling
        "Project Alpha": [],
        "Portfolio Website": [],
        "Work Stuff": []
    };
    const sidebarItems = [
        {
            name: "Quick Access",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                size: 16,
                color: "#eab308",
                fill: "#eab308"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 64,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "Desktop",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Monitor, {
                size: 16,
                color: "#3b82f6"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 65,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "Downloads",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Download, {
                size: 16,
                color: "#22c55e"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 66,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "Documents",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileText, {
                size: 16,
                color: "#a855f7"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 67,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "Pictures",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                size: 16,
                color: "#ef4444"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 68,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            name: "This PC",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Monitor, {
                size: 16,
                color: "#64748b"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 69,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    // --- LOGIC ---
    const handleNavigate = (path)=>{
        // Agar path exist nahi karta fileSystem me, toh kuch mat karo (ya error dikhao)
        if (!fileSystem[path] && ![
            "Quick Access",
            "This PC",
            "Desktop",
            "Downloads",
            "Documents",
            "Pictures"
        ].includes(path)) {
            // Maybe it's a subfolder logic we haven't implemented fully
            // For now, treat it as empty folder if key exists
            if (!Object.keys(fileSystem).includes(path)) return;
        }
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(path);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setCurrentPath(path);
        setSelectedItem(null);
    };
    const handleBack = ()=>{
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setCurrentPath(history[historyIndex - 1]);
        }
    };
    const handleForward = ()=>{
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setCurrentPath(history[historyIndex + 1]);
        }
    };
    const handleUp = ()=>{
        // Simple Up logic for flat structure
        if (currentPath !== "This PC" && currentPath !== "Quick Access") {
            handleNavigate("This PC"); // Default to PC for now
        }
    };
    const handleItemDoubleClick = (item)=>{
        if (item.type === "folder" || item.type === "disk") {
            handleNavigate(item.name);
        } else {
            alert(`Opening file: ${item.name}`);
        }
    };
    const currentFiles = fileSystem[currentPath] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "explorer-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explorer-toolbar-top",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: historyIndex === 0,
                                onClick: handleBack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                    lineNumber: 126,
                                    columnNumber: 72
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: historyIndex === history.length - 1,
                                onClick: handleForward,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                    lineNumber: 127,
                                    columnNumber: 92
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleUp,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUp, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                    lineNumber: 128,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{},
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotateCw, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                    lineNumber: 129,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "address-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Monitor, {
                                size: 14,
                                className: "addr-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "breadcrumbs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: currentPath
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                                        size: 14,
                                        className: "crumb-arrow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {
                                size: 14,
                                className: "search-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: `Search ${currentPath}`,
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explorer-command-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmd-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plus, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 153,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "New"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                lineNumber: 153,
                                columnNumber: 52
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmd-btn",
                        title: "Cut",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scissors, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 155,
                            columnNumber: 46
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmd-btn",
                        title: "Copy",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Copy, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 156,
                            columnNumber: 47
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmd-btn",
                        title: "Paste",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckSquare, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 157,
                            columnNumber: 48
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmd-btn",
                        title: "Rename",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileText, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 158,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmd-btn",
                        title: "Delete",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trash2, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 160,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explorer-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "explorer-sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sidebar-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group-title",
                                    children: "Pinned"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                sidebarItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `sidebar-item ${currentPath === item.name ? 'active' : ''}`,
                                        onClick: ()=>handleNavigate(item.name),
                                        children: [
                                            item.icon,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                                lineNumber: 177,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                        lineNumber: 171,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "explorer-content",
                        children: currentFiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-msg",
                            children: "This folder is empty."
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 186,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "file-grid",
                            children: currentFiles.filter((file)=>file.name.toLowerCase().includes(searchQuery.toLowerCase())).map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid-item ${selectedItem === file.id ? 'selected' : ''}`,
                                    onClick: ()=>setSelectedItem(file.id),
                                    onDoubleClick: ()=>handleItemDoubleClick(file),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: file.icon,
                                            alt: file.name,
                                            className: "item-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "item-name",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "item-type",
                                                    children: file.type === 'folder' ? 'File folder' : file.size
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                            lineNumber: 199,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, file.id, true, {
                                    fileName: "[project]/src/components/apps/FileExplorer.jsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/FileExplorer.jsx",
                            lineNumber: 188,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explorer-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            currentFiles.length,
                            " items"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 212,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 213,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: selectedItem ? '1 item selected' : ''
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/FileExplorer.jsx",
                        lineNumber: 214,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/FileExplorer.jsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/FileExplorer.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FileExplorer, "nIHNcqDun5dAWRJh/vLV9e6stSI=");
_c = FileExplorer;
const __TURBOPACK__default__export__ = FileExplorer;
var _c;
__turbopack_context__.k.register(_c, "FileExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/Chrome.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Chrome = ()=>{
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("https://www.google.com/webhp?igu=1");
    const [displayUrl, setDisplayUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chrome.useEffect": ()=>{
            setDisplayUrl("");
        }
    }["Chrome.useEffect"], []);
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            let target = displayUrl;
            if (!target.includes('.') || target.includes(' ')) {
                target = `https://www.bing.com/search?q=${encodeURIComponent(target)}`;
            } else {
                if (!target.startsWith('http')) {
                    target = `https://${target}`;
                }
            }
            setUrl(target);
        }
    };
    const handleRefresh = ()=>{
        const current = url;
        setUrl('');
        setTimeout(()=>setUrl(current), 50);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chrome-app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chrome-tabs-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tabs-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chrome-tab active",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tab-shape-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 43,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tab-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png",
                                            alt: "G",
                                            className: "tab-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/Chrome.jsx",
                                            lineNumber: 45,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-text",
                                            children: "New Tab"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/Chrome.jsx",
                                            lineNumber: 46,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                            size: 13,
                                            className: "tab-close-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/Chrome.jsx",
                                            lineNumber: 47,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 44,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tab-shape-right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 49,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/apps/Chrome.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "new-tab-btn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plus, {
                                size: 16,
                                color: "#4b5563"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 52,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Chrome.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/apps/Chrome.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/apps/Chrome.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chrome-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 61,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-btn",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 62,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-btn",
                                onClick: handleRefresh,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotateCw, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 63,
                                    columnNumber: 64
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Chrome.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "omnibox",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "omnibox-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lock, {
                                    size: 12,
                                    className: "lock-icon text-green-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 68,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "address-input",
                                    value: displayUrl,
                                    onChange: (e)=>setDisplayUrl(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    placeholder: "Search Google or type a URL"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 69,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                    size: 14,
                                    className: "star-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Chrome.jsx",
                                    lineNumber: 77,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/apps/Chrome.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Chrome.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "profile-menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "profile-pic",
                                children: "A"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 82,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoreVertical, {
                                size: 16,
                                className: "menu-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 83,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Chrome.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Chrome.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bookmarks-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bookmark",
                        onClick: ()=>setUrl("https://github.com/abhay-os"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://github.githubassets.com/favicons/favicon.svg",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "GitHub"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Chrome.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bookmark",
                        onClick: ()=>setUrl("https://vscode.dev"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "VS Code"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Chrome.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bookmark",
                        onClick: ()=>setUrl("https://linkedin.com"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Chrome.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Chrome.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Chrome.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chrome-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: url,
                    className: "browser-iframe",
                    title: "Chrome Browser",
                    sandbox: "allow-same-origin allow-scripts allow-forms allow-popups"
                }, void 0, false, {
                    fileName: "[project]/src/components/apps/Chrome.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/apps/Chrome.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/Chrome.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Chrome, "flriFLmGnOHN/E5xv6oniBZTquQ=");
_c = Chrome;
const __TURBOPACK__default__export__ = Chrome;
var _c;
__turbopack_context__.k.register(_c, "Chrome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projectList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectData",
    ()=>projectData
]);
const projectData = [
    {
        id: 101,
        title: "Family Management System",
        description: "Centralized MERN platform for family logistics & safety. Features real-time location tracking, emergency alerts, expense coordination, and secure role-based access for 500+ users.",
        longDescription: "Entering Family_OS mainframe. Accessing secure modules... > This system engineers a centralized MERN platform enabling 5+ family members to coordinate expenses and documents, reducing manual tracking by 70%. Integrated real-time chat improved family communication speed by 40%. Developed role-based authentication (Admin, Child) with JWT + OTP, achieving 100% secure access with zero breaches in testing.",
        // NEW: Key features list
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
        features: [
            "Real-time Location Tracking",
            "Secure Document Vault",
            "Expense Analytics",
            "Emergency SOS Alert"
        ],
        image: "https://i.postimg.cc/Y96NvKFH/Gemini-Generated-Image-lx6c5mlx6c5mlx6c.png",
        category: "Web",
        techStack: [
            "MongoDB",
            "Express",
            "React",
            "Node.js",
            "Socket.io",
            "JWT"
        ],
        link: "https://ourhome-omega.vercel.app/",
        github: "https://github.com/Abhay17R/Home-Family_Management_System-" // Yahan GitHub Link daal
    },
    {
        id: 102,
        title: "ServiceLink Pro",
        description: "Scalable marketplace connecting 200+ professionals. Includes advanced search filters, conflict-free appointment booking, and a real-time chat dashboard powered by Socket.IO.",
        longDescription: "Entering Family_OS mainframe. Accessing secure modules... > This system engineers a centralized MERN platform enabling 5+ family members to coordinate expenses and documents, reducing manual tracking by 70%. Integrated real-time chat improved family communication speed by 40%. Developed role-based authentication (Admin, Child) with JWT + OTP, achieving 100% secure access with zero breaches in testing.",
        // NEW: Key features list
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
        features: [
            "Real-time Location Tracking",
            "Secure Document Vault",
            "Expense Analytics",
            "Emergency SOS Alert"
        ],
        image: "https://i.postimg.cc/fTNz740v/image.png",
        category: "Web",
        techStack: [
            "MERN Stack",
            "Socket.IO",
            "Redux",
            "JWT",
            "Tailwind"
        ],
        link: "https://servicelink-gules.vercel.app/",
        github: "https://github.com/Abhay17R/service" // Yahan GitHub Link daal
    },
    {
        id: 3,
        title: "Windows 11 Portfolio",
        description: "My personal portfolio website mimicking Windows 11 OS in the browser.",
        image: "https://i.postimg.cc/k5sCyDKy/image.png",
        category: "Web",
        techStack: [
            "Next.js",
            "React",
            "CSS Modules"
        ],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Light Following Robot",
        description: "Arduino-based smart robot that tracks light sources automatically.",
        image: "https://i.postimg.cc/XY76Y4T4/image.png",
        category: "IoT",
        techStack: [
            "C++",
            "Arduino",
            "Sensors"
        ],
        link: "#",
        github: "#"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/MyProjects.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projectList.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
// Categories update kar le agar aur chahiye toh
const categories = [
    "All",
    "Web",
    "AI/ML",
    "Data Science",
    "IoT",
    "Personal"
];
// Props me 'onProjectClick' receive karna zaroori hai Deep Dive ke liye
const MyProjects = ({ onProjectClick })=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // --- FILTERING LOGIC (Category + Search) ---
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectData"].filter((project)=>{
        const matchesCategory = activeCategory === "All" || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.toLowerCase()) || project.techStack.some((tech)=>tech.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "project-app-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Folder, {
                                size: 24,
                                color: "#00f3ff"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "My Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "category-nav",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `cat-btn ${activeCategory === cat ? "active" : ""}`,
                                onClick: ()=>setActiveCategory(cat),
                                children: [
                                    cat === "All" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Layers, {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 43,
                                        columnNumber: 32
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cpu, {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 43,
                                        columnNumber: 55
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    cat
                                ]
                            }, cat, true, {
                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/MyProjects.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-grid-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#00f3ff'
                                        },
                                        children: activeCategory
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Projects (",
                                    filteredProjects.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-wrapper",
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {
                                        size: 16,
                                        style: {
                                            position: 'absolute',
                                            left: 10,
                                            top: 10,
                                            color: '#aaa'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search protocols...",
                                        className: "search-bar",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        style: {
                                            paddingLeft: 35
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-grid",
                        children: filteredProjects.length > 0 ? filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "project-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-image",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.image,
                                                alt: project.title,
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-overlay",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "overlay-btn",
                                                    onClick: ()=>onProjectClick && onProjectClick(project.id),
                                                    children: "DEEP DIVE_"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tech-tags",
                                                children: [
                                                    project.techStack.slice(0, 3).map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: tech
                                                        }, i, false, {
                                                            fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                            lineNumber: 102,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    project.techStack.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "+",
                                                            project.techStack.length - 3
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                        lineNumber: 104,
                                                        columnNumber: 54
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-actions",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.github,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        title: "GitHub Repo",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Github, {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Code"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        title: "Live Demo",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                                lineNumber: 113,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " Demo"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, project.id, true, {
                                fileName: "[project]/src/components/apps/MyProjects.jsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))) : // No Results Found State
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                gridColumn: "1 / -1",
                                textAlign: "center",
                                color: "#555",
                                marginTop: 50,
                                fontFamily: "monospace"
                            },
                            children: "[!] NO_DATA_FOUND_IN_SECTOR"
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/MyProjects.jsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/MyProjects.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/MyProjects.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/MyProjects.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MyProjects, "7oGbP0KNp9yIol1v2/7iI7KX2cc=");
_c = MyProjects;
const __TURBOPACK__default__export__ = MyProjects;
var _c;
__turbopack_context__.k.register(_c, "MyProjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/Calculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Calculator = ()=>{
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Standard');
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastComputed, setLastComputed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- CORE LOGIC (Jo pehle tha, wahi same) ---
    const processInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Calculator.useCallback[processInput]": (val)=>{
            // 1. Clear All (Escape)
            if (val === 'C') {
                setCurrent("");
                setHistory("");
                return;
            }
            // 2. Backspace
            if (val === 'DEL') {
                setCurrent({
                    "Calculator.useCallback[processInput]": (prev)=>prev.slice(0, -1)
                }["Calculator.useCallback[processInput]"]);
                return;
            }
            // 3. Calculate (Enter / =)
            if (val === '=') {
                if (!current) return;
                try {
                    let evalStr = current.replace(/×/g, '*').replace(/÷/g, '/').replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E').replace(/√/g, 'Math.sqrt').replace(/log/g, 'Math.log10').replace(/ln/g, 'Math.log').replace(/\^/g, '**');
                    // Trig fix
                    evalStr = evalStr.replace(/sin\(/g, 'Math.sin(').replace(/cos\(/g, 'Math.cos(').replace(/tan\(/g, 'Math.tan(');
                    const result = eval(evalStr); // Caution: Portfolio only
                    setHistory(current + " =");
                    setCurrent(result.toString());
                    setLastComputed(true);
                } catch (err) {
                    setCurrent("Error");
                }
                return;
            }
            // 4. Input Handling
            if (lastComputed && ![
                '+',
                '-',
                '×',
                '÷'
            ].includes(val)) {
                setLastComputed(false);
                setCurrent(val); // New start
            } else {
                setLastComputed(false);
                setCurrent({
                    "Calculator.useCallback[processInput]": (prev)=>prev + val
                }["Calculator.useCallback[processInput]"]);
            }
        }
    }["Calculator.useCallback[processInput]"], [
        current,
        lastComputed
    ]);
    // --- 🎹 KEYBOARD MAPPING LOGIC (New Magic) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Calculator.useEffect": ()=>{
            const handleKeyDown = {
                "Calculator.useEffect.handleKeyDown": (e)=>{
                    const key = e.key;
                    // 1. Numbers (0-9) & Decimal
                    if (/^[0-9.]$/.test(key)) {
                        processInput(key);
                    } else if (key === '+') processInput('+');
                    else if (key === '-') processInput('-');
                    else if (key === '*') processInput('×');
                    else if (key === '/') {
                        e.preventDefault(); // Browser ka quick search rokne ke liye
                        processInput('÷');
                    } else if (key === 'Enter' || key === '=') {
                        e.preventDefault();
                        processInput('=');
                    } else if (key === 'Backspace') {
                        processInput('DEL');
                    } else if (key === 'Escape') {
                        processInput('C');
                    } else if (key === '(' || key === ')') processInput(key);
                    else if (key === '^') processInput('^');
                }
            }["Calculator.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Calculator.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Calculator.useEffect"];
        }
    }["Calculator.useEffect"], [
        processInput
    ]); // processInput dependency zaroori hai
    // --- BUTTON DATA ---
    const stdButtons = [
        '%',
        'CE',
        'C',
        'DEL',
        '1/x',
        'x²',
        '√',
        '÷',
        '7',
        '8',
        '9',
        '×',
        '4',
        '5',
        '6',
        '-',
        '1',
        '2',
        '3',
        '+',
        '+/-',
        '0',
        '.',
        '='
    ];
    const sciButtons = [
        '2nd',
        'π',
        'e',
        'C',
        'DEL',
        'x²',
        '1/x',
        '|x|',
        'exp',
        'mod',
        '√',
        '(',
        ')',
        'n!',
        '÷',
        'x^y',
        '7',
        '8',
        '9',
        '×',
        '10^x',
        '4',
        '5',
        '6',
        '-',
        'log',
        '1',
        '2',
        '3',
        '+',
        'ln',
        '+/-',
        '0',
        '.',
        '='
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "calc-container",
        onClick: ()=>setMenuOpen(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calc-header",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-btn",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Calculator.jsx",
                            lineNumber: 134,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mode-title",
                        children: mode
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Calculator.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mode-menu",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `menu-item ${mode === 'Standard' ? 'active' : ''}`,
                        onClick: ()=>{
                            setMode('Standard');
                            setMenuOpen(false);
                        },
                        children: "Standard"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `menu-item ${mode === 'Scientific' ? 'active' : ''}`,
                        onClick: ()=>{
                            setMode('Scientific');
                            setMenuOpen(false);
                        },
                        children: "Scientific"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Calculator.jsx",
                lineNumber: 141,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calc-display",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "history-text",
                        children: history
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "current-text",
                        children: current || "0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Calculator.jsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `calc-keypad ${mode.toLowerCase()}`,
                children: (mode === 'Standard' ? stdButtons : sciButtons).map((btn, i)=>{
                    let className = "c-btn";
                    if (!isNaN(btn) || btn === '.') className += " btn-num";
                    if ([
                        '+',
                        '-',
                        '×',
                        '÷',
                        '='
                    ].includes(btn)) className += " btn-op";
                    if (btn === '=') className += " btn-equal";
                    if ([
                        'sin',
                        'cos',
                        'tan',
                        'log',
                        'ln',
                        'π',
                        'e'
                    ].includes(btn)) className += " btn-sci";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: className,
                        onClick: ()=>processInput(btn),
                        children: btn
                    }, i, false, {
                        fileName: "[project]/src/components/apps/Calculator.jsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/apps/Calculator.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/Calculator.jsx",
        lineNumber: 129,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Calculator, "tsKTEkWjhSQgjt6TZfsmKGg8ZUI=");
_c = Calculator;
const __TURBOPACK__default__export__ = Calculator;
var _c;
__turbopack_context__.k.register(_c, "Calculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/PdfViewer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const PdfViewer = ({ fileUrl })=>{
    const src = fileUrl || "";
    if (!src) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            color: 'white',
            padding: 20
        },
        children: "No File Found"
    }, void 0, false, {
        fileName: "[project]/src/components/apps/PdfViewer.jsx",
        lineNumber: 6,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100%',
            height: '100%',
            background: '#333'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            // Yahan se '#toolbar=0' hata diya hai taaki INBUILT options dikhein
            src: src,
            title: "PDF Viewer",
            style: {
                width: '100%',
                height: '100%',
                border: 'none'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/apps/PdfViewer.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/apps/PdfViewer.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PdfViewer;
const __TURBOPACK__default__export__ = PdfViewer;
var _c;
__turbopack_context__.k.register(_c, "PdfViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/Notepad.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Notepad = ()=>{
    _s();
    // State for text content
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // State for the unique "Hacker Glow" mode
    const [hackerMode, setHackerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gutterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. Load saved content on startup (Auto-Load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notepad.useEffect": ()=>{
            const savedData = localStorage.getItem('cyberpad-content');
            if (savedData) {
                setContent(savedData);
            }
        }
    }["Notepad.useEffect"], []);
    // 2. Auto-Save logic on every change
    const handleChange = (e)=>{
        const newText = e.target.value;
        setContent(newText);
        localStorage.setItem('cyberpad-content', newText);
    };
    // 3. Clear function
    const handleClear = ()=>{
        if (window.confirm("Are you sure you want to clear everything?")) {
            setContent("");
            localStorage.removeItem('cyberpad-content');
        }
    };
    // 4. Sync scrolling between text and gutter
    const handleScroll = ()=>{
        if (gutterRef.current && textareaRef.current) {
            gutterRef.current.scrollTop = textareaRef.current.scrollTop;
        }
    };
    // 5. Generate Line Numbers based on content
    const lineNumbers = content.split('\n').map((_, i)=>i + 1);
    const wordCount = content.trim() === '' ? 0 : content.trim().split(/\s+/).length;
    const charCount = content.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `notepad-container ${hackerMode ? 'hacker-mode' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "np-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "np-btn",
                                onClick: ()=>alert("Auto-Saved to Local Storage!"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Save, {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Notepad.jsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Save"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Notepad.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "np-btn",
                                onClick: handleClear,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trash2, {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Notepad.jsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Clear"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Notepad.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `np-btn ${hackerMode ? 'active-glow' : ''}`,
                        onClick: ()=>setHackerMode(!hackerMode),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Zap, {
                                size: 14,
                                fill: hackerMode ? "currentColor" : "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Notepad.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            hackerMode ? "Neon Mode: ON" : "Neon Mode: OFF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Notepad.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "np-editor-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "np-gutter",
                        ref: gutterRef,
                        children: lineNumbers.map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gutter-num",
                                children: num
                            }, num, false, {
                                fileName: "[project]/src/components/apps/Notepad.jsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        className: "np-textarea",
                        value: content,
                        onChange: handleChange,
                        onScroll: handleScroll,
                        spellCheck: "false",
                        placeholder: "Start typing your master plan..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Notepad.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "np-statusbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileText, {
                                size: 12,
                                style: {
                                    marginRight: 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Notepad.jsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            " UTF-8"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Lines: ",
                            lineNumbers.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Words: ",
                            wordCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Chars: ",
                            charCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Notepad.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Notepad.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/Notepad.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Notepad, "viBD49QEfofk0IYBE5YilFLtxa0=");
_c = Notepad;
const __TURBOPACK__default__export__ = Notepad;
var _c;
__turbopack_context__.k.register(_c, "Notepad");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/Terminal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Terminal = ()=>{
    _s();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Command history
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isBooting, setIsBooting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // --- BOOT SEQUENCE LOGIC ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            const bootLines = [
                "Initializing Abhay_OS Kernel v2.0...",
                "Loading System Dependencies...",
                "Verifying User Identity... [Abhay Jha]",
                "Mounting File System...",
                "Connecting to Server... SUCCESS",
                "Type 'help' to view available commands."
            ];
            let delay = 0;
            bootLines.forEach({
                "Terminal.useEffect": (line, index)=>{
                    delay += Math.random() * 500 + 300; // Random delay between lines
                    setTimeout({
                        "Terminal.useEffect": ()=>{
                            setHistory({
                                "Terminal.useEffect": (prev)=>[
                                        ...prev,
                                        {
                                            type: 'system',
                                            content: line
                                        }
                                    ]
                            }["Terminal.useEffect"]);
                            // Boot finish detect
                            if (index === bootLines.length - 1) {
                                setIsBooting(false);
                                setTimeout({
                                    "Terminal.useEffect": ()=>inputRef.current?.focus()
                                }["Terminal.useEffect"], 100);
                            }
                        }
                    }["Terminal.useEffect"], delay);
                }
            }["Terminal.useEffect"]);
        }
    }["Terminal.useEffect"], []);
    // --- AUTO SCROLL BOTTOM ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (bodyRef.current) {
                bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
            }
        }
    }["Terminal.useEffect"], [
        history
    ]);
    // --- FOCUS KEEPER (Click anywhere to focus input) ---
    const handleWrapperClick = ()=>{
        if (!isBooting) inputRef.current?.focus();
    };
    // --- COMMAND PROCESSOR ---
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            // Add user command to history
            const newHistory = [
                ...history,
                {
                    type: 'user',
                    content: `visitor@abhay-os:~$ ${input}`
                }
            ];
            let response = [];
            switch(cmd){
                case 'help':
                    response = [
                        {
                            type: 'info',
                            content: 'Available Commands:'
                        },
                        {
                            type: 'success',
                            content: '  about    - Who am I?'
                        },
                        {
                            type: 'success',
                            content: '  skills   - My technical arsenal'
                        },
                        {
                            type: 'success',
                            content: '  projects - View my work'
                        },
                        {
                            type: 'success',
                            content: '  contact  - Get in touch'
                        },
                        {
                            type: 'success',
                            content: '  hack     - ??? (Try it)'
                        },
                        {
                            type: 'success',
                            content: '  clear    - Clear terminal'
                        }
                    ];
                    break;
                case 'clear':
                    setHistory([]);
                    setInput("");
                    return;
                case 'about':
                    response = [
                        {
                            type: 'info',
                            content: 'Name: Abhay Kumar Jha'
                        },
                        {
                            type: 'info',
                            content: 'Role: Full Stack Developer & Cybersecurity Enthusiast'
                        },
                        {
                            type: 'info',
                            content: 'Mission: Building cool web apps and breaking them.'
                        }
                    ];
                    break;
                case 'skills':
                    response = [
                        {
                            type: 'success',
                            content: 'Frontend: React, Next.js, Tailwind'
                        },
                        {
                            type: 'success',
                            content: 'Backend: Node.js, Express, Python'
                        },
                        {
                            type: 'success',
                            content: 'Tools: Git, Docker, Linux'
                        }
                    ];
                    break;
                case 'hack':
                    response = [
                        {
                            type: 'warn',
                            content: 'Initializing brute-force attack...'
                        },
                        {
                            type: 'warn',
                            content: 'Bypassing firewall...'
                        },
                        {
                            type: 'error',
                            content: 'ACCESS DENIED. Just kidding, I am a white-hat dev!'
                        }
                    ];
                    break;
                case 'whoami':
                    response = [
                        {
                            type: 'info',
                            content: 'visitor (You are a guest in my system)'
                        }
                    ];
                    break;
                case '':
                    break;
                default:
                    response = [
                        {
                            type: 'error',
                            content: `Command not found: ${cmd}. Type 'help' for assistance.`
                        }
                    ];
            }
            setHistory([
                ...newHistory,
                ...response
            ]);
            setInput("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "terminal-wrapper",
        onClick: handleWrapperClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanlines"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/Terminal.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-flicker"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/Terminal.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "terminal-body",
                ref: bodyRef,
                children: [
                    history.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `output-line ${line.type}`,
                            children: line.content
                        }, i, false, {
                            fileName: "[project]/src/components/apps/Terminal.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    !isBooting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "input-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "prompt-label",
                                children: "visitor@abhay-os:~$"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Terminal.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "text",
                                className: "term-input",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyDown: handleKeyDown,
                                autoFocus: true,
                                autoComplete: "off"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Terminal.jsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Terminal.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Terminal.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/Terminal.jsx",
        lineNumber: 117,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Terminal, "mJKRbrDhbtVaj+5mGwkbse6B79A=");
_c = Terminal;
const __TURBOPACK__default__export__ = Terminal;
var _c;
__turbopack_context__.k.register(_c, "Terminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/WindowsMediaPlayer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
const WindowsMediaPlayer = ()=>{
    _s();
    const mediaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- STATE ---
    const [playlist, setPlaylist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTrack, setCurrentTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPlaylist, setShowPlaylist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New Features State
    const [isShuffle, setIsShuffle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [repeatMode, setRepeatMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 0: Off, 1: One, 2: All
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- 1. FULLSCREEN LISTENER ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsMediaPlayer.useEffect": ()=>{
            const handleFsChange = {
                "WindowsMediaPlayer.useEffect.handleFsChange": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["WindowsMediaPlayer.useEffect.handleFsChange"];
            document.addEventListener('fullscreenchange', handleFsChange);
            return ({
                "WindowsMediaPlayer.useEffect": ()=>document.removeEventListener('fullscreenchange', handleFsChange)
            })["WindowsMediaPlayer.useEffect"];
        }
    }["WindowsMediaPlayer.useEffect"], []);
    // --- 2. AUTO SCANNER ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsMediaPlayer.useEffect": ()=>{
            const fetchMedia = {
                "WindowsMediaPlayer.useEffect.fetchMedia": async ()=>{
                    try {
                        const res = await fetch('/api/media');
                        const data = await res.json();
                        setPlaylist(data);
                        setLoading(false);
                    } catch (error) {
                        console.error("Media Scan Failed:", error);
                        setLoading(false);
                    }
                }
            }["WindowsMediaPlayer.useEffect.fetchMedia"];
            fetchMedia();
        }
    }["WindowsMediaPlayer.useEffect"], []);
    // --- 3. HANDLERS (Functions) ---
    // Track Update Listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsMediaPlayer.useEffect": ()=>{
            if (mediaRef.current && playlist.length > 0) {
                mediaRef.current.load();
                if (isPlaying) mediaRef.current.play();
            }
        }
    }["WindowsMediaPlayer.useEffect"], [
        currentTrack,
        playlist
    ]);
    const togglePlay = ()=>{
        if (mediaRef.current) {
            if (isPlaying) mediaRef.current.pause();
            else mediaRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const handleFullscreen = ()=>{
        if (!document.fullscreenElement) {
            if (containerRef.current.requestFullscreen) {
                containerRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };
    const togglePiP = async ()=>{
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else if (mediaRef.current && isVideo) {
                await mediaRef.current.requestPictureInPicture();
            }
        } catch (error) {
            console.error("PiP failed:", error);
        }
    };
    const handleTimeUpdate = ()=>{
        if (mediaRef.current) {
            const current = mediaRef.current.currentTime;
            const dur = mediaRef.current.duration || 0;
            setProgress(current / dur * 100);
            setDuration(dur);
        }
    };
    const handleSeek = (e)=>{
        const seekTime = e.target.value / 100 * duration;
        mediaRef.current.currentTime = seekTime;
        setProgress(e.target.value);
    };
    const changeTrack = (index)=>{
        setCurrentTrack(index);
        setIsPlaying(true);
    };
    const handleNext = ()=>{
        if (repeatMode === 1) {
            mediaRef.current.currentTime = 0;
            mediaRef.current.play();
            return;
        }
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * playlist.length);
            setCurrentTrack(randomIndex);
        } else {
            setCurrentTrack((prev)=>(prev + 1) % playlist.length);
        }
        setIsPlaying(true);
    };
    const handlePrev = ()=>{
        changeTrack((currentTrack - 1 + playlist.length) % playlist.length);
    };
    // --- 4. KEYBOARD SHORTCUTS (Moved Here - Correct Place) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowsMediaPlayer.useEffect": ()=>{
            const handleKeyDown = {
                "WindowsMediaPlayer.useEffect.handleKeyDown": (e)=>{
                    if (e.target.tagName === 'INPUT') return;
                    switch(e.code){
                        case 'Space':
                            e.preventDefault();
                            togglePlay();
                            break;
                        case 'ArrowRight':
                            if (mediaRef.current) mediaRef.current.currentTime += 5;
                            break;
                        case 'ArrowLeft':
                            if (mediaRef.current) mediaRef.current.currentTime -= 5;
                            break;
                        case 'KeyM':
                            setIsMuted({
                                "WindowsMediaPlayer.useEffect.handleKeyDown": (prev)=>!prev
                            }["WindowsMediaPlayer.useEffect.handleKeyDown"]);
                            break;
                        case 'KeyF':
                            handleFullscreen();
                            break;
                    }
                }
            }["WindowsMediaPlayer.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "WindowsMediaPlayer.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["WindowsMediaPlayer.useEffect"];
        }
    }["WindowsMediaPlayer.useEffect"], [
        isPlaying,
        isMuted
    ]); // Now this works because functions are defined above
    // --- DRAG & DROP HANDLERS ---
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = ()=>setIsDragging(false);
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && (file.type.startsWith('audio') || file.type.startsWith('video'))) {
            const url = URL.createObjectURL(file);
            const newTrack = {
                title: file.name,
                artist: "Local File",
                url: url,
                type: file.type.startsWith('video') ? 'video' : 'audio',
                cover: "https://img.icons8.com/fluency/48/opened-folder.png"
            };
            setPlaylist([
                newTrack,
                ...playlist
            ]);
            setCurrentTrack(0);
            setIsPlaying(true);
        }
    };
    const formatTime = (seconds)=>{
        if (!seconds || isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    };
    // Render Helpers
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wmp-container",
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: 'center',
                color: '#00f3ff'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {
                    className: "animate-spin",
                    size: 30,
                    style: {
                        marginBottom: 10
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "SCANNING_MEDIA_DRIVE..."
                }, void 0, false, {
                    fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
            lineNumber: 199,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
        lineNumber: 198,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (playlist.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wmp-container",
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "[!] NO MEDIA FOUND IN /public/media"
        }, void 0, false, {
            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
            lineNumber: 208,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
        lineNumber: 207,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const currentItem = playlist[currentTrack];
    const isVideo = currentItem?.type === 'video';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `wmp-container ${isFullscreen ? 'is-fs' : ''}`,
        ref: containerRef,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        children: [
            isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drag-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadCloud, {
                        size: 50,
                        color: "#00f3ff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "DROP FILE TO PLAY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                lineNumber: 225,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wmp-display-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: mediaRef,
                        src: currentItem.url,
                        className: `wmp-video-element ${isVideo ? 'visible' : 'hidden'}`,
                        onClick: togglePlay,
                        onDoubleClick: handleFullscreen,
                        onTimeUpdate: handleTimeUpdate,
                        onEnded: handleNext
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wmp-visualizer-overlay",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wmp-grid-bg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 245,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wmp-track-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: currentItem.cover,
                                        alt: "Cover",
                                        className: `album-art ${isPlaying ? 'spinning' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 247,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "track-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: currentItem.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                                lineNumber: 249,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: currentItem.artist
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                                lineNumber: 250,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 248,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 246,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wmp-bars",
                                children: [
                                    ...Array(20)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `bar ${isPlaying ? 'animate' : ''}`,
                                        style: {
                                            animationDelay: `${i * 0.1}s`,
                                            height: isPlaying ? '50%' : '10%'
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 255,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 253,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-scanlines"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 261,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `wmp-playlist ${showPlaylist ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "playlist-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LOCAL_DRIVE_SCAN_RESULTS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 267,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPlaylist(!showPlaylist),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                    lineNumber: 268,
                                    columnNumber: 67
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 268,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: playlist.map((track, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: currentTrack === index ? 'active' : '',
                                onClick: ()=>changeTrack(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "track-icon",
                                        children: track.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileVideo, {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 278,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Music, {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 278,
                                            columnNumber: 68
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "track-name",
                                        children: track.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wmp-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wmp-progress-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "time-text",
                                children: formatTime(mediaRef.current?.currentTime)
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                className: "wmp-slider progress",
                                value: progress || 0,
                                onChange: handleSeek
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "time-text",
                                children: formatTime(duration)
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wmp-buttons-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "left-actions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "media-type-badge",
                                    children: isVideo ? 'VIDEO' : 'AUDIO'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 295,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "main-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `icon-btn ${isShuffle ? 'active' : ''}`,
                                        onClick: ()=>setIsShuffle(!isShuffle),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Shuffle, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 302,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 301,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ctrl-btn",
                                        onClick: handlePrev,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkipBack, {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 305,
                                            columnNumber: 66
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 305,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "play-btn",
                                        onClick: togglePlay,
                                        children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pause, {
                                            size: 24,
                                            fill: "#000"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 307,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Play, {
                                            size: 24,
                                            fill: "#000"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 307,
                                            columnNumber: 65
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 306,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "ctrl-btn",
                                        onClick: handleNext,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkipForward, {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 309,
                                            columnNumber: 66
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 309,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `icon-btn ${repeatMode > 0 ? 'active' : ''}`,
                                        onClick: ()=>setRepeatMode((prev)=>(prev + 1) % 3),
                                        title: repeatMode === 1 ? "Repeat One" : repeatMode === 2 ? "Repeat All" : "Repeat Off",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Repeat, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                                lineNumber: 317,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            repeatMode === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tiny-badge",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                                lineNumber: 318,
                                                columnNumber: 39
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 312,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 299,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vol-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-btn",
                                        onClick: ()=>{
                                            mediaRef.current.muted = !isMuted;
                                            setIsMuted(!isMuted);
                                        },
                                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeX, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 325,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Volume2, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 325,
                                            columnNumber: 52
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        className: "wmp-slider volume",
                                        min: "0",
                                        max: "1",
                                        step: "0.1",
                                        value: isMuted ? 0 : volume,
                                        onChange: (e)=>{
                                            setVolume(e.target.value);
                                            if (mediaRef.current) mediaRef.current.volume = e.target.value;
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-btn",
                                        onClick: togglePiP,
                                        title: "Picture in Picture",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PictureInPicture, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 332,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-btn",
                                        onClick: ()=>setShowPlaylist(!showPlaylist),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 336,
                                            columnNumber: 91
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-btn",
                                        onClick: handleFullscreen,
                                        title: "Fullscreen",
                                        children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Minimize2, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 340,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Maximize2, {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                            lineNumber: 340,
                                            columnNumber: 58
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                                lineNumber: 322,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/WindowsMediaPlayer.jsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WindowsMediaPlayer, "8p+gbli+tGsf8tSHN47Doa+WmTs=");
_c = WindowsMediaPlayer;
const __TURBOPACK__default__export__ = WindowsMediaPlayer;
var _c;
__turbopack_context__.k.register(_c, "WindowsMediaPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/Paint.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Paint = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDrawing, setIsDrawing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- STATE ---
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('#00f3ff'); // Default Neon Cyan
    const [brushSize, setBrushSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('brush'); // 'brush' or 'eraser'
    const [neonMode, setNeonMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Glow effect active?
    const [showGrid, setShowGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [snapshot, setSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [startPos, setStartPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // --- INIT CANVAS (Run once) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Paint.useEffect": ()=>{
            const canvas = canvasRef.current;
            // Parent container ka size le rahe hain taaki canvas fit ho
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            const ctx = canvas.getContext('2d');
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.fillStyle = '#050505'; // Dark Base
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctxRef.current = ctx;
        }
    }["Paint.useEffect"], []);
    // --- UPDATING BRUSH STYLE ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Paint.useEffect": ()=>{
            if (!ctxRef.current) return;
            const ctx = ctxRef.current;
            ctx.lineWidth = brushSize;
            if (tool === 'eraser') {
                ctx.globalCompositeOperation = 'destination-out'; // Asli Eraser Logic
                ctx.shadowBlur = 0;
            } else {
                ctx.globalCompositeOperation = 'source-over';
                ctx.strokeStyle = color;
                if (neonMode) {
                    ctx.shadowColor = color;
                    ctx.shadowBlur = 15; // GLOW INTENSITY 🔥
                } else {
                    ctx.shadowBlur = 0;
                }
            }
        }
    }["Paint.useEffect"], [
        color,
        brushSize,
        tool,
        neonMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Paint.useEffect": ()=>{
            const resizeCanvas = {
                "Paint.useEffect.resizeCanvas": ()=>{
                    const canvas = canvasRef.current;
                    const ctx = ctxRef.current;
                    if (!canvas || !ctx) return;
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    canvas.width = canvas.parentElement.clientWidth;
                    canvas.height = canvas.parentElement.clientHeight;
                    ctx.putImageData(imageData, 0, 0);
                }
            }["Paint.useEffect.resizeCanvas"];
            window.addEventListener("resize", resizeCanvas);
            return ({
                "Paint.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["Paint.useEffect"];
        }
    }["Paint.useEffect"], []);
    // --- DRAWING FUNCTIONS ---
    // 1. START DRAWING UPDATE
    const startDrawing = ({ nativeEvent })=>{
        const rect = canvasRef.current.getBoundingClientRect();
        const scaleX = canvasRef.current.width / rect.width;
        const scaleY = canvasRef.current.height / rect.height;
        const offsetX = (nativeEvent.clientX - rect.left) * scaleX;
        const offsetY = (nativeEvent.clientY - rect.top) * scaleY;
        setIsDrawing(true);
        setStartPos({
            x: offsetX,
            y: offsetY
        }); // Start position save karo
        // Canvas ka photo lelo (Snapshot) taaki shape drag karte waqt purana drawing na mite
        setSnapshot(ctxRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height));
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(offsetX, offsetY);
    };
    // 2. DRAW UPDATE
    const draw = ({ nativeEvent })=>{
        if (!isDrawing) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const scaleX = canvasRef.current.width / rect.width;
        const scaleY = canvasRef.current.height / rect.height;
        const offsetX = (nativeEvent.clientX - rect.left) * scaleX;
        const offsetY = (nativeEvent.clientY - rect.top) * scaleY;
        const ctx = ctxRef.current;
        if (tool === 'brush' || tool === 'eraser') {
            // Normal Drawing
            ctx.lineTo(offsetX, offsetY);
            ctx.stroke();
        } else {
            // SHAPE DRAWING LOGIC
            ctx.putImageData(snapshot, 0, 0); // Purana canvas wapis lao (clears previous drag frame)
            ctx.beginPath();
            const width = offsetX - startPos.x;
            const height = offsetY - startPos.y;
            if (tool === 'rect') {
                ctx.rect(startPos.x, startPos.y, width, height);
            } else if (tool === 'circle') {
                const radius = Math.sqrt(width * width + height * height);
                ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
            } else if (tool === 'triangle') {
                ctx.moveTo(startPos.x + width / 2, startPos.y); // Top
                ctx.lineTo(startPos.x, startPos.y + height); // Bottom Left
                ctx.lineTo(startPos.x + width, startPos.y + height); // Bottom Right
                ctx.closePath();
            }
            ctx.stroke(); // Sirf outline draw karega (Neon effect ke saath)
        }
    };
    const stopDrawing = ()=>{
        ctxRef.current.closePath();
        setIsDrawing(false);
    };
    // --- ACTIONS ---
    const clearCanvas = ()=>{
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        ctx.globalCompositeOperation = 'source-over'; // Reset mode
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const downloadArt = ()=>{
        const link = document.createElement('a');
        link.download = `CyberArt_${Date.now()}.png`;
        link.href = canvasRef.current.toDataURL();
        link.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "paint-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "paint-toolbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tool-header",
                        children: "TOOLS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${tool === 'brush' ? 'active' : ''}`,
                        onClick: ()=>setTool('brush'),
                        title: "Neon Brush",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Brush, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${tool === 'eraser' ? 'active' : ''}`,
                        onClick: ()=>setTool('eraser'),
                        title: "Void Eraser",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Eraser, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${tool === 'rect' ? 'active' : ''}`,
                        onClick: ()=>setTool('rect'),
                        title: "Rectangle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Square, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${tool === 'circle' ? 'active' : ''}`,
                        onClick: ()=>setTool('circle'),
                        title: "Circle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Circle, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${tool === 'triangle' ? 'active' : ''}`,
                        onClick: ()=>setTool('triangle'),
                        title: "Triangle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Triangle, {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "size-control",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setBrushSize((s)=>Math.max(1, s - 2)),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Minus, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Paint.jsx",
                                    lineNumber: 210,
                                    columnNumber: 75
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Paint.jsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "size-display",
                                children: brushSize
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Paint.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setBrushSize((s)=>Math.min(50, s + 2)),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plus, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/apps/Paint.jsx",
                                    lineNumber: 212,
                                    columnNumber: 76
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Paint.jsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${neonMode ? 'active-neon' : ''}`,
                        onClick: ()=>setNeonMode(!neonMode),
                        title: "Toggle Neon Power",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Zap, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `paint-btn ${showGrid ? 'active' : ''}`,
                        onClick: ()=>setShowGrid(!showGrid),
                        title: "Toggle Grid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "paint-btn danger",
                        onClick: clearCanvas,
                        title: "Nuke Canvas",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trash2, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "paint-btn success",
                        onClick: downloadArt,
                        title: "Save Art",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Download, {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Paint.jsx",
                lineNumber: 163,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "canvas-wrapper",
                children: [
                    showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cyber-grid-overlay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 248,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        onMouseDown: startDrawing,
                        onMouseMove: draw,
                        onMouseUp: stopDrawing,
                        onMouseLeave: stopDrawing,
                        className: "cyber-canvas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Paint.jsx",
                lineNumber: 247,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "paint-palette",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "palette-label",
                        children: "PIGMENTS:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "color-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "color",
                            value: color,
                            onChange: (e)=>setColor(e.target.value),
                            className: "color-picker-input"
                        }, void 0, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Paint.jsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        '#00f3ff',
                        '#ff00ff',
                        '#ffe600',
                        '#00ff00',
                        '#ff0055',
                        '#ffffff'
                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `color-swatch ${color === c ? 'selected' : ''}`,
                            style: {
                                backgroundColor: c,
                                boxShadow: color === c ? `0 0 15px ${c}` : 'none'
                            },
                            onClick: ()=>{
                                setColor(c);
                                setTool('brush');
                            }
                        }, c, false, {
                            fileName: "[project]/src/components/apps/Paint.jsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Paint.jsx",
                lineNumber: 260,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/Paint.jsx",
        lineNumber: 160,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Paint, "0TxjVnz0vMrtkadROUxYNZsvhOs=");
_c = Paint;
const __TURBOPACK__default__export__ = Paint;
var _c;
__turbopack_context__.k.register(_c, "Paint");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/Settings.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/OSContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Settings = ()=>{
    _s();
    const { osMode, setOsMode, theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const themes = [
        {
            id: 'cyan',
            color: '#00f3ff',
            name: 'NEON_CYAN'
        },
        {
            id: 'pink',
            color: '#ff00ff',
            name: 'BITCHIN_PINK'
        },
        {
            id: 'yellow',
            color: '#ffe600',
            name: 'SAMURAI_GOLD'
        },
        {
            id: 'green',
            color: '#00ff00',
            name: 'TOXIC_WASTE'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "settings-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-item active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Monitor, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 23,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SYSTEM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 23,
                                columnNumber: 67
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Palette, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 24,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "PERSONALIZATION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 24,
                                columnNumber: 60
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldAlert, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 25,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SECURITY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 25,
                                columnNumber: 64
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cpu, {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 26,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "HARDWARE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 26,
                                columnNumber: 56
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Settings.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "glitch-text",
                        "data-text": "SYSTEM_CONFIG_V.2077",
                        children: "SYSTEM_CONFIG_V.2077"
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "settings-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Palette, {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " NEURAL_INTERFACE_THEME"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "theme-grid",
                                children: themes.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `theme-card ${theme === t.id ? 'active' : ''}`,
                                        onClick: ()=>setTheme(t.id),
                                        style: {
                                            '--theme-color': t.color
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "color-strip",
                                                style: {
                                                    background: t.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "settings-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Zap, {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " SYSTEM_PERFORMANCE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "setting-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "setting-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "OVERCLOCK_CPU"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Maximize neural processing (High Battery Drain)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "cyber-switch",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                defaultChecked: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "slider"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "setting-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "setting-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "GLITCH_OVERLAY"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Add aesthetic visual interference"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "cyber-switch",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                defaultChecked: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "slider"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "settings-section danger-zone",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    color: '#ff0055'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skull, {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 76,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " CYBER_PSYCHOSIS_ZONE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "setting-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "setting-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#ff0055'
                                                },
                                                children: "CHAOS_MODE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Break reality. Warning: System may become unstable."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/Settings.jsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `chaos-btn ${osMode === 'chaos' ? 'active' : ''}`,
                                        onClick: ()=>setOsMode(osMode === 'chaos' ? 'normal' : 'chaos'),
                                        children: osMode === 'chaos' ? 'TERMINATE_CHAOS' : 'INITIATE_CHAOS'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "system-specs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spec-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "OS_STATUS:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 92,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "val",
                                        children: "OPTIMIZED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 92,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spec-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "RAM_USAGE:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 93,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "val",
                                        children: "42% / 128GB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 93,
                                        columnNumber: 62
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spec-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "UPTIME:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 94,
                                        columnNumber: 38
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "val",
                                        children: "77:21:04"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/Settings.jsx",
                                        lineNumber: 94,
                                        columnNumber: 59
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/Settings.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/Settings.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/Settings.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/Settings.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Settings, "xRq7MFIempafhfJp+RZwlwVUZBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = Settings;
const __TURBOPACK__default__export__ = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/appRegistry.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appRegistry",
    ()=>appRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/apps/appRegistry.js
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$FileExplorer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/FileExplorer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Chrome$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Chrome.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MyProjects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/MyProjects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Calculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Calculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$PdfViewer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/PdfViewer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Notepad$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Notepad.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Terminal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Terminal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$WindowsMediaPlayer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/WindowsMediaPlayer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Paint$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Paint.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Settings.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const appRegistry = {
    explorer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$FileExplorer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 17,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    chrome: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Chrome$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 18,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    notepad: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Notepad$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 19,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    paint: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Paint$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 20,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    "media-player": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$WindowsMediaPlayer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 21,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    terminal: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Terminal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 22,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    calculator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Calculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 23,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    // projects aur resume special cases hain, inko handle karenge
    projects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MyProjects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    resume: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$PdfViewer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fileUrl: "/resume.pdf",
        fileName: "My Resume.pdf"
    }, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 26,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/apps/appRegistry.js",
        lineNumber: 27,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
// App registry ko yahan bhi import karo
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$appRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/appRegistry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MyProjects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/MyProjects.jsx [app-client] (ecmascript)"); // MyProjects ko alag se import karo
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// src/context/OSContext.js (FULL UPDATED CODE)
"use client";
;
;
;
const OSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const OSProvider = ({ children })=>{
    _s();
    // --- HYDRATION GUARD ---
    // Ye state ensure karega ki client-side logic run hone ke baad hi content render ho.
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("boot");
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [osMode, setOsMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("normal");
    const [windows, setWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeWindowId, setActiveWindowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- PERSISTENCE LOGIC START ---
    // 1. Load state from sessionStorage on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OSProvider.useEffect": ()=>{
            try {
                const savedPhase = sessionStorage.getItem("os_phase");
                const savedWindows = sessionStorage.getItem("os_windows");
                if (savedPhase) {
                    setPhase(savedPhase);
                }
                if (savedWindows) {
                    const parsedWindows = JSON.parse(savedWindows);
                    // REHYDRATE: Ab hum saved data se wapas component banayenge
                    const rehydratedWindows = parsedWindows.map({
                        "OSProvider.useEffect.rehydratedWindows": (win)=>{
                            let componentToRender = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$appRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appRegistry"][win.id];
                            // 'MyProjects' ke liye special handling, kyunki use prop chahiye
                            if (win.id === 'projects') {
                                // Abhi ke liye dummy function, isko Desktop se handle karna padega
                                const dummyDiveIn = {
                                    "OSProvider.useEffect.rehydratedWindows.dummyDiveIn": ()=>console.log("Dive-in needs to be connected")
                                }["OSProvider.useEffect.rehydratedWindows.dummyDiveIn"];
                                componentToRender = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MyProjects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onProjectClick: dummyDiveIn
                                }, void 0, false, {
                                    fileName: "[project]/src/context/OSContext.js",
                                    lineNumber: 46,
                                    columnNumber: 34
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            return {
                                ...win,
                                component: componentToRender
                            };
                        }
                    }["OSProvider.useEffect.rehydratedWindows"]);
                    setWindows(rehydratedWindows);
                }
            } catch (error) {
                console.error("Failed to load state from sessionStorage:", error);
            }
            // Sab kuch load hone ke baad, content ko render karne ki permission do
            setIsLoaded(true);
        }
    }["OSProvider.useEffect"], []); // Sirf ek baar page load par chalega
    // 2. Save state to sessionStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OSProvider.useEffect": ()=>{
            // isLoaded check zaroori hai taaki initial render par default state save na ho jaye
            if (isLoaded) {
                sessionStorage.setItem("os_phase", phase);
                // SERIALIZE: Component ko save karne se pehle hata do
                const serializableWindows = windows.map({
                    "OSProvider.useEffect.serializableWindows": ({ component, ...rest })=>rest
                }["OSProvider.useEffect.serializableWindows"]);
                sessionStorage.setItem("os_windows", JSON.stringify(serializableWindows));
            }
        }
    }["OSProvider.useEffect"], [
        phase,
        windows,
        isLoaded
    ]);
    // --- PERSISTENCE LOGIC END ---
    // --- EXISTING LOGIC (Unchanged) ---
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
            // Agar pehle se windows khuli hain, to unhe clear kar do ek fresh start ke liye
            // Agar tum chahte ho ki login ke baad bhi windows open rahe, to is line ko comment kar do
            setWindows([]);
        }
    };
    const offsetCounterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const OFFSET_STEP = 30;
    const MAX_OFFSET_WINDOWS = 6;
    const openApp = (id, title, icon, component)=>{
        const existingWindow = windows.find((w)=>w.id === id);
        if (existingWindow) {
            if (existingWindow.isMinimized) {
                toggleMinimize(id);
            } else {
                focusWindow(id);
            }
            return;
        }
        const offsetIndex = offsetCounterRef.current;
        const newWindow = {
            id,
            title,
            icon,
            component,
            isMinimized: false,
            isMaximized: false,
            zIndex: getNextZIndex(),
            initialPosition: {
                x: 100 + offsetIndex * OFFSET_STEP,
                y: 50 + offsetIndex * OFFSET_STEP
            }
        };
        offsetCounterRef.current++;
        if (offsetCounterRef.current > MAX_OFFSET_WINDOWS) {
            offsetCounterRef.current = 0;
        }
        setWindows((prev)=>[
                ...prev,
                newWindow
            ]);
        setActiveWindowId(id);
    };
    const closeWindow = (id)=>{
        setWindows((prev)=>prev.filter((w)=>w.id !== id));
        if (activeWindowId === id) setActiveWindowId(null);
    };
    const focusWindow = (id)=>{
        setActiveWindowId(id);
        setWindows((prev)=>prev.map((w)=>w.id === id ? {
                    ...w,
                    zIndex: getNextZIndex()
                } : w));
    };
    const toggleMinimize = (id)=>{
        setWindows((prev)=>prev.map((w)=>{
                if (w.id === id) {
                    const newMinState = !w.isMinimized;
                    if (!newMinState) setActiveWindowId(id);
                    else if (activeWindowId === id) setActiveWindowId(null);
                    return {
                        ...w,
                        isMinimized: newMinState,
                        zIndex: newMinState ? 0 : getNextZIndex()
                    };
                }
                return w;
            }));
    };
    const toggleMaximize = (id)=>{
        setWindows((prev)=>prev.map((w)=>w.id === id ? {
                    ...w,
                    isMaximized: !w.isMaximized
                } : w));
        focusWindow(id);
    };
    const getNextZIndex = ()=>{
        if (windows.length === 0) return 100;
        const highest = Math.max(...windows.map((w)=>w.zIndex || 100));
        return highest + 1;
    };
    // Provider ki value
    const value = {
        phase,
        setPhase,
        isMobile,
        handleLogin,
        osMode,
        setOsMode,
        windows,
        activeWindowId,
        openApp,
        closeWindow,
        focusWindow,
        toggleMinimize,
        toggleMaximize
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OSContext.Provider, {
        value: value,
        children: isLoaded ? children : null
    }, void 0, false, {
        fileName: "[project]/src/context/OSContext.js",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OSProvider, "vuV9kWtzoaEyaeZh1E4A12H0jkU=");
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
const Taskbar = ({ onStartClick, onExplorerClick, onChromeClick, onNotepadClick, onPaintClick, onSettingsClick })=>{
    _s();
    const { osMode, windows, activeWindowId, focusWindow, toggleMinimize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [chaosStyle, setChaosStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Clock Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Taskbar.useEffect": ()=>{
            // Hydration mismatch fix: set time only after mount
            setTime(new Date());
            const timer = setInterval({
                "Taskbar.useEffect.timer": ()=>setTime(new Date())
            }["Taskbar.useEffect.timer"], 1000);
            return ({
                "Taskbar.useEffect": ()=>clearInterval(timer)
            })["Taskbar.useEffect"];
        }
    }["Taskbar.useEffect"], []);
    // Chaos Mode Logic
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
    // --- HELPER FUNCTIONS ---
    // Check if a static app (launcher) is currently open in windows list
    const isAppOpen = (id)=>windows.some((w)=>w.id === id);
    // Check if a specific window is the active (focused) one
    const isWindowActive = (windowId)=>{
        return activeWindowId === windowId && !windows.find((w)=>w.id === windowId)?.isMinimized;
    };
    // Handle click for static launchers (opens new if not present, toggles if present)
    // Note: simplified logic here since specific app opening is handled by parent or context mostly
    // but for the taskbar interaction we stick to standard behavior.
    const handleLauncherClick = (id, openCallback)=>{
        // Find if an instance of this app is already open. 
        // This logic assumes 1 instance per app id for simplicity in this specific taskbar section,
        // though your OSContext might support multiple.
        const openWindow = windows.find((w)=>w.id === id);
        if (openWindow) {
            handleWindowClick(openWindow.id);
        } else {
            openCallback && openCallback();
        }
    };
    // Handle click for running app icons
    const handleWindowClick = (windowId)=>{
        const win = windows.find((w)=>w.id === windowId);
        if (!win) return;
        if (activeWindowId === windowId && !win.isMinimized) {
            // If active and open, minimize it
            toggleMinimize(windowId);
        } else {
            // If minimized or background, bring to front
            if (win.isMinimized) toggleMinimize(windowId);
            focusWindow(windowId);
        }
    };
    // Filter out windows that correspond to static launchers so we don't double render them 
    // if you want them merged. 
    // HOWEVER, standard Windows behavior: Pinned apps stay, running apps appear next to them.
    // For this "Stack", let's keep Launchers fixed and render OTHER running apps after them.
    // Or simply render ALL running apps dynamically if you prefer a pure dock style.
    // Let's stick to your structure: Static Launchers -> Dynamic Apps.
    const staticAppIds = [
        "explorer",
        "chrome",
        "notepad",
        "paint",
        "settings"
    ];
    const dynamicWindows = windows.filter((w)=>!staticAppIds.includes(w.id));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "taskbar",
        style: chaosStyle,
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "taskbar-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tb-icon",
                        title: "Start",
                        onClick: onStartClick,
                        style: {
                            marginRight: '10px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/windows-11.png",
                            alt: "Start"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 93,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 92,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tb-icon ${isAppOpen("explorer") ? "open" : ""} ${isWindowActive("explorer") ? "active" : ""}`,
                        title: "File Explorer",
                        onClick: ()=>handleLauncherClick("explorer", onExplorerClick),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/folder-invoices--v1.png",
                            alt: "Explorer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tb-icon ${isAppOpen("chrome") ? "open" : ""} ${isWindowActive("chrome") ? "active" : ""}`,
                        title: "Google Chrome",
                        onClick: ()=>handleLauncherClick("chrome", onChromeClick),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/color/48/chrome--v1.png",
                            alt: "Chrome"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tb-icon ${isAppOpen("notepad") ? "open" : ""} ${isWindowActive("notepad") ? "active" : ""}`,
                        title: "CyberPad",
                        onClick: ()=>handleLauncherClick("notepad", onNotepadClick),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/code-file.png",
                            alt: "Notepad"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tb-icon ${isAppOpen("paint") ? "open" : ""} ${isWindowActive("paint") ? "active" : ""}`,
                        title: "Paint",
                        onClick: ()=>handleLauncherClick("paint", onPaintClick),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/fluency/48/paint-palette.png",
                            alt: "Paint"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    dynamicWindows.map((win)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `tb-icon open ${isWindowActive(win.id) ? "active" : ""}`,
                            title: win.title,
                            onClick: ()=>handleWindowClick(win.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: win.icon || "https://img.icons8.com/fluency/48/application-window.png",
                                alt: win.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, win.id, false, {
                            fileName: "[project]/src/components/desktop/Taskbar.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                lineNumber: 90,
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
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tray-icon",
                        children: "📶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tray-icon",
                        children: "🔊"
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 152,
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
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: time.toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desktop/Taskbar.jsx",
                        lineNumber: 154,
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
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/Taskbar.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desktop/Taskbar.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Taskbar, "Ejx0oTg/kh18wu+QlOy6FMqvc54=", false, function() {
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
"[project]/src/components/desktop/StartMenu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const StartMenu = ({ isOpen, apps = [], onClose })=>{
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Search Logic: Apps ko filter karne ke liye
    const filteredApps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StartMenu.useMemo[filteredApps]": ()=>{
            if (!searchTerm) return apps;
            return apps.filter({
                "StartMenu.useMemo[filteredApps]": (app)=>app.name.toLowerCase().includes(searchTerm.toLowerCase())
            }["StartMenu.useMemo[filteredApps]"]);
        }
    }["StartMenu.useMemo[filteredApps]"], [
        apps,
        searchTerm
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "start-menu-container",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "start-search-box",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search for apps, settings, and documents",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value),
                    autoFocus: true
                }, void 0, false, {
                    fileName: "[project]/src/components/desktop/StartMenu.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "start-pinned-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: searchTerm ? "Search Results" : "Pinned"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                children: "All apps >"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "apps-grid",
                        children: filteredApps.length > 0 ? filteredApps.map((app, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "app-item",
                                onClick: ()=>{
                                    app.action(); // App open handler
                                    onClose(); // Start menu band karne ke liye
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: app.icon,
                                        alt: app.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: app.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, app.id || index, true, {
                                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: "#888",
                                padding: "20px",
                                fontSize: "12px"
                            },
                            children: "No apps found."
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/StartMenu.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "start-recommended-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Recommended"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/StartMenu.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rec-item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "12px",
                                color: "#ccc"
                            },
                            children: "No recent files"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/StartMenu.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "start-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-profile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://i.postimg.cc/cLbyKrVB/image.png",
                                alt: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Abhay Kumar Jha"
                            }, void 0, false, {
                                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "power-btn",
                        onClick: ()=>window.location.reload(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://img.icons8.com/ios-glyphs/30/ffffff/shutdown.png",
                            alt: "Power"
                        }, void 0, false, {
                            fileName: "[project]/src/components/desktop/StartMenu.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/StartMenu.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/StartMenu.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desktop/StartMenu.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StartMenu, "Obf6lw0hq/PwH5HP+HIWBRB5JIw=");
_c = StartMenu;
const __TURBOPACK__default__export__ = StartMenu;
var _c;
__turbopack_context__.k.register(_c, "StartMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/windows/WindowFrame.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
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
;
const WindowFrame = ({ windowData })=>{
    _s();
    const { closeWindow, toggleMinimize, toggleMaximize, focusWindow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const { id, title, icon, component, isMinimized, isMaximized, zIndex } = windowData;
    // Window State
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(windowData.initialPosition || {
        x: 100,
        y: 50
    });
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 800,
        height: 500
    });
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragOffset, setDragOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Refs
    const windowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- DRAGGING LOGIC ---
    const handleMouseDown = (e)=>{
        if (isMaximized) return;
        focusWindow(id);
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };
    // --- DRAGGING LOGIC ---
    // ... handleMouseDown same rahega ...
    // --- DRAGGING LOGIC ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowFrame.useEffect": ()=>{
            const handleMouseMove = {
                "WindowFrame.useEffect.handleMouseMove": (e)=>{
                    if (isDragging) {
                        let newX = e.clientX - dragOffset.x;
                        let newY = e.clientY - dragOffset.y;
                        const screenWidth = window.innerWidth;
                        const screenHeight = window.innerHeight;
                        // Safety Buffer: Kam se kam itna pixel header dikhna chahiye
                        const headerSafety = 70;
                        // 1. Horizontal (Left/Right)
                        // Window ko left/right mein aadha bahar jaane do, par pura nahi (mouse cursor logic)
                        // Ye ensure karega ki aap window ko side se pakad ke wapas la sako
                        if (newX + size.width < headerSafety) newX = -size.width + headerSafety; // Left limit
                        if (newX > screenWidth - headerSafety) newX = screenWidth - headerSafety; // Right limit
                        // 2. Vertical (Top/Bottom) - YE AAPKA MAIN FIX HAI
                        // TOP: Upar se bahar na jaye (Title bar upar chipak jaye)
                        if (newY < 0) newY = 0;
                        // BOTTOM: Window neeche ja sakti hai, lekin HEADER ka top hissa
                        // screen ke bilkul end tak hi ja sakta hai minus 40px.
                        // Isse content chup jayega par Title bar dikhega.
                        if (newY > screenHeight - headerSafety) {
                            newY = screenHeight - headerSafety;
                        }
                        setPosition({
                            x: newX,
                            y: newY
                        });
                    }
                }
            }["WindowFrame.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "WindowFrame.useEffect.handleMouseUp": ()=>setIsDragging(false)
            }["WindowFrame.useEffect.handleMouseUp"];
            if (isDragging) {
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
            }
            return ({
                "WindowFrame.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                }
            })["WindowFrame.useEffect"];
        }
    }["WindowFrame.useEffect"], [
        isDragging,
        dragOffset,
        size
    ]);
    // --- RESIZING LOGIC (Native implementation) ---
    const handleResizeMouseDown = (e, direction)=>{
        e.stopPropagation();
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = size.width;
        const startHeight = size.height;
        const startPos = {
            ...position
        };
        const onMouseMove = (moveEvent)=>{
            let newWidth = startWidth;
            let newHeight = startHeight;
            let newX = startPos.x;
            let newY = startPos.y;
            if (direction.includes("right")) newWidth = startWidth + (moveEvent.clientX - startX);
            if (direction.includes("bottom")) newHeight = startHeight + (moveEvent.clientY - startY);
            if (direction.includes("left")) {
                const delta = moveEvent.clientX - startX;
                newWidth = startWidth - delta;
                newX = startPos.x + delta;
            }
            if (direction.includes("top")) {
                const delta = moveEvent.clientY - startY;
                newHeight = startHeight - delta;
                newY = startPos.y + delta;
            }
            // Minimum constraints
            if (newWidth > 300) {
                setSize((prev)=>({
                        ...prev,
                        width: newWidth
                    }));
                if (direction.includes("left")) setPosition((prev)=>({
                        ...prev,
                        x: newX
                    }));
            }
            if (newHeight > 200) {
                setSize((prev)=>({
                        ...prev,
                        height: newHeight
                    }));
                if (direction.includes("top")) setPosition((prev)=>({
                        ...prev,
                        y: newY
                    }));
            }
        };
        const onMouseUp = ()=>{
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };
    // Styles dynamically calculate
    const currentStyle = {
        display: isMinimized ? "none" : "flex",
        zIndex: zIndex,
        position: "absolute",
        width: isMaximized ? "100vw" : `${size.width}px`,
        height: isMaximized ? "calc(100vh - 40px)" : `${size.height}px`,
        top: isMaximized ? 0 : `${position.y}px`,
        left: isMaximized ? 0 : `${position.x}px`,
        transition: isDragging ? "none" : "width 0.2s, height 0.2s, top 0.2s, left 0.2s"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: windowRef,
        className: "os-window-frame",
        style: currentStyle,
        onMouseDown: ()=>focusWindow(id),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-header",
                onMouseDown: handleMouseDown,
                onDoubleClick: ()=>toggleMaximize(id),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "title-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: icon,
                                alt: "icon",
                                width: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "controls-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    toggleMinimize(id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Minus, {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                    lineNumber: 168,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                lineNumber: 167,
                                columnNumber: 3
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    toggleMaximize(id);
                                },
                                children: isMaximized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Copy, {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                    lineNumber: 172,
                                    columnNumber: 20
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Square, {
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                    lineNumber: 172,
                                    columnNumber: 40
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                lineNumber: 171,
                                columnNumber: 3
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "close-btn",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    closeWindow(id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                    lineNumber: 176,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                                lineNumber: 175,
                                columnNumber: 3
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "window-content",
                children: component
            }, void 0, false, {
                fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isMaximized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-right",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "right")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-bottom",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "bottom")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-br",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "bottom-right")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-left",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "left")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-top",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "top")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-bl",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "bottom-left")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-tr",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "top-right")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resizer r-tl",
                        onMouseDown: (e)=>handleResizeMouseDown(e, "top-left")
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/windows/WindowFrame.jsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WindowFrame, "LgygvuhZLxnJ7958Ylzmf1O9F24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"]
    ];
});
_c = WindowFrame;
const __TURBOPACK__default__export__ = WindowFrame;
var _c;
__turbopack_context__.k.register(_c, "WindowFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/apps/ProjectDive.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/abhay-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ProjectDive = ({ project, onClose })=>{
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVideo, setShowVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Video Mode State
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDive.useEffect": ()=>{
            if (project) {
                setIsLoaded(true);
                setShowVideo(false); // Reset video state on new project
            }
        }
    }["ProjectDive.useEffect"], [
        project
    ]);
    if (!project) return null;
    const getTechIcon = (tech)=>{
        // ... same old icon logic ...
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Layers, {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/apps/ProjectDive.jsx",
            lineNumber: 20,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `project-dive-overlay ${isLoaded ? 'active' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cyber-grid-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanline-overlay"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vignette-layer"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-corner top-left"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-corner top-right"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-corner bottom-left"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-corner bottom-right"
            }, void 0, false, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "dive-close-btn",
                onClick: ()=>{
                    setIsLoaded(false);
                    setTimeout(onClose, 300);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " TERMINATE_SESSION"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dive-content-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dive-left-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "dive-title glitch-text",
                                "data-text": project.title,
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                lineNumber: 46,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `dive-media-frame ${showVideo ? 'video-mode' : ''}`,
                                children: [
                                    showVideo && project.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                src: project.video,
                                                title: "Project Demo",
                                                frameBorder: "0",
                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                allowFullScreen: true,
                                                className: "project-video-frame"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "scanning-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: project.image,
                                                alt: "Project Preview",
                                                className: "dive-image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "image-overlay-scan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 69,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "system-status",
                                                children: "SYSTEM STATUS: ONLINE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "frame-corner c-tl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 75,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "frame-corner c-br"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 76,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                lineNumber: 51,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dive-actions",
                                children: [
                                    project.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `cyber-btn video-btn ${showVideo ? 'active' : ''}`,
                                        onClick: ()=>setShowVideo(!showVideo),
                                        children: [
                                            showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonitorPlay, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 87,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Play, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 87,
                                                columnNumber: 62
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showVideo ? "STOP_FEED" : "WATCH_DEMO_FEED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.github,
                                        target: "_blank",
                                        className: "cyber-btn github",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Github, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " SOURCE_CODE"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.link,
                                        target: "_blank",
                                        className: "cyber-btn live",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " DEPLOYMENT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                lineNumber: 80,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dive-right-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dive-section terminal-desc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "section-header",
                                        children: " DECRYPTING_DESCRIPTION..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "typing-effect",
                                        children: project.longDescription
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dive-section holo-features",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "section-header",
                                        children: " MODULES_LOADED:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 112,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: project.features?.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: {
                                                    animationDelay: `${i * 0.1}s`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hex-bullet",
                                                        children: "⬢"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    feature
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 113,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dive-section tech-orbit-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "section-header",
                                        children: " TECH_STACK_ANALYSIS:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 123,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tech-grid",
                                        children: project.techStack.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tech-node",
                                                style: {
                                                    animationDelay: `${i * 0.05}s`
                                                },
                                                children: [
                                                    getTechIcon(tech),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tech
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                        lineNumber: 124,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/apps/ProjectDive.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/apps/ProjectDive.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/apps/ProjectDive.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectDive, "1+tAsV5gYOePRR9reU0IOWSSNVQ=");
_c = ProjectDive;
const __TURBOPACK__default__export__ = ProjectDive;
var _c;
__turbopack_context__.k.register(_c, "ProjectDive");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$StartMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/desktop/StartMenu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$windows$2f$WindowFrame$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/windows/WindowFrame.jsx [app-client] (ecmascript)");
// --- Apps Imports ---
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$FileExplorer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/FileExplorer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Chrome$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Chrome.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MyProjects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/MyProjects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Calculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Calculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$PdfViewer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/PdfViewer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Notepad$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Notepad.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Terminal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Terminal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$WindowsMediaPlayer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/WindowsMediaPlayer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Paint$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Paint.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/Settings.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$appRegistry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/appRegistry.js [app-client] (ecmascript)");
// --- Deep Dive Components ---
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$ProjectDive$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/apps/ProjectDive.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projectList.js [app-client] (ecmascript)"); // Data for dive
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Desktop = ()=>{
    _s();
    const { osMode, windows, openApp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$OSContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOS"])();
    const [bgStyle, setBgStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [startMenuOpen, setStartMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- STATE FOR DEEP DIVE OVERLAY ---
    const [activeProjectDive, setActiveProjectDive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- HANDLERS FOR DEEP DIVE ---
    // Ye function MyProjects ko pass hoga
    const handleDiveIn = (projectId)=>{
        const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projectList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectData"].find((p)=>p.id === projectId);
        setActiveProjectDive(project);
    };
    const handleOpenPaint = ()=>{
        openApp("paint", "CyberPaint Studio", "https://img.icons8.com/fluency/48/paint-palette.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Paint$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 900,
            height: 700
        } // <--- Size thoda bada rakha hai
        );
    };
    const handleCloseDive = ()=>{
        setActiveProjectDive(null);
    };
    // --- APP OPEN HANDLERS ---
    const handleOpenNotepad = ()=>{
        openApp("notepad", "CyberPad", "https://img.icons8.com/fluency/48/code-file.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Notepad$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 600,
            height: 450
        });
    };
    const handleOpenMediaPlayer = ()=>{
        openApp("media-player", "Windows Media Player", "https://img.icons8.com/fluency/48/windows-media-player.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$WindowsMediaPlayer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 700,
            height: 500
        } // Thoda wide size
        );
    };
    const handleOpenExplorer = ()=>{
        openApp("explorer", "File Explorer", "https://img.icons8.com/fluency/48/folder-invoices--v1.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$FileExplorer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)));
    };
    const handleOpenChrome = ()=>{
        openApp("chrome", "Google Chrome", "https://img.icons8.com/color/48/chrome--v1.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Chrome$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 92,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)));
    };
    // UPDATED: Pass handleDiveIn to MyProjects
    const handleOpenProjects = ()=>{
        openApp("projects", "My Projects", "https://img.icons8.com/color/48/project-setup.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$MyProjects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onProjectClick: handleDiveIn
        }, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 102,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)));
    };
    const handleOpenTerminal = ()=>{
        openApp("terminal", "Terminal", "https://img.icons8.com/color/48/console.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Terminal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 111,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 600,
            height: 400
        });
    };
    const handleOpenCalculator = ()=>{
        openApp("calculator", "Calculator", "https://img.icons8.com/fluency/48/calculator.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Calculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 121,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 350,
            height: 520
        });
    };
    const handleOpenSettings = ()=>{
        openApp("settings", "System Settings", "https://img.icons8.com/fluency/48/settings.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$Settings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 130,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 850,
            height: 600
        });
    };
    const handleOpenResume = ()=>{
        openApp("resume", "My Resume.pdf", "https://img.icons8.com/color/48/pdf-2--v1.png", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$PdfViewer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            fileUrl: "/resume.pdf",
            fileName: "My Resume.pdf"
        }, void 0, false, {
            fileName: "[project]/src/components/desktop/Desktop.jsx",
            lineNumber: 140,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)), {
            width: 800,
            height: 650
        });
    };
    // Toggle Start Menu
    const toggleStartMenu = (e)=>{
        if (e) e.stopPropagation();
        setStartMenuOpen(!startMenuOpen);
    };
    // Close menus on Desktop Click
    const handleDesktopClick = ()=>{
        if (startMenuOpen) setStartMenuOpen(false);
    };
    const allApps = [
        {
            id: "explorer",
            name: "File Explorer",
            icon: "https://img.icons8.com/fluency/48/folder-invoices--v1.png",
            action: handleOpenExplorer
        },
        {
            id: "chrome",
            name: "Google Chrome",
            icon: "https://img.icons8.com/color/48/chrome--v1.png",
            action: handleOpenChrome
        },
        {
            id: "notepad",
            name: "CyberPad",
            icon: "https://img.icons8.com/fluency/48/code-file.png",
            action: handleOpenNotepad
        },
        {
            id: "paint",
            name: "CyberPaint Studio",
            icon: "https://img.icons8.com/fluency/48/paint-palette.png",
            action: handleOpenPaint
        },
        {
            id: "media",
            name: "Media Player",
            icon: "https://img.icons8.com/fluency/48/video-playlist.png",
            action: handleOpenMediaPlayer
        },
        {
            id: "terminal",
            name: "Terminal",
            icon: "https://img.icons8.com/color/48/console.png",
            action: handleOpenTerminal
        },
        {
            id: "calculator",
            name: "Calculator",
            icon: "https://img.icons8.com/fluency/48/calculator.png",
            action: handleOpenCalculator
        },
        {
            id: "projects",
            name: "My Projects",
            icon: "https://img.icons8.com/color/48/project-setup.png",
            action: handleOpenProjects
        },
        {
            id: "resume",
            name: "My Resume",
            icon: "https://img.icons8.com/color/48/pdf-2--v1.png",
            action: handleOpenResume
        },
        {
            id: "settings",
            name: "Settings",
            icon: "https://img.icons8.com/fluency/48/settings.png",
            action: handleOpenSettings
        }
    ];
    // Chaos Mode Effect
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
        onClick: handleDesktopClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$apps$2f$ProjectDive$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                project: activeProjectDive,
                onClose: handleCloseDive
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wallpaper-layer",
                style: {
                    backgroundImage: "url('/wallpaper.jpg')",
                    ...bgStyle
                }
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-text-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "hero-name",
                    children: "Abhay Kumar Jha"
                }, void 0, false, {
                    fileName: "[project]/src/components/desktop/Desktop.jsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 201,
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
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "My Projects",
                        iconSrc: "https://img.icons8.com/color/48/project-setup.png",
                        onClick: handleOpenProjects
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "My Resume",
                        iconSrc: "https://img.icons8.com/color/48/pdf-2--v1.png",
                        onClick: handleOpenResume
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Browser",
                        iconSrc: "https://img.icons8.com/color/48/chrome--v1.png",
                        onClick: handleOpenChrome
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Terminal",
                        iconSrc: "https://img.icons8.com/color/48/console.png",
                        onClick: handleOpenTerminal
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Calculator",
                        iconSrc: "https://img.icons8.com/fluency/48/calculator.png",
                        onClick: handleOpenCalculator
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$DesktopIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Media Player",
                        iconSrc: "https://img.icons8.com/fluency/48/windows-media-player.png",
                        onClick: handleOpenMediaPlayer
                    }, void 0, false, {
                        fileName: "[project]/src/components/desktop/Desktop.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 206,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            windows.map((win)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$windows$2f$WindowFrame$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    windowData: win,
                    children: win.component
                }, win.id, false, {
                    fileName: "[project]/src/components/desktop/Desktop.jsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$StartMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: startMenuOpen,
                apps: allApps,
                onClose: ()=>toggleStartMenu(false)
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 258,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$abhay$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$desktop$2f$Taskbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onStartClick: toggleStartMenu,
                onExplorerClick: handleOpenExplorer,
                onChromeClick: handleOpenChrome,
                onNotepadClick: handleOpenNotepad,
                onPaintClick: handleOpenPaint,
                onSettingsClick: handleOpenSettings
            }, void 0, false, {
                fileName: "[project]/src/components/desktop/Desktop.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/desktop/Desktop.jsx",
        lineNumber: 186,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Desktop, "lA+f1EKIY2gYw2Zl3TjN0AGAxMs=", false, function() {
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

//# sourceMappingURL=%5Bproject%5D_src_003da191._.js.map