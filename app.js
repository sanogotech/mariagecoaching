// Questions en dur
const questions = [
    {
        category: 'Communication',
        question: 'Comment évaluez-vous votre capacité à discuter ouvertement avec votre partenaire ?',
        options: [
            { value: 5, text: 'Excellent' },
            { value: 4, text: 'Bon' },
            { value: 3, text: 'Moyen' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez votre confort avec la communication.'
    },
    {
        category: 'Communication',
        question: 'À quelle fréquence vous sentez-vous écouté(e) par votre partenaire ?',
        options: [
            { value: 5, text: 'Toujours' },
            { value: 4, text: 'Souvent' },
            { value: 3, text: 'Parfois' },
            { value: 2, text: 'Rarement' },
            { value: 1, text: 'Jamais' }
        ],
        weight: 2,
        comments: 'Évaluez la qualité de l’écoute dans votre relation.'
    },
    {
        category: 'Communication',
        question: 'Comment évaluez-vous la gestion des conflits dans votre relation ?',
        options: [
            { value: 5, text: 'Excellente' },
            { value: 4, text: 'Bonne' },
            { value: 3, text: 'Moyenne' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez comment les conflits sont résolus.'
    },
    {
        category: 'Communication',
        question: 'Comment exprimez-vous vos besoins émotionnels à votre partenaire ?',
        options: [
            { value: 5, text: 'Très facilement' },
            { value: 4, text: 'Facilement' },
            { value: 3, text: 'Avec difficulté' },
            { value: 2, text: 'Très difficilement' },
            { value: 1, text: 'Jamais' }
        ],
        weight: 2,
        comments: 'Évaluez votre capacité à exprimer vos besoins émotionnels.'
    },
    {
        category: 'Finances',
        question: 'Comment gérez-vous les finances en couple ?',
        options: [
            { value: 5, text: 'Excellente gestion' },
            { value: 4, text: 'Bonne gestion' },
            { value: 3, text: 'Moyenne gestion' },
            { value: 2, text: 'Faible gestion' },
            { value: 1, text: 'Très faible gestion' }
        ],
        weight: 3,
        comments: 'Évaluez votre gestion des finances.'
    },
    {
        category: 'Finances',
        question: 'Quelle est votre approche des économies et des investissements en couple ?',
        options: [
            { value: 5, text: 'Très proactive' },
            { value: 4, text: 'Proactive' },
            { value: 3, text: 'Passivement proactive' },
            { value: 2, text: 'Peu proactive' },
            { value: 1, text: 'Aucune approche' }
        ],
        weight: 3,
        comments: 'Évaluez votre approche des économies et des investissements.'
    },
    {
        category: 'Finances',
        question: 'Comment prenez-vous les décisions financières importantes en couple ?',
        options: [
            { value: 5, text: 'Ensemble et de manière collaborative' },
            { value: 4, text: 'Ensemble mais avec un peu de désaccord' },
            { value: 3, text: 'Principalement seul(e)' },
            { value: 2, text: 'Souvent en conflit' },
            { value: 1, text: 'Principalement imposé par un partenaire' }
        ],
        weight: 3,
        comments: 'Évaluez la prise de décision financière.'
    },
    {
        category: 'Finances',
        question: 'Comment réagissez-vous aux dépenses imprévues en couple ?',
        options: [
            { value: 5, text: 'Avec calme et préparation' },
            { value: 4, text: 'Avec une légère inquiétude mais préparé' },
            { value: 3, text: 'Avec une certaine anxiété' },
            { value: 2, text: 'Avec beaucoup d’inquiétude' },
            { value: 1, text: 'Très mal, souvent des conflits' }
        ],
        weight: 3,
        comments: 'Évaluez votre réaction aux dépenses imprévues.'
    },
    {
        category: 'Vie quotidienne',
        question: 'Comment gérez-vous les tâches ménagères en couple ?',
        options: [
            { value: 5, text: 'Également partagé et organisé' },
            { value: 4, text: 'Partagé mais parfois désorganisé' },
            { value: 3, text: 'Inégalement partagé' },
            { value: 2, text: 'Majoritairement géré par un partenaire' },
            { value: 1, text: 'Souvent des conflits à ce sujet' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des tâches ménagères.'
    },
    {
        category: 'Vie quotidienne',
        question: 'À quelle fréquence passez-vous du temps de qualité ensemble ?',
        options: [
            { value: 5, text: 'Très fréquemment' },
            { value: 4, text: 'Fréquemment' },
            { value: 3, text: 'Occasionnellement' },
            { value: 2, text: 'Rarement' },
            { value: 1, text: 'Jamais' }
        ],
        weight: 2,
        comments: 'Évaluez la qualité du temps passé ensemble.'
    },
    {
        category: 'Vie quotidienne',
        question: 'Comment planifiez-vous les vacances ou les sorties en couple ?',
        options: [
            { value: 5, text: 'Ensemble et avec enthousiasme' },
            { value: 4, text: 'Ensemble mais avec quelques désaccords' },
            { value: 3, text: 'Principalement un partenaire planifie' },
            { value: 2, text: 'Rarement planifié ensemble' },
            { value: 1, text: 'Aucun plan, souvent des conflits' }
        ],
        weight: 2,
        comments: 'Évaluez la planification des vacances ou sorties.'
    },
    {
        category: 'Vie quotidienne',
        question: 'Comment gérez-vous les horaires et les engagements personnels en couple ?',
        options: [
            { value: 5, text: 'De manière très organisée et coordonnée' },
            { value: 4, text: 'Organisée mais avec des ajustements' },
            { value: 3, text: 'Parfois désorganisée' },
            { value: 2, text: 'Souvent désorganisée' },
            { value: 1, text: 'Très désorganisée avec des conflits' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des horaires et des engagements.'
    },
    {
        category: 'Relation familiale',
        question: 'Comment évaluez-vous l’intégration de votre partenaire dans votre famille ?',
        options: [
            { value: 5, text: 'Parfaite intégration' },
            { value: 4, text: 'Bonne intégration' },
            { value: 3, text: 'Moyenne intégration' },
            { value: 2, text: 'Faible intégration' },
            { value: 1, text: 'Très faible intégration' }
        ],
        weight: 2,
        comments: 'Évaluez l’intégration de votre partenaire dans votre famille.'
    },
    {
        category: 'Relation familiale',
        question: 'Comment gérez-vous les relations avec la famille de votre partenaire ?',
        options: [
            { value: 5, text: 'Très bien' },
            { value: 4, text: 'Bien' },
            { value: 3, text: 'Moyennement' },
            { value: 2, text: 'Mal' },
            { value: 1, text: 'Très mal' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des relations avec la famille de votre partenaire.'
    },
    {
        category: 'Relation familiale',
        question: 'À quelle fréquence votre famille et celle de votre partenaire se rencontrent-elles ?',
        options: [
            { value: 5, text: 'Très fréquemment' },
            { value: 4, text: 'Fréquemment' },
            { value: 3, text: 'Occasionnellement' },
            { value: 2, text: 'Rarement' },
            { value: 1, text: 'Jamais' }
        ],
        weight: 2,
        comments: 'Évaluez la fréquence des rencontres entre les familles.'
    },
    {
        category: 'Relation familiale',
        question: 'Comment gérez-vous les différences de culture ou de traditions entre vos familles ?',
        options: [
            { value: 5, text: 'Très bien' },
            { value: 4, text: 'Bien' },
            { value: 3, text: 'Moyennement' },
            { value: 2, text: 'Mal' },
            { value: 1, text: 'Très mal' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des différences culturelles ou traditionnelles.'
    },
    {
        category: 'Problèmes personnels',
        question: 'Comment gérez-vous le stress personnel dans votre relation ?',
        options: [
            { value: 5, text: 'Très bien' },
            { value: 4, text: 'Bien' },
            { value: 3, text: 'Moyennement' },
            { value: 2, text: 'Mal' },
            { value: 1, text: 'Très mal' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion du stress personnel.'
    },
    {
        category: 'Problèmes personnels',
        question: 'Comment évaluez-vous le soutien de votre partenaire dans les moments difficiles ?',
        options: [
            { value: 5, text: 'Exceptionnel' },
            { value: 4, text: 'Très bon' },
            { value: 3, text: 'Bon' },
            { value: 2, text: 'Moyen' },
            { value: 1, text: 'Faible' }
        ],
        weight: 2,
        comments: 'Évaluez le soutien de votre partenaire dans les moments difficiles.'
    },
    {
        category: 'Problèmes personnels',
        question: 'Comment gérez-vous les désaccords ou conflits personnels ?',
        options: [
            { value: 5, text: 'De manière très constructive' },
            { value: 4, text: 'De manière constructive' },
            { value: 3, text: 'Avec certaines difficultés' },
            { value: 2, text: 'De manière conflictuelle' },
            { value: 1, text: 'Très conflictuelle' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des désaccords ou conflits personnels.'
    },
    {
        category: 'Problèmes personnels',
        question: 'Comment évaluez-vous l’équilibre entre vie professionnelle et vie personnelle ?',
        options: [
            { value: 5, text: 'Très équilibré' },
            { value: 4, text: 'Bien équilibré' },
            { value: 3, text: 'Moyennement équilibré' },
            { value: 2, text: 'Peu équilibré' },
            { value: 1, text: 'Très déséquilibré' }
        ],
        weight: 2,
        comments: 'Évaluez l’équilibre entre vie professionnelle et vie personnelle.'
    },
    {
        category: 'Problèmes personnels',
        question: 'Comment gérez-vous les changements importants dans votre vie personnelle ?',
        options: [
            { value: 5, text: 'Avec beaucoup de flexibilité' },
            { value: 4, text: 'Avec flexibilité' },
            { value: 3, text: 'Avec une certaine rigidité' },
            { value: 2, text: 'Avec beaucoup de rigidité' },
            { value: 1, text: 'Sans flexibilité' }
        ],
        weight: 2,
        comments: 'Évaluez votre gestion des changements importants.'
    },
    {
        category: 'Relations sociales',
        question: 'Comment évaluez-vous vos relations avec les amis de votre partenaire ?',
        options: [
            { value: 5, text: 'Très bonnes' },
            { value: 4, text: 'Bonnes' },
            { value: 3, text: 'Moyennes' },
            { value: 2, text: 'Faibles' },
            { value: 1, text: 'Très faibles' }
        ],
        weight: 2,
        comments: 'Évaluez vos relations avec les amis de votre partenaire.'
    },
    {
        category: 'Relations sociales',
        question: 'À quelle fréquence vous sentez-vous intégré(e) dans le cercle social de votre partenaire ?',
        options: [
            { value: 5, text: 'Très fréquemment' },
            { value: 4, text: 'Fréquemment' },
            { value: 3, text: 'Occasionnellement' },
            { value: 2, text: 'Rarement' },
            { value: 1, text: 'Jamais' }
        ],
        weight: 2,
        comments: 'Évaluez votre intégration dans le cercle social de votre partenaire.'
    },
    {
        category: 'Relations sociales',
        question: 'Comment gérez-vous les activités sociales en couple ?',
        options: [
            { value: 5, text: 'Avec enthousiasme et organisation' },
            { value: 4, text: 'Avec organisation mais parfois moins d’enthousiasme' },
            { value: 3, text: 'Parfois désorganisé' },
            { value: 2, text: 'Souvent désorganisé' },
            { value: 1, text: 'Très désorganisé avec des conflits' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des activités sociales en couple.'
    },
    {
        category: 'Relations sociales',
        question: 'Comment évaluez-vous votre capacité à maintenir des relations équilibrées avec les amis de votre partenaire ?',
        options: [
            { value: 5, text: 'Excellente' },
            { value: 4, text: 'Bonne' },
            { value: 3, text: 'Moyenne' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez votre capacité à maintenir des relations équilibrées avec les amis de votre partenaire.'
    },
    {
        category: 'Santé',
        question: 'Comment évaluez-vous votre gestion du stress quotidien en couple ?',
        options: [
            { value: 5, text: 'Très bonne' },
            { value: 4, text: 'Bonne' },
            { value: 3, text: 'Moyenne' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez votre gestion du stress quotidien.'
    },
    {
        category: 'Santé',
        question: 'Comment prenez-vous soin de votre bien-être physique et mental en couple ?',
        options: [
            { value: 5, text: 'Très bien' },
            { value: 4, text: 'Bien' },
            { value: 3, text: 'Moyennement' },
            { value: 2, text: 'Peu' },
            { value: 1, text: 'Pas du tout' }
        ],
        weight: 2,
        comments: 'Évaluez les soins apportés à votre bien-être physique et mental.'
    },
    {
        category: 'Santé',
        question: 'Comment évaluez-vous le soutien de votre partenaire dans les aspects liés à la santé ?',
        options: [
            { value: 5, text: 'Exceptionnel' },
            { value: 4, text: 'Très bon' },
            { value: 3, text: 'Bon' },
            { value: 2, text: 'Moyen' },
            { value: 1, text: 'Faible' }
        ],
        weight: 2,
        comments: 'Évaluez le soutien de votre partenaire dans les aspects liés à la santé.'
    },
    {
        category: 'Santé',
        question: 'Comment évaluez-vous votre capacité à discuter de problèmes de santé avec votre partenaire ?',
        options: [
            { value: 5, text: 'Très bonne' },
            { value: 4, text: 'Bonne' },
            { value: 3, text: 'Moyenne' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez votre capacité à discuter de problèmes de santé.'
    },
    {
        category: 'Intimité',
        question: 'Comment évaluez-vous la qualité de l’intimité physique dans votre relation ?',
        options: [
            { value: 5, text: 'Excellente' },
            { value: 4, text: 'Bonne' },
            { value: 3, text: 'Moyenne' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez la qualité de l’intimité physique.'
    },
    {
        category: 'Intimité',
        question: 'Comment évaluez-vous la fréquence des moments d’intimité émotionnelle avec votre partenaire ?',
        options: [
            { value: 5, text: 'Très fréquente' },
            { value: 4, text: 'Fréquente' },
            { value: 3, text: 'Occasionnelle' },
            { value: 2, text: 'Rare' },
            { value: 1, text: 'Très rare' }
        ],
        weight: 2,
        comments: 'Évaluez la fréquence des moments d’intimité émotionnelle.'
    },
    {
        category: 'Intimité',
        question: 'Comment évaluez-vous votre confort à discuter de vos besoins intimes avec votre partenaire ?',
        options: [
            { value: 5, text: 'Très à l’aise' },
            { value: 4, text: 'À l’aise' },
            { value: 3, text: 'Moyennement à l’aise' },
            { value: 2, text: 'Peu à l’aise' },
            { value: 1, text: 'Pas du tout à l’aise' }
        ],
        weight: 2,
        comments: 'Évaluez votre confort à discuter de vos besoins intimes.'
    },
    {
        category: 'Intimité',
        question: 'Comment évaluez-vous votre capacité à respecter les besoins intimes de votre partenaire ?',
        options: [
            { value: 5, text: 'Excellent' },
            { value: 4, text: 'Bon' },
            { value: 3, text: 'Moyen' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez votre capacité à respecter les besoins intimes de votre partenaire.'
    },
    {
        category: 'Projets communs',
        question: 'Comment évaluez-vous la planification des projets communs avec votre partenaire ?',
        options: [
            { value: 5, text: 'Excellente' },
            { value: 4, text: 'Bonne' },
            { value: 3, text: 'Moyenne' },
            { value: 2, text: 'Faible' },
            { value: 1, text: 'Très faible' }
        ],
        weight: 2,
        comments: 'Évaluez la planification des projets communs.'
    },
    {
        category: 'Projets communs',
        question: 'Comment gérez-vous les différences d’opinion lors de la planification de projets communs ?',
        options: [
            { value: 5, text: 'Très bien' },
            { value: 4, text: 'Bien' },
            { value: 3, text: 'Moyennement' },
            { value: 2, text: 'Mal' },
            { value: 1, text: 'Très mal' }
        ],
        weight: 2,
        comments: 'Évaluez la gestion des différences d’opinion dans les projets communs.'
    },
    {
        category: 'Projets communs',
        question: 'Comment évaluez-vous l’engagement de votre partenaire dans les projets communs ?',
        options: [
            { value: 5, text: 'Très engagé' },
            { value: 4, text: 'Engagé' },
            { value: 3, text: 'Moyennement engagé' },
            { value: 2, text: 'Peu engagé' },
            { value: 1, text: 'Pas engagé' }
        ],
        weight: 2,
        comments: 'Évaluez l’engagement de votre partenaire dans les projets communs.'
    },
    {
        category: 'Projets communs',
        question: 'Comment évaluez-vous la résolution des conflits lors de la gestion des projets communs ?',
        options: [
            { value: 5, text: 'Très bien' },
            { value: 4, text: 'Bien' },
            { value: 3, text: 'Moyennement' },
            { value: 2, text: 'Mal' },
            { value: 1, text: 'Très mal' }
        ],
        weight: 2,
        comments: 'Évaluez la résolution des conflits dans les projets communs.'
    }
];



document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'form.html') {
        displayQuestions();
    }

    if (currentPage === 'index.html') {
        setupLogin();
    }

    if (currentPage === 'result.html') {
        displayResult();
    }

    if (currentPage === 'dashboard.html') {
        setupDashboard();
    }

    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('role');
            window.location.href = 'index.html';
        });
    }
});

function displayQuestions() {
    const container = document.getElementById('questions-container');

    if (!container) return;

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionLabel = document.createElement('label');
        questionLabel.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionLabel);

        const select = document.createElement('select');
        select.name = `question-${index}`;
        select.dataset.weight = question.weight;

        question.options.forEach(option => {
            const optionElem = document.createElement('option');
            optionElem.value = option.value;
            optionElem.textContent = option.text;
            select.appendChild(optionElem);
        });

        questionDiv.appendChild(select);
        container.appendChild(questionDiv);
    });

    const form = document.getElementById('evaluation-form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    let totalScore = 0;
    let maxScore = 0;

    questions.forEach((question, index) => {
        const select = document.querySelector(`[name="question-${index}"]`);
        const weight = parseFloat(select.dataset.weight);
        const responseValue = parseFloat(select.value);

        totalScore += responseValue * weight;
        maxScore += 5 * weight; // Supposons que la note maximale est 5 pour chaque question
    });

    const scorePercentage = (totalScore / maxScore) * 100;

    localStorage.setItem('score', scorePercentage.toFixed(2));
    localStorage.setItem('recommendation', getRecommendation(scorePercentage));

    window.location.href = 'result.html';
}

function getRecommendation(score) {
    if (score >= 80) {
        return "Vous êtes bien préparé(e) pour le mariage.";
    } else if (score >= 50) {
        return "Vous avez besoin de travailler sur certains aspects.";
    } else {
        return "Une préparation supplémentaire est nécessaire avant de vous engager.";
    }
}

function setupLogin() {
    const loginForm = document.getElementById('login-form');

    if (!loginForm) return;

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = {
            'user': 'userpass',
            'admin': 'adminpass'
        };

        if (users[username] && users[username] === password) {
            const role = username === 'admin' ? 'admin' : 'user';
            localStorage.setItem('role', role);
            window.location.href = 'form.html';
        } else {
            alert('Identifiants incorrects, veuillez réessayer.');
        }
    });
}

function displayResult() {
    const score = localStorage.getItem('score');
    const recommendation = localStorage.getItem('recommendation');

    document.getElementById('result-message').textContent = `Votre score est : ${score}`;
    document.getElementById('recommendation').textContent = `Recommandation : ${recommendation}`;
}

function setupDashboard() {
    const role = localStorage.getItem('role');
    const content = document.getElementById('dashboard-content');

    if (role === 'admin') {
        content.innerHTML = `
            <h2>Bienvenue Administrateur</h2>
            <p>Vous pouvez gérer les utilisateurs et consulter les rapports.</p>
            <h3>Utilisateurs</h3>
            <ul>
                <li>User1: Score 80%</li>
                <li>User2: Score 60%</li>
                <!-- Ajoutez des informations sur les utilisateurs -->
            </ul>
        `;
    } else if (role === 'user') {
        const score = localStorage.getItem('score');
        const recommendation = localStorage.getItem('recommendation');

        content.innerHTML = `
            <h2>Bienvenue Utilisateur</h2>
            <p>Votre score est : ${score ? score : 'N/A'}</p>
            <p>Recommandation : ${recommendation ? recommendation : 'N/A'}</p>
        `;
    } else {
        content.innerHTML = `
            <p>Veuillez vous connecter pour accéder au tableau de bord.</p>
        `;
    }
}
