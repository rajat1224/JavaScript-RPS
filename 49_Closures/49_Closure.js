function outer(){

    let name="rajat";

    function inner2(){
       console.log(name+ " inner fun");       
   }

    return inner2;  //by returning this we are attaching it lexical scope with it like name 
                         // bcz we are using it inside this inner2 function

                         //agar function return karte hai to function hi nahi uska 
                         //lexical scope bhi sath jata hai ya return hota hai
}

const fun=outer()
fun();