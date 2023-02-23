### Rappel

Conseil =

- apprendre par coeur les connections données dans le cours (ex: je veux modifier data = envoyer action = dispatch pour envoyer)
- plus vite on apprend par coeur le jargon redux, plus vite on avancera
- il n'y a pas beaucoup de mots à connaître

---

but redux = créer un store (magasin de donnée) pour stocker du state et le partager partout dans l'app

2 challenges =

- lire la donnée
- modifier la donnée

pour chacun des challenges, on doit suivre un chemin

---

### Définition du magasin de donnée

Définir le magasin de donnée (store)

Store = défini par un reducer

Reducer = fonction pure avec cette signature:

- (previousState, action) => newState
- au début, previousState = initialState
- après première modification, le newState prend la place de previousState
- si il y a une nouvelle action, le previousState sera donc le newState d'avant

Store = contient le produit du reducer

1. Initialisation du store

- Quand on lance l'application
- on lance le reducer du store 1 fois sans action
- comme il n'y a pas d'action, on tombe dans le default du switch case
- et on va retourner le initialState défini par défaut dans la signature
- comme ça, on aura un state dans le store au début

---

## Modification de donnée

Pour modifier les données, il faut décrire une action qui sera traité par le reducer.
Car c'est le reducer qui se charge de la modification des données.

Action =

- Objet JS qui contient un clé type.
  - exemple: { type: "ADD_TODO" }
- but bien sûr = décrire l'action de transformation

Bien sûr, des fois, on a besoin de passer de la donnée pour exécuter l'action.
Exemple:

- add todo
- je veux envoyer le titre du todo

Payload =

- les données associé avec l'action pour bien exécuter la transformation
  - exemple: { type: "ADD_TODO", title: "go to Carrefour" } / payload = title
  - exemple: { type: "ADD_TODO", payload: { title: "Go to Carrefour" } } / payload = payload
  - au choix
- payload = ingrédients de l'action

Action creator =

- fonction qui va créer des actions
- fonction qui va créer des (objets JS avec une clé type)
- ça permet de simplifier la création d'action, donc d'objet

exemple:

```js
const createTodo = (title) => ({ type: "ADD_TODO", title });
```

Maintenant, on a défini notre action.

Cette action, on veut l'envoyer.

**Envoyer = dispatch**

Dispatch = envoyer action au reducer

Exemple:

```js
dispatch({ type: "ADD_MESSAGE", message: "Hello world 1 !" }); // objet en brut
dispatch({ type: "ADD_MESSAGE", message: "Hello world 2 !" });

dispatch(addMessage("Hello World 1 !")); // cas où on passe par un action creator
dispatch(addMessage("Hello World 2 !")); // cas où on passe par un action creator
```

La fonction dispatch, on vous la fournira par le package de votre framework (pour nous, c'est react-redux)

Le dispatch doit "sortir de quelque part", on doit nous le fournir.
Et ca dépend de notre contexte.
Cas HTML = store.dispatch
Cas React = on nous donnera un hook

Quand on a dispatch une action, elle va atterir dans le reducer.

Rappel:

- Reducer = (stateActuel, actionRecu) => nouveauState
- Une fois qu'on dispatch, on fait un appel au reducer avec une action
- Donc on execute le reducer
- Par convention, un reducer est formé par un switch case
  - Reducer = switch case

Un switch permet simplement de traiter plusieurs cas (regardez des exemples de reducers et de copier coller la structure).

Le switch case du reducer va chercher le cas du type de l'action,
une fois trouvé, il va faire ce qu'il a à faire et retourner un nouveau state pour le sauvegarder dans le store.

Une fois qu'on retourne le state, on a modifié le store, donc la donnée.

---

Petite note "subscribe"

Subscribe = abonnement dès la modification du store, donc après le travail du reducer après réception d'une action envoyé par dispatch

Subscribe = qu'est-ce qu'on fait quand le store a été modifié

---

Résumé modification donnée avec Redux =

- on ne change pas directement la donnée (comme dans une variable)
- on va décrire ce qu'on veut faire (action), et le reducer se chargera de modifier les données du store

---

### Lecture de donnée

Il faut créer une connection avec le store.

Maintenant, la connection dépend de notre contexte (est-ce qu'on fait du React ? est-ce qu'on fait du vueJs ?)

Notre connection se fera avec une librairie tierce: `react-redux`.

---

### React-redux

React-redux c'est une boîte à outil pour:

- se connecter au store depuis React

Il y a 2 composants:

- Le Provider = fournisseur de store (permettra de stocker le store en haut de la hierarchie de composant)
  - règle provideur = tout les enfants du fournisseur peuvent se fournir, mais les parents du fournisseurs ne peuvent pas se fournir
  - par conséquent, on met le fournisseur au plus haut point de l'application
- des hooks de connections
  - pour lire des données = `useSelector`
  - pour dispatcher des actions (pour modification) = `useDispatch`

```js
import { useDispatch, useSelector } from "react-redux";

export const App = (props) => {
  const stateDuStore = useSelector((state) => state);
  const dispatch = useDispatch();

  return <div>Composant = {stateDuStore.counter}</div>;
};
```
