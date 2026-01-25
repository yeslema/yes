// Login Credentials
const CREDENTIALS = {
    email: "yeslema55@gmail.com",
    code: "00000"
};

const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('email').value.trim();
        const codeInput = document.getElementById('code').value.trim();

        if (emailInput === CREDENTIALS.email && codeInput === CREDENTIALS.code) {
            // Success
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'admin.html';
        } else {
            // Error
            errorMsg.style.display = 'block';
        }
    });
}
