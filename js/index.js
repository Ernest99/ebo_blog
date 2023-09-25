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