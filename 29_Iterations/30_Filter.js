const myNums=[1,2,3,4,5,6,7,8,9,0];

let fil=myNums.filter((item)=>item>5)
console.log(fil);

let fil2=myNums.filter((item)=>(item<4))
console.log(fil2);

fil2=myNums.filter((item)=>{
    return (item<5)
}
)
console.log(fil2);