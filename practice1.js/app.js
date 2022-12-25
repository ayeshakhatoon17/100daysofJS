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


//4. converting into binary code and pushing in array
const array =[];
for (let j=0; j<copyItems.length;j++){
array.push((copyItems[j]).toString(2))
}
console.log(array)

//5. converting it into 8 bit
for(let k=0; k<array.length;k++){
array[k]= array[k].toString(2).padStart(8,"0")
}
console.log(array)

//6. splitting binary into 6 bits

console.log("6 bits",array.split("6"))








}

main()