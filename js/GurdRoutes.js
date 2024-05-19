// document.addEventListener('DOMContentLoaded', function() {
//    console.log("g");
   
//    window.location.href = "login.html"; 
   
// });
console.log(sessionStorage);
if (sessionStorage.currentUser) {
    console.log("hi",sessionStorage.currentUser);
    var profile = document.querySelector(".current_user");
    profile.textContent=sessionStorage.currentUser
// console.log(d);
    
}else{
    window.location.href = "login.html"; 

}

