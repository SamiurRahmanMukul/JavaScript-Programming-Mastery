/*Title: Axios JS Library
  Description: Axios JS Library - API calling and data fetch
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 06/12/2021 */

/* // ? axios --> is a JavaScript library
  it helps to make request from browser (Plain JS/Vue/React/Angular), Node.js
  + very easy to use
  + it supports all modern browser including IE
  + it returns promise
  + throws error brilliantly
  + No need to set header cause axios is intelligent */

/* // ? axios --> property & methods
  axios(config)
  axios(url [, config])

  axios.get(url [, config])
  axios.post(url [, config])
  axios.put(url [, config])
  axios.patch(url [, config])
  axios.delete(url [, config])

  axios returns response object - data, status, statusText, headers, config */
const makeRequest = async (config) => {
  return await axios(config);
};

// ? make a getData() function to get data from the  API server
const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

getData();

// ? make a createData() function to post data to the  API server
const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// createData();

// ? make a updateData() function to update data to the  API server
const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "This is a title",
      body: "This is a body",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// updateData();

// ? make a deleteData() function to delete data to the  API server
const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

// deleteData();
