  const { notDivisibleBy, scoreBelow,  startsWith} = require('./functions-return-functions');

// function isOdd(value) {
//   return value % 2 === 1
// }

function onlyOdds(arr){
  const result = []
  result = arr.filter(value => value % 2 === 1)
  // return arr.filter(isOdd)
  // return filter(arr, isOdd)
  // for(const value of arr){
  //   if(isOdd(value)){
  //     result.push(value);
  //   }
  // }
  return result;
}

function onlyOdds(arr) {
  return arr.filter(notDivisibleBy(2))
}

// function points(value) {
//   return value.careerPoints < 30000
// }

function hasBelow30000CareerPoints(arr){
  const result = []
  result = arr.filter(value => value.careerPoints < 30000)
  // return arr.filter(points)
  // return filter(arr, points)
  // for(const value of arr){
  //   if(points(value)){
  //     result.push(value);
  //   }
  // }
  return result;
}

function hasBelow30000CareerPoints(arr) {
  return arr.filter(scoreBelow(30000))
}

// function names(str) {
//   return str[0] === 'A'
// }

function firstNameStartsWithA(arr){
  const result = []
  result = arr.filter(str => str[0] === 'A')
  // return arr.filter(names)
  // return filter(arr, names)
  // for(const value of arr){
  //   if(names(value)){
  //     result.push(value);
  //   }
  // }
  return result;
}

function firstNameStartsWithA(arr) {
  return arr.filter(startsWith('A'))
}

// function filter(arr, fn) {
//   const result = [];
//   for (const value of arr) {
//     if (fn(value)) {
//       result.push(value)
//     }
//   }
//   return result;
// }

module.exports = {
  onlyOdds,
  hasBelow30000CareerPoints,
  firstNameStartsWithA
}
