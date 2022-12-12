/*  Do while comes under exit controlled loop, do while gets executed at least once even if the statement is true or false
Syntax : 
 //intialization
do {
    // body of loop 
    // update statement
} while(condition)

*/

// ex -1 (if the condition is true)

let num = 1
do{
    console.log(`3 x ${num} = ${num * 3}`)
    num++
}
while(num <= 10)

// ex-2 (if the condition is false)

let i=5
do{
    console.log("ayesha")
    i++
}
while(i<4) // here the condition is false because we intialized i as "5" and we gave conditon in whle if i is less then 4 then excute but it
           // still got executed once, in do while the statement gets executed first then it checks condition


