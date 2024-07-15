const loginSection = document.getElementById('login');
const signupSection = document.getElementById('signup');

function showLogin() {
    loginSection.style.transform = 'translateX(0%)';
    loginSection.style.filter = 'none'; // Remove blur from login section
    signupSection.style.transform = 'translateX(100%)';
    signupSection.style.filter = 'blur(5px)'; // Apply blur to signup section
}

function showSignup() {
    loginSection.style.transform = 'translateX(-100%)';
    loginSection.style.filter = 'blur(5px)'; // Apply blur to login section
    signupSection.style.transform = 'translateX(0%)';
    signupSection.style.filter = 'none'; // Remove blur from signup section
}