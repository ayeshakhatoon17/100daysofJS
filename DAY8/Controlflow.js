// if Statement
/*  In If statement the condition is evaluated to true, the code inside the body of if is executed.
or else it is not executed
if statements are written {} - block
*/

let a = 20 ;
if (a>10){
    console.log("the above condition is true")
}

let b = 30 ;
if(b<10){
    console.log("the above condition is true") // nothing is going to be printed because statement is false
}

// if - else statement 
/*  In If -else statement the condition is evaluated to true, the code inside the body of if is executed.
or else statement is executed
if statements are written {} - block */

let d = 0 ;
if (d>10){
    console.log("the above condition is true")
}
else {
console.log("the above condition is false")
}
// reurns else staement



// if else -if statements
/* if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
} 
If condition1 evaluates to true, the code block 1 is executed.
If condition1 evaluates to false, then condition2 is evaluated.
If the condition2 is true, the code block 2 is executed.
If the condition2 is false, the code block 3 is executed.
*/

// check if the number if positive, negative or zero
const number = 100;

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}
