const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = nums.map( (no) => no + 10);
//console.log(newNums);

// Chaining

const newNums = nums.map( (no) => no * 10).map( (nu) => nu + 1).filter( (nx) => nx > 41);

console.log(newNums);  // [ 51, 61, 71, 81, 91, 101 ]


const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const divideNumByTen = numbers.map( (num) => num / 10);
console.log(divideNumByTen);  // [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]