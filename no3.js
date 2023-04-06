const fetch = require("node-fetch");

const urls = [
  "https://www.boredapi.com/api/activity",
  "https://www.boredapis.com/api/activity",
  "https://www.boredapis2.com/api/activity",
];

const fetchData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return { data: data, url: url };
    })
    .catch((error) => {
      return { error: error, url: url };
    });
};

Promise.all(urls.map(fetchData))
  .then((results) => {
    const validResult = results.find((result) => !result.error);
    console.log(validResult);
  })
  .catch((error) => console.log(error));
