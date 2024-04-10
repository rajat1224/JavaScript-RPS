//let score ="123abd"
//let score =null
//let score =undefined
let score =true
console.log(typeof score);
console.log(typeof(score));

let numScore=Number(score);
console.log(typeof numScore); //number
console.log(numScore);        //"55"=>55 ,"33tt"=>NaN  ,null=>0 ,undefined=>NaN ,true=>1 ,false=> 0

console.log("---------------------------------------");
let enabled=true;
let numEnabled=Number(enabled);
console.log(typeof enabled);
console.log(numEnabled);

console.log("-----------------------------------------");
//let str="gg";
let str="";
let bolStr=Boolean(str);
console.log(typeof bolStr); //boolean
console.log(bolStr);  //""=>false ."hhh" true