const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const countlabel = document.getElementById("count");

let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
} 

decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textcontent = count;
}