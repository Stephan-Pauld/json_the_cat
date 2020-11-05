const request = require('request');


const fetchBreedDescription = function (breed, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`
  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(data.message, null)
      return;
    }
    if (data.length === 0) {
      callback('Breed Not Found', null);
      return;
    }
    const desc = data[0].description;
    callback(null, desc)

    // const data = JSON.parse(body);
    // console.log(response.statusCode);
    // console.log('error:', error.errno); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log("+_+_+_+_+_+_+_+_+_+", response.statusCode);   

  });
};



module.exports = fetchBreedDescription








