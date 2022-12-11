/* The break statement is used to terminate the loop immediately when it is encountered.
The syntax of the break statement is:
break [label];  // label is optional
*/

for(let i=1; i<= 10; i++)
{
  // to terminate the loop when i=5  
    if (i>= 5){
        console.log ("iam taking a break at 5")
        break;
    }
    console.log(i)
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

while(true) {

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));

    // break condition
    if(number < 0) {
        break;
    }

    // add all positive numbers
    sum += number;

}

// display the sum
console.log(`The sum is ${sum}.`);