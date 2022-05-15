"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[977],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:2.1,title:"Part 1: Create a Web Page",sidebar_label:"Create a web page"},p=void 0,s={unversionedId:"assignments/online-portfolio/part1",id:"assignments/online-portfolio/part1",title:"Part 1: Create a Web Page",description:"Setup",source:"@site/content/coursework/assignments/1.online-portfolio/part1.md",sourceDirName:"assignments/1.online-portfolio",slug:"/assignments/online-portfolio/part1",permalink:"/coursework/assignments/online-portfolio/part1",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/1.online-portfolio/part1.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1652642389,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:2.1,frontMatter:{sidebar_position:2.1,title:"Part 1: Create a Web Page",sidebar_label:"Create a web page"},sidebar:"coursework",previous:{title:"Overview",permalink:"/coursework/assignments/online-portfolio/"},next:{title:"Collaborate on a Project",permalink:"/coursework/assignments/online-portfolio/part2"}},m={},c=[{value:"Setup",id:"setup",level:2},{value:"Creating the Webpage",id:"creating-the-webpage",level:2},{value:"Run Auto-grader checks",id:"run-auto-grader-checks",level:2},{value:"Setting up GitHub Pages for hosting",id:"setting-up-github-pages-for-hosting",level:2}],u={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accept the assignment on canvas.\nThis will create a repository for you with a few starting files. The following directories are the only ones you're allowed to modify"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 resources\n\u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u2514\u2500\u2500 .gitkeep\n\u2502   \u251c\u2500\u2500 scripts\n\u2502   \u2502   \u2514\u2500\u2500 index.js\n\u2502   \u2514\u2500\u2500 styles\n\u2502       \u2514\u2500\u2500 styles.css\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 README.md\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone down the project to your computer."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop"},"Using GitHub Desktop")),(0,r.kt)("li",{parentName:"ul"},"OR ",(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository"},"using command line tools")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the project in Visual Studio Code.\na. make sure you select the root folder when opening the project. It will be named something like ",(0,r.kt)("inlineCode",{parentName:"p"},"1-online-portfolio-YOUR_USERNAME")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-the-webpage"},"Creating the Webpage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Where it says ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!-- include style files here--\x3e"),", add a ",(0,r.kt)("inlineCode",{parentName:"p"},"<link>")," with a reference to the styles sheet located in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/styles/styles.css"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Where it says ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!-- include script files here--\x3e"),", add a ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," with a reference to the scripts file located in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/scripts/index.js"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"update the HTML ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>")," tag to be your name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the body of the page, create an a container (",(0,r.kt)("inlineCode",{parentName:"p"},"<div>"),")."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Note:")," This container will enclose all of the page's content."),(0,r.kt)("li",{parentName:"ul"},"set the class name to ",(0,r.kt)("inlineCode",{parentName:"li"},"container"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"create an ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," that contains your name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"add an image ",(0,r.kt)("inlineCode",{parentName:"p"},"<img>")," of yourself."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"make sure the image is placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/images")," and that you use relative path not the complete file path. I can't access files on your computer (DUHH!)."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'    <img src="resources/images/myphoto.jpg" />\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Don't do"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'    <img src="C:/Users/yahya/Desktop/OnlinePortfolio/resources/images/myphoto.jpg"/>\n'))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udea9  Make a git commit here"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the commit message needs to be meaningful. Example: ",(0,r.kt)("em",{parentName:"li"},'"Initialize the page"')),(0,r.kt)("li",{parentName:"ul"},"If you're using the command line, the command would be: ",(0,r.kt)("inlineCode",{parentName:"li"},'git commit -m "initialized the page"'),". "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the following 5 sections. For each of them sections:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"make sure to wrap each section with a ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," with a class name of ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," and is assigned the respective id specified below"),(0,r.kt)("li",{parentName:"ul"},"each section must be titled with ",(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," tags"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit at the end of each section created. i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},'git commit -m "added Personal background section"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'git commit -m "added Work and Development Experience section"')," and so on ..."),(0,r.kt)("li",{parentName:"ul"},"sections are:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Personal background",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Containing ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," has class of ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," and id of ",(0,r.kt)("inlineCode",{parentName:"li"},"personalBackground")),(0,r.kt)("li",{parentName:"ul"},"A paragraph tag ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," or an un-numbered",(0,r.kt)("inlineCode",{parentName:"li"},"<ul>")," with some background info."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit ",(0,r.kt)("inlineCode",{parentName:"li"},'git commit -m "added Personal background section"'),"."))),(0,r.kt)("li",{parentName:"ul"},"Work and Development Experience",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"containing ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," has class of ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," and id of ",(0,r.kt)("inlineCode",{parentName:"li"},"experience")),(0,r.kt)("li",{parentName:"ul"},"A numbered list tag ",(0,r.kt)("inlineCode",{parentName:"li"},"<ol>")," containing some of the roles and places you worked at."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit."))),(0,r.kt)("li",{parentName:"ul"},"Programming Languages",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"containing ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," has class of ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," and id of ",(0,r.kt)("inlineCode",{parentName:"li"},"programmingLanguages")),(0,r.kt)("li",{parentName:"ul"},"A numbered list tag ",(0,r.kt)("inlineCode",{parentName:"li"},"<ol>")," containing the programming languages you know."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit."))),(0,r.kt)("li",{parentName:"ul"},"Achievements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"containing ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," has class of ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," and id of ",(0,r.kt)("inlineCode",{parentName:"li"},"achievements")),(0,r.kt)("li",{parentName:"ul"},"An un-numbered list tag ",(0,r.kt)("inlineCode",{parentName:"li"},"<ul>")," containing the some of the achievements you'd like to share."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit."))),(0,r.kt)("li",{parentName:"ul"},"Favorite Games (or ones you\u2019re currently playing)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"containing ",(0,r.kt)("inlineCode",{parentName:"li"},"<div>")," has class of ",(0,r.kt)("inlineCode",{parentName:"li"},"section")," and id of ",(0,r.kt)("inlineCode",{parentName:"li"},"games")),(0,r.kt)("li",{parentName:"ul"},"A paragraph tag ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," or an un-numbered",(0,r.kt)("inlineCode",{parentName:"li"},"<ul>")," containing the the games you like to play."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit."))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Style the webpage with some custom styles in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/styles/styles.css")," using classes, and IDs."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://getbootstrap.com/"},"Bootstrap library")," is already included at the top of the HTML file. You're welcome to use its classes to style your page."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udea9  make a git commit once done with the styling or incrementally as you're making your changes."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you are finished, make sure you push all the changes to the repository."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"any thing looking like this or better is accepted. (With content of course)",(0,r.kt)("img",{alt:"example image",src:n(8672).Z,height:"400"}))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"run-auto-grader-checks"},"Run Auto-grader checks"),(0,r.kt)("p",null,"If you followed the instructions properly, creating the different sections with the correct IDs, classes, and content types, you should pass the auto-grader checks."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your preferred command line terminal (i.e. terminal, iTerm, bash, git bash, powershell, ... etc) and navigate to the project path. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"remember ",(0,r.kt)("a",{parentName:"li",href:"http://www.linfo.org/cd.html"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"cd")," command")," from System Admin class."),(0,r.kt)("li",{parentName:"ul"},"Using Visual Studio Code you can simply open the integrated terminal (View > Terminal) which will automatically open up at the correct project path.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/integrated-terminal"},"More info on vscode integrated terminal can be found here")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"install project depenedencies using the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"run the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test"),". a suite of tests will run producing results similar to the following."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setting-up-github-pages-for-hosting"},"Setting up GitHub Pages for hosting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Follow the following ",(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/enterprise/2.13/user/articles/configuring-a-publishing-source-for-github-pages#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages"},"instructions")," to setup github pages and ",(0,r.kt)("strong",{parentName:"li"},"publish your page from ",(0,r.kt)("inlineCode",{parentName:"strong"},"main")),".")),(0,r.kt)("hr",null))}d.isMDXComponent=!0},8672:function(e,t,n){t.Z=n.p+"assets/images/example-d9b87cfd188deec51b3823d45fbc35c5.png"}}]);