"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6660],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"WeMessage - Storage",sidebar_position:5},s=void 0,u={unversionedId:"labs/we-message-storage/index",id:"labs/we-message-storage/index",title:"WeMessage - Storage",description:"Overview",source:"@site/content/coursework/labs/5.we-message-storage/index.mdx",sourceDirName:"labs/5.we-message-storage",slug:"/labs/we-message-storage/",permalink:"/coursework/labs/we-message-storage/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/5.we-message-storage/index.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652116840,formattedLastUpdatedAt:"5/9/2022",sidebarPosition:5,frontMatter:{title:"WeMessage - Storage",sidebar_position:5}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Background",id:"background",level:2},{value:"Web Storage",id:"web-storage",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Output",id:"output",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This assignment covers concepts and techniques taught in the class so far:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using Git and GitHub"),(0,o.kt)("li",{parentName:"ul"},"using JavaScript, and manipulating the DOM using JavaScript,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AND using ",(0,o.kt)("inlineCode",{parentName:"strong"},"localStorage")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"sessionStorage")),".")),(0,o.kt)("p",null,"The culmination of that is an interactive messageing application."),(0,o.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a web application using HTML, CSS, and JavaScript."),(0,o.kt)("li",{parentName:"ol"},"Style the application using Bootstrap and CSS. "),(0,o.kt)("li",{parentName:"ol"},"Demonstrate ability to create and control HTML forms using form and input elements."),(0,o.kt)("li",{parentName:"ol"},"Demonstrate understanding of event-oriented programming."),(0,o.kt)("li",{parentName:"ol"},"Demonstrate the ability to send and receive HTTP requests from a server."),(0,o.kt)("li",{parentName:"ol"},"Demonstrate the ability to send ")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("h3",{id:"web-storage"},"Web Storage"),(0,o.kt)("h2",{id:"guidelines"},"Guidelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make a habbit of committing and pusing your code frequently to github."),(0,o.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,o.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,o.kt)("li",{parentName:"ul"},"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"The assignment instructions are split into the following pages to make it easier to follow."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"clone down your existing repository from last week's lab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For this lab, you need to create a functionality that:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Disable the message input until a name is provided and saved to the ",(0,o.kt)("inlineCode",{parentName:"li"},"localStorage"),"."),(0,o.kt)("li",{parentName:"ol"},"Have a button where users can choose to save their username."),(0,o.kt)("li",{parentName:"ol"},"Allow users to modify their saved name."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For 5 Extra Credit point, create a dark mode for the application."))),(0,o.kt)("h2",{id:"output"},"Output"))}d.isMDXComponent=!0}}]);