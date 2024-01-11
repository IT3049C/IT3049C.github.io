"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[304],{5432:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(5893),l=s(1151);const r={sidebar_position:2,title:"Part 1: Setting up the Layout",sidebar_label:"Page Layout",draft:!1},t=void 0,c={id:"rock-paper-scissors/layout",title:"Part 1: Setting up the Layout",description:"Game Flow",source:"@site/content/assignments/3.rock-paper-scissors/1.layout.md",sourceDirName:"3.rock-paper-scissors",slug:"/rock-paper-scissors/layout",permalink:"/assignments/rock-paper-scissors/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/content/assignments/3.rock-paper-scissors/1.layout.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1704940103,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Part 1: Setting up the Layout",sidebar_label:"Page Layout",draft:!1}},o={},d=[{value:"Game Flow",id:"game-flow",level:2},{value:"Layout Setup",id:"layout-setup",level:2},{value:"Structure summary",id:"structure-summary",level:3},{value:"Checkpoint",id:"checkpoint",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"game-flow",children:"Game Flow"}),"\n",(0,i.jsx)(n.p,{children:"The game flow should be:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Web page loads with a form for the user to enter their name.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"input is required, users cannot proceed without providing their name."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["After the user submits their name, a new form appears with an input for Rock, Paper, or Scissors.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can use:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"select/dropdown"}),"\n",(0,i.jsx)(n.li,{children:"OR buttons"}),"\n",(0,i.jsx)(n.li,{children:"clickable text (but why would you do that!)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["User submits the form with their selection (","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"input is required, they cannot submit it without a selection"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["CPU Player (Behind the scenes), would:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"generate a (random) response to play against the user."}),"\n",(0,i.jsx)(n.li,{children:"Compare the selections to determine the winner."}),"\n",(0,i.jsx)(n.li,{children:"Keep a log of selections and winners for each round."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Web page would display the winner."}),"\n",(0,i.jsx)(n.li,{children:"Show the game log"}),"\n",(0,i.jsx)(n.li,{children:"Reset the form after each round"}),"\n",(0,i.jsx)(n.li,{children:"User should be able to start a new game."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"layout-setup",children:"Layout Setup"}),"\n",(0,i.jsx)(n.h3,{id:"structure-summary",children:"Structure summary"}),"\n",(0,i.jsxs)(n.p,{children:["This tree diagram summarizes the ",(0,i.jsx)(n.code,{children:"body"})," part of the HTML page structure and nesting. Below it, you'll find more details about the different elements."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'body\n\u2514\u2500\u2500 div .container\n    \u251c\u2500\u2500 h1\n    \u251c\u2500\u2500 div #welcome-screen\n    \u2502   \u251c\u2500\u2500 form #name-form\n    \u2502   \u2502   \u251c\u2500\u2500 div\n    \u2502   \u2502   \u2502   \u251c\u2500\u2500 label [for="username"]\n    \u2502   \u2502   \u2502   \u2514\u2500\u2500 input #username [name="username"]\n    \u2502   \u2502   \u2514\u2500\u2500 button #start-game-button\n    \u2514\u2500\u2500 div #game-screen\n        \u251c\u2500\u2500 div #score-tally\n        \u2502   \u251c\u2500\u2500 p #score\n        \u2514\u2500\u2500 form #game-form\n            \u251c\u2500\u2500 div\n            \u2502   \u251c\u2500\u2500 label [for="user-selection"]\n            \u2502   \u251c\u2500\u2500 select #user-selection [name="user-selection"]\n            \u2502   \u2502   \u251c\u2500\u2500 option "Rock"\n            \u2502   \u2502   \u251c\u2500\u2500 option "Paper"\n            \u2502   \u2502   \u2514\u2500\u2500 option "Scissors"\n            \u251c\u2500\u2500 button #go-button\n        \u2514\u2500\u2500 p #game-history \n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Change the web page HTML title to ",(0,i.jsx)(n.em,{children:"Rock Paper Scissors"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inside"})," the ",(0,i.jsx)(n.code,{children:'<div class="container">'}),", create the following elements nested as follows:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<h1>"})," - with a title of ",(0,i.jsx)(n.em,{children:"Rock Paper Scissors"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["2 ",(0,i.jsx)(n.code,{children:"<div>"}),"s with IDs of ",(0,i.jsx)(n.code,{children:"welcome-screen"})," & ",(0,i.jsx)(n.code,{children:"game-screen"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Tip:"})," try typing the ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/languages/html#_emmet-snippets",children:"emmet abbreviation/shorthand"})," ",(0,i.jsx)(n.code,{children:"#welcome-screen+#game-screen"})," and hit enter. \ud83d\ude09"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inside ",(0,i.jsx)(n.code,{children:'<div id="welcome-screen">'}),", create the following elements nested as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<form>"})," - with an id of ",(0,i.jsx)(n.code,{children:"name-form"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<div>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<label>"})," - with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["text of ",(0,i.jsx)(n.em,{children:"Your Name"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.w3schools.com/tags/att_label_for.asp",children:"for attribute"})," of ",(0,i.jsx)(n.code,{children:"username"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<input>"})," - with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["placeholder text of ",(0,i.jsx)(n.em,{children:"Enter Name Here..."}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["id of ",(0,i.jsx)(n.code,{children:"username"})]}),"\n",(0,i.jsxs)(n.li,{children:["name property of ",(0,i.jsx)(n.code,{children:"username"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<button>"})," - with:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the text of ",(0,i.jsx)(n.em,{children:"Start Game!"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["id of ",(0,i.jsx)(n.code,{children:"start-game-button"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inside ",(0,i.jsx)(n.code,{children:'<div id="game-screen">'}),", create the following elements nested as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<div>"})," - with an id of ",(0,i.jsx)(n.code,{children:"score-tally"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<p>"})," - with id of ",(0,i.jsx)(n.code,{children:"score"})," and text of ",(0,i.jsx)(n.code,{children:"User: 0 v CPU: 0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Tip:"})," ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/languages/html#_emmet-snippets",children:"Emmet abbreviation"})," for a div with an id of ",(0,i.jsx)(n.code,{children:"score-tally"})," and a paragraph with id of ",(0,i.jsx)(n.code,{children:"score"})," is ",(0,i.jsx)(n.code,{children:"#score-tally>p#score"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<form>"})," - with an id of ",(0,i.jsx)(n.code,{children:"game-form"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<div>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<label>"})," - with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a text of ",(0,i.jsx)(n.em,{children:"Select your choice"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.w3schools.com/tags/att_label_for.asp",children:"for attribute"})," of ",(0,i.jsx)(n.code,{children:"user-selection"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<select>"})," - with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["id of ",(0,i.jsx)(n.code,{children:"user-selection"})]}),"\n",(0,i.jsxs)(n.li,{children:["name of ",(0,i.jsx)(n.code,{children:"user-selection"})]}),"\n",(0,i.jsxs)(n.li,{children:["3 ",(0,i.jsx)(n.code,{children:"<option>"}),"s for ",(0,i.jsx)(n.em,{children:"Rock"}),", ",(0,i.jsx)(n.em,{children:"Paper"}),", & ",(0,i.jsx)(n.em,{children:"Scissors"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Tip:"})," use the ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/languages/html#_emmet-snippets",children:"Emmet abbreviation"}),": ",(0,i.jsx)(n.code,{children:"select#user-selection>option*3"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<button>"})," - with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the text of ",(0,i.jsx)(n.code,{children:"Go!"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["id of ",(0,i.jsx)(n.code,{children:"go-button"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<p>"})," - with an id of ",(0,i.jsx)(n.code,{children:"game-history"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"checkpoint",children:"Checkpoint"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"It should now look like this."})}),"\n",(0,i.jsx)("img",{alt:"initial look",src:s(5243).Z,style:{width:"100%",border:"1px #ddd solid"}}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"I think We can do a little better."})})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5243:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1-a446ee2e93da00e2020fbab551080c4b.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var i=s(7294);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);