// JavaScript code to create the typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: ["Analysis of research", "reports", "and opinions"],
        typeSpeed: 50,    // typing speed in milliseconds
        backSpeed: 25,    // backspacing speed in milliseconds
        startDelay: 500,  // delay before typing starts in milliseconds
        backDelay: 1000,  // delay before backspacing starts in milliseconds
        loop: true        // loop the animation indefinitely
    };

    const typed = new Typed('#typed-output', options);
});


// back to top
var back_to_top = document.getElementById('toTop');
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        back_to_top.classList.add('showTop');
    }else{
        back_to_top.classList.remove('showTop');
    }
});

var back_to_top = document.getElementById('toTop');
back_to_top.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

let nav_bar = document.getElementById('nav');
window.addEventListener('scroll', function(){
if(this.window.scrollY > 100){
    nav_bar.classList.add('showNav');
}else{
    nav_bar.classList.remove('showNav');
}
});

let menu =  document.getElementById('menu_icon');
let navMenu = document.getElementById('nav_menu');
let listIcon = document.getElementById('list_icon');
menu.onclick = () =>{
    navMenu.classList.toggle('showMenu');
    listIcon.classList.toggle('bi-x');
}

let year = new Date().getFullYear();
document.getElementById('year').textContent = year;

// JS SWIPER
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });