//Object de-structure and JSON API

const obj={
    user:"Rajat",
    UserDetails:"ggggg"
}

console.log(obj);
const {UserDetails:ins}=obj;   //called de-structuring
console.log(ins);
console.log();
console.log();

//let fun=({Order})=>{}  //{abc} here it is destructuring

                                                  //Json
                                            //  {
                                            //     "name":"rajat",
                                            //     "age":24,...
                                            //  }
                                                  //or
                                            //[{},{},{}]
