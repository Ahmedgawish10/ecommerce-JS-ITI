var allUsers = localStorage.getItem("Users")
  ? JSON.parse(localStorage.getItem("Users"))
  : [];
console.log(allUsers);
// if (allUsers.length > 0) {
//     console.log(11);
// }

//localStorage.getItem("Users")
if (sessionStorage.currentUser|| allUsers.length > 0) {
    console.log("hi",sessionStorage.currentUser);
    var profile = document.querySelector(".current_user");
    profile.textContent=sessionStorage.currentUser
    document.body.style.display = "block";
// console.log(d);
    
}else{
   window.location.href = "login.html"; 

}

