// Operators
/* 1. Assignment operators
   2. Arithmetic Operators
   3. Comparison Operators
   4. Logical Operators
   5. Bitwise Operators
   6. String Operators
   7. Other operators */
    
   // Assignment operators are used for assigning values
      // assignment operator
      let a = 10;


      // addition assignment 
      a += 5; //a = a+5; 10 +5 
      console.log(a)//15

      // subraction assignment
      a -= 2 // a = a -2; 10+5-2
      console.log(a) //13

      //Multiplication assignment 

       a *= 2 // a = a * 2; 10+5-2 *2
       console.log(a)  // 26


      // division assignment
      a /= 2 // a = a / 2;  26/2
          console.log(a) // 13
    
      //  Remainder Assignment
      a %= 2; // a = a % 2   13%2
      console.log(a) // 1
      
      // Exponentiation Assignment	
      a **= 2; // a = a**2   1 **2
      console.log(a) // 1 square = 1
    
   /*   Arithmetic Operators
    
    +	Addition	x + y
    -	Subtraction	x - y
    *	Multiplication	x * y
    /	Division	x / y
    %	Remainder	x % y
    ++	Increment (increments by 1)	++x or x++
    --	Decrement (decrements by 1)	--x or x--
    **	Exponentiation (Power)	x ** y  */

    let x = 5;
    let y = 3;
    
    // addition
    console.log('x + y = ', x + y);  // 8
    
    // subtraction
    console.log('x - y = ', x - y);  // 2
    
    // multiplication
    console.log('x * y = ', x * y);  // 15
    
    // division
    console.log('x / y = ', x / y);  // 1.6666666666666667
    
    // remainder
    console.log('x % y = ', x % y);   // 2
    
    // increment
    console.log('++x = ', ++x); // x is now 6
    console.log('x++ = ', x++); // prints 6 and then increased to 7
    console.log('x = ', x);     // 7
    
    // decrement
    console.log('--x = ', --x); // x is now 6
    console.log('x-- = ', x--); // prints 6 and then decreased to 5
    console.log('x = ', x);     // 5
    
    //exponentiation
    console.log('x ** y =', x ** y);