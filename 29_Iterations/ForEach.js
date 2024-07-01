const ar=["kk","kkk","kkkk"];

ar.forEach((item)=>
{
    console.log(item);
})

//use this method also
ar.forEach(PrintMe);
function PrintMe(item)
{
    console.log(item);
}

ar.forEach((item,index,arrays)=>
    {
        console.log(item+" "+index+" from array ->"+arrays);
    })