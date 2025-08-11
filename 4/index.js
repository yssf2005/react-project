// how to accept user input


//easy way = window prompt
//pro way = html textbox


//easy way:
//let username;

//username = window.prompt("whats your username?");
//console.log(username);


//pro way:
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello ${username}`
}