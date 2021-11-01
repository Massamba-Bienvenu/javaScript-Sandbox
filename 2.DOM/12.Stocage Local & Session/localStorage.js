/* 
deux approches pour recueillir des données des utilisateurs.
1.  :collecte de données active:l'utilisateur est directement interrogé pour fournir des réponses ou des evaluations.
    -COLLECTE DE DONNÉES BINAIRES,
    -COLLECTE DE DONNÉES TEXTE
    -NOTES D'ÉTOILES
    -FORMULAIRE DE RÉPONSE PERSONNALISÉ
2.  :collecte passive de données: toutes les données sont collectées en arrière-plan sans l'intervention de l'utilisateur
    -LECTURE À PARTIR DE FICHIERS
    -USER IP ADDRESS
    -FINDING THE USER AGENT
    -USER GEOGRAPHIC LOCATION
    -TEMPS PASSÉ SUR LE SITE 
    -SUIVI DES BALISES DIV INDIVIDUELLES 
    -NOMBRES DE CONNECTIONS
    -D'OU VENAIT UN UTILISATEUR
    -RÉCOLTE DE CONTENU SUR LES RESEAUX SOCIAUX

Quatre type de données
1. Données d'identité : les coordonnées dont nous avons besoin pour les contacter
Nom : Titre, Prénom, Nom, etc.
Personnel : date de naissance, région, sexe, etc.
Adresse : Adresse de livraison, Adresse de facturation, etc.
Téléphone : N° de domicile, N° de travail, N° de téléphone portable
Réseau social : Facebook, LinkedIn, adresse Twitter, etc.
Compte : identifiants d'utilisateur, préférences de paiement, etc.

Comment collecter des données d'identité : lorsque vos clients saisissent leurs informations
Formulaires d'inscription sur mesure
Bons de réduction pour les premiers achats
Offrir des opportunités de précommande
Processus de paiement sur mesure pour le commerce électronique
Cartes de garantie
Programmes de fidélité/récompenses


2. Exemples de données quantitatives : comprendre le processus de prise de décision de vos clients
Transactions en ligne/hors ligne : produit acheté, montant des achats, heure de l'achat, valeur de la commande/de l'abonnement, dates de commande/de renouvellement, abandon de panier, retours de produits, etc.
Communication entrante/sortante : date, heure, canal, ouvertures, taux de clics, etc.
Activité en ligne : visites de sites Web, vues de produits, inscription en ligne, etc.
Réseau social : identifiants sociaux, groupes, interactions, centres d'intérêt, etc.
Service client : détails de la plainte, détails de la demande du client, communication avec le centre d'appels, etc.

Comment collecter des données quantitatives;
Outils d'analyse Web tels que Google Analytics
Cookies de site Web/cartes thermiques de suivi de souris sur les pages de destination.
Suivi des pixels dans les e-mails/newsletters
Enregistrement des transactions d'achat historiques
Enregistrement de la communication historique du support client
Activités sur les réseaux sociaux


3. Exemples de données descriptives: informations démographiques
Famille : état civil, relations, nombre d'enfants, etc.
Style de vie : type de propriété, voiture, propriétaire d'un animal de compagnie, loisirs, collections, intérêts, etc.
Éducation : Lycée, Collège, Enseignement supérieur, etc.
Carrière : Titre du poste, Description du poste, Revenu, Expérience professionnelle, etc.

4. Exemples de données qualitatives :  décrire le raisonnement derrière les choix de vos clients
Exemples de données qualitatives :
Attitude : valeur perçue, évaluation, rétroaction, probabilité de rachat, etc.
Motivation : raison de l'achat, besoins du client, etc.
Opinion : Aime/N'aime pas, Préférences, etc.

Comment collecter des données qualitatives :
Sites Web d'examen liés à l'industrie
Écoute sociale avec des outils de surveillance des médias sociaux
Processus d'inscription à la newsletter sur mesure
Utilisation d'un système de favoris, de sauvegarde ou d'évaluation
Questions d' écoute approfondie et de rétroaction


OU STOCKER LES DONNES COLLECTES
   Client-Side Storage:
Aucun objet ou tableau autorisé
    for simple Data : 
    1. local storage:
    2. session storage:
    3. IndexDB(spécialement pour les app mobile)
    4. Service workers
    5. Cache api

    LocalStorage reste aussi longtemps que vous le souhaitez
    SessionStorage est effacé lorsque vous fermez le navigateur
    Les deux utilisent des paires clé/valeur
    Aucun objet ou tableau autorisé
    Spécifique au domaine 


    LES MÉTHODES:
    setItem(clé,valeur) : stocke une paire clé/valeur
    getItem(clé) : retourne la valeur associée à une clé
    removeItem(clé) : supprime la paire clé/valeur en indiquant le nom de la clé
    key(index): retourne la clé stockée à l'index spécifié
    clear(): efface toutes les paires
*/
// LOCAL STORAGE
//1. ajouter un element a localstorage
localStorage.setItem("hisName", "Sedin");
localStorage.setItem("hisLastName", "Massamba");

//2. supprimer un element dans localStorage
localStorage.removeItem("hisName");

//3. récupérer un element dans localstorage
const firstName = localStorage.getItem("hisName");
console.log(typeof firstName);
const h1 = document.querySelector("h1");
firstName
  ? (h1.innerText = `Welcome ${firstName}`)
  : (h1.innerText = `No body to welcome`);

// COMPTEUR DE VISITES
// Détection
if (typeof localStorage != "undefined") {
  // Récupération de la valeur dans web storage
  let nbvisites = localStorage.getItem("visites");
  //   if (nbvisites != null) {
  //     // Si oui, on convertit en nombre entier la chaîne de texte qui fut stockée
  //     nbvisites = parseInt(nbvisites);
  //   } else {
  //   }
  nbvisites != null ? (nbvisites = parseInt(nbvisites)) : (nbvisites = 1);
  nbvisites++;
  // Stockage à nouveau en attendant la prochaine visite...
  localStorage.setItem("visites", nbvisites);
  // Affichage dans la page
  document.getElementById("visites").textContent = nbvisites;
} else {
  alert("localStorage n'est pas supporté");
}

// UTILISATION DE JSON
// Objet : il faut les linéariser au préalable en chaînes de texte
// JSON.stringify() qui prend en paramètre un objet et renvoie une chaîne de texte linéarisée
var monobjet = {
  propriete1: "valeur1",
  propriete2: "valeur2",
};
var monobjet_json = JSON.stringify(monobjet);
sessionStorage.setItem("objet", monobjet_json);

// JSON.parse() qui reforme un objet à partir de la chaîne linéarisée.
var monobjet_json = sessionStorage.getItem("objet");
var monobjet = JSON.parse(monobjet_json);
console.log(monobjet);
