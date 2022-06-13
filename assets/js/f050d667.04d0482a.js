"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3806],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Overview",sidebar_position:4,draft:!1},s=void 0,u={unversionedId:"assignments/hangman/index",id:"assignments/hangman/index",title:"Overview",description:"Learning outcomes",source:"@site/content/coursework/assignments/4.hangman/index.mdx",sourceDirName:"assignments/4.hangman",slug:"/assignments/hangman/",permalink:"/coursework/assignments/hangman/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/4.hangman/index.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1655088781,formattedLastUpdatedAt:"6/12/2022",sidebarPosition:4,frontMatter:{title:"Overview",sidebar_position:4,draft:!1},sidebar:"coursework",previous:{title:"Finalize",permalink:"/coursework/assignments/rock-paper-scissors/finalize"},next:{title:"Finalize",permalink:"/coursework/assignments/hangman/finalize"}},p={},m=[{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Guidelines and Tips",id:"guidelines-and-tips",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Game process",id:"game-process",level:3},{value:"Starter Files",id:"starter-files",level:3},{value:"Grading",id:"grading",level:2},{value:"Extra Credit Opportunities",id:"extra-credit-opportunities",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build a web-based game (Hangman) that utilizes a variety of concepts and technologies."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate ability to make network HTTP Requests using Fetch API."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate ability to create graphics using Canvas."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate ability to create forms to and handling user input."),(0,i.kt)("li",{parentName:"ol"},"Demonstrate understanding of event-oriented programming.")),(0,i.kt)("h2",{id:"guidelines-and-tips"},"Guidelines and Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remember to review the comments made for you in the code."),(0,i.kt)("li",{parentName:"ul"},"Make a habbit of committing and pusing your code frequently to github."),(0,i.kt)("li",{parentName:"ul"},"Make sure to meanignful commit messages that describe what you did."),(0,i.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks (if exists) continue to pass after you make changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"),", and the feedback form at the end of the instructions.")),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"For this assignment you will be building Hangman. Your goal is to build this game using HTML, CSS, JavaScript, and the concepts/techniques covered to-date to build the game completely. "),(0,i.kt)("h3",{id:"game-process"},"Game process"),(0,i.kt)("p",null,"The process of the game should be:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Allow the user to specify the difficulty:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"easy")," - for words of length 3-5"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"medium")," - for words of length 6-9"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"hard")," - for words of length 10-15"))),(0,i.kt)("li",{parentName:"ol"},"On difficulty selection, we'll make a HTTP Request to ",(0,i.kt)("a",{parentName:"li",href:"https://hangman-micro-service.herokuapp.com/"},"https://hangman-micro-service.herokuapp.com/")," to get a word for the game.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"You'll need to specify the difficulty in the query string of your url.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hangman-micro-service.herokuapp.com/?difficulty=easy"},"https://hangman-micro-service.herokuapp.com/?difficulty=easy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hangman-micro-service.herokuapp.com/?difficulty=medium"},"https://hangman-micro-service.herokuapp.com/?difficulty=medium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hangman-micro-service.herokuapp.com/?difficulty=hard"},"https://hangman-micro-service.herokuapp.com/?difficulty=hard")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Hint"),": Don\u2019t hard-code all three URLs. Instead, use string template-ing to populate the query string."),(0,i.kt)("li",{parentName:"ol"},"It may take a few seconds to load initially."))),(0,i.kt)("li",{parentName:"ol"},"Show the word's length as underscores in place of letters which have not yet been guessed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for the word ",(0,i.kt)("inlineCode",{parentName:"li"},"BOOK")," where the Letters ",(0,i.kt)("inlineCode",{parentName:"li"},"O"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"K")," have been guessed, this would look like ",(0,i.kt)("inlineCode",{parentName:"li"},"_ O O K ")))),(0,i.kt)("li",{parentName:"ol"},"Show a display/paragraph/span containing previously guessed letters to the user",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Previously Guessed: C, E, N, L")))),(0,i.kt)("li",{parentName:"ol"},"Show a display/Canvas drawing of the \u201cHangman\u201d\na. use canvas API for the hangman drawing"),(0,i.kt)("li",{parentName:"ol"},"Allow user to input a letter to guess. with the following form validations.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alert the user if they enter a letter they have already guessed"),(0,i.kt)("li",{parentName:"ul"},"Alert the user if the provided input wasn't a letter"),(0,i.kt)("li",{parentName:"ul"},"Alert the user if they hit the submit without providing any input (length == 0)"),(0,i.kt)("li",{parentName:"ul"},"Alert the user if they provided more than one character."))),(0,i.kt)("li",{parentName:"ol"},"If the guessed letter is correct, show it in the proper place for the word display (the underscored placeholder)\na. check if the word has completely been guessed and announce winner if so."),(0,i.kt)("li",{parentName:"ol"},"If the guessed letter is incorrect, draw the next body part on the hangman (whatever order and number of lines/body parts you wish)\na. check if all the body parts have been drawn to announce the game as lost."),(0,i.kt)("li",{parentName:"ol"},"When the game is over, alert the user if they won or lost and give an option to reset the game"),(0,i.kt)("li",{parentName:"ol"},"For ",(0,i.kt)("strong",{parentName:"li"},"1 Extra Credit point"),", use tha animate.css library to animate the Hangman Title.")),(0,i.kt)("h3",{id:"starter-files"},"Starter Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 resources\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 styles.css                <== Your additional styles\n\u2502   \u251c\u2500\u2500 js\n\u2502   \u2502   \u251c\u2500\u2500 Hangman.js                <== Hangman Game Logic\n\u2502   \u2502   \u2514\u2500\u2500 index.js                  <== DOM Manipulation and Event Listeners\n\u2502   \u2514\u2500\u2500 vendor                        <== External Libraries, such as Bootstrap and jQuery\n\u2502       \u251c\u2500\u2500 bootstrap.min.css\n\u2502       \u251c\u2500\u2500 bootstrap.min.js\n\u2502       \u251c\u2500\u2500 fontawesome.min.css\n\u2502       \u251c\u2500\u2500 jquery-3.5.1.slim.min.js\n\u2502       \u2514\u2500\u2500 popper.min.js\n\u251c\u2500\u2500 index.html                        <== The index.html - Built for you.\n\u2514\u2500\u2500 README.md                         <== Don't Forget the self-reflection evaluation\n")),(0,i.kt)("h2",{id:"grading"},"Grading"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The application runs with no errors."),(0,i.kt)("li",{parentName:"ol"},"The user is presented with 3 difficulties to select from."),(0,i.kt)("li",{parentName:"ol"},"The application can send HTTP requests passing a difficulty level in the query string and able to parse the response."),(0,i.kt)("li",{parentName:"ol"},"The application obscures the word with underscores of same length as the original word."),(0,i.kt)("li",{parentName:"ol"},"The application alerts the user if an already guessed letter was guessed again."),(0,i.kt)("li",{parentName:"ol"},"The application draws the hangman (stick man) on wrong guesses.")),(0,i.kt)("h2",{id:"extra-credit-opportunities"},"Extra Credit Opportunities"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add CSS animation on failed and successful guesses to any of the DOM elements.")))}d.isMDXComponent=!0}}]);