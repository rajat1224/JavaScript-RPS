class User
{
    constructor(name){
         this.name=name;
    }

    logMe(){
        console.log(this.name);
    }

}

const chai=new User('rajat');
chai.logMe();


class Teacher extends User{

    constructor(name,email,password){
        //this.name=name;  
        super(name);  //to call parent constructor imp
        this.email=email;
        this.password=password;
   }


   addCourse(){
    console.log("A new course added "+this.name);
   }

}

const chai2=new Teacher('rajat2','rajat2@gmail.com','234');
chai2.addCourse();
chai2.logMe();

console.log(chai2 instanceof Teacher);
console.log(chai2 instanceof User);