import question from "readline-sync";
function main(){
console.clear()
let a = question.question("Enter the string to encode in base64 : ")
        console.log("Split String: ", a.split("")) //splitting the String into substring


const copyItems = [];
for(let i =0; i<a.length;i++){
    copyItems.push(a.charCodeAt(i)) //2. converting string into ascii code 
}
console.log(copyItems) //3. printing ascii values in an array


for (let j=0; j<copyItems.length;j++){
console.log((copyItems).toString(2))
}













//3. converting into binary codes

/* const result = ascii().toString(2)
console.log("binary" + "" + result)  */

}

main()