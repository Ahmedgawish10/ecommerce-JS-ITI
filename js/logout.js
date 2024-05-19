// Retrieve data from local storage
var arrayinputs = localStorage.getItem("inputs")
  ? JSON.parse(localStorage.getItem("inputs"))
  : [];

var btnLogout = document.querySelector("#logout");

btnLogout.addEventListener("click", function () {
  //window.location.href = "index.html";
  console.log(arrayinputs);
 // console.log(localStorage.getItem("inputs"));
  localStorage.removeItem('inputs')
  sessionStorage.clear();
  window.location.href = "login.html"; 


});

