//stack =>for primitive dataType
let name="gdgdghdfh";
console.log(name);
let anothername="rrajat";
console.log(anothername);



//Heap =>for Non primitive data type
let user1={
    name:"rajat",
    age:22
}

let user2=user1;
console.log(user1.name);
console.log(user2.name);

user2.name="Amit";      //reference of 1 so it will change both object value
console.log(user1.name);
console.log(user2.name);