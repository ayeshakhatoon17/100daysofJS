function a(){
    var a =10;
    console.log(a);
}
a()

//var cannot be accessed outside the function even const and let cannot be accessed
/* function a(){
    var a =10;
   
}
console.log(a);
a() */

//*** let ***

function b(){
    let b =10;
    console.log(b);
}
b()

/*  accessing let outside the function gives us error

function c(){
    let c =30;
}
console.log(c)
c()
 */

//***** const *****

function d(){ //accesing const inside the function
    const e = 2;
    console.log(c);
}
d()


/* function d(){ //accesing const outside the function
    const e = 2;
    console.log(c);
}
d() */

