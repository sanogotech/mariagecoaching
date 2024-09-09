// login.js
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Identifiants en dur pour exemple
    const validCredentials = {
        'user': 'userpass',
        'admin': 'adminpass'
    };

    if (validCredentials[username] === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'evaluation.html'; // Redirige vers la page d'évaluation
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});
