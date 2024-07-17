class User
{
    constructor(name){
         this.name=name;
    }

    logMe(){
        console.log(this.name);
    }

    static createId(){
        return '123';
    }

}

const chai=new User('rajat');
chai.logMe();
//console.log(chai.createId());  //wll throw an error


class Teacher extends User{

    constructor(name,email,password){
        //this.name=name;  
        super(name);  //to call parent constructor imp
        this.email=email;
        this.password=password;
   }


}

const chai2=new Teacher('rajat2','rajat2@gmail.com','234');
//chai2.addCourse();
chai2.logMe();
//console.log(chai.createId());  also can not access in child class 