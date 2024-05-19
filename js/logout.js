// Retrieve data from local storage
var allUsers = localStorage.getItem("Users")
  ? JSON.parse(localStorage.getItem("Users"))
  : [];

var btnLogout = document.querySelector("#logout");

btnLogout.addEventListener("click", function () {
  localStorage.removeItem('Users')
  sessionStorage.clear();
  window.location.href = "login.html"; 


});

