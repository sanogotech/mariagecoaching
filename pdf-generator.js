// pdf-generator.js
import { jsPDF } from 'jspdf';
import CONFIG from './config.js';

document.getElementById('export-pdf').addEventListener('click', () => {
    const doc = new jsPDF();
    doc.text('Rapport d\'évaluation', 10, 10);

    const resultsDiv = document.getElementById('results');
    const results = resultsDiv.innerText;
    doc.text(results, 10, 20);

    doc.save('rapport-evaluation.pdf');
});
