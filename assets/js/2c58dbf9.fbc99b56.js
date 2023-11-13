"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5897],{7024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(5893),a=n(1151);n(4866),n(5162);const r={slug:"phaser-vscode-intellisense",title:"How to get Phaser Intellisense in VSCode",authors:["ygilany"],tags:["phaser","vscode","development-productivity"]},o=void 0,l={permalink:"/blog/phaser-vscode-intellisense",editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/blog/2022-03-27-phaser-vscode-intellisense/index.mdx",source:"@site/blog/2022-03-27-phaser-vscode-intellisense/index.mdx",title:"How to get Phaser Intellisense in VSCode",description:"What is Phaser?",date:"2022-03-27T00:00:00.000Z",formattedDate:"March 27, 2022",tags:[{label:"phaser",permalink:"/blog/tags/phaser"},{label:"vscode",permalink:"/blog/tags/vscode"},{label:"development-productivity",permalink:"/blog/tags/development-productivity"}],readingTime:1.82,hasTruncateMarker:!1,authors:[{name:"Yahya Gilany",title:"Class Instructor",url:"https://yahya-gilany.com",imageURL:"https://yahya-gilany.com/img/Yahya1.webp",key:"ygilany"}],frontMatter:{slug:"phaser-vscode-intellisense",title:"How to get Phaser Intellisense in VSCode",authors:["ygilany"],tags:["phaser","vscode","development-productivity"]},unlisted:!1,nextItem:{title:"Updating the README assignment checks badge",permalink:"/blog/github-actions-badge"}},i={authorsImageUrls:[void 0]},c=[{value:"What is Phaser?",id:"what-is-phaser",level:3},{value:"What is VS Code?",id:"what-is-vs-code",level:3},{value:"What is Intellisense?",id:"what-is-intellisense",level:3},{value:"How to enable Phaser Intellisense in VSCode?",id:"how-to-enable-phaser-intellisense-in-vscode",level:3},{value:"Other untested alternatives",id:"other-untested-alternatives",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"what-is-phaser",children:"What is Phaser?"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:['"Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development."',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-(1)-261cfa",id:"user-content-fnref-(1)-261cfa","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"what-is-vs-code",children:"What is VS Code?"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:['"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity)"',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-(2)-261cfa",id:"user-content-fnref-(2)-261cfa","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"what-is-intellisense",children:"What is Intellisense?"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:['"IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-(3)-261cfa",id:"user-content-fnref-(3)-261cfa","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"how-to-enable-phaser-intellisense-in-vscode",children:"How to enable Phaser Intellisense in VSCode?"}),"\n",(0,s.jsx)(t.p,{children:"We will need to make use of a TypeScript functionality to enable Intellisense."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["At the root of your project, create a file named ",(0,s.jsx)(t.code,{children:"jsconfig.json"}),", or ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," with the following content."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The presence of this file, indicates to VSCode that this is the root of a JavaScript project. You can use it to specify certain features you'd like VSCode's JS Language Service to provide, such as typing. ",(0,s.jsxs)(t.a,{href:"https://code.visualstudio.com/docs/languages/jsconfig#_why-do-i-need-a-jsconfigjson-file",children:["Learn more about ",(0,s.jsx)(t.code,{children:"jsconfig.json"})," file here"]})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="<root>/jsconfig.json"',children:"{}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"OR"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="<root>/tsconfig.json"',children:'{\n  "allowJs": true\n}\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["At the root of your project, create a folder named ",(0,s.jsx)(t.code,{children:"defs"}),",  ",(0,s.jsx)(t.code,{children:"types"}),", or ",(0,s.jsx)(t.code,{children:"typings"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Download and the save ",(0,s.jsx)(t.a,{href:"https://github.com/photonstorm/phaser/raw/master/types/phaser.d.ts",children:(0,s.jsx)(t.code,{children:"phaser.d.ts"})})," file into that folder. This file contains the definitions for Phaser."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Note: you may need to install TypeScript to your project or globally"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev typescript\n"})}),"\n",(0,s.jsx)(t.p,{children:"OR"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --global typescript\n"})}),"\n",(0,s.jsx)(t.h3,{id:"other-untested-alternatives",children:"Other untested alternatives"}),"\n",(0,s.jsx)(t.p,{children:"The following repos seemed like good templates to use for Phaser Development. It includes many tools to improve the overall development experience."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/yandeu/phaser-project-template-es6",children:"yandeu/phaser-project-template-es6"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/yandeu/phaser-project-template",children:"yandeu/phaser-project-template"})}),"\n"]}),"\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-(1)-261cfa",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://newdocs.phaser.io/docs/3.55.2",children:"Phaser Framework"}),". ",(0,s.jsx)(t.a,{href:"#user-content-fnref-(1)-261cfa","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-(2)-261cfa",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22",children:"What is Visual Studio Code?"}),". ",(0,s.jsx)(t.a,{href:"#user-content-fnref-(2)-261cfa","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-(3)-261cfa",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22",children:"IntelliSense in Visual Studio Code"}),". ",(0,s.jsx)(t.a,{href:"#user-content-fnref-(3)-261cfa","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(6010);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var s=n(7294),a=n(6010),r=n(2466),o=n(6550),l=n(469),i=n(1980),c=n(7392),d=n(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==s&&(c(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(7294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);