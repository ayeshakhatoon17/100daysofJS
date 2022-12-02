/* Data Types are of two types primitive and non primitive
 primitive datatypes
 1.string - stores textual data
 string data can be written in single quote or double quotes or backticks
  ex: "hello", 'hello',  `hello`
 */
 
const personName ="Ayesha"
const person1 = 'madeeha'
const person2 =`hehe`
console.log(personName);
console.log(person1)
console.log(person2)
console.log (typeof person1)// typeof is used to check the datatype of data

// 2. Number - it represents floating, decimal, integers, exponential numbers

const number1 = 4
const number2 = 10.9
const number3 = 3e5 // 3* 10 ^5  answer would be 3 and 5 zeros (300000)
 console.log(number1)
 console.log(number2)
 console.log(number3)
 console.log(typeof number3)

 /*A number type can also be +Infinity, -Infinity, and NaN
 NaN - not a number, is also a number we get Nan when we do 
 operations between string and number  (except addition)*/

 const number = 5 -"aye"
 console.log(number) // it return NaN 

 const num =  5 + "s"
 console.log(num) // it returns 5s coz addition operation adds string and number