//prime number has only 2 factors 1 and itself. "2" is only even prime number
// prime number starts from 2


let num = 4; //taking value 10 and checking if it's prime or not
var isPrime = true; //assuming the given nunmber is prime first

for(let i = 2; i<num; i++) //prime 2 se start hora so i =2, we want to check if number is prime or not till num only so i <num
{
    if(num % i == 0)//if num divides with i which can be anything and gives reminder 0 then it's not prime 
{
  isPrime = false; // no is not a prime so we are reurning isPrime as false
}
}
if (isPrime == true){ // if  isPrime is true then the given no is prime and it prints num is a prime

 console.log(`${num} is a prime number`)
}
else { // if isPrime is false then it prints given number is not a prime
console.log(`${num} is n0t a prime number`) 

} 




