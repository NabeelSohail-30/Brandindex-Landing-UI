document.addEventListener("DOMContentLoaded", function () {
  const submenuTrigger = document.querySelector(".has-submenu .nav-main");

  submenuTrigger.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});
