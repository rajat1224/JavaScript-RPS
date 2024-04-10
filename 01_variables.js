/*
prefer not to use var.
because of issue in block scope and functional scope.
*/ 

const accountId=123;
//accountId=32;
console.log(accountId);

let Email="abc.gmail.com";
{
    Email="bb.gmail.com";
}
console.log(Email);

var city="delhi";
{
    city="GHZ";
}
console.log(city);

enabled=true;
console.log(enabled);

console.table([accountId,Email,city,enabled]);