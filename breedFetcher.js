const request = require('request');
const args = process.argv;
const breed = args.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (!error) {
    if (data.length === 0) {
      console.log(`${breed} not found`);
    } else {
      console.log(data[0].description);
    }
  } else {
    console.log(error);
  }
});