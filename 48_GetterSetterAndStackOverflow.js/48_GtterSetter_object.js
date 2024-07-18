const User={
    _email:'hcl@gmail.com',
    _password:'abc',


    get email(){
        return this._email.toUpperCase();
    },

    set email(val){
         this._email=val;
    }
}

const chai=Object.create(User);
console.log(chai.email);