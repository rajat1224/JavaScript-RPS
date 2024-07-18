class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return this._password.toUpperCase()+"hitesh";
    }

    set password(value){
        this._password=value;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }
}

let obj=new User("abc@gmail.com",'abc');
console.log(obj.password);
console.log(obj.email);