

const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");


/* =========================
   MOBILE MENU
========================= */

if (menuBtn && closeBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {
        mobileNav.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });

}


/* =========================
   ANNOUNCEMENT CAROUSEL
========================= */

// const slideTrack = document.querySelector(".slide-track");
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");
// const slides = document.querySelectorAll(".slide");

// const totalSlides = slides.length;

// let currentIndex = 0;


// if (slideTrack && nextBtn && prevBtn && totalSlides > 0) {

//     nextBtn.addEventListener("click", () => {

//         currentIndex =
//             (currentIndex + 1) % totalSlides;

//         slideTrack.style.transform =
//             `translateX(-${currentIndex * 100}%)`;

//     });


//     prevBtn.addEventListener("click", () => {

//         currentIndex =
//             (currentIndex - 1 + totalSlides) % totalSlides;

//         slideTrack.style.transform =
//             `translateX(-${currentIndex * 100}%)`;

//     });

// }