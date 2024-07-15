// document.addEventListener("DOMContentLoaded",function(){
//     let text1=document.querySelector(".home-text");
//     setTimeout(function(){
//         text1.classList.add("visible");
//     },1000);
// })

document.addEventListener("DOMContentLoaded",function(){
    let text1=document.querySelector("#home");
    setTimeout(function(){
        text1.classList.add("visible");
    },1000);
})

// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector("nav");
//     const sticky = navbar.offsetTop;

//     if (window.pageYOffset > sticky) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// });

window.addEventListener('scroll', function() {
    const about = document.querySelector("#about");
    const fad = about.offsetTop;

    if (window.scroll) {
        about.classList.add('aboutVisible');
    } else {
        about.classList.remove('aboutVisible');
    }
});


// document.addEventListener("DOMContentLoaded", function() {
//     let observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     let container = document.querySelector('.container');
//     observer.observe(container);
// });

