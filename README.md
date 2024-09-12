# Système de Gestion Logistique entre Entrepôts

## À propos du projet

Ce projet est une initiative personnelle visant à développer un système de gestion logistique pour des entrepôts.
L'objectif est de créer une application capable de gérer efficacement le flux de marchandises entre les entrepôts principaux
puis les entrepôts d'enseignes, tout en prenant en compte les contraintes spécifiques au stockage.

Le but est multiple :

- Travailler mon back-end, avec une logique métier
- Travailler les conditions
- Découvrir OpenStreetMap ainsi que l'API Overpass extraire des données spécifiques
- Découvrir Leaflet.js afin d'afficher ses données

- Augmenter ma fiche de note, en utilisant le markdown (Notes non disponibles)
- Repèrer mes lacunes, afin de monter en compétence.

- Ma formation, n'ayant pas eu de formation sur TypeScript
  Je me force à l'utiliser pour les bonnes pratiques de sécurité.
- etc ...

## Fonctionnalités principales (en cours de développement)

- Gestion des entrepôts (principaux et d'enseignes)
- Optimisation des itinéraires de livraison
- Reporting et analyses

## Technologies utilisées

- Node.js
- TypeScript
- Express.js
- Sequelize ORM
- PostgreSQL

## Installation et démarrage

(Instructions à venir)

## Structure du projet

Ce projet suit l'architecture Modèle-Vue-Contrôleur (MVC),
offrant une séparation claire des préoccupations et une structure organisée pour le développement et la maintenance.

```
project-root/
│
├── src/
│   ├── models/              # Définition des modèles de données (Sequelize)
│   │   ├── mainWarehouse.ts
│   │   └── brandWarehouse.ts
│   │
│   ├── controllers/         # Logique de contrôle des requêtes
│   │   ├── mainWarehouse.ts
│   │   └── brandWarehouse.ts
│   │
│   ├── routes/              # Définition des routes de l'API
│   │   ├── mainWarehouse.ts
│   │   └── brandWarehouse.ts
│   │
│   ├── config/              # Fichiers de configuration
│   │   └── database.ts      # Configuration de la base de données
│   │
│   ├── types/               # Définitions de types TypeScript
│   │   ├── mainWarehouse.ts
│   │   └── brandWarehouse.ts
│   │
│   └── app.ts               # Point d'entrée de l'application
│
├── dist/                    # Code compilé (généré automatiquement)
│
├── node_modules/            # Dépendances du projet (généré automatiquement)
│
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── journal.md
```

- **Models** (`src/models/`): Définissent la structure des données et interagissent avec la base de données via Sequelize.
- **Controllers** (`src/controllers/`): Contiennent la logique métier et gèrent les requêtes de l'API.
- **Routes** (`src/routes/`): Définissent les points d'entrée de l'API et dirigent les requêtes vers les contrôleurs appropriés.
- **Config** (`src/config/`): Contient les fichiers de configuration, notamment pour la base de données.
- **Types** (`src/types/`): Définit les interfaces TypeScript pour assurer un typage fort dans l'application.

Cette structure MVC permet une séparation claire entre la logique métier (Modèles), le traitement des requêtes (Contrôleurs), et la définition des points d'entrée de l'API (Routes).

## Contribution

Ce projet est actuellement un travail personnel et n'est pas ouvert aux contributions externes.
Cependant, les retours et suggestions sont toujours appréciés !

---

_Note : Ce projet est en cours de développement dans le cadre d'une initiative personnelle visant à approfondir mes compétences en développement backend et en gestion de systèmes logistiques._
