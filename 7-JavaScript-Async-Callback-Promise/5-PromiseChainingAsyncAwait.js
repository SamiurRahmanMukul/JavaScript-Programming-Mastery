/*Title: Promise Chaining Async Await
  Description: Promise Chaining Async Await In JavaScript (ES6) Features
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

console.log("Welcome to JavaScript ES6 Features");

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task 3 is not completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task 4 is completed");
  });
};

// ? Promise Chaining
// taskOne()
//   .then((res) => console.log(res))
//   .then(taskTwo)
//   .then((res) => console.log(res))
//   .then(taskThree)
//   .then((res) => console.log(res))
//   .then(taskFour)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// ? Promise Chaining Uses Async Await
const callAllTasks = async () => {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
  } catch (err) {
    console.log(err);
  }
};

callAllTasks();

console.log("End of JavaScript ES6 Features");
