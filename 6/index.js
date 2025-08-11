//    const : a var that cant be changed

const PI = 3.14159;
let radius;
let circum;

//radius = window.prompt('enter the radius of your circul');
//radius = Number(radius);

//circum = 2 * pi * radius;

//console.log(circum);

document.getElementById("myB").onclick = function(){
    radius = document.getElementById("myI").value;
    radius = Number(radius);

    circum = 2 * PI * radius;
    document.getElementById("myH5").textContent = circum + "cm";
}