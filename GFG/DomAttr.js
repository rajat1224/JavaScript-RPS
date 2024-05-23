
let atr=document.querySelector('input[type="password"]');
document.querySelector("h1").innerHTML=atr.getAttribute('type');
atr.setAttribute("type",'text')

let image=document.createElement('img');
console.log(image);
image.setAttribute('src','https://picsum.photos/200/300');

document.querySelector('section').appendChild(image);

document.querySelector('section').append(image);

document.querySelector('section').prepend(image);


// console.log(section);
// console.log(section.childNodes);
// console.log(section.children);