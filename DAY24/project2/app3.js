//github

import readline from "readline-sync";
import  axios from "axios";


/* let ask = readline.question("enter name")
console.log(ask) */
let output = axios.get(`https://api.github.com/users/ayeshakhatoon17`)
.then((response)=> {
// to print the whole data
 let data = response.data
  console.log(data);  //.data gives only data if we don't give .data then whole info will get print including browser once 
  console.log(data.id) //data.id to print only id present inside the data
})
.catch((error) =>{
console.log(error,"error")
})