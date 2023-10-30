# React + Vite

Le Front-end est hébergé sur Netlify:https://jocular-klepon-195e49.netlify.app/
Le Back-end est hébergé sur Northflank

# Projet Marvel React

Ce projet est une application web React qui utilise l'API Marvel pour afficher des informations sur les personnages et les comics de l'univers Marvel. Il dispose de cinq pages principales : Characters, Character, Comics, Favorite et Home.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (ou npm)
- Un compte Marvel Developer (pour obtenir une clé API):(https://lereacteur-marvel-api.netlify.app/.)

## Installation

1. Clonez ce dépôt sur votre machine :

```bash
git clone https://github.com/J-De-Laclos/Frontend-Marvel.git

2. Accédez au répertoire du projet :

```bash
cd Frontend-Marvel


3. Installez les dépendances avec Yarn (ou npm) :

```bash
yarn install
Créez un fichier .env à la racine du projet pour stocker votre clé d'API Marvel :

API_KEY=VOTRE_CLE_API_MARVEL


Utilisation

Pour lancer l'application en mode développement, exécutez la commande suivante :

yarn dev
L'application sera accessible à l'adresse http://localhost:3000.

Pages

Characters: Affiche la liste des personnages Marvel.
Character: Affiche les détails d'un personnage spécifique.
Comics: Affiche la liste des comics Marvel.
Favorite: Permet de gérer vos personnages et comics favoris.
Home: Page d'accueil.

Déploiement

Frontend : Ce projet peut être déployé sur Netlify en liant le dépôt GitHub. Configurez les variables d'environnement pour y ajouter votre clé d'API Marvel.
Backend : Le backend peut être déployé sur Northflank pour gérer des fonctionnalités backend si nécessaire.
Contributions

Les contributions à ce projet sont les bienvenues. N'hésitez pas à ouvrir une demande de tirage (pull request) ou à signaler des problèmes.

Licence

Ce projet est sous licence MIT.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
