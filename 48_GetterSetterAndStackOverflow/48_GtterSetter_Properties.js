
function User(email,password){
   this.password=password;
   this.email=email;

   Object.defineProperty(this,'email',{
       get:function(){
        return this._email;
       },
       set:function(value){
        this._email=value;
       }

   })

   Object.defineProperty(this,'password',{
    get:function(){
     return this._password;
    },
    set:function(value){
     this._password=value;
    }

})
}

let obj=new User("abc@gmail.com","abcd");
console.log(obj.email);
console.log(obj.password);