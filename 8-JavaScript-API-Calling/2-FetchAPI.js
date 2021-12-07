/*Title: Fetch API
  Description: Fetch API - JavaScript API for making HTTP requests
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

/* // ? Fetch API - Fetching data from a server
  fetch() has replaced XMLHttpRequest
  fetch() - global method for making HTTP Request
  2 ways to call - then, async await

  + fetch() is easy to use compare to XMLHttpRequest
  + fetch() returns a promise
  - returned promise can only handle network error
  - does not support all the older browser */

// ? method for making HTTP Request
const makeRequest = async (url, config) => {
  const res = await fetch(url, config);

  if (!res.ok) {
    const message = `Error : ${res.status}`;
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

// ? make a getData() function to get data from the API server
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

getData();

// ? make a sendData() function to send data to the API server
const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// sendData();

// ? make a updateData() function to update data to the API server
const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "Hello World",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// updateData();

// ? make a deleteData() function to delete data to the API server
const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// deleteData();
