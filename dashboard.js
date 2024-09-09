// dashboard.js
import { db } from './firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

async function loadResults() {
    const querySnapshot = await getDocs(collection(db, "responses"));
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
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
}

loadResults();

