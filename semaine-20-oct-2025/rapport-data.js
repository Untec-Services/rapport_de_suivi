// rapport-data.js - Semaine du 20 octobre 2025
const activities = [
    // Activités Estima - Dassoah
    {
        id: "estima-2-1",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Convention technique Vizcab / Untec Service",
        objectif: "Échange de données entre Vizcab et Untec Services afin de renvoyer le prix estimé des prestations basés sur la méthode Untec.",
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
        id: "estima-2-2",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Présentation API passerelle Vizcab",
        objectif: "Rendez-vous avec Vizcab pour présenter la version finale de l'API passerelle permettant la communication entre Untec Services et Vizcab qui renvoie le prix exact.",
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
        id: "estima-2-3",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Convention logiciel avec Emersus",
        objectif: "Transmettre un mode d'emploi clair pour faciliter l'intégration.",
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
        id: "estima-2-4",
        projet: "estima",
        projetNom: "Estima",
        sujet: "Version Estima 2.0",
        objectif: "Intégrer la nouvelle formule dans le logiciel Estima pour correspondre à la réelle formule de calcul d'origine.",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Démarrage de l'intégration technique",
        echeance: "26/10/2025",
        priorite: "high",
        prioriteNom: "Haute",
        rag: "blue",
        equipe: ["Dassoah"]
    },

    // Activités Data-Collect - Savio
    {
        id: "datacollect-2-1",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Développements informatiques",
        objectif: "Correction des ratios statistiques, ajout de champs dans l'onglet Ma région, intégration upload d'images, affichage taux de validation et non-conformité.",
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
        id: "datacollect-2-2",
        projet: "datacollect",
        projetNom: "Data-Collect",
        sujet: "Suivi régional - Ouest",
        objectif: "Point trimestriel avec Julie HENOCQ pour suivi Data-Collect région Ouest.",
        statut: "planifie",
        statutNom: "Planifié",
        prochaine: "Réalisation du point de suivi",
        echeance: "24/10/2025",
        priorite: "medium",
        prioriteNom: "Moyenne",
        rag: "blue",
        equipe: ["Savio"]
    }
];

// Calculer les statistiques
const stats = {
    total: activities.length,
    termine: activities.filter(a => a.statut === 'termine').length,
    aFaire: activities.filter(a => a.statut === 'a-faire').length,
    planifie: activities.filter(a => a.statut === 'planifie').length,
    aVenir: activities.filter(a => a.statut === 'a-venir').length,
    estima: activities.filter(a => a.projet === 'estima').length,
    datacollect: activities.filter(a => a.projet === 'datacollect').length
};