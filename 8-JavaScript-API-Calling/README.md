# JavaScript API (Application Programming Interface) Calling

JavaScript API - JavaScript API is a set of functions that are used to perform certain tasks in JavaScript.

## API Calling in JavaScript - 4 way

- 1. XML HTTP Request
- 2. Fetch API
- 3. Axios JavaScript Library
- 4. jQuery Ajax

## Fetch API - API using fetching data from a server

```sh
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let lists = "";
      data.map((data, index) => {
        lists += `<li>${data.title}</li>`;
      });
      document.querySelector(".container ol").innerHTML = lists;
    });
};

loadData();
```
