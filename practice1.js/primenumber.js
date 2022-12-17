//prime number has only 2 factors 1 and itself. "2" is only even prime number
// prime number starts from 2


let num = 3; //taking value 10 and checking if it's prime or not
var isPrime = true; //assuming the given no is prime first

for(let i = 2; i<num; i++) //prime 2 se start hora so i =2, we want to check if number is prime or not till num only so i <num
{
    if(num % i == 0)//if num divides with i which can be anything and gives reminder 0 then it's not prime coz it is divisible by that no
{
  isPrime = false; // no is not a prime so we are reurning isPrime as false
}
}
if (isPrime == true){

 console.log(`${num} is a prime number`)
}
else {
console.log(`${num} is n0t a prime number`)

}
