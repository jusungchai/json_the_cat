const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (!error) {
      if (data.length === 0) {
        callback(null, `${breedName} not found`);
      } else {
        callback(null, data[0].description.trim());
      }
    } else {
      callback(error);
    }
  });
};

module.exports = { fetchBreedDescription };

