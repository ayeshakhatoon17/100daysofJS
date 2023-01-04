//suhail's link 

import readline from "readline-sync";
import  axios from "axios";


/* let ask = readline.question("enter name")
console.log(ask) */
let output = axios.get("http://124.123.41.139/")
.then((response)=> {
// to print the whole data
  console.log(response.data);  //.data gives only data if we don't give .data then whole info will get print including browser once

//to print only emails of the data 
for(let i  of response.data){
    console.log(i.email)
}  

//to print only even numbers id data
for(let i  of response.data){
    if(response.data.id %2 ==0){
console.log (response.data)
    }
    
} 

})
.catch((rejected) =>{
console.log(rejected,"error")
}
)