// rapport-data.js
const activities = [

    // Dassoah 
    {
        id: "estima-1-1",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Convention technique\n Vizcab, Emersus / Untec<br> - Transmission par Untec Services à Emersus et Vizcab des données de coûts constatés, issues d'Estima.",
        objectif: "Développement en interne d'une interface d'échange de données sécurisée (API), permettant aux deux éditeurs de récupérer le prix estimé des prestations basées sur la méthode Untec.",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "- Rendez-vous de présentation final et mise en production\n <br>- Activation des autorisations de connexion à l'API\n <br>- Création de deux profils utilisateur de test sur Estima pour Vizcab et Emersus",
        echeance: "24/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "green",
        equipe: ["Dassoah", "Savio"]
    },

    {
        id: "estima-1-2",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Version Estima 2.0  <br> Refonte complète de la suite logicielle MeTod en version 2.0, incluant la réécriture intégrale du code et une mise à niveau technologique.",
        objectif: "Développement de la réécriture intégrale d'Estima en version 2.0.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "- Harmonisation et correction des formules de calcul entre les versions 1.0 et 2.0 <br> - Relance des 7 bêta-testeurs pour la remontée des remarques et des dysfonctionnements constatés",
        echeance: "10/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Dassoah"]
    },

    {
        id: "estima-1-3",
        projet: "estima",
        projetNom: "Estima",
        sujet: "-",
        objectif: "Mise en production",
        statut: "a-venir",
        statutNom: "À venir",
        prochaine: "Déployer officiellement la nouvelle version d'Estima pour tous les utilisateurs",
        echeance: "15/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "red",
        equipe: ["Dassoah"]
    },

   {
        id: "recap-1-4",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Prochaines étapes (rappel)",
        objectif: "24 oct : finalisation technique. 15 nov : mise en production. En parallèle : plan de communication et collecte des e-mails",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Suivi du planning et préparation communication",
        echeance: "15/11/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "blue",
        equipe: ["Dassoah"]
    },


    {
        id: "recap-1-5",
        projet: "gestiona",
        projetNom: "Gestiona",
        sujet: "-",
        objectif: "Développement de la réécriture intégrale de Gestiona en version 2.0.",
        statut: "a-venir",
        statutNom: "À venir",
        prochaine: "- Point de planification <br>- Évaluation de la charge de travail<br> - Identification des ressources, techniques et humaines<br> - Élaboration du plan de travail",
        echeance: "10/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "red",
        equipe: ["Dassoah", "Savio"]
    },


    
    // Savio
    {
        id: "recap-2-1",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Bilan et état d'avancement",
        objectif: "Traitement des données et production des indicateurs de contribution, Taux de validation des projets par les référents, Affichage du taux de non-conformité, Top régions contributrices, Top utilisateurs",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Mise en place des histogrammes et des courbes d'évolution des inscriptions des utilisateurs, Nombre et taux de profils actifs et inactifs.",
        echeance: "10/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "red",
        equipe: ["Savio"]
    },


     {
        id: "savio-2-2",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Développements informatiques",
        objectif: "Correction des ratios statistiques, ajout de champs dans l'onglet Ma région dédié aux référents, affichage du taux de validation de chaque référent et de la non-conformité de chaque utilisateur",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Développement des prochaines fonctionnalités",
        echeance: "20/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "green",
        equipe: ["Savio"]
    },


    {
        id: "savio-2-3",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Système de badges OPQTECC",
        objectif: "Finalisation et mise en production du système de badges avec calcul automatique des heures de formation (2h30 dès 5 projets conformes + 15 min par projet supplémentaire)",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Validation et suivi de l'obtention des heures OPQTECC et de l'attestation Data-Collect",
        echeance: "De manière continue",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "green",
        equipe: ["Savio"]
    },

    {
        id: "recap-2-4",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Suivi Régional Data-Collect <br> Mise en place d'un point de suivi trimestriel avec chaque référent Data-Collect (durée : 40 min à 1 h)",
        objectif: "Point sur les actions menées en région pour alimenter Data-Collect, Vérification des projets, en cours, conformes, non-conformes, échange sur les avantages (récompenses) liés à la saisie d'un plus grand nombre de projets dans Data-Collect, Validation",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "03-10-2026 ⇒ Laurent Porocchia (Région Occitanie) <br><br>10-10-2025 ⇒ Léna Ratel – Région Nouvelle-Aquitaine <br><br> 24-10-2025 avec Julie HENOCQ ⇒ Région Ouest <br><br> 24-10-2025 avec Julien Delion ⇒ Région Grand Est",
        echeance: "30/01/2026",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Savio", "Dassoah"]
    },

    {
        id: "recap-2-5",
        projet: "indicateur",
        projetNom: "Indicateurs",
        sujet: "Production des indicateurs de coût",
        objectif: "Développement d'une interface de publication des indicateurs de coût",
        statut: "a-venir",
        statutNom: "À venir",
        prochaine: "Développement dynamique de l'interface de publication des indicateurs à destination du grand public, par région, au niveau national et par catégorie de bâtiment.",
        echeance: "05/02/2026",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio", "Nicola P"]
    },

    {
        id: "savio-2-6",
        projet: "observatoire",
        projetNom: "GT-Observatoire",
        sujet: "Rencontre GT Observatoire",
        objectif: "Point d'avancement sur les différents sujets portés par l'Observatoire",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Organisation d'une rencontre élargie, qui sera également la dernière de l'année 2025",
        echeance: "20/11/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "red",
        equipe: ["Savio", "Ludovic"]
    },


      {
        id: "savio-2-7",
        projet: "etude_opcc",
        projetNom: "Études OPCC",
        sujet: "Les études de l'OPCC (Étude N° USH)",
        objectif: "Suivi de la finalisation de l'étude 1 de l'USH avec le groupement de prestataires. Organisation des points de suivi pour définir les prochaines étapes en vue de finaliser cette étude.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Transmission de plus de 40 fiches issues de Data-Collect, envoi à Nicolas PEAUDEAU des accès à l'API Data-Collect permettant de récupérer les derniers projets saisis.",
        echeance: "29/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio"]
    },


    {
        id: "savio-2-8",
        projet: "observatoire",
        projetNom: "Communication Observatoire",
        sujet: "Support de communication",
        objectif: "Préparation de 3 lettres : régionalisée, nationale (LinkedIn), et IRIEC (collecte dossiers Data-Collect)",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Finalisation lettre régionalisée et publication",
        echeance: "31/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio", "Emma", "Sofian"]
    },

    {
        id: "savio-2-9",
        projet: "datacollect",
        projetNom: "Webinaire Data-Collect",
        sujet: "Organisation d'un webinaire Data-Collect",
        objectif: "Maintenir la visibilité de Data-Collect, augmenter le nombre d'utilisateurs actifs et accroître le volume de projets saisis sur la plateforme.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Préparer l'ensemble des supports nécessaires à la présentation du webinaire : La liste des projets à saisir ; Les éléments de langage pour la présentatrice ; La définition de la cible du webinaire.",
        echeance: "13/11/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Savio", "Léna Ratel"]
    },
 
];