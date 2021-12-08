/*Title: Promise in JavaScript
  Description: Promise in JavaScript (Definition & Usage)
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

/* // ? Promise in JavaScript (Definition & Usage)
  --> 1. How to create a Promise in JavaScript
  --> 2. How to resolve (Use) a Promise in JavaScript
  --> 3. How to run multiple Promise - all() in JavaScript
  --> 4. race() - method in promise
  --> 5. Promise chaining in JavaScript */

// *1. Create a Promise in JavaScript
const promise1 = new Promise((resolve, reject) => {
  let completedPromise = true;

  if (completedPromise) {
    resolve("Promise Completed");
  } else {
    reject("Not Completed Promise1");
    reject(new Error("Not Completed Promise1"));
  }
});
const promise2 = new Promise((resolve, reject) => {
  let completedPromise = true;

  if (completedPromise) {
    resolve("Promise Completed");
  } else {
    reject("Not Completed Promise2");
    reject(new Error("Not Completed Promise2"));
  }
});

// Print promise1 all property
console.log(promise1);

// *2. Called a Promise in JavaScript
promise1 // ? Here, A promise is resolved to called then Or reject to called catch and throw an error
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// *3. Run multiple Promise - all() method in JavaScript
Promise.all([promise1, promise2])
  .then((message) => {
    console.log(message); // ? print all message in array
  })
  .then((message1, message2) => {
    console.log(message1); // ? print a message in array
  })
  .catch((error) => {
    console.log(error); // ? print all error in array
  });

// *4. race() - method in promise
Promise.race([promise1, promise2]) // ? Here, Whats promise first resolved output thats promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
