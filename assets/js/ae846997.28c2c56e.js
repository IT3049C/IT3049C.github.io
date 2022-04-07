"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1538],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},267:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:6,title:"Part 5: Controller",sidebar_label:"Controller"},c=void 0,s={unversionedId:"labs/rps-in-react/controller",id:"labs/rps-in-react/controller",title:"Part 5: Controller",description:"* On the App component, add a state using useState with false as the initial value",source:"@site/docs/labs/rps-in-react/5.controller.md",sourceDirName:"labs/rps-in-react",slug:"/labs/rps-in-react/controller",permalink:"/docs/labs/rps-in-react/controller",editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/docs/labs/rps-in-react/5.controller.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Part 5: Controller",sidebar_label:"Controller"},sidebar:"labs",previous:{title:"Game Logic",permalink:"/docs/labs/rps-in-react/logic"},next:{title:"Finalize",permalink:"/docs/labs/rps-in-react/finalize"}},p=[],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the App component, add a state using ",(0,a.kt)("inlineCode",{parentName:"li"},"useState")," with false as the initial value"),(0,a.kt)("li",{parentName:"ul"},"use the conditional rendering to show the WelcomeView or the GameView")),(0,a.kt)("p",null,"New index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport './index.css';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\nimport 'bootstrap/dist/css/bootstrap.min.css';\n\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"on welcome Change button type to submit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pass handleGameStart Handler to welcome"))))}m.isMDXComponent=!0}}]);