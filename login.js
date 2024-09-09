// login.js
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error("Erreur de connexion : ", error);
    }
});

