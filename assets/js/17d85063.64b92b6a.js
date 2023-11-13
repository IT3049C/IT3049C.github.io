"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4583],{8613:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=n(5893),i=n(1151);const r={title:"JS Exercises",sidebar_label:"Overview",sidebar_position:3,draft:!1},o=void 0,l={id:"assignments/js-exercises/index",title:"JS Exercises",description:"Learning outcomes",source:"@site/content/coursework/assignments/2.js-exercises/index.mdx",sourceDirName:"assignments/2.js-exercises",slug:"/assignments/js-exercises/",permalink:"/coursework/assignments/js-exercises/",draft:!1,unlisted:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/2.js-exercises/index.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652642389,formattedLastUpdatedAt:"May 15, 2022",sidebarPosition:3,frontMatter:{title:"JS Exercises",sidebar_label:"Overview",sidebar_position:3,draft:!1},sidebar:"coursework",previous:{title:"Finalize",permalink:"/coursework/assignments/online-portfolio/finalize"},next:{title:"Examples",permalink:"/coursework/assignments/js-exercises/demo"}},c={},a=[{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Goals",id:"goals",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"learning-outcomes",children:"Learning outcomes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Practice the use of Git and GitHub."}),"\n",(0,t.jsx)(s.li,{children:"Practice the use of JavaScript to select, traverse, manipulate, and create DOM elements."}),"\n",(0,t.jsx)(s.li,{children:"Practise the use of JavaScript to code solutions to techincal problems."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"goals",children:"Goals"}),"\n",(0,t.jsx)(s.p,{children:"This is a collection of JavaScript exercises and coding challenges. The focus in this assignment is to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Practice problem solving."}),"\n",(0,t.jsx)(s.li,{children:"Practice JavaScript fundamentals."}),"\n",(0,t.jsx)(s.li,{children:"Practice using the official documentation. (We'll be using many documentations for many libraries so it's good to start here)"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things, where do you place them, what ",(0,t.jsx)(s.code,{children:"HTML"})," tag you use for them, ...etc.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Please Follow the instructions on this assignment for the best outcome."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Make a habbit of committing and pusing your code frequently to github."}),"\n",(0,t.jsx)(s.li,{children:"Make sure to meanignful commit messages that describe what you did."}),"\n",(0,t.jsx)(s.li,{children:"Make sure the automated tests and checks continue to pass after you make changes."}),"\n",(0,t.jsx)(s.li,{children:"To be able to run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas."}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Don't forget to fill out the self assessment on the README file"}),", and the feedback form at the end of the instructions."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"instructions",children:"Instructions"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Accept the Assignment on Canvas."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["This will create a repository for you with a few starting files.","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  .\n  \u251c\u2500\u2500 .vscode\n  \u2502   \u2514\u2500\u2500 settings.json\n  \u251c\u2500\u2500 src\n  \u2502   \u251c\u2500\u2500 __tests__\n  \u2502   \u2502   \u251c\u2500\u2500 1.numbers.js\n  \u2502   \u2502   \u251c\u2500\u2500 2.strings.js\n  \u2502   \u2502   \u251c\u2500\u2500 3.arrays.js\n  \u2502   \u2502   \u251c\u2500\u2500 4.logicalOperators.js\n  \u2502   \u2502   \u251c\u2500\u2500 5.flowControl.js\n  \u2502   \u2502   \u2514\u2500\u2500 6.equality.js\n  \u2502   \u251c\u2500\u2500 1.numbers.js          \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 2.strings.js          \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 3.arrays.js           \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 4.logicalOperators.js \u2b05\ufe0f\n  \u2502   \u251c\u2500\u2500 5.flowControl.js      \u2b05\ufe0f\n  \u2502   \u2514\u2500\u2500 6.equality.js         \u2b05\ufe0f\n  \u251c\u2500\u2500 .eslintrc.json\n  \u251c\u2500\u2500 .gitignore\n  \u251c\u2500\u2500 package-lock.json\n  \u251c\u2500\u2500 package.json\n  \u2514\u2500\u2500 README.md                 \ud83d\udd3c: update this once done\n"})}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"you will only be working on the files marked with the arrows"}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Clone down the repository to your local computer."}),"\n",(0,t.jsxs)(s.li,{children:["Install the project dependencies using the ",(0,t.jsx)(s.code,{children:"npm install"})," command."]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"make sure you're in the project directory in the terminal before you run this command."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Run the project tests using ",(0,t.jsx)(s.code,{children:"npm test"}),"\nYou should see all the tests failing like so:\n",(0,t.jsx)(s.img,{alt:"failing tests image",src:n(1794).Z+"",width:"1609",height:"1220"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Our task would be to implement the functions in the ",(0,t.jsx)(s.code,{children:"src"})," files (marked with \u2b05\ufe0f arrow above) until all the tests pass."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["at the end of each test, commit your code ",(0,t.jsx)("img",{alt:"commit logo",style:{height:"20px",marginBottom:"-4px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"})," ",(0,t.jsx)(s.code,{children:'git commit -m "finished test xyz"'}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DON'T FORGET"})," to Update the README.md file with your self assessment"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Your grade"}),"\n",(0,t.jsx)(s.li,{children:"Self Reflection"}),"\n",(0,t.jsx)(s.li,{children:"How long it took you to complete the assignment"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"push your code."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",children:"Standard JavaScript Built-in Objects > Number"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",children:"Standard JavaScript Built-in Objects > String"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",children:"Standard JavaScript Built-in Objects > Array"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1794:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/failing_tests-6518bc6cddac19d2a8093dc0b365dbd2.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var t=n(7294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);