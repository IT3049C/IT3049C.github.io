"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8691],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=s,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?t.createElement(d,i(i({ref:n},p),{},{components:r})):t.createElement(d,i({ref:n},p))}));function f(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},972:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(7462),s=(r(7294),r(3905));const o={sidebar_position:5,title:"Part 4: Game Logic",sidebar_label:"Game Logic"},i=void 0,a={unversionedId:"labs/rps-in-react/logic",id:"labs/rps-in-react/logic",title:"Part 4: Game Logic",description:"For this part, we'll just import rock-paper-scissors.js as-is.",source:"@site/content/coursework/labs/8.rps-in-react/4.logic.md",sourceDirName:"labs/8.rps-in-react",slug:"/labs/rps-in-react/logic",permalink:"/coursework/labs/rps-in-react/logic",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/8.rps-in-react/4.logic.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652116840,formattedLastUpdatedAt:"May 9, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Part 4: Game Logic",sidebar_label:"Game Logic"}},c={},l=[],p={toc:l};function u(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"For this part, we'll just import ",(0,s.kt)("inlineCode",{parentName:"p"},"rock-paper-scissors.js")," as-is."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="rock-paper-scissors.js"',title:'"rock-paper-scissors.js"'},"export class RockPaperScissors {\n  constructor(username) {\n    console.log(username);\n    this.username = username;\n    this.score = {\n      user: 0,\n      cpu: 0,\n    };\n    this.gameHistoryLog = [];\n  }\n\n  /**\n   * RETURN: one of the following values (`rock`, `paper`, `scissors`)\n   * using Math.random() method, you should be able to get one of the following values\n   */\n  generateCPUResponse() {\n    const acceptedValues = [`rock`, `paper`, `scissors`];\n    const randomIndexNumber = Math.floor(Math.random() * 3);\n\n    return acceptedValues[randomIndexNumber];\n  }\n  /**\n   * returns one of the following values: `win`, `lose`, `tie`\n   * tie:\n   *     the user selection the same as the CPU\n   * win:\n   *    (user is `rock` and cpu is `scissors\n   *     OR\n   *    (user is `paper` and cpu is `rock`)\n   *     OR\n   *    (user is `scissors` and cpu is `paper`)\n   * `lose`:\n   *    the opposite case :)\n   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]\n   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]\n   */\n  determineWinner(userSelection, cpuSelection) {\n    if (userSelection === cpuSelection) {\n      return `tie`;\n    } else if (\n      (userSelection === `paper` && cpuSelection === `rock`) ||\n      (userSelection === `scissors` && cpuSelection === `paper`) ||\n      (userSelection === `rock` && cpuSelection === `scissors`)\n    ) {\n      return `win`;\n    } else {\n      return `lose`;\n    }\n  }\n\n  /**\n   *\n   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]\n   */\n  play(userSelection) {\n    console.log(userSelection);\n    const cpuSelection = this.generateCPUResponse();\n    const results = this.determineWinner(userSelection, cpuSelection);\n\n    if (results === `win`) {\n      this.score.user++;\n    }\n    if (results === `lose`) {\n      this.score.cpu++;\n    }\n\n    this.gameHistoryLog.push(\n      ` ${this.username} selected ${userSelection}. CPU selected ${cpuSelection}: ${this.username} ${results}s`\n    );\n  }\n}\n")))}u.isMDXComponent=!0}}]);