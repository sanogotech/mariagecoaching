# marriagecoaching
marriage coaching


## Coaching au Mariage

Description
L'application de coaching au mariage permet d'évaluer la préparation et la maturité d'un couple en répondant à un questionnaire structuré en catégories. Les résultats sont utilisés pour fournir des recommandations et générer un rapport d'évaluation en PDF. L'application utilise HTML, CSS, JavaScript, et Firebase pour le stockage des données et l'authentification des utilisateurs.


##  Fonctionnalités
Page d'accueil

Affiche le formulaire de questionnaire.
Permet aux utilisateurs de répondre aux questions.
Soumet les réponses et calcule les scores.
Fournit des recommandations basées sur les scores obtenus.
Page de connexion

Permet aux administrateurs de se connecter.
Redirige vers le tableau de bord après connexion réussie.
Tableau de bord

Affiche les résultats des évaluations des utilisateurs.
Permet l'exportation des résultats en PDF.
Exportation PDF

Génère un rapport d'évaluation des résultats en PDF avec recommandations.

##  Arborescence des Fichiers
arduino
Copier le code
marriage-coaching-app/
├── index.html
├── dashboard.html
├── login.html
├── style.css
├── app.js
├── dashboard.js
├── login.js
├── firebase-config.js
├── pdf-generator.js
├── questionmariage.json
└── images/
    └── logo.png
Installation
Clonez le repository

```bash
git clone https://github.com/votre-repository/marriage-coaching-app.git
cd marriage-coaching-app
```
Installez les dépendances

Assurez-vous que vous avez configuré Firebase avec vos propres clés d'API dans firebase-config.js.

Lancez l'application

Vous pouvez ouvrir index.html dans un navigateur pour voir l'application en action.

Backlog
Fonctionnalités Principales
Chargement des Questions

Charger les questions depuis un fichier JSON.
Afficher les questions et options dans le formulaire.
Traitement des Réponses

Collecter les réponses des utilisateurs.
Calculer le score en fonction des réponses et des poids attribués.
Évaluation et Recommandations

Générer des recommandations basées sur le score total.
Afficher les recommandations à l'utilisateur.
Gestion des Utilisateurs

Fonctionnalité de connexion pour les administrateurs.
Accès au tableau de bord pour visualiser les résultats.
Tableau de Bord

Afficher les résultats des évaluations.
Offrir la possibilité d'exporter les résultats en PDF.
Exportation PDF

Générer et télécharger un rapport PDF avec les résultats et recommandations.
Règles de Gestion
Chargement des Questions

Les questions doivent être structurées en catégories dans le fichier questionmariage.json.
Chaque question doit avoir un identifiant unique, une question textuelle, des options, un poids, et un type de réponse.
Traitement des Réponses

Les réponses doivent être collectées et stockées dans Firebase.
Le calcul du score doit être basé sur le poids des options sélectionnées.
Évaluation et Recommandations

Les recommandations doivent être générées en fonction du pourcentage du score total par rapport au score maximum possible.
Gestion des Utilisateurs

Seuls les administrateurs authentifiés peuvent accéder au tableau de bord.
Les utilisateurs doivent se connecter avec un email et un mot de passe valide.
Tableau de Bord

Les résultats doivent être récupérés depuis Firebase et affichés dans une section dédiée.
Les données doivent être affichées dans un format lisible et structuré.
Exportation PDF

Le rapport PDF doit inclure les résultats de l'évaluation et les recommandations.
Utiliser la bibliothèque jsPDF pour générer le PDF.
Configuration Firebase
Remplacez les valeurs dans firebase-config.js par celles de votre propre projet Firebase. Assurez-vous que Firestore est configuré pour stocker les réponses des utilisateurs et que l'authentification est activée pour les administrateurs.

Contributions
Les contributions sont les bienvenues. Veuillez ouvrir une issue ou soumettre une pull request pour toute amélioration ou correction.

License
Ce projet est sous la Licence MIT.

N'hésitez pas à personnaliser ce fichier README.md selon vos besoins et à ajouter des sections supplémentaires si nécessaire.
