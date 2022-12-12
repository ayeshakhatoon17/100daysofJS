/* Non primitive datatypes are two types Object, Array */

/* Objects in JS 
 1.An object is a collection of properties, it is a collection of key-value pairs
 2.An object is a complex, reference datatype
 3. objects is usually declared using curly braces{} 
 */

 // creating an empty object

let  obj = {} //nothing is written in braces so it is an empty obj; onj in code is object name
 console.log(obj)// it reutns {}

 // creating a obj named person

let person ={
name : "Ayesha",
age : 20,
occupation : "student"
 }
console.log(person)
console.log(typeof person) // to know the datatype of person

// creating object under object

let person1 ={
    name : "Ayesha",
    age : 20,
    occupation : "student",
  education: { // creating obj name education inside the person1 obj
    course : "B.E",
    Dept : "IT"
  }
}
console.log(person1)


//to add a element in existing object
//syntax: objname.addingkey = value;
let person2 ={
    name : "Ayesha",
    age : 20,
    occupation : "student"
     }
person2.mailid = "ayeshaakhatoon.ak@gmail.com";

console.log(person2)

// to update a value in object
//synatx : objname.wanttoupdatekey = updated value
let person3 ={
    name : "Ayesha",
    age : 20,
    occupation : "student",
    mailid : "ayeshaakhatoon.ak@gmail.com"
}
person3.name = "Ayesha Khatoon" // name gets updated from Ayesha to Ayesha Khatoon
console.log(person3)
 

// to delete an object
//syntax delete objname.key
let person4 ={
    name : "Ayesha",
    age : 20,
    occupation : "student",
    mailid : "ayeshaakhatoon.ak@gmail.com"
}
delete person4.age; //age gets deleted
console.log(person4)

// To check if the property exists or not we use in operator

console.log("name" in person4)// it checks if name property is present in person4 if yes it returns true or else it reutns false
