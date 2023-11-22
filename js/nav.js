let prevScrollpos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("#nav").style.top = "15px";
    } else {
        document.querySelector("#nav").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}