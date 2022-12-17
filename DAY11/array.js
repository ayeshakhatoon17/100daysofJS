/* 1. Array : Array is Collection of Data , elements and items stored in a contigous memory location 
   2. Datatype of an Array is Object
   3. Array is a Data Type Where you can store multiple values at once
   4. Arrays Starts from index 0
   5. array is created by using [] and elements are stored in []
*/
// Creating Arrays Using Array Literals

var evenNum = [2, 4, 6, 8, 10, 12]; // creating an array named "evenNum"
console.log(evenNum);//to print all values present in an array so, it reurns [2.4.6.8.10.12]

 const personDetails = ["Ayesha", "Khatoon", 20, true, "Hyderabad"];
//   indexes             0          1        2    3         4          
 console.log(personDetails[0]); //it prints the value which is present at index 0 i.e "Ayesha"
 console.log(personDetails[4]);// it prints the value which is present at index 4 i.e "Hyderabad"
 console.log(personDetails[2], personDetails[3]); // to access two elements at a time it reurns- 20 true
 console.log(personDetails[4]);
// Add - to add a element in an existing array
personDetails[5] = "iam getting added";  // iam getting add element is added in personDetails Arrays
console.log(personDetails);// to check if the element is added and to print all the elements present in personDetails
personDetails[7] = "i" //at index 7  it adds an element "i" and at index 6 it would be an empty item as we don't have any element at index 6
console.log(personDetails); // it reutns ['Ayesha','Khatoon', 20, true, 'Hyderabad', 'iam getting added', <1 empty item>, 'i' ]


// To update a value
personDetails[0] = "Madeeha"; // at index 0 the value "Ayesha" gets updated to "Madeeha"
console.log(personDetails); 

// Deleting an element from an array 

// 1.From Last - we use pop
// 2.From First - 

// Adding Arrays 
// 1.At First
// 2.At Last 