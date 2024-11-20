

const menuCrose = document.getElementById('menu-crose')
const navMenuForMobile = document.getElementById('nav-menu-for-moble')

let toggle = true;

menuCrose.addEventListener('click', () => {
    if (toggle) {
        menuCrose.innerHTML = `<img class="active:scale-95 w-10 transition-all border rounded-md" src="/src/assets/crose.svg" alt="">`
        toggle = false;
        navMenuForMobile.style.display = 'flex'

    } else {
        menuCrose.innerHTML = `<img class="active:scale-95 w-10 transition-all border rounded-md" src="/src/assets/menu.svg" alt="">`
        toggle = true;
        navMenuForMobile.style.display = 'none';

    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
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
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
});