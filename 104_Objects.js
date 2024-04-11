const obj=new Object(); //this is a singleton object
const obj2={};          //non singleton object

console.log(obj2);

const ob={
    user:"Rajat",
    UserDetails:{
        age:22,
        address:"delhi",
        EducationDet:{
            college:"IMS",
            Gr:"btech"
        }
    }
}

console.log(ob);
console.log(ob.UserDetails);
console.log(ob.UserDetails.address);
console.log(ob.UserDetails.EducationDet);
console.log(ob.UserDetails.EducationDet?.college);
console.log(ob.UserDetails.EducationDet?.college?.room);

let ob1={1:"rr",2:"ss"};
let ob2={3:"tt",4:"uu"};

let ob3={ob1,ob2};
console.log(ob3);

let ob4={...ob1,...ob2};  //de-structuring   (...)spread operator
console.log(ob4);

                                         //Imp
let ob5=Object.assign(ob1,ob2,{});   //ye sari value ob1 m copy ho rahi hai
//so write it like assign({},object1,object2);
console.log(ob5);
console.log(ob1);  //ob1 me chali gayi hai  can see

console.log(Object.keys(ob5));  //to get all keys of object
console.log(Object.values(ob5));  //to get all values of object
console.log(Object.entries(ob5));  //to convert key value pares as array from object like ex. [["name","rajat"],[]....]

console.log(ob5.hasOwnProperty("4"));   //to check property exist or not exist 
console.log(ob5.hasOwnProperty("6"));   













