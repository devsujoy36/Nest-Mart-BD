const menuCrose = document.getElementById('nav-swap-for-mobile')
const navMenuForMobile = document.getElementById('nav-menu-for-moble')
let toggle = true
const navMenuHandler = () => {
    if (toggle) {
        navMenuForMobile.style.display = 'flex'
        toggle = false
    } else {
        navMenuForMobile.style.display = 'none'
        toggle = true
    }
}
var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    effect: 'fade',
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    }
})

var swiper1 = new Swiper('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 15 }
    }
})

let toastContainer = document.getElementById('toast-container')
let successMsg = `<i class="fa-solid fa-circle-check"></i> <span>Added to Cart Successfully</span>`
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i><span> Please Enter a valid Email</h1>`
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i><span>Add to Cart Any Item First</span>`

function showToast(msg) {
    let div = document.createElement('div')
    div.classList.add('toastmaker')
    div.innerHTML = msg
    toastContainer.appendChild(div)
    if (msg.includes('error')) {
        toast.classList.add('error')
    }
    if (msg.includes('shopping')) {
        toast.classList.add('invalid')
    }
    setTimeout(() => {
        div.remove()
    }, 2000)
}

let loader = document.getElementById('preloader-container')
window.addEventListener('load', function () {
    setTimeout(() => {
        loader.remove()
    }, 100)
})
