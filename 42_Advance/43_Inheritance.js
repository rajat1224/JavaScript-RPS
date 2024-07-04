//Inheritance or proto typal inheritance

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TaSupport={
    makeAssignment:"Js assignment",
    fulTime:true,
    __proto__:TeachingSupport
}

const User={name:"google",flag:true}

//inheriting user in teacher 1st
Teacher.__proto__=User;
console.log(Teacher);

//inheriting user in TaSupport 2st
Object.setPrototypeOf(TaSupport,User)
console.log(TaSupport);


let myname="Rajat      ";
String.prototype.trueLength=function(){
    console.log(this.trim().length);
}

"Stringnn".trueLength()






