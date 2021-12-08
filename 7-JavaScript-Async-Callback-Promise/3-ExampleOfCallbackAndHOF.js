/*Title: Example of Callback and Higher Order Function
  Description: Callback and Higher Order Function in javascript
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

const taskOne = (callback) => {
  console.log("Task One");
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("Task Two");
    callback();
  }, 2000);
};

const taskThree = (callback) => {
  console.log("Task Three");
  callback();
};

// called the (Callback & Higher Order) functions
taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      console.log("All tasks are done");
    });
  });
});
