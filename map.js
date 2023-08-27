const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = nums.map( (no) => no + 10);
//console.log(newNums);

// Chaining

const newNums = nums.map( (no) => no * 10).map( (nu) => nu + 1).filter( (nx) => nx > 41);

console.log(newNums);