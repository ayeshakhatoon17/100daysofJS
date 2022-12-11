/* &	Bitwise AND
|	Bitwise OR
^	Bitwise XOR
~	Bitwise NOT
<<	Left shift
>>	Sign-propagating right shift */


/*  bitwise AND ( is multiplication) if any 0 is present then output would be 0

Let's take a look at the bitwise AND operation of two integers 12 and 25.

In binary,

12 = 01100
25 = 11001

// Bitwise AND Operation of 12 and 25

    00001100
&   00011001
    ---------
    00001000  = 8 (In decimal) */

    let c= 12; 
    let d = 25; 
    
    result = c & d; 
    console.log(result); // 8 

  /*  Bitwise OR (addition) if any 1  present then output would be 1
  
  
  In binary,

   12 = 01100
   25 = 11001

   // Bitwise OR Operation of 12 and 25

       00001100
    |  00011001
       --------
       00011101  = 29 (In decimal)
  */
     
       let a = 12; 
       let  b = 25; 

       result = a | b; 
       console.log(result); // 29 


/* JavaScript Bitwise XOR
Bitwise XOR ^ returns 1 if the corresponding bits are different and returns 0 if the corresponding bits are the same.

In binary,

12 = 01100
25 = 11001

// Bitwise XOR Operation of 12  and 25

    00001100
^   00011001
    --------
    00010101  = 21 (In decimal)

*/  
//XOR ex

let e = 12; 
let f = 25; 
result = e ^ f; 
console.log(result); // 21

/* JavaScript Bitwise NOT
Bitwise NOT ~ inverts the bit( 0 becomes 1, 1 becomes 0).

In binary,

12 = 00000000000000000000000000001100

// Bitwise Not Operation of 12 

    ~ 00000000000000000000000000001100
      ---------------------------------
      11111111111111111111111111110011  = -13(In decimal */

  // NOT ex:
      let  h = 12;
      result = ~h;
      console.log(result); // -13

//left shift operator

console.log(9 << 2);
/*9 is a number and 2 is a position, 9 is moving to position 2 
9 in binary is 1001 and is moving to position 2 so add two more zeros after nine i.e
100100 i.e 36 in decimal. it returns 36  */


console.log (9 << 3);
/*9 is a number and 3 is a position, 9 is moving to position 3
9 in binary is 1001 and is moving to position 3 so add three more zeros after nine i.e
1001000 i.e  72 in decimal
it returns 36  */

// Right Shift Operator

    console.log(9 >> 2) // position is 2 so it takes down last two binary values i.e  from 1001 it takes down 01
                         //which is in binary which means 2 in decimal so it reutrns 2
    console.log(11 >> 3)
    // 11 in binary is 1010 , position is 3 so it takes down last 3 values and only 1 remains where 1 si 1 in decimals
   
   
// To get binary number of a decimal number - 
   console.log((9).toString(2)) // it returns 1001 as binary no of 9 is 1001

// To get decimal of Binarynumber
   console.log((0b1001).toString(10))


   /*  2's complement of abinary number is 1's complement of given number + 1
   ex 
     1's complement of 110010 is 001101 
      2's complement of 110010 is 001110 */