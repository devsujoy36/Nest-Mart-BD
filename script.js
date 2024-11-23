
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

{/* <div class="toast  mb-20 p-2 z-50 bg-white rounded flex flex-row justify-center items-center border font-semibold "><i class="fa-solid fa-circle-check"></i> <span>Added to Cart Successfully</span></div> */ }

let toastBox = document.getElementById('toastbox')

let successMsg = `<i class="fa-solid fa-circle-check"></i> <span>Added to Cart Successfully</span>`
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i><span> Please Fix the error</h1>`
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i><span> If you want to shopping, please add item in cart</span>`

function showToast(msg) {
    // toastBox.innerHTML  = ''
    let toast = document.createElement('div');
    toast.className = 'toast flex-row border ';
    toast.innerHTML = msg;
    toastBox.appendChild(toast)

    if (msg.includes('error')) {
        toast.classList.add('error')
    }
    if (msg.includes('shopping')) {
        toast.classList.add('invalid')
    }
    
    // setTimeout(() => {
    //     toast.remove()

    // }, 3000);
}
showToast(invalidMsg)