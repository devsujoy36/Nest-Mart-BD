const usernameField = document.getElementById('username-field');
const passwordField = document.getElementById('password-field');
const submitBtnel = document.getElementById('submit-btn');

const logInContainer = document.getElementById('log-in-container')
const codeContainer = document.getElementById('code-container')





submitBtnel.addEventListener('click', () => {
    let username = usernameField.value;
    let password = passwordField.value;
    console.log(username);
    console.log(password);
    if (username == 'devsujoy36') {
        console.log('Clicked'); 
        codeContainer.style.display = "flex"; 
        logInContainer.style.display = "none"; 
        
        
    } else {
        alert('Enter Valid User & Pass')
    }


})



 