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
//console.log(typeof(isDefined));       // undefined
//console.log(isDefinedNum);            // NaN

// Convert When Number Method is applied
// "33"       =>    33
// undefined  =>    NaN
// "33abc"    =>    NaN
// true       =>    1
// false      =>    0
// null       =>    0


let isLoggedIn = 1;
let isLoggedInBool = Boolean(isLoggedIn);
//console.log(isLoggedInBool);            // true

let emptyStr = "";
let emptyStrBool = Boolean(emptyStr);
//console.log(emptyStrBool);              // false

let string = "HelloWorld!"
let stringBool = Boolean(string);
//console.log(stringBool);                // true

// Convert When Boolear Method is applied
// ""           =>      false
// "Hello"      =>      true
// 1            =>      true
// 0            =>      false

let someNum = 123;
let stringNum = String(someNum);
console.log(stringNum);                  // 123
console.log(typeof stringNum);           // string