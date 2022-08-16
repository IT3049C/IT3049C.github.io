"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3.1,title:"Examples",draft:!1},o=void 0,s={unversionedId:"assignments/js-exercises/demo",id:"assignments/js-exercises/demo",title:"Examples",description:"Below are a couple of examples for how you should go about this assignment.",source:"@site/content/coursework/assignments/2.js-exercises/demo.mdx",sourceDirName:"assignments/2.js-exercises",slug:"/assignments/js-exercises/demo",permalink:"/coursework/assignments/js-exercises/demo",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/2.js-exercises/demo.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652642389,formattedLastUpdatedAt:"May 15, 2022",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1,title:"Examples",draft:!1},sidebar:"coursework",previous:{title:"Overview",permalink:"/coursework/assignments/js-exercises/"},next:{title:"Finalize",permalink:"/coursework/assignments/js-exercises/finalize"}},l={},p=[{value:"Example 1:",id:"example-1",level:2},{value:"Setup",id:"setup",level:3},{value:"Getting Down to Business",id:"getting-down-to-business",level:3},{value:"Example 2:",id:"example-2",level:2}],m={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below are a couple of examples for how you should go about this assignment."),(0,r.kt)("h2",{id:"example-1"},"Example 1:"),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your repository in the command line.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can either use the ",(0,r.kt)("inlineCode",{parentName:"li"},"cd PATH_TO_FOLDER")," command.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"in my case the command was ",(0,r.kt)("inlineCode",{parentName:"li"},"cd /Users/yahyagilany/git/School/IT3049/2.JS-Exercise")),(0,r.kt)("li",{parentName:"ul"},"use the ",(0,r.kt)("inlineCode",{parentName:"li"},"pwd")," command to ",(0,r.kt)("strong",{parentName:"li"},"P"),"rint ",(0,r.kt)("strong",{parentName:"li"},"W"),"orking ",(0,r.kt)("strong",{parentName:"li"},"D"),"irectory and confirm your location"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OR")," You could open VSCode integrated terminal window and it will open in the terminal already in the right path.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installing the dependencies ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"example image",src:n(1794).Z,width:"1609",height:"1220"}),"  "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"notice all the errors, our goal for this assignment is to resolve them all.")),(0,r.kt)("h3",{id:"getting-down-to-business"},"Getting Down to Business"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the project in ",(0,r.kt)("em",{parentName:"p"},"Visual Studio Code")," (Not Visual Studio)"),(0,r.kt)("img",{alt:"example image",src:n(8182).Z,style:{height:"400px",border:"1px #ddd solid"}}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Let's try to solve a couple of those tests."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src/1.numbers.js"),". Particularly"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  //parseInt: should use parseInt correctly to convert strings to integer numbers\n  function parseInt (str) {\n    return ;\n  }\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"notice the function have an empty implementation. - We need to do something about that \ud83e\udd14"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Consulting the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"JS documentation for the Number Data Type"),", you learn that there's a function named ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt"},"Number.parseInt()"),". The documentations shows usage examples, and specifies the parameters and return type of the function."),(0,r.kt)("img",{alt:"Number.parseInt() docs",src:n(6666).Z,style:{height:"500px",border:"1px #ddd solid"}}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Takeaways:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Be careful the Radix does not default to 10!, so we'll have to set that optional parameter as follows",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  function parseInt(str) {\n    return Number.parseInt(str, 10);\n  }\n"))),(0,r.kt)("li",{parentName:"ul"},"Don't forget to ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," something from the function."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Re-run the tests again and let's see if it passes"),(0,r.kt)("img",{alt:"1 passing test",src:n(7649).Z,style:{height:"400px",border:"1px #ddd solid"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"commit your code ",(0,r.kt)("img",{alt:"commit logo",style:{height:"20px",marginBottom:"-4px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"})," ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "finished test parseInt"'),". "))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"example-2"},"Example 2:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Well, no need for the setup steps here (you should already be in the directory)"),(0,r.kt)("li",{parentName:"ol"},"Open the file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/3.arrays.js"),". Particularly at this function",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  /**\n    * IndexOf: you should be able to determine the location of an item in an array\n    * Example: \n    * arr = [1,2,3,5,6]\n    * calling the function like \n    * indexoff(arr, 3); should return the index 2\n    */\n    function indexOf(arr, item) {\n      return ;\n    }\n"))),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"indexOf")," method is supposed to return the index of a certain element in an array. ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"},"You can learn more about JS Built-in method here")),(0,r.kt)("li",{parentName:"ol"},"my implementation for this is as follows",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  function indexOf(arr, item) {\n    return arr.indexOf(item);\n  }\n"))),(0,r.kt)("li",{parentName:"ol"},"Re-run the tests again and let's see if it passes"),(0,r.kt)("li",{parentName:"ol"},"commit your code ",(0,r.kt)("img",{alt:"commit logo",style:{height:"20px",marginBottom:"-4px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"})," ",(0,r.kt)("inlineCode",{parentName:"li"},'git commit -m "finished test: IndexOf"'),". ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On to the next test .. Rinse \ud83e\uddfc and Repeat \ud83d\udd01")))}c.isMDXComponent=!0},7649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1passing_test-fbb0d151106dbdeeb48654986d7e8181.png"},6666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/parseIntDocs-76f0832c190ebf95cd825e4ee27d67b6.png"},8182:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/visualStudioCode-cf82bc389530820f2307461bc5c1fe97.png"},1794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/failing_tests-6518bc6cddac19d2a8093dc0b365dbd2.png"}}]);