---
sidebar_position: 2
title: JS Exercises
sidebar_label: JS Exercise
---
## Exercise Goals
This is a collection of JavaScript exercises and coding challenges. The focus in this assignment is to:
- Practice problem solving.
- Practice JavaScript fundamentals.
- Practice using the official documentation. (We'll be using many documentations for many libraries so it's good to start here) 

## Instructions
1. Accept the Assignment on Canvas.
  * This will create a repository for you with a few starting files.
    ```
      .
      ├── .vscode
      │   └── settings.json
      ├── src
      │   ├── __tests__
      │   │   ├── 1.numbers.js
      │   │   ├── 2.strings.js
      │   │   ├── 3.arrays.js
      │   │   ├── 4.logicalOperators.js
      │   │   ├── 5.flowControl.js
      │   │   └── 6.equality.js
      │   ├── 1.numbers.js          ⬅️
      │   ├── 2.strings.js          ⬅️
      │   ├── 3.arrays.js           ⬅️
      │   ├── 4.logicalOperators.js ⬅️
      │   ├── 5.flowControl.js      ⬅️
      │   └── 6.equality.js         ⬅️
      ├── .eslintrc.json
      ├── .gitignore
      ├── package-lock.json
      ├── package.json
      └── README.md                 🔼: update this once done
    ```
  * you will only be working on the files marked with the arrows
2. Clone down the repository to your local computer.
3. Install the project dependencies using the `npm install` command.
  * make sure you're in the project directory in the terminal before you run this command.
4. Run the project tests using `npm test`
  You should see all the tests failing like so:
  ![failing tests image](assets/failing_tests.png)

5. Our task would be to implement the functions in the `src` files (marked with ⬅️ arrow above) until all the tests pass.
6. at the end of each test, commit your code <img alt="commit logo" style={{height:`20px`, marginBottom:`-4px`}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> `git commit -m "finished test xyz"`. 

7. **DON'T FORGET** to Update the README.md file with your self assessment
    * Your grade
    * Self Reflection
    * How long it took you to complete the assignment
8. push your code.

## Demo 1:
### Setup
1. Navigate to your repository in the command line.
  - You can either use the `cd PATH_TO_FOLDER` command.
    - in my case the command was `cd /Users/yahyagilany/git/School/IT3049/2.JS-Exercise`
    - use the `pwd` command to **P**rint **W**orking **D**irectory and confirm your location
  - **OR** You could open VSCode integrated terminal window and it will open in the terminal already in the right path.
2. Installing the dependencies `npm install`
3. Run the tests using `npm test`.

  ![example image](assets/failing_tests.png)  
  - notice all the errors, our goal for this assignment is to resolve them all.

### Getting Down to Business
1. Open the project in *Visual Studio Code* (Not Visual Studio)
    <img alt="example image" src={require('./assets/visualStudioCode.png').default} style={{height:`400px`, border:`1px #ddd solid`}}/>
    
    **Let's try to solve a couple of those tests.**

2. Open the file `src/1.numbers.js`. Particularly
    ```js
      //parseInt: should use parseInt correctly to convert strings to integer numbers
      function parseInt (str) {
        return ;
      }
    ```
    - notice the function have an empty implementation. - We need to do something about that 🤔

3. Consulting the [JS documentation for the Number Data Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), you learn that there's a function named [Number.parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt). The documentations shows usage examples, and specifies the parameters and return type of the function.
 
    <img alt="Number.parseInt() docs" src={require('./assets/parseIntDocs.png').default} style={{height:`500px`, border:`1px #ddd solid`}}/>
    
    **Key Takeaways:**
      -  Be careful the Radix does not default to 10!, so we'll have to set that optional parameter as follows
        ```js
          function parseInt(str) {
            return Number.parseInt(str, 10);
          }
        ```
      - Don't forget to `return` something from the function.
4. Re-run the tests again and let's see if it passes

    <img alt="1 passing test" src={require('./assets/1passing_test.png').default} style={{height:`400px`, border:`1px #ddd solid`}}/>
5. commit your code <img alt="commit logo" style={{height:`20px`, marginBottom:`-4px`}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> `git commit -m "finished test parseInt"`. 

## Demo 2:
1. Well, no need for the setup steps here (you should already be in the directory)
2. Open the file `src/3.arrays.js`. Particularly
    ```js
      /**
        * IndexOf: you should be able to determine the location of an item in an array
        * Example: 
        * arr = [1,2,3,5,6]
        * calling the function like 
        * indexoff(arr, 3); should return the index 2
        */
        function indexOf(arr, item) {
          return ;
        }
    ```
3. The `indexOf` method is supposed to return the index of a certain element in an array. [You can learn more about JS Built-in method here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
4. my implementation for this is as follows
  ```js
    function indexOf(arr, item) {
      return arr.indexOf(item);
    }
  ```
5. Re-run the tests again and let's see if it passes
6. commit your code <img alt="commit logo" style={{height:`20px`, marginBottom:`-4px`}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> `git commit -m "finished test: IndexOf"`. 

7. On to the next test .. Rinse 🧼 and Repeat 🔁

## Resources
- [Standard JavaScript Built-in Objects > Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Standard JavaScript Built-in Objects > String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Standard JavaScript Built-in Objects > Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)