                                        /*Control Flow or Logic Control*/

if(true){console.log('If else controls');}
else{console.log("false");}

//== vs ===(strict equals)
if(2=='2'){console.log("Matched"+ 2=='2');}
if(2==='2'){console.log("Matched" + 2==='2');}

//Swich Case
let key=5;
switch(key){
    case 1:
        console.log("value is 1");
        break;
    case 5: 
        console.log("value is 5");
        break;
    default:
        console.log("value is default");
        break;
}


let email="";
if(email){console.log("true");}
else{console.log("false");}
/*
   falsy values
    false,"",0,-0,BigInt 0n,"",null,undefined,NaN
*/

   //Nullish coalesing operator (??):null undefined
   let val1;
   //val1=5??10
   val1=null??10??24
   console.log(val1);

   //Terniary operator
   false?console.log("True"):console.log("false");