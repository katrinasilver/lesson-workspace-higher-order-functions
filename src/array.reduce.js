function add(a, b){
  return a + b
}

function sumNumbers(arr){
  return arr.reduce(add, 0)
  // return reduce(arr, add, 0);
  // let result = 0
  // for(const value of arr){
  //   result = add(result, value)
  // }
  // return result
}

function count(acc, ele) {
  if (acc.hasOwnProperty(ele)) {
    acc[ele] = acc[ele] + 1
  }
  else {
    acc[ele] = 1
  }
  return acc
}

function countLetters(str){
  const arr = str.split('')
  return arr.reduce(count, {})
  // return reduce(str, count, {})
  // let result = {}
  // for(const value of str){
  //   result = count(result, value)
  // }
  // return result
}

function groupBy(acc, ele) {
  if (acc.hasOwnProperty(ele.university)) {
    acc[ele.university].push(ele)
  }
  else {
    acc[ele.university] = [ele]
  }
  return acc
}

function groupByUniversity(arr){
  return arr.reduce(groupBy, {})
  // return reduce(arr, groupBy, {})
  // let result = {}
  // for(const value of arr){
  //   result = groupBy(result, value)
  // }
  // return result
}

function reduce(passedIn, fn, initVal) {
  let result = initVal;
  for (const value of passedIn) {
    result = fn(result, value)
  }
  return result
}

module.exports = {
  sumNumbers,
  countLetters,
  groupByUniversity
}
