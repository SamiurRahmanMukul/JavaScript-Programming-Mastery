/*Title: jQuery Ajax
  Description: jQuery Ajax is used to API calling and data fetching
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

/* // ? jQuery Ajax -->
  add jquery library cdn
  ajax - asynchronous javascript and xml */

const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

// ? make a getData() function to get data from API server
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then((res) => console.log(res));
};

getData();

// ? make a createData() function to post data to API server
const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
    id: 1,
    title: "This is a title",
    body: "This is a body",
    userId: 1,
  }).then((res) => console.log(res));
};

// createData();

// ? make a deleteData() function to delete data from API server
const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then((res) => console.log(res));
};

// deleteData();
