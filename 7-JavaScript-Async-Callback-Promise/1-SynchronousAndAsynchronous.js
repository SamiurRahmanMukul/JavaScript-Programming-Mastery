/*Title: Synchronous And Asynchronous
  Description: Synchronous and Asynchronous Programming in JavaScript
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

// Synchronous Programming in JavaScript
const taskOne = () => {
  console.log("Task One - Synchronous");
};

// Asynchronous Programming in JavaScript
const taskTwo = () => {
  setTimeout(() => {
    console.log("Task Two - Asynchronous");
  }, 2000);
};

// Synchronous Programming in JavaScript
const taskThree = () => {
  console.log("Task Three - Synchronous");
};

// Calling The Functions
taskOne();
taskTwo();
taskThree();
