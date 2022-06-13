"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3007],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4,title:"Part 3: Styling",sidebar_label:"Styling"},s=void 0,c={unversionedId:"labs/rps-in-react/styling",id:"labs/rps-in-react/styling",title:"Part 3: Styling",description:"For Styling we'll install the bootstrap library and implement some inline styles.",source:"@site/content/coursework/labs/8.rps-in-react/3.styling.md",sourceDirName:"labs/8.rps-in-react",slug:"/labs/rps-in-react/styling",permalink:"/coursework/labs/rps-in-react/styling",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/8.rps-in-react/3.styling.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652116840,formattedLastUpdatedAt:"5/9/2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Part 3: Styling",sidebar_label:"Styling"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For Styling we'll install the bootstrap library and implement some inline styles."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Bootstrap and React Bootstrap")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save bootstrap\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"import the ",(0,o.kt)("inlineCode",{parentName:"li"},"css")," stylessheets into the application.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.jsx"',title:'"App.jsx"'},"  import './App.css';\n  import GameView from './components/GameView';\n  import WelcomeView from './components/WelcomeView';\n+ import 'bootstrap/dist/css/bootstrap.min.css';\n...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Instead of the css stylesheet we had on the original code, we'll use inline styles.\nInstead of ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"#welcome-screen {\n  border: 1px solid black;\n}\n\n#game-screen {\n  border: 1px solid red;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="WelcomeView.jsx"',title:'"WelcomeView.jsx"'},'    <div id="welcome-screen" style={{border: `1px solid black`}}>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GameView.jsx"',title:'"GameView.jsx"'},'    <div id="game-screen" style={{border: `1px solid red`}}>\n')))}d.isMDXComponent=!0}}]);