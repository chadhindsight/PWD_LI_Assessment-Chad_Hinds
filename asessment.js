/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE
// git checkout HEAD~5
// git checkout - b testbranch

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/


class APICaller extends React.Component {
  callApi() {
    //#1 Implement a fetch method with the given API ENDPOINT
    fetch('https://www.reddit.com/r/react.json')
      .then((result) => {
        //#2 Return the result in json format
        return result.json()
      }).then((jsonData) => {
        //#3 Print/log the jsonData in the console of the browser
        console.log(jsonData)
      })
  }
  render() {
    return <div>
      <button
        //#4 Implement an onClick functionality to the button such that it calls the callApi() function when it is clicked. 
        onClick={callApi}>Call the API now.</button>
    </div>
  }
}
React.render(
  //#5 Implement the APICaller component appropriately into the render method
  <APICaller />, 
  , document.getElementById('myapicaller'),
  () => {
    console.log("Successfully rendered the APICaller componnet");
  })


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/

/* 
  Answer: At a broad level, recursion is the process where a function calls itself multiple times until a certain condition is met. For example, if we wanted a
  function that counts down from a chosen number to zero, we can use recursion to do so. 
  Every recursive function needs a base case which is the condition needed to determine when recursion should stop.
*/

function myRecursiveFunction(num) {
  //This check handles cases where num is too small to be processed recursively
  if (num <= 0) {
    return "All done!";
  }
  console.log(num);
  // Each time myRecursiveFunction will call itself with a different value for the 'num' parameter
  num--;
  // If num is 3, the next time myRecursiveFunction will be called like myRecursiveFunction(2), and then myRecursiveFunction(1).
  myRecursiveFunction(num);
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* 
  Sorting is the proccess of arranging data in a particular format. A sorting algorithm dictates the way that some given data should be ordered.
Example, arranging a list of movies based on their release dates or arranging names in alphabetical order. One reason sorting is important is because it allows us
to optimize our ability to search through large amounts of data. Sorting is also used to represent data in more readable formats. 

There are many different types of sorting algos, and Bubble Sort is a very common one that comes up. Bubble sort is a comparison based operation where elements that are next
to each other are compared and swapped in order to create the correct sequence. It is generally thought that Bubble sort is not suitable for use on large data sets, because of the amount of time it might take to 
process. 
*/

/*Bubble sort example HERE*/
function sortArr(a) {
  // Loop through the unsorted array
  for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a.length - 1; j++) {

      if (a[j] > a[j + 1]) {
        // store current val as a variable
        let temp = a[j];

        // swap the values of the current element and the next element directly after it 
        a[j] = a[j + 1];

        a[j + 1] = temp;
      }
    }
  }
  return a
}

/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/
var rob = function (nums) {
  // handles cases where we only have 0 or 1 element in the list of houses
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])


  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i])
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2])
};

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview. */

var longestSubstring = function (s, k) {
  // Store the number of times each letter is encountered
  let mapOfLetters = {};
  for (let i = 0; i < s.length; i++) {
    mapOfLetters[s[i]] = mapOfLetters[s[i]] ? mapOfLetters[s[i]] + 1 : 1;
  }

  // If the entire string is made up of valid letters, return its full length
  if (Object.values(mapOfLetters).every((val) => val >= k)) return s.length;

  let longestSubstringSoFar = 0;
  let currentStart = 0;
  for (let i = 0; i < s.length; i++) {
    // If we've reached a breaking point (character that does not appear k times)
    if (mapOfLetters[s[i]] < k) {
      // Find the longest valid substring of the current string, and compare it with the longest found so far
      longestSubstringSoFar = Math.max(
        longestSubstring(s.substr(currentStart, i - currentStart), k),
        longestSubstringSoFar
      );

      // Move to the next character in the string
      currentStart = i + 1;
    }
  }
  // Check if the current substring would have been the longest if a breaking point had been encountered
  longestSubstringSoFar = Math.max(
    longestSubstring(s.substr(currentStart), k),
    longestSubstringSoFar
  );

  return longestSubstringSoFar > 1 ? longestSubstringSoFar : 0;
};

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
https://github.com/chadhindsight/PWD_LI_Assessment-Chad_Hinds/tree/main/SQL_Solution
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/
/* In order to understand what state management is in React, we should first understand what state is.
Within React, state is a built-in object that is used to contain data or information about the component. 
A component’s state can change over time and whenever it changes, the component re-renders based on the newly updated state. 
For example, let’s say we have a piece of state that contains certain information about a user such as their name, email, and favorite color and we also have a component that displays this user information. When a user changes their favorite color from ‘Green’ to ‘Blue’, that piece of data will be changed in the component’s state and the component will now re-render to display the color ‘Blue’ instead of the previous color ‘Green’. This process is called State Management. 

One cool thing that React allows developers to do is share state across different components. 
Sharing state can be done by moving it up to the closest common ancestor of the components that need it. 
For example, If we had a Color component that gets rendered by an UserProfile component we could pass the specific state defined in UserProfile component to the Color Component as props. 
Managing state in a large React project with numerous components can get tricky, but there are two things that can be used to make this task more manageable: A third party addition called Redux, and React’s built-in Context API. Context allows us to pass state values between components without having to explicitly pass a prop down multiple levels. Redux allows us to have a single store that contains all our application state in one spot. When certain actions get triggered, that action tells our central store how the state should be updated, when the state gets updated, the related components re-render. One of the main differences between the Context API and Redux is that Context comes built in with React and redux is installed separately. Additionally, Redux is oftentimes used with larger applications and Context is better to use with small applications.
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/
/* 
  Node: Node is JavaScript runtime environment that allows us to run Javacript code outside of just our web browser. A runtime environment is something that includes all of the tools and features needed to run a specific program, 
  or in the case of Node.js, a programming language. In the past, the only runtime environment for JavaScript was the browser.
Chrome, Safari, and Edge had their JavaScript runtimes, but we could not run JavaScript on our computers. Languages like Javascript and Python have to be translated into bytecode, which is then turned into machine code and read by your computer.
Basically, the main purpose of Node is to translate a JavaScript program into bytecode for a computer to run it.

  Express: Express.js is a free and open-source framework for Node.js that has a broad set of features used to build the backend of our web applications. 
  Let's take a brief look at something called HTTP verbs to better understand how Express can help us. When you visit a site on your phone or computer, a HTTP request gets sent to the server site you're trying to reach or access and if the request is successful, a positive response gets sent back from the server to you with the site's information and content. 
  Part of this request includes HTTP verbs. The most common two verbs are GET and POST. Each of these verbs have their distictive purposes, but the main differences between them is that GET should be used only to retrieve data from a server, and POST should be used to send data to the server. 
  This is where the Express.js framework comes in, we can use it to build our backend and specify what we want to happen when we get request with certain HTTP verbs. Example, if a user makes a request to view a list of photos on our site, our Express server code allows us to specify that those photos should be shown as the response to a successful request.
  
  app.get('/', (request, response, next) => {
  console.log(request);
  // whatever we specify in response.send() gets sent back to users   
  response.send('List of photos');
});
*/
/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/
