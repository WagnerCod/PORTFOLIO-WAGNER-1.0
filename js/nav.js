var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("scroll-down");
  } else {
    document.getElementById("navbar").classList.add("scroll-down");
  }
  prevScrollpos = currentScrollPos;
};

