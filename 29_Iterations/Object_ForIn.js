const obj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in obj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }

    console.log(key);
    console.log(obj[key]);
}

const ar=["kk","kkk","kkkk"];
for (const key in ar) {
   console.log(key);
}