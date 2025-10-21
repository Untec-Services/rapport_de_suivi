// rapport-data.js
const activities = [

    // Dassoah 
    {
        id: "estima-1-1",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Convention technique Vizcab / Untec Service",
        objectif: "Echange de données entre Vizcab et Untec Services afin de renvoyer le prix estimé des prestations basés sur la méthode Untec.",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "-",
        echeance: "20/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "green",
        equipe: ["Dassoah", "Savio"]
    },
    {
        id: "estima-1-2",
        projet: "estima",
        projetNom: "Estima",
        sujet: "-",
        objectif: "Rendez-vous avec Vizcab pour présenter la version finale de l'API passerelle permettant la communication entre Untec Services et Vizcab) qui renvoie le prix exact",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "-",
        echeance: "20/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "green",
        equipe: ["Dassoah"]
    },
    {
        id: "estima-1-3",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Convention logiciel avec Emersus",
        objectif: "Transmettre un mode d'emploi clair pour faciliter l'intégration",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Rédiger et envoyer la documentation complète",
        echeance: "24/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Dassoah", "Savio"]
    },
    {
        id: "estima-1-4",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Version Estima 2.0",
        objectif: "Intégrer la nouvelle formule dans le logiciel Estima pour correspondre à la réelle formule de calcul d'origine",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Démarrage de l'intégration technique",
        echeance: "26/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "blue",
        equipe: ["Dassoah"]
    },
    {
        id: "estima-1-5",
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
        rag: "blue",
        equipe: ["Dassoah"]
    },
    {
        id: "recap-2-1",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Réunion Emersus & Vizcab",
        objectif: "Expliquer clairement comment utiliser l'API Estima et accompagner leur mise en place (Adrien Lina et Justine Ruminy)",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Suivi de l'intégration chez Emersus",
        echeance: "10/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "green",
        equipe: ["Dassoah"]
    },
    {
        id: "recap-2-2",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Suivi Data-Collect Nouvelle-Aquitaine",
        objectif: "Voir ce qui marche, ce qui bloque, et accélérer la validation des projets (Contact: Léna Ratel)",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Mise en place des améliorations proposées",
        echeance: "03/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "green",
        equipe: ["Dassoah"]
    },
    {
        id: "recap-2-3",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Prochaines étapes (rappel)",
        objectif: "24 oct: finalisation technique. 15 nov: mise en production. En parallèle: plan de communication et collecte des e-mails",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Suivi du planning et préparation communication",
        echeance: "15/11/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "blue",
        equipe: ["Dassoah"]
    },









































    
    // Savio
    {
        id: "savio-1-1",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Système de badges OPQTECC",
        objectif: "Finalisation et mise en production du système de badges avec calcul automatique des heures de formation (2h30 dès 5 projets conformes + 15 min par projet supplémentaire)",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Suivi de l'utilisation par les utilisateurs",
        echeance: "17/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "green",
        equipe: ["Savio"]
    },
    {
        id: "savio-1-2",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Développements informatiques",
        objectif: "Correction des ratios statistiques, ajout de champs dans l'onglet Ma région, intégration upload d'images, affichage taux de validation et non-conformité",
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
        id: "savio-1-3",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Suivi régional - Nouvelle-Aquitaine",
        objectif: "Point trimestriel avec Léna Ratel: validation des projets, relance utilisateurs, préparation webinaire novembre",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Suivi de l'animation du webinaire par Léna",
        echeance: "10/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "green",
        equipe: ["Savio", "Dassoah"]
    },
    {
        id: "savio-1-4",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Suivi régional - Occitanie",
        objectif: "Point avec Laurent Porocchia: simulation saisie projet, préparation session collective, discussion sur ratio €/m² par lot",
        statut: "termine",
        statutNom: "Terminé",
        prochaine: "Organisation session de saisie collective",
        echeance: "03/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "green",
        equipe: ["Savio", "Dassoah"]
    },
    {
        id: "savio-2-1",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Suivi régional - Ouest",
        objectif: "Point trimestriel avec Julie HENOCQ pour suivi Data-Collect région Ouest",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Réalisation du point de suivi",
        echeance: "24/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "blue",
        equipe: ["Savio"]
    },
    {
        id: "savio-2-2",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Webinaire Data-Collect",
        objectif: "Organisation et animation du webinaire Data-Collect avec présentation par Léna Ratel",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Préparation du contenu et logistique",
        echeance: "11/11/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "blue",
        equipe: ["Savio"]
    },
    {
        id: "savio-2-3",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Communication - Lettres OPCC",
        objectif: "Préparation de 3 lettres: régionalisée (sous 2 semaines), nationale (LinkedIn), et IRIEC (collecte dossiers Data-Collect)",
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
        id: "savio-2-4",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Préparation GT Observatoire",
        objectif: "Préparer les éléments pour le prochain Groupe de Travail Observatoire avec bilan Data-Collect et implication des référents",
        statut: "a-faire",
        statutNom: "À faire",
        prochaine: "Finalisation du contenu de présentation",
        echeance: "31/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "amber",
        equipe: ["Savio"]
    },
    {
        id: "savio-2-5",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Étude USH - API Data-Collect",
        objectif: "Suivi finalisation étude 1 USH avec transmission de +40 fiches et accès API. Définir prochaines étapes avec Nicolas Peaudeau",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Réunion Teams pour finalisation",
        echeance: "29/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "blue",
        equipe: ["Savio"]
    },
    {
        id: "savio-3-1",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Développements futurs",
        objectif: "Production/ratio par lot en €/m², statistiques projets saisis, répartition par catégorie bâtiment, projets par région, top 10 utilisateurs et top 5 référents",
        statut: "a-venir",
        statutNom: "À venir",
        prochaine: "Planification et priorisation des développements",
        echeance: "30/11/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "blue",
        equipe: ["Savio"]
    }
];