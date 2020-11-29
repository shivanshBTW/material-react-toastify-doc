(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return p}));var a=n(1),r=n(6),l=(n(0),n(145)),c={id:"css-transition",title:"cssTransition",sidebar_label:"cssTransition"},i={id:"api/css-transition",title:"cssTransition",description:"| Parameter        | Type                      | Required | Default | Description                                                                                                |\r",source:"@site/docs\\api\\css-transition.md",permalink:"/react-toastify/api/css-transition",editUrl:"https://github.com/shivanshBTW/material-react-toastify-doc/edit/master/docs/api/css-transition.md",sidebar_label:"cssTransition",sidebar:"someSidebar",previous:{title:"toast",permalink:"/react-toastify/api/toast"},next:{title:"collapseToast",permalink:"/react-toastify/api/collapse-toast"}},b=[{value:"Usage",id:"usage",children:[]}],o={rightToc:b};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enter"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The class name that will be used when the toast enter")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"exit"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The class name that will be used when the toast exit")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"duration"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number ","|"," ","[number,number]"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2718"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"750"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The transition duration in ms.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"appendPosition"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2718"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Append or not the position  to the class name: ",Object(l.b)("inlineCode",{parentName:"td"},"yourClassName--top-right"),", ",Object(l.b)("inlineCode",{parentName:"td"},"yourClassName--bottom-left"),"...")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"collapse"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2718"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Collapse toast after exit animation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"collapseDuration"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2718"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"300"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The collapse duration")))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { cssTransition } from 'material-react-toastify';\n\nconst Zoom = cssTransition({\n  enter: 'zoomIn',\n  exit: 'zoomOut',\n  duration: 750,\n  appendPosition: false,\n  collapse: true,\n  collapseDuration: 300\n});\n\nconst Zoom = cssTransition({\n  enter: 'zoomIn',\n  exit: 'zoomOut',\n  duration: [500, 600],\n  appendPosition: false\n});\n")))}p.isMDXComponent=!0},145:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=r.a.createContext({}),p=function(t){var e=r.a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i({},e,{},t)),n},s=function(t){var e=p(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,o=b(t,["components","mdxType","originalType","parentName"]),s=p(n),O=a,m=s["".concat(c,".").concat(O)]||s[O]||u[O]||l;return n?r.a.createElement(m,i({ref:e},o,{components:n})):r.a.createElement(m,i({ref:e},o))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,c=new Array(l);c[0]=O;var i={};for(var b in e)hasOwnProperty.call(e,b)&&(i[b]=e[b]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);