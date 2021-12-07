/*Title: XMLHttpRequest
  Description: API Calling using XMLHttpRequest
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

/* // ? API Calling using XMLHttpRequest --> 
    event - onload(), onerror()
    property - response, responseText, responseType, responseURL, status, statusText
    function - open(), send(), setRequestHeader() */

const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
      console.log("error is here");
    };

    xhr.send(JSON.stringify(data));
  });
};

// ? make a getData() function to get data from the API server
const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res));
};

getData();

// ? make a postData() function to post data to the API server
const postData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

// postData();

// ? make a updateData() function to update data to the API server
const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooMA",
    body: "barMA",
    userId: 1,
  });
};

// updateData();

// ? make a updateSingleData() function to update single data to the API server
const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "This is changed",
  });
};

// updateSingleData();

// ? make a deleteData() function to delete data to the API server
const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

// deleteData();
