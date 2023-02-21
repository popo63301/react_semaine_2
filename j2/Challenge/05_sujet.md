# Jeu de dé

## Contraintes

Vous allez créer une petite application avec la CRA et react-router-dom. Vous utiliserez useReducer que nous avons vu cette semaine, vous pouvez faire un fichier reducer.js à la racine du projet.

## Contexte

Vous créez un bouton qui lance trois dés et compte le nombre de fois que l'on obtient un brelan de 6, brelan =  trois dés identiques; à chaque fois que l'on relance l'expérience on ré-initialise le compteur.

L'application possède trois pages : la page Home qui permet de lancer l'expérience, une page description qui décrit le jeu et une page permettant de consulter les statistiques.

## Page Home le jeu

Sur cette page vous avez un bouton pour lancer les dés aux nombres de 3. Un autre champ du formulaire permet de définir le nombre de fois que vous répétez l'expérience. Pour consuler les résultats un lien cliquable permet de voir la page des statistiques. Vous utiliserez les paramètres de react-router-dom de route pour afficher les résultats.

```txt
[Jeu] [Description]

Nombre d'expérience : [100]

[Lancer]

[Resultat] 
```

## Partie facultative

Comptez d'autres combinaisons du jeu du Yam.