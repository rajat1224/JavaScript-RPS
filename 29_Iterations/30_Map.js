const myNums=[1,2,3,4,5,6,7,8,9,0];

let newNums=myNums.map((num)=>num*5);
console.log(newNums);

                                   //chaining IMP RPS
newNums=myNums
              .map((num)=>num*10)
              .map((num)=>num+1);
console.log(newNums);

//map with filter
newNums=myNums
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>50);
console.log(newNums);
