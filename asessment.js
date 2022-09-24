/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE
git checkout HEAD@5
git checkout -b testbranch

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/


class APICaller extends React.Component{
  callApi(){
    //#1 Implement a fetch method with the given API ENDPOINT
   fetch('https://www.reddit.com/r/react.json') 
    .then((result)=>{
      //#2 Return the result in json format
      return result.json()
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      console.log(jsonData) 
    })
  }
render(){
  return <div>
    <button 
  //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
    onClick={callApi}>Call the API now.</button>
  </div>
}
}
React.render(
  //#5 Implement the APICaller component appropiately into the render method
  <APICaller />, 
  , document.getElementById('myapicaller'),
  ()=>{
    console.log("Successfully rendered the APICaller componnet");
  })


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 
*/

/* 
  Answer: At a broad level, recursion is the process where a function calls itself multiple times until a certain condition is met. For example, if we wanted a
  function that counts down from a chosen number to zero, we can use recursion to do so. There are two things needed to make a recursive function: 
*/

function myRecursiveFunction(num){
  //This check handles cases where num is too small to be processed recursively
  if(num <= 0) {
        return "All done!";
    }
     console.log(num);
     // Each time myRecursiveFunction will call itself with a different value for the 'num' parameter
    num--;
    // If num is 3, the next time myRecursiveFunction will be called like myRecursiveFunction(2), and then myRecursiveFunction(1).
    countDown(num);
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
function countSwaps(a) {
    let sortCount = 0;
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length - 1; j++) {

            if (a[j] > a[j + 1]) {
                // store current val as a variable
                let temp = a[j];

              // swap the values of the, current element, next element, the element aftet next 
                a[j] = a[j + 1];
               
                a[j + 1] = temp;
                sortCount += 1;
            }
        }
}

/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/
let houses = [4, 56, 4, 100, 34, 5];
// let houses = [3];

var rob = function(nums) {
    // handles cases where we only have 0 or 1 element in the list of houses
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]
    
    // Keep track of the Maximum
    let maxes = [nums[0], Math.max(nums[0], nums[1])];
    
      for (let i = 2; i < nums.length; i++) {
        // Compare current max with the previous max
        // Check if the money from the current house + max of 2 houses away is greater than the current max
    maxes[i] = Math.max(maxes[i-2] + nums[i], maxes[i-1]);
    }
    // return the maximum number
    return maxes[nums.length - 1];
};
  
/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview. */
  var longestSubstring = function (s, k) {
    let longestSubstring = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substr(i, j - i + 1);
            if (areAllLettersSeenNTimes(substring, k)) {
                longestSubstring = Math.max(longestSubstring, substring.length);
            }
        }
    }
    return longestSubstring;
};

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/
