// rapport-data.js - Semaine du 24 novembre 2025
const activities = [

    // Dassoah 
    {
        id: "estima-1-1",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Mise en production Estima 2.0",
        objectif: "Déploiement de la nouvelle version d'Estima 2.0 pour l'ensemble des utilisateurs",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Suivi post-déploiement et support utilisateurs",
        echeance: "10/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "green",
        equipe: ["Dassoah"]
    },

    {
        id: "estima-1-2",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Corrections suite aux retours du groupe de travail",
        objectif: "Prise en compte et correction des remarques remontées par le groupe de travail sur Estima 2.0",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "- Analyse des retours du groupe de travail<br>- Correction des anomalies identifiées<br>- Tests et validation des corrections",
        echeance: "01/12/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Dassoah"]
    },

    {
        id: "estima-1-3",
        projet: "estima",
        projetNom: "Estima / Gestiona",
        sujet: "Rendez-vous avec Christophe",
        objectif: "Planifier une réunion pour discuter de la grille de gestion Gestiona et de l'import des projets Attic vers Estima 2.0",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "- Trouver une date de rendez-vous avec Christophe<br>- Préparer les points à aborder sur la grille Gestiona<br>- Définir la méthode d'import des projets Attic",
        echeance: "À définir",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Dassoah", "Christophe"]
    },

    {
        id: "iriec-1-4",
        projet: "datacollect",
        projetNom: "Iriec / Data-Collect",
        sujet: "Développement API Iriec",
        objectif: "Création d'une API permettant de transmettre les données de Data-Collect vers la plateforme Iriec",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "- Définition des endpoints et du format de données<br>- Développement de l'API<br>- Tests d'intégration avec la plateforme Iriec",
        echeance: "À définir",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Dassoah", "Savio"]
    },

    {
        id: "gestiona-1-5",
        projet: "gestiona",
        projetNom: "Gestiona",
        sujet: "Planification du développement Gestiona 2.0",
        objectif: "Lancement de la phase de développement pour la refonte complète du logiciel Gestiona",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "- Analyse de l'existant et documentation<br>- Définition de l'architecture technique<br>- Planification des sprints de développement<br>- Démarrage du développement",
        echeance: "05/12/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "blue",
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
        echeance: "28/11/2025",
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
        prochaine: "03-10-2026 ⇒ Laurent Porocchia (Région Occitanie) <br><br>10-10-2025 ⇒ Léna Ratel – Région Nouvelle-Aquitaine  <br><br> 24-10-2025 avec Julien Delion ⇒ Région Grand Est <br><br>07-11-2025 ⇒ José De Oliviera – Région île-de-France<br><br> 12-11-2025 avec Julie HENOCQ ⇒ Région Ouest",
        echeance: "30/01/2026",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Savio", "Dassoah"]
    },

    {
        id: "recap-2-5",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Convention technique Vizcab, Emersus / Untec",
        objectif: "Convention technique Vizcab, Emersus / Untec; Transmission par Vizcab et Emersus à l'Untec, via Data-Collect, des données d'empreinte carbone.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: " - Récupération et exploitation des données d'emprunte carbone <br> - Traitement et exploitation de la donnée dans Data-Collect",
        echeance: "À déterminer",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Savio", "Dassoah"]
    },

    {
        id: "recap-2-6",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Analyser d'un partenariat entre SOC Informatique / Untec",
        objectif: " Analyse d'un partenariat entre SOC Informatique et Untec Services à travers Data-Collect.Transmission à l'équipe de SOC Informatique des accès à Data-Collect ainsi que des documents nécessaires à l'alimentation des dossiers.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: " À travers le logiciel DeviSOC, SOC Informatique pourra alimenter de manière automatisée Data-Collect en données",
        echeance: "À déterminer",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio", "Dassoah"]
    },

    {
        id: "recap-2-7",
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
        id: "recap-2-8",
        projet: "indicateur",
        projetNom: "Indicateurs",
        sujet: "Production des indicateurs de coût",
        objectif: "Publication des indicateurs de coût niveau national sur le site internet de l'Iriec",
        statut: "a-venir",
        statutNom: "À venir",
        prochaine: "Développement de l'interface de publication des indicateurs à destination du grand public, au niveau national, toute catégorie de construction,Type de construction : Neuf et Rénovation.",
        echeance: "17/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio"]
    },

    {
        id: "savio-2-9",
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
        id: "savio-2-10",
        projet: "etude_opcc",
        projetNom: "Études OPCC",
        sujet: "Les études de l'OPCC (Étude N°1 USH)",
        objectif: "Suivi de la finalisation de l'étude 1 de l'USH avec le groupement de prestataires. Organisation des points de suivi pour définir les prochaines étapes en vue de finaliser cette étude.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Une comparaison des résultats avec l'étude menée par Sylvain Tessier « Évaluation de l'impact économique des seuils RE2025 et RE2028 sur le coût de construction » sera menée.",
        echeance: "17/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio"]
    },

    {
        id: "savio-2-11",
        projet: "etude_opcc",
        projetNom: "Études OPCC",
        sujet: "Les études de l'OPCC (Étude N°7 FFTB)",
        objectif: "Suivi de la réalisation de l'étude n°7 de la FFTB avec le prestataire Echos'Lab (Sylvain Teissier). Commandée le 26 février 2026. Analyse et étude des 21 variantes.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Analyse et étude des 21 variantes Rapport puis restitution de l'analyse. <br> Restitution du rapport en visio.",
        echeance: "25/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Ludovic","Savio"," Sylvain Teissier "]
    },

    {
        id: "savio-2-12",
        projet: "observatoire",
        projetNom: "Communication Observatoire",
        sujet: "Support de communication",
        objectif: "Préparation de 3 lettres : régionalisée, nationale (LinkedIn), et IRIEC (collecte dossiers Data-Collect)",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Finalisation lettre régionalisée et publication",
        echeance: "21/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "amber",
        equipe: ["Savio", "Emma", "Sofian"]
    },

    {
        id: "savio-2-13",
        projet: "datacollect",
        projetNom: "Webinaire Data-Collect",
        sujet: "Organisation d'un webinaire Data-Collect",
        objectif: "Maintenir la visibilité de Data-Collect, augmenter le nombre d'utilisateurs actifs et accroître le volume de projets saisis sur la plateforme.",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Préparer l'ensemble des supports nécessaires à la présentation du webinaire : La liste des projets à saisir ; Les éléments de langage pour la présentatrice ; La définition de la cible du webinaire.",
        echeance: "11/12/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Savio", "Léna Ratel"]
    },
 
];