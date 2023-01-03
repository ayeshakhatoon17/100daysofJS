//A promises is a place holder for a certain period of time ...which will
//be filled with value later from asynchronous operations

// a container for future value

let data = new Promise((resolve, reject) => {
    resolve();
    reject();
});
// the above code is syntax it's compulsary

data 
.then(() =>{
    console.log("Iam hello is all ok then go to next")

})
.then(() =>{
    console.log("Iam next")

}
)
.catch(() =>{
console.log("you've error, so i am running")
}
);

// A promise has 3 stages
/*
pending   -
fulfilled -
rejected - .catch is executed  */