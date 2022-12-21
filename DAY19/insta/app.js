import readline from "readline-sync";

function main() {
console.log("my instagram login")
let username = readline.question("Enter username ") // readline take default input as string so we have to write Int for taking input as number
let  password = readline.question("Enter password ",{
hideEchoback: true

})
}
main()