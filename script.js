const quizData = [
    {
        question: "Qu’est-ce qu’une société civile ?",
        answers: ["Une société commerciale", "Une société non commerciale", "Une société mixte"],
        correct: 1
    },
    {
        question: "Définissez l’acte de commerce.",
        answers: ["Un acte entre particuliers", "Une activité d’achat ou vente pour faire du profit", "Un acte administratif"],
        correct: 1
    },
    {
        question: "Qu’est-ce qu’une société commerciale ?",
        answers: ["Une société publique", "Une société qui fait du commerce, comme une SARL ou une SAS", "Une société non commerciale"],
        correct: 1
    },
    {
        question: "Qu’est-ce qu’une société mixte ?",
        answers: ["Une société non commerciale", "Une société à la fois publique et privée", "Une société agricole"],
        correct: 1
    },
    {
        question: "Qu’est-ce que le registre du commerce et des sociétés ?",
        answers: ["Un registre où toutes les entreprises doivent être enregistrées", "Un registre de contrats", "Un registre d’associations"],
        correct: 0
    },
    {
        question: "Je souhaite constituer une société, comment dois-je procéder ?",
        answers: [
            "Rédigez des statuts, déposez le capital, et immatriculez la société",
            "Envoyez une lettre au tribunal",
            "Payez une taxe unique"
        ],
        correct: 0
    },
    {
        question: "Quel est le rôle du mandataire judiciaire ?",
        answers: ["Il gère les entreprises en difficulté", "Il administre les sociétés", "Il rédige les contrats"],
        correct: 0
    },
    {
        question: "Qu’est-ce qu’un commerce illicite ?",
        answers: ["Un commerce non enregistré", "Un commerce interdit par la loi", "Un commerce sans clients"],
        correct: 1
    },
    {
        question: "Qu’est-ce qu’une interdiction de gérer ?",
        answers: ["Une interdiction pour quelqu’un de diriger une entreprise", "Une interdiction de commerce", "Une interdiction d’importation"],
        correct: 0
    },
    {
        question: "Je suis de nationalité étrangère, puis-je venir en France créer une société ?",
        answers: ["Non", "Oui, sous certaines conditions comme un visa adapté", "Oui, sans conditions"],
        correct: 1
    },
    {
        question: "Qu’est-ce que la clientèle ?",
        answers: ["Les employés d’une entreprise", "Les personnes qui achètent les produits ou services d’une entreprise", "Les fournisseurs"],
        correct: 1
    },
    {
        question: "Définissez le capital social.",
        answers: ["L’argent ou les biens apportés pour créer une entreprise", "Un prêt bancaire", "Des actions en bourse"],
        correct: 0
    },
    {
        question: "Qu’est-ce qu’un extrait Kbis ?",
        answers: ["Une carte d’identité officielle de la société", "Un contrat de location", "Un bilan comptable"],
        correct: 0
    },
    {
        question: "Puis-je être salarié et associé d’une société ? Dans quel cas ?",
        answers: ["Oui, si le poste salarié est réel et distinct de votre rôle d’associé", "Non, jamais", "Oui, dans tous les cas"],
        correct: 0
    },
    {
        question: "Qu’est-ce que l’agriculture biologique ?",
        answers: ["Une agriculture sans produits chimiques de synthèse", "Une agriculture intensive", "Une agriculture industrielle"],
        correct: 0
    },
    {
        question: "Que signifient les statuts d’une société ?",
        answers: ["Le document qui fixe les règles de fonctionnement de la société", "Une déclaration fiscale", "Un contrat de vente"],
        correct: 0
    },
    {
        question: "Quelle juridiction traite des litiges de nature commerciale ?",
        answers: ["Le tribunal civil", "Le tribunal de commerce", "Le tribunal administratif"],
        correct: 1
    },
    {
        question: "Souhaitez-vous créer une entreprise ?",
        answers: ["Oui", "Non"],
        correct: 0
    },
    {
        question: "De quoi est composé le fonds de commerce ?",
        answers: ["De la clientèle, du matériel, et d’autres éléments nécessaires au commerce", "De terrains", "D’actions en bourse"],
        correct: 0
    },
    {
        question: "Qu’est-ce que le nom commercial ?",
        answers: ["Le nom utilisé pour identifier une entreprise", "Une marque déposée", "Un numéro fiscal"],
        correct: 0
    },
    {
        question: "Quel est le rôle du tribunal de commerce ?",
        answers: ["Régler les litiges entre entreprises ou commerçants", "Enregistrer les sociétés", "Gérer les faillites personnelles"],
        correct: 0
    },
    {
        question: "Qu’est-ce qu’un greffier ?",
        answers: ["Une personne qui gère les documents officiels des tribunaux et des entreprises", "Un employé administratif", "Un juriste"],
        correct: 0
    },
    {
        question: "Quelles sont les différentes formes juridiques d’une société ?",
        answers: ["SARL, SAS, SA, SCI, auto-entreprise, etc.", "Entreprise publique uniquement", "Coopérative uniquement"],
        correct: 0
    },
    {
        question: "Mon époux souhaite travailler avec moi dans ma boulangerie. Est-ce possible ? Quel sera son statut et ses droits ?",
        answers: [
            "Oui, il peut être conjoint collaborateur, salarié ou associé, selon le choix",
            "Non, il ne peut pas",
            "Oui, mais uniquement en tant qu’associé"
        ],
        correct: 0
    },
    {
        question: "Je m’appelle KRISTIAN D’IOR et je souhaite créer mon entreprise dans le secteur du luxe. Vais-je rencontrer des difficultés ?",
        answers: [
            "Non, c’est un secteur lucratif",
            "Oui, j’aurais des problèmes de plagiat",
            "Oui, le marché est saturé"
        ],
        correct: 1
    },
    {
        question: "J’ai acquis une grande propriété pour ma résidence principale. Mais je souhaite y ouvrir un local commercial. Est-ce possible ?",
        answers: [
            "Non, il faut déménager",
            "Oui, si le plan local d’urbanisme l’autorise et avec les autorisations nécessaires",
            "Oui, mais uniquement sous forme de résidence secondaire"
        ],
        correct: 1
    },
    {
        question: "Je suis intéressée par le rachat d’un fonds de commerce. Quels sont vos conseils ?",
        answers: [
            "Vérifiez la rentabilité, les contrats en cours, et demandez un accompagnement juridique",
            "Rachetez immédiatement, sans vérifications",
            "Faites une offre sans négocier"
        ],
        correct: 0
    },
    {
        question: "J’ai loué un local commercial il y a 5 mois. Cela ne m’intéresse plus. Je peux quitter les lieux en avertissant simplement le propriétaire ? Quels sont mes droits ?",
        answers: [
            "Oui, vous pouvez partir quand vous voulez",
            "Non, vous devez respecter le délai de préavis prévu dans le bail commercial",
            "Non, vous devez attendre 1 an"
        ],
        correct: 1
    },
    {
        question: "À quoi sert un mandataire judiciaire ?",
        answers: ["Il aide les entreprises en difficulté à se restructurer ou à fermer", "Il gère les litiges", "Il représente les employés"],
        correct: 0
    },
    {
        question: "Je souhaite ouvrir un compte bancaire professionnel. Que dois-je fournir comme pièces justificatives ?",
        answers: [
            "Votre carte d’identité et une preuve de résidence",
            "Vos statuts, un justificatif d’identité et une preuve d’immatriculation au RCS",
            "Votre passeport et un justificatif de domicile"
        ],
        correct: 1
    },
    {
        question: "J’exerce une profession libérale, suis-je soumise à une déontologie ?",
        answers: ["Oui, selon votre métier (ex. : médecins, avocats)", "Non", "Oui, mais seulement pour les avocats"],
        correct: 0
    },
    {
        question: "Qu’est-ce qu’un artisan ?",
        answers: ["Un professionnel qui exerce un métier manuel et produit en petite quantité", "Un employé de bureau", "Un commerçant"],
        correct: 0
    },
    {
        question: "Qu’est-ce que la liasse fiscale ?",
        answers: ["Un ensemble de documents fiscaux annuels", "Une facture", "Un contrat de prêt"],
        correct: 0
    },
    {
        question: "Puis-je tout céder dans le cadre de la vente d’un fonds de commerce ?",
        answers: ["Oui, sauf les dettes et obligations personnelles", "Oui, sans exception", "Non"],
        correct: 0
    }
];

function generateQuiz() {
    const form = document.getElementById('quiz-form');
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h2');
        questionTitle.textContent = item.question;
        questionDiv.appendChild(questionTitle);

        item.answers.forEach((answer, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            questionDiv.appendChild(label);
        });

        form.appendChild(questionDiv);
    });
}

document.getElementById('submit-btn').addEventListener('click', function() {
    const form = document.getElementById('quiz-form');
    let score = 0;
    quizData.forEach((item, index) => {
        const userAnswer = form.querySelector(`input[name="question${index}"]:checked`);
        
        // On récupère la div de la question pour pouvoir la colorier
        const questionDiv = form.querySelector(`.question:nth-child(${index + 1})`);

        if (userAnswer) {
            // On vérifie si la réponse est correcte
            const userAnswerValue = parseInt(userAnswer.value);
            if (userAnswerValue === item.correct) {
                score++;
                // Afficher la bonne réponse en vert
                questionDiv.style.backgroundColor = 'lightgreen';
            } else {
                // Afficher la mauvaise réponse en rouge
                questionDiv.style.backgroundColor = 'lightcoral';
            }
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Votre score est ${score} sur ${quizData.length}`;
});

generateQuiz();