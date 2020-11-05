const request = require('request');
const args = process.argv.slice(2);


const fetchDocument = function (breed) {
  let url = `https://api.thecatapi.com/v1/brees/search?q=${breed}`
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed Not Found");
    } else if (data.length === undefined) {
      if (data.message.includes('404')) {
        console.log("Whoops URL error: '404'");
      }
    } else {
      console.log(data[0].description);
    }
    // const data = JSON.parse(body);
    // console.log(response.statusCode);
    // console.log('error:', error.errno); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log("+_+_+_+_+_+_+_+_+_+", response.statusCode);   

  });
};

if (args[0]) {
  fetchDocument(args[0]);
}