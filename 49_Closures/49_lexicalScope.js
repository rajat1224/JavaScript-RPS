function outer(){

        let name="rajat";
        
        function inner(){
                 let secret="123";
                console.log(name+ " inner fun");       
        }
       
        function inner2(){
           console.log(name+ " inner fun");       
           //console.log(secret+ " inner fun");       //also can not acces sibling properties
       }

        inner();
        inner2();
}

outer();
//console.log("outer scope "+name); //can not access ousize to it scope
//but can not acces outside it scope this process csalled lexical scoping