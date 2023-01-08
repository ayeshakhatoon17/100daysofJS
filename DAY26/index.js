import axios from "axios";
import readline from "readline-sync";
import terminalImage from "terminal-image";
import fs from "fs";
let main = () => {
  console.clear();
  let username = readline.question("Enter your Github username: ");
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      let image = response.data.avatar_url;
      console.log(image);

      axios.get(image, { responseType: "stream" }).then((res) => {
        res.data.pipe(fs.createWriteStream("file.png"));
      });

      terminalImage.file("file.png").then((img)=>{
        console.log(img)
      })

    })
    .catch((error) => {
      console.log("Error, Please give valid input");
    });
};

main();
