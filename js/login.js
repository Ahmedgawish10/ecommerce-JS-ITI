//   login data
var emailLogin = document.querySelector("#email");
var passwordLogin = document.querySelector("#pass");
var btnLogin = document.querySelector(".login");
var textMessageLogin = document.querySelector(".messagetextlogin");

// get all data from local storage
var arrayinputs = localStorage.getItem("Users")
  ? JSON.parse(localStorage.getItem("Users"))
  : [];
// check if this email user sign up before or no!
function checkEmail() {
  for (var i = 0; i < arrayinputs.length; i++) {
    const emailExists = arrayinputs.find(
      (user) => user.mail == emailLogin.value
    );
    if (emailExists) {
      return true;
    } else {
      return false;
    }
  }
}
// check if this email user idintcal with this password and sign up before or no!
function checkPassword() {
  for (var i = 0; i < arrayinputs.length; i++) {
    const passExists = arrayinputs.find(
      (user) => user.pass == passwordLogin.value
    );
    if (passExists) {
      return true;
    } else {
      return false;
    }
  }
}

// login funcation
btnLogin.addEventListener("click", function () {
  if (emailLogin.value == "" && passwordLogin.value == "") {
    textMessageLogin.innerHTML = "All fileds requird !";
    textMessageLogin.style.color = "red";
    return 0;
  } else if (checkEmail() && checkPassword()) {
    // check of email user and password that logged in now if correct!
    var user = arrayinputs.find((user) =>user.mail === emailLogin.value && user.pass === passwordLogin.value);
    if (user) {
      // set the name user in sessionStorage to access it on home page
      textMessageLogin.innerHTML = "correct user ";
      textMessageLogin.style.color = "green";
      sessionStorage.setItem("currentUser", user.name);
      window.location.href = "index.html";
    }
  } else {
    textMessageLogin.innerHTML = "Invalid Email or Password";
    textMessageLogin.style.color = "red";
  }
});
