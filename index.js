const fetchBreedDescription = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});









// let name = 'stephan';
// let age = 33;

// const sayHello = (name) => {
//   console.log(name);
// };

// sayHello(name);


// const myForEach =  function(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// };

// myForEach(["eggs", 'milk'], (item, index) => {
//   console.log(item, index);
// });