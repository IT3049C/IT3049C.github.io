"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[634],{6437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(5893),i=n(1151);const o={sidebar_position:6,title:"Part 5: Game Logic",sidebar_label:"Game Logic"},a=void 0,r={id:"rps-in-react/logic",title:"Part 5: Game Logic",description:"1. Create a state to manage which View to display. You can use a boolean value to manage this state.",source:"@site/content/assignments/8.rps-in-react/5.logic.md",sourceDirName:"8.rps-in-react",slug:"/rps-in-react/logic",permalink:"/assignments/rps-in-react/logic",draft:!1,unlisted:!1,editUrl:"https://github.com/IT3049C/IT3049C.github.io/tree/main/content/assignments/8.rps-in-react/5.logic.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1709518744,formattedLastUpdatedAt:"Mar 4, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Part 5: Game Logic",sidebar_label:"Game Logic"},sidebar:"assignments",previous:{title:"Lifting the State up",permalink:"/assignments/rps-in-react/lift-state-up"},next:{title:"Finalize",permalink:"/assignments/rps-in-react/finalize"}},c={},l=[];function d(e){const t={code:"code",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a state to manage which View to display. You can use a boolean value to manage this state."}),"\n",(0,s.jsxs)(t.li,{children:["pass the stateModifier as a prop to the ",(0,s.jsx)(t.code,{children:"WelcomeView"})," component and use it to update the state when the user clicks the ",(0,s.jsx)(t.code,{children:"Start Game"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["Use the state to conditionally render the ",(0,s.jsx)(t.code,{children:"WelcomeView"})," or the ",(0,s.jsx)(t.code,{children:"GameView"})," component."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["you can use the ternary operator ",(0,s.jsx)(t.code,{children:".. ? .. : .."})," to conditionally render the ",(0,s.jsx)(t.code,{children:"WelcomeView"})," or the ",(0,s.jsx)(t.code,{children:"GameView"})," components."]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Copy over the ",(0,s.jsx)(t.code,{children:"RockPaperScissors"})," class from the previous assignment and import it into the ",(0,s.jsx)(t.code,{children:"GameView"})," component. The ",(0,s.jsx)(t.code,{children:"RockPaperScissors"})," class will be used to handle the game logic and determine the winner of the game."]}),"\n",(0,s.jsx)(t.li,{children:"Create different state hooks to manage the game state and the user's choice."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"userChoice"}),"\n",(0,s.jsx)(t.li,{children:"userScore"}),"\n",(0,s.jsx)(t.li,{children:"cpuScore"}),"\n",(0,s.jsx)(t.li,{children:"gameHistory (an array to store the history of the game)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You will need to update those state values on ",(0,s.jsx)(t.code,{children:"Go"})," click."]}),"\n",(0,s.jsx)(t.p,{children:"::: info\nThis covers the big components of what we need to work on. Use those concepts to finish the game logic.\n:::"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);