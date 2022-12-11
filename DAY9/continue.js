/*  continue statement : The continue statement is used to skip the current iteration of the loop and 
the control flow of the program goes to the next iteration.

syntax of continue statement 
continue [label]; label is optional */

for(i =1 ; i<=10; i++){
    // to not print 2x 3 but want to print remaining values
    if(i==3){
       continue;
    }
       console.log(`2 x ${i} = ${2*i}`)
   }