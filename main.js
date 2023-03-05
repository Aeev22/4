// Navbar
var btn_icon = document.querySelector(".nav-icon-2");
var btn = document.querySelector(".nav-right");
var btn2 = document.querySelector(".nav-right ul");

btn.onclick = function() {
    btn2.classList.toggle("d-block")
    btn_icon.classList.toggle('width-100')
}
