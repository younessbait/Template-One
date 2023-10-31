let spn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 500) {
    spn.classList.add("show");
  } else {
    spn.classList.remove("show");
  }
};
spn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};