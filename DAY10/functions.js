//function is a block of code where you can perform specific task
// function is also keyword
//functions are two types 1. built -in,2. user defined

//user-defined function
// to declare a function
 
    // table example

    function tablegenerator(num, range){
        for (let i=1; i<=range; i++){
            console.log(`${num} x ${i} = ${num *i}`)
        }
     } 
     tablegenerator(9, 10) 

    

     //addition example

     function add(a, b){
        console.log(a + b)
     }
     add(5,12)
    
     
     //  function to find square root values
     function squareroot(num){
        let y;
         y=  Math.sqrt(num)
         console.log(y)
        }
        squareroot(9)
    
    // function to find power

    function power(a,b){
        let y;
         y=  Math.pow(a,b)
         console.log(y)
        }
        power(9,2)
    
   /*  Name generator
     function nameGen(firstname,lastname){
        console.log("my first name is ${firstname}")
        console.log("my lastname  is ${lastname}")

    }
       nameGen(ayesha,khatoon)  */
    // function to find if anumber is even or odd
    function isEven(num){
        if (num % 2 == 0){

            console.log(`number is even ${num}`)
          }
        else{
            console.log(`number is odd ${num}`) 
            }
       }
         isEven(9)

   
    // calling function tablegenerator 

    tablegenerator(2, 10) 

   // calling function isEven
    
   isEven(10)

    