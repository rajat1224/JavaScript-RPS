//Dates
let date=new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(typeof date);

console.log("------------------------------");
//let date2=new Date(2023,0,23);
//let date2=new Date("2023-01-21");
let date2=new Date("01-21-2023");
console.log(date2);
console.log(date2.toDateString());
console.log(date2.toLocaleDateString());

let dates= Date.now();
//console.log(dates.getTime());
console.log(Math.floor(Date.now()/1000));//seconds

console.log(new Date().getHours());
console.log(new Date().getSeconds());


console.log(new Date().toLocaleString("default",{
    weekday:"long",
    
}));