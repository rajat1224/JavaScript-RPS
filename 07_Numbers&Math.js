let score=500;
console.log(score);

let score2=new Number(100.82222);
console.log(score2);
console.log(score2.toString().length);
console.log(score2.toFixed(2)); // . ke bad kitna chaia 
console.log(score2.toPrecision(2)); 


let value=10000000;
console.log(value.toLocaleString());
console.log(value.toLocaleString('en-IN'));

//maths
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.abs(3));
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.min(2,3,4,6)); //2
console.log(Math.max(2,3,6)); //6

console.log(Math.random());    //0.something
console.log(Math.random()*10); //num.something

let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

