//Arrow functions allow us to write shorter function syntax:
//If you have parameters, you pass them inside the parentheses:
//Arrow Function With Parameters:
/*
Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
 Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.
hello = (val) => "Hello " + val; */
// Before ARROW
hello = function() {
    return "Hello World!";
  }

// with arrow function 
hello = () => {
    return "Hello World!";
  }

// without return keyword
hello = () => "Hello World!"; //This works only if the function has only one statement.

//If you have parameters, you pass them inside the parentheses:

//Arrow Function With Parameters:
hello = (val) => "Hello " + val;