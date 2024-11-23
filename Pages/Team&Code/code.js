const usernameField = document.getElementById('username-field');
const passwordField = document.getElementById('password-field');
const submitBtnel = document.getElementById('submit-btn');

const logInContainer = document.getElementById('log-in-container')
const codeContainer = document.getElementById('code-container')

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

submitBtnel.addEventListener('click', () => {
    let username = usernameField.value;
    let password = passwordField.value;
    console.log(username);
    console.log(password);
    if (username == 'devsujoy36' && password == 123) {
        console.log('Clicked'); 
        codeContainer.style.display = "block"; 
        logInContainer.style.display = "none"; 
    } else {
        alert('Enter Valid User & Pass')
    }


})



 