import axios from "axios";
import readline from "readline-sync"
//weather app

let city = readline.question("Enter city name: ")
let data = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0f94a0beff21f44f8af332a3a583fe8`)

.then((response)=>{
    console.log(`Weather Report Of ${city}`, response.data)
    let z = response.data.main.temp
     console.log(`Temperature in Farenheit: ${((z - 273.15)* 9/5 +32).toFixed(2)}F`) 
     console.log(`Temperature in Celcius: ${(z - 273.15).toFixed(2)}c`) 
})
.catch((error) =>{
 console.log("Error, Please give a correct input")
})