var x = document.getElementById("register")
var y = document.getElementById("login")

function register() {
    x.classList.remove("hide")
    y.classList.add("hide")
}

function login() {
    x.classList.add("hide")
    y.classList.remove("hide")
}