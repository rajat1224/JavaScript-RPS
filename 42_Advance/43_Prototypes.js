let myname="Rajat      ";

//console.log(myname.trueLength);
//console.log(myname.trim().length);

let hero={
    name:"rajat"
}

Object.prototype.ShowError=function()
{
    console.log("Hello my name is rajat");
}

hero.ShowError()     //hero have this property              usingobject.prototype.showError()
myname.ShowError();  //astring laso having this property

// 2nd
let ar=[2,3];
Object.prototype.ShowErrorArr=function()
{
    console.log("Hello my name is rajat array");
}

ar.ShowErrorArr();
ar.ShowError();
