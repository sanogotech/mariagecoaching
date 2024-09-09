// evaluation.js
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('loggedInUser');
    if (!username) {
        window.location.href = 'index.html'; // Redirige vers la page de connexion si non connecté
    } else {
        document.getElementById('username-display').textContent = username;
    }

    document.getElementById('start-evaluation').addEventListener('click', () => {
        window.location.href = 'form.html'; // Redirige vers la page du formulaire d'évaluation
    });
});
