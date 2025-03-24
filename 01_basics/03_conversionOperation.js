let score = 33
console.log(typeof score); // number
console.log(typeof(score)); // number

let scores = "33"
console.log(typeof scores); // String
console.log(typeof(scores)); // String

let valueInNumber = Number(scores)
console.log(typeof valueInNumber); // number

let value = "33abc"
let valueToNumber = Number(value)
console.log(typeof valueToNumber); // number
console.log(valueToNumber); // NaN (Not a Number)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let boolenIsLogin = Boolean(isLoggedIn)
console.log(boolenIsLogin); // true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber); // 33
console.log(typeof StringNumber); // String


