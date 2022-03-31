"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2263],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2714:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={sidebar_position:2,title:"Part 1: Linting your Code using ESLint",sidebar_label:"Linting (ESLint)"},s=void 0,c={unversionedId:"labs/tooling/linting",id:"labs/tooling/linting",title:"Part 1: Linting your Code using ESLint",description:"Installing ESLint",source:"@site/docs/labs/tooling/1.linting.mdx",sourceDirName:"labs/tooling",slug:"/labs/tooling/linting",permalink:"/docs/labs/tooling/linting",editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/docs/labs/tooling/1.linting.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Part 1: Linting your Code using ESLint",sidebar_label:"Linting (ESLint)"},sidebar:"labs",previous:{title:"Overview",permalink:"/docs/labs/tooling/"},next:{title:"Transpiling (Webpack)",permalink:"/docs/labs/tooling/transpile"}},p=[{value:"Installing ESLint",id:"installing-eslint",children:[],level:2},{value:"Configuring ESLint",id:"configuring-eslint",children:[],level:2},{value:"Running and Using ESLint",id:"running-and-using-eslint",children:[],level:2},{value:"Improving the Developer Experience with VSCode Extensions",id:"improving-the-developer-experience-with-vscode-extensions",children:[],level:2}],u={toc:p};function d(e){var n=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing-eslint"},"Installing ESLint"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ESLint from npm.\n",(0,r.kt)("inlineCode",{parentName:"li"},"npm install eslint --save-dev"))),(0,r.kt)("h2",{id:"configuring-eslint"},"Configuring ESLint"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setup the ESLint configuration file.\n",(0,r.kt)("inlineCode",{parentName:"li"},"npm init @eslint/config")),(0,r.kt)("li",{parentName:"ol"},"Follow these selections in the configurations wizard.\n",(0,r.kt)("img",{alt:"ESLint config",src:t(846).Z,width:"850",height:"190"})),(0,r.kt)("li",{parentName:"ol"},"You should now have a configuration file in your project, named ",(0,r.kt)("inlineCode",{parentName:"li"},".eslintrc.json")," with the following content.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc.json"',title:'".eslintrc.json"'},'{\n    "extends": "eslint:recommended",\n    "parserOptions": {\n        "ecmaVersion": "latest",\n        "sourceType": "module"\n    },\n    "env": {\n        "browser": true,\n        "node": true,\n        "es2021": true\n    },\n    "rules": {\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please copy the above into your ",(0,r.kt)("inlineCode",{parentName:"p"},".eslintrc.json")," file, if they don't match."))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Add the following rules to to your ",(0,r.kt)("inlineCode",{parentName:"li"},".eslintrc.json")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".eslintrc.json"',title:'".eslintrc.json"'},'{\n    "extends": "eslint:recommended",\n    "parserOptions": {\n        "ecmaVersion": "latest",\n        "sourceType": "module"\n    },\n    "env": {\n        "browser": true,\n        "node": true,\n        "es2021": true\n    },\n    "rules": {\n        // highlight-start\n        "array-bracket-spacing": [2, "always"],\n        "no-const-assign": 2,\n        "no-var": "error",\n        "indent": [2, 2],\n        "quotes": [2, "backtick"],\n        "eqeqeq": "error"\n        // highlight-end\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"About the extra rules:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"array-bracket-spacing"),": Enforce spacing inside array brackets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no-const-assign"),": Disallow modifying variables that are declared using ",(0,r.kt)("inlineCode",{parentName:"li"},"const"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no-var"),": Require ",(0,r.kt)("inlineCode",{parentName:"li"},"let")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"var"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indent"),": Enforce consistent indentation - in this case 2 spaces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quotes"),": Enforce the consistent use of either backticks, double, or single quotes. - in this case backticks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eqeqeq"),": Require the use of ",(0,r.kt)("inlineCode",{parentName:"li"},"===")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"!=="),".")))),(0,r.kt)("h2",{id:"running-and-using-eslint"},"Running and Using ESLint"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ESLint on the project using one of the following options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Option 1:")," by running ",(0,r.kt)("inlineCode",{parentName:"li"},"npx eslint --ext .js resources/scripts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Option 2:")," by modifying the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file to include a quick-run script for linting.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    ...\n    // highlight-start\n    "scripts": {\n        "lint": "eslint --ext .js resources/scripts"\n    }\n    // highlight-end\n    ...\n}\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Now you can run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run lint")," to run ESLint on the project. You should see some issues that require your attention."),(0,r.kt)("li",{parentName:"ul"},"Try to solve a 2-3 issues (leave some for the next step).")))),(0,r.kt)("h2",{id:"improving-the-developer-experience-with-vscode-extensions"},"Improving the Developer Experience with VSCode Extensions"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint VSCode extension"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This may require reloading your VSCode.")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Navigate to the files in ",(0,r.kt)("inlineCode",{parentName:"li"},"resources/scripts"),". You should now get VSCode highligting the errors.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Try to solve a 2-3 issues (leave some for the next step)."))),(0,r.kt)("li",{parentName:"ol"},"Configure VSCode to utilize the ESLint VSCode extension to fix any (easily) fixable errors. on file save.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true,\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to any of the script file and save it. You should now see the errors fixed.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should still see some errors. Especially the one about RockPaperScissors class not defined and/or not being used. We'll take care of this in the next Part of this lab."))))}d.isMDXComponent=!0},846:function(e,n,t){n.Z=t.p+"assets/images/eslint-config-51690a09feedaf07a968215083b73f0a.png"}}]);