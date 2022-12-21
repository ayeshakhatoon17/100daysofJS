import readline from "readline-sync";

function main() {
console.clear()
console.log("******")
console.log("my calculator")
console.log("*******")
let a = readline.questionInt("Enter the value of a: ") // readline take default input as string so we have to write Int for taking input as number
let b = readline.questionInt("Enter the value of b: ")
console.log(a*b)
console.log(a%b)
console.log(a+b)
console.log(a-b)
}
main ()