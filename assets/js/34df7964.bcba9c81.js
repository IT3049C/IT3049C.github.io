"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6041],{8171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(5893),o=t(1151);const r={sidebar_position:3,title:"Part 2: Setting up the Layout",sidebar_label:"Page Layout"},i=void 0,a={id:"labs/rps-in-react/layout",title:"Part 2: Setting up the Layout",description:"1. Clear out the conetnt of the App.jsx component and replace it with the container and header of the Game.",source:"@site/content/coursework/labs/8.rps-in-react/2.layout.md",sourceDirName:"labs/8.rps-in-react",slug:"/labs/rps-in-react/layout",permalink:"/coursework/labs/rps-in-react/layout",draft:!1,unlisted:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/8.rps-in-react/2.layout.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652116840,formattedLastUpdatedAt:"May 9, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Part 2: Setting up the Layout",sidebar_label:"Page Layout"}},c={},l=[];function d(e){const n={code:"code",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Clear out the conetnt of the ",(0,s.jsx)(n.code,{children:"App.jsx"})," component and replace it with the container and header of the Game."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:'import \'./App.css\';\n\nfunction App() {\n  return (\n    <div className="container">\n      <h1 className="mainHeader">Rock Paper Scissors</h1>\n    </div>\n  );\n}\n\nexport default App;\n\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Create a new folder under ",(0,s.jsx)(n.code,{children:"src"})," and name it ",(0,s.jsx)(n.code,{children:"components"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Create 2 ",(0,s.jsx)(n.code,{children:"jsx"})," files under ",(0,s.jsx)(n.code,{children:"components"})," and name them ",(0,s.jsx)(n.code,{children:"GameView.jsx"}),", ",(0,s.jsx)(n.code,{children:"WelcomeView"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Copy the welcome div and game div from the previous PRS assignment and place them as the content of those components."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="WelcomeView.jsx"',children:'const WelcomeView = (props) => {\n  return (\n    <div id="welcome-screen">\n      <form id="name-form">\n        <div class="form-group">\n          <label for="username">Type your name: </label>\n          <input\n            class="form-control"\n            type="text"\n            id="username"\n            name="username"\n            required\n            placeholder="Enter Name Here..."\n            minlength="2"\n            maxlength="15"\n          />\n        </div>\n        <button class="btn btn-primary" id="start-game-button" type="button">\n          Start Game!\n        </button>\n      </form>\n    </div>\n  );\n};\n\nexport default WelcomeView;\n\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="GameView.jsx"',children:'const GameView = (props) => {\n  return (\n    <div id="game-screen">\n      <div id="score-tally">\n        <p id="score"> User: 0 v CPU: 0</p>\n      </div>\n\n      <form id="game-form">\n        <div class="form-group">\n          <label for="user-selection">Select your choice: </label>\n          <select\n            class="custom-select"\n            id="user-selection"\n            name="user-selection"\n          >\n            <option id="rock" value="rock">\n              Rock\n            </option>\n            <option id="paper" value="paper">\n              Paper\n            </option>\n            <option id="scissors" value="scissors">\n              Scissors\n            </option>\n          </select>\n        </div>\n        <button class="btn btn-success" type="button" id="go-button">\n          Go!\n        </button>\n      </form>\n\n      <p id="game-history"></p>\n      <button id="reset-game-button" class="btn btn-secondary">\n        Reset{" "}\n      </button>\n    </div>\n  );\n};\n\nexport default GameView;\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Import the 2 new components into the ",(0,s.jsx)(n.code,{children:"App.jsx"})," component."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.jsx"',children:"import './App.css';\nimport GameView from './components/GameView';\nimport WelcomeView from './components/WelcomeView';\n\nfunction App() {\n  return (\n    <div class=\"container\">\n      <h1 class=\"mainHeader\">Rock Paper Scissors</h1>\n      <WelcomeView />\n      <GameView />\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Confirm on the browser that all components and html elements are loaded."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["We'll need to renamed/react-ify certain html properties in our components","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["rename ",(0,s.jsx)(n.code,{children:"class"})," with ",(0,s.jsx)(n.code,{children:"className"})]}),"\n",(0,s.jsxs)(n.li,{children:["rename ",(0,s.jsx)(n.code,{children:"for"})," with ",(0,s.jsx)(n.code,{children:"htmlFor"})]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);