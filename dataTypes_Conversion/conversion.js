let age = "33abc";
let ageNum = Number(age)
//console.log(typeof(ageNum));       // number
//console.log(ageNum);               // NaN

let myAge = null;
let myAgeNum = Number(myAge)
//console.log(typeof(myAge));        // object
//console.log(myAgeNum);             // 0

let isMale = true;
let isMaleNum = Number(isMale)
//console.log(typeof(isMale));        // boolean
//console.log(isMaleNum);             // 1


let isDefined = undefined;
let isDefinedNum = Number(isDefined);
console.log(typeof(isDefined));       // undefined
console.log(isDefinedNum);            // NaN