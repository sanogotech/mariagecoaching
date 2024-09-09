// app.js
import CONFIG from './config.js';
import { db } from './firebase-config.js';
import { collection, addDoc } from 'firebase/firestore';

// Fonction pour stocker les réponses
async function storeResponses(answers, score, recommendation) {
    if (CONFIG.storage === 'firebase') {
        await addDoc(collection(db, 'responses'), { answers, score, recommendation });
    } else if (CONFIG.storage === 'localStorage') {
        const storedResponses = JSON.parse(localStorage.getItem('responses')) || [];
        storedResponses.push({ answers, score, recommendation });
        localStorage.setItem('responses', JSON.stringify(storedResponses));
    }
}

function calculateScore(answers, categories) {
    let totalScore = 0;
    let maxScore = 0;

    categories.forEach(category => {
        category.questions.forEach(question => {
            const answer = answers[question.id];
            if (answer) {
                totalScore += question.options[answer].weight;
                maxScore += question.options.reduce((sum, opt) => sum + opt.weight, 0);
            }
        });
    });

    return { totalScore, maxScore };
}

function generateRecommendations(score, maxScore) {
    const percentage = (score / maxScore) * 100;
    let recommendation = '';

    if (percentage >= 80) {
        recommendation = 'Vous êtes bien préparés pour le mariage. Continuez à maintenir cette bonne communication et préparation.';
    } else if (percentage >= 60) {
        recommendation = 'Vous êtes sur la bonne voie, mais quelques améliorations sont nécessaires pour une préparation optimale.';
    } else {
        recommendation = 'Il y a des domaines importants à travailler avant le mariage. Nous vous recommandons de consulter un conseiller pour vous aider à améliorer ces aspects.';
    }

    return recommendation;
}

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const answers = {};
    formData.forEach((value, key) => {
        answers[key] = value;
    });

    const response = await fetch('questionmariage.json');
    const data = await response.json();

    const { totalScore, maxScore } = calculateScore(answers, data.categories);
    const recommendation = generateRecommendations(totalScore, maxScore);

    await storeResponses(answers, totalScore, recommendation);

    alert(`Votre score est ${totalScore}. Recommandations: ${recommendation}`);
});
