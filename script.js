

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