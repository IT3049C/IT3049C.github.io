"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,d=f["".concat(s,".").concat(p)]||f[p]||m[p]||o;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=n(5360),a=n(2488),s=["components"],l={id:"assignments",title:"\ud83d\udcaf Assignments",sidebar_position:1},u=void 0,m={unversionedId:"assignments",id:"assignments",title:"\ud83d\udcaf Assignments",description:"",source:"@site/content/coursework/assignments.mdx",sourceDirName:".",slug:"/assignments",permalink:"/coursework/assignments",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"assignments",title:"\ud83d\udcaf Assignments",sidebar_position:1},sidebar:"coursework",previous:{title:"Git - Hello World",permalink:"/coursework/labs/hello-world/"},next:{title:"Overview",permalink:"/coursework/assignments/online-portfolio/"}},f={},p=[],d={toc:p};function y(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),i=n(6010),o=n(9960),c=n(2488),a="cardContainer_woeA",s="cardTitle_pNjP",l="cardDescription_qC_k",u=n(3919),m=n(5999);function f(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",a)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,c=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",l),title:c},c))}function d(e){var t=e.item,n=(0,c.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,i=(0,u.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{key:t,item:e}))})))}}}]);