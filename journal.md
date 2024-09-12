# Journal de Développement

## Du 08 au 10 septembre 2024

### Réflexion sur quel usage concrèt travaillé :

J'ai pris le temps de réfléchir aux applications concrètes que je pourrais développer pour mettre en pratique mes compétences et rendre ce projet plus réaliste. Une idée qui me semble particulièrement intéressante est d'intégrer OpenStreetMap (OSM) dans le système.

L'utilisation d'OSM pourrait permettre :

1. La visualisation géographique des entrepôts et des itinéraires de livraison.
2. Le calcul des distances réelles entre les entrepôts, prenant en compte le réseau routier.
3. L'optimisation des itinéraires de livraison en tenant compte des restrictions de circulation pour les camions.

Je pense utiliser la bibliothèque Leaflet.js pour l'affichage des cartes côté client.
Cela ajouterait une dimension visuelle et interactive au projet, tout en me permettant de travailler avec des données géospatiales réelles.

**Apprentiisage :** Rechercher les meilleures pratiques pour l'intégration d'OSM dans une application Node.js/TypeScript
et commencer à expérimenter avec des requêtes de base pour récupérer les données cartographiques.

Se documenter aussi sur Overpass

## 12 septembre 2024

Début du projet de système de gestion logistique pour entrepôts sur vscode.

### Réalisations :

1. Initialisation du projet Node.js avec TypeScript.
2. Mise en place de la structure de base du projet :
   - Configuration de Express pour le serveur web.
   - Intégration de Sequelize comme ORM pour la gestion de la base de données PostgreSQL.
3. Création des modèles de données pour les entrepôts principaux et les entrepôts d'enseigne.
4. Développement des routes de base pour les opérations CRUD sur les entrepôts.
5. Configuration initiale de la base de données avec des données factices pour les tests.
6. Detail du projet pour le readme ainsi que le suivie dans ce journal
7. Creation du repot github
8. Mise en place du .gitignore pour mes prises de notes, ainsi que pour le dossier node_modules.

### Prochaines étapes :

- Tester les routes
- Se renseigner sur l'utilisation d'overpass et de OpenStreetMap
- Implémenter la logique de routage pour les camions entre les entrepôts.
- Développer des fonctionnalités de gestion des stocks.

### Réflexions :

Le projet avance bien. L'utilisation de TypeScript apporte une meilleure structure et sécurité au code.
La prochaine session se concentrera sur l'implémentation des fonctionnalités métier spécifiques à la logistique réfrigérée.

### Timing

Début : 9h15
Pause : 10h40 à 11h10
Fin : 15h05

Temps de travail : 5h20
Se forcer à prendre des pauses

Prolongation de note 15h25 )
