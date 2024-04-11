let str="abc";
str='abcd';
console.log(str);

//string interpolation
console.log(`hello this is rajat=> ${str}`);

let gameName=new String("Pubg");
let gameName2=new String("Pubg");
console.log(gameName);
console.log(gameName==gameName2);
console.log(gameName===gameName2);

console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName2.charAt(1));
console.log("Index of 'G' is :"+gameName2.indexOf('g'));

console.log(gameName.substring(0,2));
console.log(gameName.substring(-2,2));
console.log(gameName.slice(-2,4));

console.log(gameName.replace('b','aa'));
console.log(gameName);

gameName=" game ";
console.log(gameName.trim());
console.log(gameName.trimStart());
console.log(gameName.trimEnd());

let url="https://google.com/rajat%24";
console.log(url.replace('%',''));
console.log(url.includes('rajat'));
console.log(url.split('/'));

//console.log(blur(url));