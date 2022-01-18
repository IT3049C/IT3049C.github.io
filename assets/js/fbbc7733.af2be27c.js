"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8443],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1620:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={sidebar_position:4,title:"Password Reveal"},l=void 0,c={unversionedId:"labs/js-and-dom-exercises/show-password-toggle",id:"labs/js-and-dom-exercises/show-password-toggle",title:"Password Reveal",description:"The marked file is the file you'll be using in the part of the assignment.",source:"@site/docs/labs/js-and-dom-exercises/3.show-password-toggle.md",sourceDirName:"labs/js-and-dom-exercises",slug:"/labs/js-and-dom-exercises/show-password-toggle",permalink:"/docs/labs/js-and-dom-exercises/show-password-toggle",editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/docs/labs/js-and-dom-exercises/3.show-password-toggle.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Password Reveal"},sidebar:"labs",previous:{title:"Array Exercises",permalink:"/docs/labs/js-and-dom-exercises/array-exercises"},next:{title:"Word Counter",permalink:"/docs/labs/js-and-dom-exercises/word-counter"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Automated Tests",id:"automated-tests",children:[],level:2},{value:"Instructions",id:"instructions",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The marked file is the file you'll be using in the part of the assignment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"  .\n  \u251c\u2500\u2500 exercises\n  \u2502   ..\n  \u2502   \u251c\u2500\u2500 password-reveal\n--\u2502   \u2502   \u251c\u2500\u2500 app.js  \u2b05\ufe0f\n--\u2502   \u2502   \u251c\u2500\u2500 index.html  \u2b05\ufe0f\n  \u2502   \u2502   \u2514\u2500\u2500 style.css\n  \u2502   \u2514\u2500\u2500 ..\n  ..\n")),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open the Password Reveal html file in your browser: ",(0,s.kt)("inlineCode",{parentName:"li"},"exercises/password-reveal/index.html")),(0,s.kt)("li",{parentName:"ol"},"You should see a login screen. (This is a mock screen - it's not connected to any service)",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"The password field has a toggle button (closed eye icon). When clicking the toggle, you should be able to see the input of the password field.")))),(0,s.kt)("h2",{id:"automated-tests"},"Automated Tests"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"To run this part's automated test, you'll need to run the following command to open up cypress. ",(0,s.kt)("inlineCode",{parentName:"li"},"npm run cypress:open")),(0,s.kt)("li",{parentName:"ol"},"You should be presented with multiple tests and checks, choose the ",(0,s.kt)("inlineCode",{parentName:"li"},"password-reveal")," one, and automated test should run (and fail) in the embedded browser. ",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"notice how every time you make a change to the web page or its associated files, the test will re-run.")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The goal in this assignment is to select the and manipulate the correct DOM elements to pass this automated test. ")),(0,s.kt)("h2",{id:"instructions"},"Instructions"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"check out ",(0,s.kt)("inlineCode",{parentName:"li"},"exercises/password-reveal/index.html")," file, and identify the elements of interest (password field, and toggle button) and their associated selectors."),(0,s.kt)("li",{parentName:"ol"},"in the ",(0,s.kt)("inlineCode",{parentName:"li"},"exercises/password-reveal/app.js")," file, create 2 constants with references to the password input and the reveal button from the DOM."),(0,s.kt)("li",{parentName:"ol"},"Create an Event Listener on the password reveal button"),(0,s.kt)("li",{parentName:"ol"},"The event listener should toggle the password field attribute between ",(0,s.kt)("inlineCode",{parentName:"li"},"password")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"text")," to change the visibility of the password field content.")))}u.isMDXComponent=!0}}]);