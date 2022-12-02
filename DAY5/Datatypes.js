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
console.log (typeof person1) // typeof is used to check the datatype of data

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

// 3.  Bigint In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you 
//     need to use a larger number than that, you can use the BigInt data type.

     // BigInt value
    const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

/* Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); */
 
// 4. Boolean - boolean represents if the value is true or false

console.log (4 > 5) // reutrns false
console.log (9 < 15) // returns true

// 5. null  in JavaScript, null is a special value that represents empty or unknown value.

const numberr = null;
//The code above suggests that the number variable is empty.
//Note: null is not the same as NULL or Null.

// 6. Undefined

//The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, 
//then the value of that variable will be undefined.

   let name;
   console.log(name); // undefined
// 7. JS Symbol

   //Symbols are immutable (cannot be changed) and are unique. For example,
   // two symbols with the same description

    const value5 = Symbol('hello');
    const value6 = Symbol('hello');

    console.log(value5 === value6); // false
  //Though value1 and value2 both contain the same description, they are different.



