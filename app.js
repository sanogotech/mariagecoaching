// app.js
import { db } from './firebase-config.js';
import { addDoc, collection } from 'firebase/firestore';

async function loadQuestions() {
    const response = await fetch('questionmariage.json');
    const data = await response.json();
    const formElement = document.getElementById('form');

    data.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        category.questions.forEach(q => {
            const label = document.createElement('label');
            label.textContent = q.question;
            const select = document.createElement('select');
            select.name = q.id;
            q.options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                select.appendChild(optionElement);
            });
            categoryDiv.appendChild(label);
            categoryDiv.appendChild(select);
        });

        formElement.appendChild(categoryDiv);
    });
}

function calculateScore(answers, questions) {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach(category => {
        category.questions.forEach(question => {
            const answer = answers[question.id];
            const optionIndex = question.options.indexOf(answer);
            const score = (optionIndex + 1) * question.weight;
            totalScore += score;
            maxScore += question.weight * question.options.length;
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

    await addDoc(collection(db, 'responses'), { answers, totalScore, recommendation });

    alert(`Votre score est ${totalScore}. Recommandations: ${recommendation}`);
});

