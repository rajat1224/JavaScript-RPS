 //Reduce
 const myNums=[1,2,3,9,0];

 let newNums=myNums.reduce((accumulator,currentVal)=>accumulator+currentVal);
 console.log(newNums);

 //accumulator bydefault intial value will be 0 as always.
 newNums=myNums.reduce((accumulator,currentVal)=>accumulator*currentVal);
 console.log(newNums);


 newNums=myNums.reduce((accumulator,currentVal)=>{
    console.log(accumulator);
    return accumulator+currentVal
},10);  //now 10 is intial value here.
 console.log("final value is : "+newNums);

