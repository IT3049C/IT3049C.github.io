"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5084],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:5,title:"Part 5: E2E Testing your code using Cypress",sidebar_label:"E2E Testing (Cypress)"},l=void 0,p={unversionedId:"labs/tooling/e2e-testing",id:"labs/tooling/e2e-testing",title:"Part 5: E2E Testing your code using Cypress",description:"Installing Cyoress",source:"@site/content/coursework/labs/7.tooling/4.e2e-testing.mdx",sourceDirName:"labs/7.tooling",slug:"/labs/tooling/e2e-testing",permalink:"/coursework/labs/tooling/e2e-testing",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/7.tooling/4.e2e-testing.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652116840,formattedLastUpdatedAt:"5/9/2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Part 5: E2E Testing your code using Cypress",sidebar_label:"E2E Testing (Cypress)"},sidebar:"coursework",previous:{title:"Unit Testing (Jest)",permalink:"/coursework/labs/tooling/unit-testing"},next:{title:"\ud83d\udcaf Assignments",permalink:"/coursework/assignments"}},c={},u=[{value:"Installing Cyoress",id:"installing-cyoress",level:2},{value:"Configuring Cypress",id:"configuring-cypress",level:2},{value:"Starting Cypress",id:"starting-cypress",level:2},{value:"Write New Tests",id:"write-new-tests",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"installing-cyoress"},"Installing Cyoress"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install Jest from npm ",(0,s.kt)("inlineCode",{parentName:"li"},"npm install --save-dev cypress"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This step is already done for you as you install dependencies defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.json")," by running ",(0,s.kt)("inlineCode",{parentName:"li"},"npm install ")," in the beginning of the lab.")),(0,s.kt)("h2",{id:"configuring-cypress"},"Configuring Cypress"),(0,s.kt)("p",null,"We will keep the default configuration. However to ease the process of starting and running cypress tests, we will add some additional scripts to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file.\n2. Add the following scripts to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "scripts": {\n    "cy:open": "cypress open",\n    "cy:run": "cypress run"\n    ...\n  }\n  ...\n}\n')),(0,s.kt)("h2",{id:"starting-cypress"},"Starting Cypress"),(0,s.kt)("p",null,"to start cypress tests, run one of the following command in the terminal:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"npx cypress open")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/cypress open")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"npm run cy:open"))),(0,s.kt)("h3",{id:"write-new-tests"},"Write New Tests"),(0,s.kt)("p",null,"When running Cypress for the first time, it create the ",(0,s.kt)("inlineCode",{parentName:"p"},"cypress")," folder with the following folders:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"`cypress.json`` - all Cypress settings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"`cypress/integration`` - test files (specs)")),(0,s.kt)("li",{parentName:"ul"},"`cypress/fixtures`` - mock data"),(0,s.kt)("li",{parentName:"ul"},"`cypress/plugins`` - extending Cypress"),(0,s.kt)("li",{parentName:"ul"},"`cypress/support`` - shared commands, utilities")),(0,s.kt)("p",null,"We're only really interested in the ",(0,s.kt)("inlineCode",{parentName:"p"},"cypress/integration")," folder; that's where all tests would be. Let's create a new test file in that folder."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"There should already be some sample test files in the folder, you may opt to leave those in as a reference."))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Make sure you're running the application through some server.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"build a test that types your name, selects a choice from the dropdown and then confirms that the history log generated contains the right number of tries and contains the right name.")))}m.isMDXComponent=!0}}]);