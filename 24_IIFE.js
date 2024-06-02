               //(IIFE) : Immediately invoked function expression (the function which Invoke immediately)

               //Note:  To remove polution of global scope like variable other function and other declaration etc
               //Note:  when we have to use multiple IIFE (;) is mandatory after IIFE`s End

               //()() synTAX
(function chai(){
    console.log("DB connected");
})();  //Note in IIFE case (;) is mandatory to stop IIFE //khudse nahi lagta


 //Also called Named IIFE (Simple function declate)
( function Show(name){
    console.log(`Db ${name} connected`);
})('Rajat');


 //Also called UnNamed IIFE (When Arrow function declate)
( (name)=>{
    console.log(`Db ${name} connected`);
})('Rajat PS');

         