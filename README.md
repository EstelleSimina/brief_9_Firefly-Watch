# Firefly (Projet Simplo'ciné)

Firefly est une application web moderne développée dans le cadre du projet Simplo'ciné. L'objectif est de créer un MVP (Minimum Viable Product) inspiré de Netflix, offrant une interface épurée pour explorer un vaste catalogue de films et de séries.

Ce projet a été conçu pour démontrer la mise en œuvre d'une architecture front-end  avec React, en mettant l'accent sur la qualité du code, la performance et une expérience utilisateur "mobile first".

## Fonctionnalités

### Pages Principales
- [x] **Page d'accueil**
  - [x] Bannière sobre présentant un film populaire différent à chaque rechargement.
  - [x] Carrousel des films les plus populaires.
  - [x] Carrousel des films les mieux notés.
  - [x] Carrousel des sorties à venir.
- [x] **Page de liste des films**
  - [x] 5 carrousels dynamiques, chacun affichant des films d'un genre spécifique.
  - [ ] Chaque film est cliquable et redirige vers sa page de détail.
- [x] **Page de liste des séries**
  - [x] 5 carrousels dynamiques, chacun affichant des séries d'un genre spécifique.
  - [ ] Chaque série est cliquable et redirige vers sa page de détail.

### Pages de Détails
- [ ] **Page de détail d'un film ou d'une série**
  - [ ] Présentation de l'ensemble des informations disponibles via l'API.
  - [ ] Affichage du casting principal avec photos.
  - [ ] Carrousel de films/séries recommandés.
- [ ] **Page de détail d'un membre du casting**
  - [ ] Présentation des informations biographiques de la personne.
  - [ ] Carrousel de la filmographie complète.

### Technique & Design
- [ ] **Intégration responsive et mobile-first.**

## Stack Technique

Ce projet est construit sur un écosystème moderne et performant :

*   **[React](https://react.dev/) (v19)** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
*   **[Vite](https://vitejs.dev/)** : Outil de build nouvelle génération offrant un environnement de développement rapide.
*   **[TypeScript](https://www.typescriptlang.org/)** : Pour un code plus robuste et maintenable grâce au typage statique.
*   **[React Router](https://reactrouter.com/) (v7)** : Pour la gestion de la navigation et du routage au sein de l'application.

## Installation et Démarrage

Pour exécuter ce projet en local, suivez ces étapes :

1.  **Clonage du dépôt**

    ```bash
    git clone <URL_DU_DÉPÔT>
    cd firefly-watch
    ```

2.  **Installation des dépendances**

    ```bash
    npm install
    ```

3.  **Lancement du serveur de développement**

    ```bash
    npm run dev
    ```

    L'application sera alors accessible à l'adresse `http://localhost:5173`.
