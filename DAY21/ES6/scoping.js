//Scoping are 3 types
//1. block scope
//2. function scope
//3.global scope

//***block scope***
//var can be used inside the block and outside the block
//let and const can't be used out of the block 
{
    var a = 10 
}
console.log(a) // var using outside the block


{
    var b =10 //var using inside the block
    console.log(b)
}