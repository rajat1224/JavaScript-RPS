const cart=[{name:"Iphone",price:10,qty:5},
{name:"Iphone",price:10,qty:5},
{name:"Iphone",price:10.6,qty:5}];

let sum=cart.reduce((acc,itr)=> acc+itr.price,10
);   //10 is acc by default value
console.log(sum);


let arr=["rajat","jjj","ggg","kkkkkk"];
console.log(arr.filter((val,index) =>val.length>3));


let arrm=[1,2,[44,55,[77,99]]];
let arx=[];
function nestArray(art)
{
    for(let j=0;j<art.length;j++)
    {
       // console.log(typeof art);
       if(typeof art[j]=="object")
       {
          nestArray(art[j]);
       }
       else{
          arx.push(art[j]);
        }
            //arx.push(art[j]);
    }
}
for(let i=0;i<arrm.length;i++)
{
    //console.log(typeof arrm[i]);
    if(typeof arrm[i]=="object")
    {
        nestArray(arrm[i]);
    }
    else{
        arx.push(arrm[i]);
    }
}



console.log(arx);


