"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6113],{5670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(5893),l=t(1151);const s={sidebar_position:3,title:"DOM Manipulation"},a=void 0,r={id:"dom-manipulation",title:"DOM Manipulation",description:"We can split up DOM Manipulation into 3 main categories and 2 supplementary categories:",source:"@site/content/course-notes/dom-manipulation.md",sourceDirName:".",slug:"/dom-manipulation",permalink:"/course-notes/dom-manipulation",draft:!1,unlisted:!1,editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/content/course-notes/dom-manipulation.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1704940103,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"DOM Manipulation"},sidebar:"courseNotes",previous:{title:"JavaScript Re-introduction",permalink:"/course-notes/js-reintroduction"},next:{title:"Miscellaneous",permalink:"/course-notes/misc"}},o={},c=[{value:"Selecting Elements",id:"selecting-elements",level:2},{value:"Traversing Elements",id:"traversing-elements",level:2},{value:"Manipulating elements",id:"manipulating-elements",level:2},{value:"Working with Attributes",id:"working-with-attributes",level:2},{value:"Manipulating Element\u2019s Styles",id:"manipulating-elements-styles",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We can split up DOM Manipulation into 3 main categories and 2 supplementary categories:"}),"\n",(0,i.jsx)(n.h2,{id:"selecting-elements",children:"Selecting Elements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"getElementById() \u2013 select an element by id."}),"\n",(0,i.jsx)(n.li,{children:"getElementsByName() \u2013 select elements by name."}),"\n",(0,i.jsx)(n.li,{children:"getElementsByTagName()  \u2013 select elements by a tag name."}),"\n",(0,i.jsx)(n.li,{children:"getElementsByClassName() \u2013 select elements by one or more class names."}),"\n",(0,i.jsx)(n.li,{children:"querySelector()  \u2013 select elements by CSS selectors."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"traversing-elements",children:"Traversing Elements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get the parent element \u2013 get the parent node of an element."}),"\n",(0,i.jsx)(n.li,{children:"Get child elements \u2013 get children of an element."}),"\n",(0,i.jsx)(n.li,{children:"Get siblings of an element \u2013 get siblings of an element."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manipulating-elements",children:"Manipulating elements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"createElement() \u2013 create a new element."}),"\n",(0,i.jsx)(n.li,{children:"appendChild()  \u2013 append a node to a list of child nodes of a specified parent node."}),"\n",(0,i.jsx)(n.li,{children:"textContent \u2013 get and set the text content of a node."}),"\n",(0,i.jsx)(n.li,{children:"innerHTML \u2013 get and set the HTML content of an element."}),"\n",(0,i.jsx)(n.li,{children:"innerHTML vs. createElement \u2013 explain the differences between innerHTML and createElement when it comes to creating new elements."}),"\n",(0,i.jsx)(n.li,{children:"DocumentFragment \u2013 learn how to compose DOM nodes and insert them into the active DOM tree."}),"\n",(0,i.jsx)(n.li,{children:"insertBefore() \u2013 insert a new node before an existing node as a child node of a specified parent node."}),"\n",(0,i.jsx)(n.li,{children:"insertAfter() helper function \u2013 insert a new node after an existing node as a child node of a specified parent node."}),"\n",(0,i.jsx)(n.li,{children:"append() \u2013 insert a node after the last child node of a parent node."}),"\n",(0,i.jsx)(n.li,{children:"prepend() \u2013 insert a node before the first child node of a parent node."}),"\n",(0,i.jsx)(n.li,{children:"insertAdjacentHTML() \u2013 parse a text as HTML and insert the resulting nodes into the document at a specified position."}),"\n",(0,i.jsx)(n.li,{children:"replaceChild() \u2013 replace a child element by a new element."}),"\n",(0,i.jsx)(n.li,{children:"cloneNode() \u2013 clone an element and all of its descendants."}),"\n",(0,i.jsx)(n.li,{children:"removeChild() \u2013 remove child elements of a node."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"working-with-attributes",children:"Working with Attributes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"setAttribute() \u2013 set the value of a specified attribute on a element."}),"\n",(0,i.jsx)(n.li,{children:"getAttribute() \u2013 get the value of an attribute on an element."}),"\n",(0,i.jsx)(n.li,{children:"removeAttribute() \u2013 remove an attribute from a specified element."}),"\n",(0,i.jsx)(n.li,{children:"hasAttribute() \u2013 check if an element has a specified attribute or not."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manipulating-elements-styles",children:"Manipulating Element\u2019s Styles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"style property \u2013 get or set inline styles of an element."}),"\n",(0,i.jsx)(n.li,{children:"getComputedStyle() \u2013 return the computed style of an element."}),"\n",(0,i.jsx)(n.li,{children:"className property \u2013 return a list of space-separated CSS classes."}),"\n",(0,i.jsx)(n.li,{children:"classList property \u2013 manipulate CSS classes of an element."}),"\n",(0,i.jsx)(n.li,{children:"Element\u2019s width & height \u2013 get the width and height of an element."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.javascripttutorial.net/javascript-dom/",children:"JavaScript Tutorial - DOM"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const l={},s=i.createContext(l);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);