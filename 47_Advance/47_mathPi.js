//  pi=3.141..something
//quertion :- can we change pi value or not if not then why if can then do it.....2
console.log(Math.PI);
Math.PI=5;
console.log(Math.PI); //can not change pi value bcz its constant 


const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

//creating own property

const obj=Object.create(null);
const chai={
    name:'rajat',
    price:200,
    isAvailable:true,

    print:function(){
        console.log("hii");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false,
    
});

console.log(Object.getOwnPropertyDescriptor(chai,'name'));
chai.name="Rajat New" //now you cant change it bcs it is now not writable
console.log(chai.name);

for (let [key,val] of Object.entries(chai)) {
    if(typeof(val) !='function'){
        console.log(`${key}  ${val}`);
    }
    
}
