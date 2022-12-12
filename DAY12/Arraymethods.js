// array methods
//1. at()

const arr = ["ayesha", "khatoon", "aye"]
console.log(arr.at(1)) // at index 1 value is ayesha
console.log(arr[2]) // at index 2 value is aye
console.log(arr[3]) // returns undefined

//2. concat() - used to merge 2 arr into 1
// syntax : arr1.concat(arr2)

const even =[1, 3 , 5, 9]
const odd =[11, 4 , 6, 10]
console.log(even.concat(odd))

//3. fill() - used to change all values into 1 value
//syntax: arrname.fill("value")
const names =["Ayesha", "Khatoon", "hehe"]
let output =names.fill("hahaha")
console.log(output)   // [ 'hahaha', 'hahaha', 'hahaha' ]

  // to change specific value
names[2] = "Ayesha" // it changes value of index 2(hahaha) into Ayesha
console.log(names) //[ 'hahaha', 'hahaha', 'Ayesha' ]

//4. flat() - used to convert multi dimensional arr to 1-D arr
   //syntax : arrname.flat()
let hii =[[1, 3], [ 5, 9], [2,3]]
let x = hii.flat() 
console.log(x)// [ 1, 3, 5, 9, 2, 3 ]


//5 . indexOf() to find index of the value
// synatax : arrname.indexOf(value)
const names1 =["izhaan", "zaid", "ibrahim"]
 console.log(names1.indexOf("izhaan"))

