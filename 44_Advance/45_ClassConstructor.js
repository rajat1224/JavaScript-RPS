//ES6
class User
{
    constructor(name,email,password){
         this.name=name;
         this.email=email;
         this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;

    }

    changeUsername(){
        return `${this.name.toUpperCase()}`
    }
}

const chai=new User('rajat','rajat@gmail.com','234');
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scene

function userDtl(name,email,password){

    this.name=name;
    this.email=email;
    this.password=password;

}

const tea=new userDtl('rajat2','rajat2@gmail.com','234');
userDtl.prototype.encryptPassword=function(){
    return `${this.password}abc`;

}
userDtl.prototype.changeUsername=function(){
    return `${this.name.toUpperCase()}`
}

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
