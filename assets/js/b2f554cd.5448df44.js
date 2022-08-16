"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"phaser-vscode-intellisense","metadata":{"permalink":"/blog/phaser-vscode-intellisense","editUrl":"https://github.com/IT3049C/IT3049C.github.io/tree/main/blog/2022-03-27-phaser-vscode-intellisense/index.mdx","source":"@site/blog/2022-03-27-phaser-vscode-intellisense/index.mdx","title":"How to get Phaser Intellisense in VSCode","description":"What is Phaser?","date":"2022-03-27T00:00:00.000Z","formattedDate":"March 27, 2022","tags":[{"label":"phaser","permalink":"/blog/tags/phaser"},{"label":"vscode","permalink":"/blog/tags/vscode"},{"label":"development-productivity","permalink":"/blog/tags/development-productivity"}],"readingTime":1.82,"hasTruncateMarker":false,"authors":[{"name":"Yahya Gilany","title":"Class Instructor","url":"https://yahya-gilany.com","imageURL":"https://yahya-gilany.com/img/Yahya1.webp","key":"ygilany"}],"frontMatter":{"slug":"phaser-vscode-intellisense","title":"How to get Phaser Intellisense in VSCode","authors":["ygilany"],"tags":["phaser","vscode","development-productivity"]},"nextItem":{"title":"Updating the README assignment checks badge","permalink":"/blog/github-actions-badge"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\n\\n### What is Phaser?\\n> \\"Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development.\\"[^(1)]\\n\\n[^(1)]: [Phaser Framework](https://newdocs.phaser.io/docs/3.55.2). \\n### What is VS Code?\\n> \\"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity)\\"[^(2)]\\n\\n[^(2)]: [What is Visual Studio Code?](https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22). \\n\\n### What is Intellisense?\\n> \\"IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as \\"code completion\\", \\"content assist\\", and \\"code hinting.\\"[^(3)]\\n\\n[^(3)]: [IntelliSense in Visual Studio Code](https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22). \\n\\n### How to enable Phaser Intellisense in VSCode?\\nWe will need to make use of a TypeScript functionality to enable Intellisense.\\n\\n1. At the root of your project, create a file named `jsconfig.json`, or `tsconfig.json` with the following content.\\n  - The presence of this file, indicates to VSCode that this is the root of a JavaScript project. You can use it to specify certain features you\'d like VSCode\'s JS Language Service to provide, such as typing. [Learn more about `jsconfig.json` file here](https://code.visualstudio.com/docs/languages/jsconfig#_why-do-i-need-a-jsconfigjson-file)\\n\\n```json title=\\"<root>/jsconfig.json\\"\\n{}\\n```\\n**OR**\\n```json title=\\"<root>/tsconfig.json\\"\\n{\\n  \\"allowJs\\": true\\n}\\n```\\n\\n2. At the root of your project, create a folder named `defs`,  `types`, or `typings`.\\n3. Download and the save [`phaser.d.ts`](https://github.com/photonstorm/phaser/raw/master/types/phaser.d.ts) file into that folder. This file contains the definitions for Phaser.\\n\\n> Note: you may need to install TypeScript to your project or globally\\n```bash\\nnpm install --save-dev typescript\\n``` \\nOR \\n```bash\\nnpm install --global typescript\\n```\\n\\n### Other untested alternatives\\nThe following repos seemed like good templates to use for Phaser Development. It includes many tools to improve the overall development experience. \\n* [yandeu/phaser-project-template-es6](https://github.com/yandeu/phaser-project-template-es6)\\n* [yandeu/phaser-project-template](https://github.com/yandeu/phaser-project-template)"},{"id":"github-actions-badge","metadata":{"permalink":"/blog/github-actions-badge","editUrl":"https://github.com/IT3049C/IT3049C.github.io/tree/main/blog/2022-01-14-github-actions-banner/index.md","source":"@site/blog/2022-01-14-github-actions-banner/index.md","title":"Updating the README assignment checks badge","description":"In some of the assignments, you may be asked to update the badge link on the repository README file.","date":"2022-01-14T00:00:00.000Z","formattedDate":"January 14, 2022","tags":[{"label":"github","permalink":"/blog/tags/github"},{"label":"assignment","permalink":"/blog/tags/assignment"}],"readingTime":0.37,"hasTruncateMarker":false,"authors":[{"name":"Yahya Gilany","title":"Class Instructor","url":"https://yahya-gilany.com","imageURL":"https://yahya-gilany.com/img/Yahya1.webp","key":"ygilany"}],"frontMatter":{"slug":"github-actions-badge","title":"Updating the README assignment checks badge","authors":["ygilany"],"tags":["github","assignment"]},"prevItem":{"title":"How to get Phaser Intellisense in VSCode","permalink":"/blog/phaser-vscode-intellisense"},"nextItem":{"title":"Visual Studio Code Settings and Extensions Sync","permalink":"/blog/vscode-extensions"}},"content":"In some of the assignments, you may be asked to update the badge link on the repository README file. \\n\\n* Click on the **Actions** Tab at the top of your repository.\\n  * ![image001](assets/image001.png)\\n* Navigate to the **Assignment Checks** action job.\\n  * ![image002](assets/image002.png)\\n* Copy the badge.\\n  * ![image003](assets/image003.png)\\n\\nP.S.: In most assignments, I created a small script that automatically updates the link for you when you install the repository\'s dependencies using `npm install`"},{"id":"vscode-extensions","metadata":{"permalink":"/blog/vscode-extensions","editUrl":"https://github.com/IT3049C/IT3049C.github.io/tree/main/blog/2022-01-13-vscode/index.md","source":"@site/blog/2022-01-13-vscode/index.md","title":"Visual Studio Code Settings and Extensions Sync","description":"In my demo videos, you may notice that my Visual Studio Code IDE, provides with me with a lot of cheaters, helpers, and utilities that makes development a little easier.","date":"2022-01-13T00:00:00.000Z","formattedDate":"January 13, 2022","tags":[{"label":"vscode","permalink":"/blog/tags/vscode"},{"label":"uses","permalink":"/blog/tags/uses"}],"readingTime":1.145,"hasTruncateMarker":false,"authors":[{"name":"Yahya Gilany","title":"Class Instructor","url":"https://yahya-gilany.com","imageURL":"https://yahya-gilany.com/img/Yahya1.webp","key":"ygilany"}],"frontMatter":{"slug":"vscode-extensions","title":"Visual Studio Code Settings and Extensions Sync","authors":["ygilany"],"tags":["vscode","uses"]},"prevItem":{"title":"Updating the README assignment checks badge","permalink":"/blog/github-actions-badge"}},"content":"In my demo videos, you may notice that my Visual Studio Code IDE, provides with me with a lot of cheaters, helpers, and utilities that makes development a little easier.\\nIn this post, I\'m sharing some instructions for how you can setup you VSCode IDE with the same settings and extensions I have here.\\n\\nTo get started:\\n\\n1. you\'re going to need to install the Settings [Sync Extension](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) on VSCode.\\n  - Go to the link and click install. It will open VSCode and open the extension page\\n  - Click on `install` to download the extension\\n<img alt=\\"image 1\\" src={require(\'./assets/1.png\').default} style={{border: `1px solid black`, marginBottom:`2em`}} />\\n\\n2. Once installed open VSCode Command Palette using:\\n  - For Windows: `ctrl`+`shift`+`P`\\n  - For Mac: `cmd`+`shift`+`P`\\n\\n3. In the command palette, type `Sync: Download Settings`\\n<img alt=\\"image 2\\" src={require(\'./assets/2.png\').default} style={{border: `1px solid black`, marginBottom:`2em`}} />\\n\\n1. On the Following Screen, click on Download Public Gist and type in `416f36fd3c23571ecab1d3f3a5815fea`\\n<img alt=\\"image 3\\" src={require(\'./assets/3.png\').default} style={{border: `1px solid black`, marginBottom:`2em`}} />\\n\\n5. Open the command palette and type `Sync: Download Settings` again and watch the extensions get installed.\\n\\n6. You may need to close VSCode and open it again for all extensions to take effect.\\n\\n\\n## Some of my Extensions\\n- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)\\n- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)\\n- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)\\n- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)\\n- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)\\n- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)\\n- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)\\n- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)"}]}')}}]);