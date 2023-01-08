import axios from "axios";
import readline from "readline-sync"
//method1 - to get profile picture of github in url form
console.clear()
let username = readline.question("Enter your Github username: ")
axios.get(`https://api.github.com/users/${username}`)
.then((response) => {
console.log(response.data.avatar_url)
}
)
.catch((error) => {
console.log("Error, Please give valid input")
})