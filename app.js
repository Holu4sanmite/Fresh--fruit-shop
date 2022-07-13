// for search toggle
let searchForm = document.querySelector (".search-form");

document.querySelector("#search-btn").onclick = () =>{
   searchForm.classList.toggle("active");
   shoppingCart.classList.remove("active");
   loginForm.classList.remove("active");
   navBar.classList.remove("active");
};


// shopping cart toggle
let shoppingCart = document.querySelector (".shopping-cart");

document.querySelector("#cart-btn").onclick = () =>{
   shoppingCart.classList.toggle("active");
   searchForm.classList.remove("active");
   loginForm.classList.remove("active");
   navBar.classList.remove("active");
};

// login form

let loginForm = document.querySelector (".login-form");

document.querySelector("#login-btn").onclick = () =>{
   loginForm.classList.toggle("active");
   searchForm.classList.remove("active");
   shoppingCart.classList.remove("active");
   navBar.classList.remove("active");
};

// menu button for media query
let navBar = document.querySelector (".navbar");

document.querySelector("#menu-btn").onclick = () =>{
   navBar.classList.toggle("active");
   searchForm.classList.remove("active");
   shoppingCart.classList.remove("active");
   loginForm.classList.remove("active");
};


window.onscroll = () =>{
   searchForm.classList.remove("active");
   shoppingCart.classList.remove("active");
   loginForm.classList.remove("active");
   navBar.classList.remove("active");
};


var swiper = new  Swiper(".product-slider", {
   loop:true,
   spaceBetween: 20,
   observer:true,
   observeParents:true,
   autoplay: {
      delay:7500,
      disableOnInteraction:false,
   },
   centeredSlides:true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });