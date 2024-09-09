// dashboard.js
import CONFIG from './config.js';
import { db } from './firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

async function loadResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (CONFIG.storage === 'firebase') {
        const querySnapshot = await getDocs(collection(db, 'responses'));
        querySnapshot.forEach(doc => {
            const data = doc.data();
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');
            resultDiv.innerHTML = `
                <h4>Réponse ID: ${doc.id}</h4>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
            resultsDiv.appendChild(resultDiv);
        });
    } else if (CONFIG.storage === 'localStorage') {
        const storedResponses = JSON.parse(localStorage.getItem('responses')) || [];
        storedResponses.forEach((data, index) => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');
            resultDiv.innerHTML = `
                <h4>Réponse ID: ${index + 1}</h4>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `;
            resultsDiv.appendChild(resultDiv);
        });
    }
}

loadResults();
