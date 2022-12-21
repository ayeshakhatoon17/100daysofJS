
import readline from "readline-sync";
import color from "cli-color";

function main(){
//colors declaration, writing xterm code of colors to variables 
const red = color.xterm(10);
const blue = color.xterm(153)
const white = color.xterm(15);
const yellow = color.xterm(227).bgXterm(189);;


console.clear()

let menu = ["biryani- 320, \nbutterChicken -180\nchicken65-150"]
let gst = 0.19
let costOfBiryani = (320 + 320 *gst);
let costOfButterchicken = (180 + 180 * gst);
let costOfChicken65 = (150 + 150 * gst);


console.log(yellow("WELCOME!!"))//printing welcome in yellow color
console.log("------------")
console.log(blue("Here is our Menu-"))
console.log("------------")

for(let i=0; i<=menu.length-1;i++){
    console.log(menu[i])
}

let dish1 = readline.question("what you would like to order: ")
console.log("------------")

 if(dish1 == "biryani"){
console.log("Total: ",dish1, costOfBiryani)
}
else if(dish1 == "butterchicken") {
    console.log("Total: ", dish1, costOfButterchicken)
}
else if(dish1 == "chicken65") {
    console.log("Tota:  ",dish1, costOfChicken65)
}
else{
console.log("------------")
console.log(red("we don't have that item presently sorry"))

}
}

main()
