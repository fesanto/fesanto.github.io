const btn = document.querySelector(".btn-fixed");
window.addEventListener ("scroll", function (event) {
  if (window.scrollY == 0) {
    btn.classList.remove("visible");
  } else {
    btn.classList.add("visible");
  }
}) 