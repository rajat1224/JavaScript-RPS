let arr=["hello",2,3,4];
let arr2=["hello2",2,3,4];

arr.push(arr2);         //does change main array
console.log(arr);
console.log(arr[4]);
console.log(arr[4][0]);


let arr3=arr.concat(arr2); //does`t not change main array
console.log(arr);
console.log(arr3);
console.log(arr[4]);
console.log(arr[4][0]);


let arr55=["hello",2,3,4];
let arr66=["hello2",2,3,4];
let arr4=[...arr55,...arr66];  //spread operator chnage array to one by one values
console.log(arr4);

//IMP
let newArr=[1,2,[33,44],[99,88,[999,888]]];
let newArr3=newArr.flat();
console.log(newArr3);

///is Array and array from
console.log(Array.isArray("hello0")); //false
console.log(Array.from("hello0")); //false
console.log(Array.from({name:"rajat"})); //interesting case of from


//array of
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));