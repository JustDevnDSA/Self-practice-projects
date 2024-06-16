// Activating eye icon to see password as plain text and vise versa
eye.addEventListener("click", () => {
  let type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (password.value.length != 0) {
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
  }
});


// Activating remember me icon
checkBox.addEventListener('click',()=>{
    check.classList.toggle("hidden")
})

