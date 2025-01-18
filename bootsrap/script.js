window.addEventListener("DOMContentLoaded", (event) => {
  var shrinkNav = function () {
    const navSelector = document.body.querySelector("#mainNav");

    if (window.scrollY === 0) {
      navSelector.classList.remove("navbar-shrink");
    } else {
      navSelector.classList.add("navbar-shrink");
    }
  };

  document.addEventListener("scroll", shrinkNav);
});
