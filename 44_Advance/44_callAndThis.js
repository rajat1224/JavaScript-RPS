function setUsername(userName)
{
    //complex calculation db calls
    this.userName=userName;
    console.log("called");
}


function createUser(userName,email,password){
  
    //setUsername(userName);
  setUsername.call(this,userName); //to set user name in createUser  function this not in setUsername this  
  this.email=email;
  this.password=password;
        

}


const chai=new createUser("chai","chai@gmail.com","12300");
console.log(chai);