/*
   1.primitive(call by valye) :-7 types
    string,number,boolean,null,undefined,symbol
    
   2.non-primitive(Reference based) :-
    array,objects,functions
*/

//symbol use
const id=Symbol("123");
const anotherid=Symbol("123");

console.log(id==anotherid); //false
console.log(id===anotherid); //false

//bigint
const bigInt=5465454655467n;
console.log(bigInt);
console.log(typeof bigInt); //bigint

//object
let obj={
    name:"ggg",
    age:55
}
console.log(obj);
console.log(typeof obj);

//function
let fun=function(){console.log("hii");}
console.log(fun);
console.log(typeof fun); //called functional object