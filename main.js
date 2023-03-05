// Navbar
var btn_icon = document.querySelector(".nav-icon-2");
var btn = document.querySelector(".nav-right");

btn.onclick = function() {
    btn.classList.toggle("d-block")
    btn_icon.classList.toggle('width-100')
}

var btn = document.querySelector(".nav-right ul");

btn.onclick = function() {
    btn.classList.toggle("d-block")
    btn_icon.classList.toggle('width-100')
}

