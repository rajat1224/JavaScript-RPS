//Object =>using literal,using constructor
//singleton(with constructor)

//Object literals =>let obj={};
//object constructor =>Object.create(singleton)

                                             //Object literals

let mySymbol= Symbol("my key1");                                             
let obj={
    name:"Rajat",
    email:"Rajat@gmail.com",
    phone:992777777,
    "age":22,
    age:33,
    "age":44,
    isEnabled:true,
    Days:["sunday","monday"],
    //mySym:mySymbol can not use symbol like this
    [mySymbol]:"key2"
};
console.log(obj);
console.log(obj["name"]);
console.log(obj[1]);
console.log(obj.Days);
console.log(obj.age);
console.log(obj["age"]);
console.log(obj[mySymbol]);

console.log(obj);
obj.name="Rajat pratap";
console.log(obj["name"]);
Object.freeze(obj);     //now you can not change object values
obj.name="rajat ps";
console.log(obj["name"]);

                                 //function inside object
let obj2={name:"kumar"};
obj2.greetings=function(){console.log(`${this.name} GM`)}

console.log(obj2);                                 
console.log(obj2.greetings);                                 
console.log(obj2.greetings());                                 



