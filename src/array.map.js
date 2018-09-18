const { pluckProperty, multiplyBy } = require('./functions-return-functions')

// function double(number) {
//   return number * 2
// }

function doubleNumbers(arr){
  return arr.map(number => number * 2) //ES6 anonymous function
  // return arr.map(double)
  // return map(arr, double)
  // const result = []
  // for(const value of arr){
  //   result.push(double(value))
  // }
  // return result;
}

// function pluck(obj) {
//   return obj.name
// }

function pluckName(arr){
  return arr.map(obj => obj.name)
  // return arr.map(pluck)
  // return map(arr, pluck)
  // const result = []
  // for(const value of arr){
  //   result.push(pluck(value))
  // }
  // return result
}

// function merger(obj) {
//   return mail = `Dear ${obj.firstName} ${obj.lastName}, We are contacting you... \n ... Sincerely, ${obj.signature}`
// }

function mailMerge(arr){
  return arr.map(obj => `Dear ${obj.firstName} ${obj.lastName}, We are contacting you... \n ... Sincerely, ${obj.signature}`)
  // return arr.map(merger)
  // return map(arr, merger)
  // const result = []
  // for(const value of arr){
  //   result.push(merger(value))
  // }
  // return result
}

/* //abstraction for the looping of the 3 functions above
function map(arr, fn) {
  const result = []
  for (const value of arr) {
    result.push(fn(value))
  }
  return result
} */

module.exports = {
  doubleNumbers,
  pluckName,
  mailMerge
}
