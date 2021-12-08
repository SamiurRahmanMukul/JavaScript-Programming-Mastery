/*Title: Callback and Higher Order Function
  Description: Callback and Higher Order Function in JavaScript
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

/* // ? Callback & Higher Order Function - Definition: 
  --> একটি ফাংশন  আরেকটি ফাংশনকে Argument হিসেবে Received করে তবে সেই ফাংশনকে Higher Order Function বলা হয়। এবং যে ফাংশনকে Argument হিসেবে Received করে তাকে Callback Function বলা হয়। */

// Callback Function
function square(x) {
  console.log(`Square Of ${x} is ${x * x}`);
}

// Higher Order Function
function higherOrder(num, callback) {
  callback(num);
}

// Called Higher Order Function
higherOrder(5, square);
