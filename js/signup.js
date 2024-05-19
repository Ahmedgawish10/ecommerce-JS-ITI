// information of register
var nameSignup = document.querySelector("#name");
var emailSignup = document.querySelector("#mailforsignup");
var passSignup = document.querySelector("#passforsignup");
var textMessage = document.querySelector(".messagetext");
var btnsign = document.querySelector("#signup");

// signup check if users in local storage get it for futher actions!
var arrayinputs = [];
if (localStorage.getItem("inputs") != null) {
  arrayinputs = JSON.parse(localStorage.getItem("inputs"));
}
// validate sign up form
function validateSignup() {
  var validateInputs = {
    validateName: /^[a-zA-Z ]{3,}$/,
    validateEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validatepass: /^(?=.*[a-zA-Z]|\d).{8,}$/,
  };
  var validName = validateInputs.validateName.test(nameSignup.value); //true ||false
  var validEmail = validateInputs.validateEmail.test(emailSignup.value); //true ||false
  var validPass = validateInputs.validatepass.test(passSignup.value); //true ||false
  return {
    nameValidation: validName,
    mailValidation: validEmail,
    passValidation: validPass,
  };
}
// check if email is exsist!
function isEmailExists(email, array) {
  for (var i = 0; i < array.length; i++) {
    const emailExists = array.find((user) => user.mail == emailSignup.value);
    if (emailExists) {
      return true;
    } else {
      return false;
    }
  }
}
btnsign.addEventListener("click", function () {

  var validation = validateSignup();

  if (emailSignup.value == "" && passSignup.value == "") {
    textMessage.innerHTML = "All fileds requird !";
    textMessage.style.color = "red";
    return 0;
  }
  else if (
    validation.nameValidation &&
    validation.mailValidation &&
    validation.passValidation
  ) {
    // if email  used  before fire this mssg and not add this user to local storage
    if (isEmailExists(emailSignup.value, arrayinputs)) {
      textMessage.textContent= "Email Already Exists";
      textMessage.style.color = "red";
    } 
    // if email not used  before fire this and  add user in localstorage
    else {
      var data = {
        name: nameSignup.value,
        mail: emailSignup.value,
        pass: passSignup.value,
      };
      arrayinputs.push(data);
      localStorage.setItem("Users", JSON.stringify(arrayinputs));
      textMessage.textContent = "Success";
      textMessage.style.color = "#4BB543";
      clearInputs();
       window.location.href="login.html"
    }

  } 
  //if there any thing errors in validation name and  email and password  fire this msg
  else {
    textMessage.textContent = "Plz Enter Valid Information";
    textMessage.style.color = "red";
  }
});
// clear all input after user sign up
function clearInputs() {
  nameSignup.value = "";
  emailSignup.value = "";
  passSignup.value = "";
}
