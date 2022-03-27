"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3341],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},3580:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),l=n(8427),i=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,r.useState)(g),j=w[0],C=w[1],O=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==j&&v.some((function(e){return e.value===T}))&&C(T)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==j&&(S(t),C(a),null!=m&&N(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function c(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},4271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=(n(3580),n(8215),["components"]),i={slug:"phaser-vscode-intellisense",title:"How to get Phaser Intellisense in VSCode",authors:["ygilany"],tags:["phaser","vscode","development-productivity"]},s=void 0,u={permalink:"/blog/phaser-vscode-intellisense",editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/blog/2022-03-27-phaser-vscode-intellisense/index.mdx",source:"@site/blog/2022-03-27-phaser-vscode-intellisense/index.mdx",title:"How to get Phaser Intellisense in VSCode",description:"What is Phaser?",date:"2022-03-27T00:00:00.000Z",formattedDate:"March 27, 2022",tags:[{label:"phaser",permalink:"/blog/tags/phaser"},{label:"vscode",permalink:"/blog/tags/vscode"},{label:"development-productivity",permalink:"/blog/tags/development-productivity"}],readingTime:1.82,truncated:!1,authors:[{name:"Yahya Gilany",title:"Class Instructor",url:"https://yahya-gilany.com",imageURL:"https://yahya-gilany.com/img/Yahya1.webp",key:"ygilany"}],frontMatter:{slug:"phaser-vscode-intellisense",title:"How to get Phaser Intellisense in VSCode",authors:["ygilany"],tags:["phaser","vscode","development-productivity"]},nextItem:{title:"Updating the README assignment checks badge",permalink:"/blog/github-actions-badge"}},c={authorsImageUrls:[void 0]},p=[{value:"What is Phaser?",id:"what-is-phaser",children:[],level:3},{value:"What is VS Code?",id:"what-is-vs-code",children:[],level:3},{value:"What is Intellisense?",id:"what-is-intellisense",children:[],level:3},{value:"How to enable Phaser Intellisense in VSCode?",id:"how-to-enable-phaser-intellisense-in-vscode",children:[],level:3},{value:"Other untested alternatives",id:"other-untested-alternatives",children:[],level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-is-phaser"},"What is Phaser?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development."',(0,o.kt)("sup",{parentName:"p",id:"fnref-(1)"},(0,o.kt)("a",{parentName:"sup",href:"#fn-(1)",className:"footnote-ref"},"(1)")))),(0,o.kt)("h3",{id:"what-is-vs-code"},"What is VS Code?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity)"',(0,o.kt)("sup",{parentName:"p",id:"fnref-(2)"},(0,o.kt)("a",{parentName:"sup",href:"#fn-(2)",className:"footnote-ref"},"(2)")))),(0,o.kt)("h3",{id:"what-is-intellisense"},"What is Intellisense?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."',(0,o.kt)("sup",{parentName:"p",id:"fnref-(3)"},(0,o.kt)("a",{parentName:"sup",href:"#fn-(3)",className:"footnote-ref"},"(3)")))),(0,o.kt)("h3",{id:"how-to-enable-phaser-intellisense-in-vscode"},"How to enable Phaser Intellisense in VSCode?"),(0,o.kt)("p",null,"We will need to make use of a TypeScript functionality to enable Intellisense."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"At the root of your project, create a file named ",(0,o.kt)("inlineCode",{parentName:"li"},"jsconfig.json"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," with the following content.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The presence of this file, indicates to VSCode that this is the root of a JavaScript project. You can use it to specify certain features you'd like VSCode's JS Language Service to provide, such as typing. ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/languages/jsconfig#_why-do-i-need-a-jsconfigjson-file"},"Learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"jsconfig.json")," file here"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<root>/jsconfig.json"',title:'"<root>/jsconfig.json"'},"{}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OR")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<root>/tsconfig.json"',title:'"<root>/tsconfig.json"'},'{\n  "allowJs": true\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"At the root of your project, create a folder named ",(0,o.kt)("inlineCode",{parentName:"li"},"defs"),",  ",(0,o.kt)("inlineCode",{parentName:"li"},"types"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"typings"),"."),(0,o.kt)("li",{parentName:"ol"},"Download and the save ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/photonstorm/phaser/raw/master/types/phaser.d.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"phaser.d.ts"))," file into that folder. This file contains the definitions for Phaser.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: you may need to install TypeScript to your project or globally"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev typescript\n")),(0,o.kt)("p",{parentName:"blockquote"},"OR "),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global typescript\n"))),(0,o.kt)("h3",{id:"other-untested-alternatives"},"Other untested alternatives"),(0,o.kt)("p",null,"The following repos seemed like good templates to use for Phaser Development. It includes many tools to improve the overall development experience. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yandeu/phaser-project-template-es6"},"yandeu/phaser-project-template-es6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yandeu/phaser-project-template"},"yandeu/phaser-project-template"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-(1)"},(0,o.kt)("a",{parentName:"li",href:"https://newdocs.phaser.io/docs/3.55.2"},"Phaser Framework"),". ",(0,o.kt)("a",{parentName:"li",href:"#fnref-(1)",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-(2)"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22"},"What is Visual Studio Code?"),". ",(0,o.kt)("a",{parentName:"li",href:"#fnref-(2)",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-(3)"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22"},"IntelliSense in Visual Studio Code"),". ",(0,o.kt)("a",{parentName:"li",href:"#fnref-(3)",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);