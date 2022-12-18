/*
try{} statement: Here, the code which needs possible error testing is kept within the try block. In case any error occur, 
                it passes to the catch{} block for taking suitable actions and handle the error. Otherwise, it executes the code written within.
catch{} statement: This block handles the error of the code by executing the set of statements written within the block. 
                   This block contains either the user-defined exception handler or the built-in handler. 
                   This block executes only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.

syntax:
try {
    // main code is inside the try block
} catch (error) {
    // the catch block handles the error with giving you the catch statements
} */


let a = 1 , b = 2;

try {
   console.log(a+b); // 3
   console.log(c); // undefined so it gives error
} catch (error) { //catch catches error and prints rest of the code
   console.log("Error Message: ", error);// you can customize error message
}
