# Atelier 3
## Projet d'Analyse et de Traitement de Données en JavaScript

###  Objectif
L’objectif principal de ce travail pratique est de se familiariser avec les concepts de la programmation fonctionnelle en JavaScript.

###  Partie 1 : Tri et Filtrage des Nombres Pairs
**Objectif** : Trier un tableau de nombres dans l'ordre croissant et ne conserver que les nombres pairs.  
**Méthode** : Utilisation des fonctions `sort()` pour le tri et `filter()` pour sélectionner les nombres pairs.  
**Exemple** : Pour le tableau `[1, 7, 10, 9, 8, 2]`, le résultat est `[2, 8, 10]`.  
**Concepts** : Programmation fonctionnelle, manipulation de tableaux.

###  Partie 2 : Transformation en Factoriels
**Objectif** : Transformer une liste de nombres en leurs factoriels respectifs.  
**Méthode** : Une fonction récursive `fact()` calcule le factoriel d’un nombre, et `map()` applique cette fonction à chaque élément du tableau.  
**Exemple** : Pour le tableau `[1, 3, 4]`, le résultat est `[1, 6, 24]`.  
**Concepts** : Récursivité, transformation de données avec `map()`.

###  Partie 3 : Traitement de Texte
**Objectif** : Analyser un texte en le divisant en lignes, convertir chaque ligne en majuscules, filtrer celles contenant la lettre "I", et les afficher.  
**Méthode** : Utilisation des fonctions `split()`, `map()`, `filter()`, et `forEach()` pour traiter une chaîne de texte.  
**Exemple** : Pour un texte donné, seules les lignes avec "I" (comme "SIMPLICITY") sont affichées en majuscules.  
**Concepts** : Chaînage de méthodes, traitement de chaînes de caractères.

###  Partie 4 : Recherche du Maximum
**Objectif** : Trouver la valeur maximale dans un tableau de nombres.  
**Méthode** : Utilisation de `reduce()` pour comparer chaque élément et conserver le plus grand.  
**Exemple** : Pour le tableau `[1, 7, 10, 9, 8]`, le résultat est `10`.  
**Concepts** : Réduction de tableaux, programmation fonctionnelle.

###  Partie 5 : Calcul du Prix Total
**Objectif** : Calculer le prix total d’une liste de produits.  
**Méthode** : Extraction des prix avec `map()` suivie d’une somme avec `reduce()`.  
**Exemple** : Pour une liste de produits `[ {name: "Shirt", price: 20}, {name: "Shoes", price: 50}, {name: "Hat", price: 15} ]`, le résultat est `85`.  
**Concepts** : Manipulation d’objets, calculs cumulatifs.
###  Partie 6: Des operations sur un stock avec application web 
## Objectif
Trier les produits par prix ou stock dans l'ordre croissant et filtrer selon des critères spécifiques (catégorie, faible stock).

## Méthode
- **Tri** : Application d'une méthode de tri avec comparaison pour ordonner les prix ou les stocks.
- **Filtrage** : Sélection des produits par catégorie ou selon un seuil de stock faible, à partir des données chargées.

## Exemple
Pour un ensemble de produits avec des prix de **300, 50 et 20**, et des stocks de **7, 3 et 8** :

- **Tri par prix** : Résultat avec les prix dans l'ordre **20, 50, 300**.
- **Filtrage faible stock (≤ 5)** : Résultat avec uniquement le produit ayant un stock de **3**.

## Concepts
- **Programmation fonctionnelle** : Utilisation de méthodes de manipulation de données sans modifier l'original.
- **Manipulation de tableaux** : Organisation et extraction des éléments selon des critères définis.

## Application dans le Dashboard
- **Tri des produits** par prix ou stock croissant.
- **Filtrage** par catégories spécifiques ou produits en faible stock.

### 7. Technologies Utilisées
- **JavaScript** : Logique de programmation et manipulation des données via des méthodes de tableaux comme `map()`, `filter()`, `reduce()`, et `sort()`.
- **Programmation Fonctionnelle** : Approche déclarative pour traiter les données de manière modulaire et concise.
- **Console** : Affichage des résultats pour une validation rapide.
