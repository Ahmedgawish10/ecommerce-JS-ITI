/*-------------slider1----------------*/
$(document).ready(function (){

    $(".home-slider1").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
/*------------slider2------------*/
$(".home-slider").owlCarousel({
  // loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

})



/*- -----------------burgle minu-----------*/
let together = document.querySelector(".together");
let burgle = document.querySelector(".burgle");
let ico = document.querySelector(".fa-stream");

burgle.addEventListener("click", function () {
  together.classList.toggle("activee");

  if (ico.classList.contains("fa-stream")) {
    ico.classList.replace("fa-stream", "fa-times");
  } else {
    ico.classList.replace("fa-times", "fa-stream");
  }
});

/*--------------scroll to up---------------*/
let upscroller = document.querySelector(".upscroller");
let scroll = document.getElementById("scroll-up");

scroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = function asd() {
  if (window.scrollY >= 300) {
    upscroller.classList.add("show");
    upscroller.classList.remove("hide");
  } else {
    upscroller.classList.add("hide");
    upscroller.classList.remove("show");
  }
};

/*---------------------section of search----------------*/
let search = document.querySelector(".search");
let overlaysearch = document.querySelector(".overlay-search");

search.addEventListener("click", function () {
  overlaysearch.classList.add("overlay-active");
  overlaysearch.classList.remove("overlay-search");
  overlaysearch.classList.remove("hide-parent");
});

overlaysearch.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-search")) {
    overlaysearch.classList.add("hide-parent");
  }
});
/*------------------login form-------------*/

let login = document.querySelector(".profile");
// console.log(login);
let overlayform= document.querySelector(".overlay-form-login");

login.addEventListener("click", function () {
  overlayform.classList.add("overlay-active2");
  overlayform.classList.remove("overlay-form-login");
  overlayform.classList.remove("hide-parent2");
});

overlayform.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-search")) {
    overlayform.classList.add("hide-parent2");
  }
});
/*----------------------examination data form login-------------*/
let formlogin=document.getElementById("form-login")
let user=document.getElementById("user");
let email=document.getElementById("email");
formlogin.addEventListener("submit",function(e){


e.preventDefault()





})











