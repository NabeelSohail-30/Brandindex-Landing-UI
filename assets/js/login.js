const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const footer = document.getElementById("footer");
const login_nav = document.getElementById("login-nav");
const register_nav = document.getElementById("register-nav-bar");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  footer.style.display = "block";
  login_nav.style.display = "block";
  register_nav.style.display = "none";
});

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  //   footer.style.display = "none";
  login_nav.style.display = "none";
  register_nav.style.display = "block";
});

let eyebtn = document.querySelector(".eye");
let inp_pass = document.querySelector(".pass");

if (eyebtn && inp_pass) {
  eyebtn.addEventListener("mousedown", () => {
    inp_pass.type = "text";
    eyebtn.src = "./assets/images/view.png";
  });
  eyebtn.addEventListener("mouseup", () => {
    inp_pass.type = "password";
    eyebtn.src = "./assets/images/hidden.png";
  });
}
