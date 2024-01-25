let prevScrollpos = window.scrollY;

if (window.innerWidth >= 1024) {
  window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("#nav").style.top = "15px";
    } else {
      document.querySelector("#nav").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };
}
if(window.innerWidth > 767 && window.innerWidth < 1024){
  window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("#nav").style.top = "0px";
    } else {
      document.querySelector("#nav").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  };
}
