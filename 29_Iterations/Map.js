                   //map

const map=new Map();
map.set('IN',"India");
map.set('USA',"United kingdom");
map.set('CH',"China");
map.set('IN',"Bharat");

console.log(map);

console.log("for of");
for (const [key,val] of map) {
    console.log(`Map key is ${key} and value is ${val}`);
    
}
                            //map is not iterable in for in cases
console.log("for In");
for (const key in map) {
    console.log(`Map key is ${key} `);
}