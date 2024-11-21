
const menuCrose = document.getElementById('nav-swap-for-mobile')
const navMenuForMobile = document.getElementById('nav-menu-for-moble')
let toggle = true;



const navMenuHandler = () => {
    if (toggle) {
        navMenuForMobile.style.display = 'flex'
        toggle = false;
    } else {
        navMenuForMobile.style.display = 'none';
        toggle = true;
    }
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20, },
        768: { slidesPerView: 3, spaceBetween: 10, },
        1024: { slidesPerView: 4, spaceBetween: 15, },
    },
});


