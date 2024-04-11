//Array 
  //shallow copy and deep copy
// let myArr=[1,2,3,"Hii",null,undefined];
// console.log(myArr[2]);

let myArr2=new Array(1,2,3,"Hellow",undefined);
console.log(myArr2[0]);


                                        //array methods
myArr2.push(10);
myArr2.push(null);
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

myArr2.unshift(44);
console.log(myArr2);

myArr2.shift(45);
console.log(myArr2);

console.log(myArr2.includes(5));
console.log(myArr2.indexOf(5));

let arr=myArr2.join();
console.log(arr);
console.log(typeof arr);

                                            //slice(start index,end index) and splice(start index,number of item)
                                            //splice changes the original array but slice not
console.log(myArr2);
console.log(myArr2.slice(1,3));

console.log(myArr2);
console.log(myArr2.splice(1,3));

console.log(myArr2);




