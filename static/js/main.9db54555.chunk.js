(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,_,t){"use strict";var a=[];_.a={subscribe:function(e){return a.push(e),a.length-1},notify:function(e){a.forEach(function(_){return _(e)})}}},206:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_taraslevitskyi_projects_react_live_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(180),_Users_taraslevitskyi_projects_react_live_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(133),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(61),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_ConsoleService__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(179),Console=function Console(_ref){var logs=_ref.logs,code=_ref.code,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState2=Object(_Users_taraslevitskyi_projects_react_live_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),output=_useState2[0],setOutput=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState4=Object(_Users_taraslevitskyi_projects_react_live_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),liveReload=_useState4[0],setLiveReload=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){_ConsoleService__WEBPACK_IMPORTED_MODULE_3__.a.subscribe(setOutput)},[]);var onLiveReloadChange=function(){setOutput(null),setLiveReload(!liveReload)},runCode=function runCode(){console.logs=[];try{eval(code)}catch(error){console.log(error)}setOutput(Object(_Users_taraslevitskyi_projects_react_live_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(console.logs))},clearLogs=function(){setOutput(null),console.logs=[]},definedOutput=output;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"console-output"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"actions"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:runCode},"RUN"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:clearLogs},"CLEAR")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre",null,definedOutput&&definedOutput.map(function(e,_){var t=e.message,a=e.lineNumber,o=Object(_Users_taraslevitskyi_projects_react_live_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(t,1)[0],r=t.length>1?t:t[0],n=void 0===r?"undefined":JSON.stringify(r),s=o&&o.message?o.message:n;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("output",{className:"output",key:_},s,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{className:"sticky-text"},a&&"line:".concat(a)))})))};__webpack_exports__.a=Console},209:function(e,_,t){e.exports=t(343)},214:function(e,_,t){},215:function(e,_,t){},334:function(e,_){},343:function(e,_,t){"use strict";t.r(_);var a,o=t(61),r=t.n(o),n=t(204),s=t.n(n),c=(t(214),t(133)),l=(t(215),t(205)),u=t.n(l),i=function(e){var _=e.onChange,t=e.value,a=e.editorDidMount;return r.a.createElement(u.a,{width:"60%",language:"javascript",theme:"vs-dark",options:{selectOnLineNumbers:!0,automaticLayout:!0},onChange:_,value:t,editorDidMount:a})},d=t(206),E=t(207),p=t.n(E),m=t(208),O=t.n(m);var b=function(){var e=Object(o.useState)(""),_=Object(c.a)(e,2),t=_[0],n=_[1],s=Object(o.useState)(""),l=Object(c.a)(s,2),u=l[0],E=l[1];return O.a.debounce(function(){return n(console.logs)},700),r.a.createElement("div",{className:"app"},r.a.createElement(i,{value:u,onChange:function(e,_){a.emit("mess",e),E(e)},editorDidMount:function(e){(a=p.a.connect("https://live-editor.herokuapp.com/")).on("text",function(_){var t=e.saveViewState();E(_),e.restoreViewState(t)}),a.on("newUser",function(e){E(e)})}}),r.a.createElement(d.a,{code:u,logs:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=t(180),v=t(179);console.stdlog=console.log.bind(console),console.logs=[],console.log=function(){for(var e=(new Error).stack.split("<anonymous>")[1],_=e&&e.split(":")[1],t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];console.logs.push({lineNumber:_,message:a}),v.a.notify(Object(f.a)(console.logs))},s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[209,1,2]]]);
//# sourceMappingURL=main.9db54555.chunk.js.map