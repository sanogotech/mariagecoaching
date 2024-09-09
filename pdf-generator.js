// pdf-generator.js
import { jsPDF } from 'jspdf';

document.getElementById('export-pdf').addEventListener('click', () => {
    const doc = new jsPDF();

    doc.text('Rapport d\'évaluation', 10, 10);
    const results = document.getElementById('results').innerText;
    doc.text(results, 10, 20);

    doc.save('rapport-evaluation.pdf');
});

