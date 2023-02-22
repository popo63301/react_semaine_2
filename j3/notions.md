### Render react

`const [counter, setCounter] = useState(0)`

Il faut savoir qu'un state n'agit pas comme une variable classique.

Variable classique:

```js
let maVar = ""; // définition
maVar = "chaîne"; // modification directe
console.log(maVar); // on peut capter la modification directement
```

Cas state react:

```js
const [counter, setCounter] = useState(0); // définition à travers un hook

const test = () => {
  setCounter(newValue); // modification directe
  console.log(counter); // si on est dans une fonction, et qu'on fait un console.log
};

test();
```

Render = impression du composant
Quand on lance notre page, il y a un premier render pour chaque composant visible
A chaque modification de state, il y a un rerender

Quand on lance une fonction qui changera le state (dans l'exemple `test`), le state ne change pas instantanément. On attend la fin de l'exécution complète de la fonction pour changer le state.
Et qui dit changement de state, dit re-render, et là on pourra profiter de la nouvelle valeur du state.

Corollaire:

- A l'intérieur d'une fonction (comme dans l'exemple `test`), ça ne sert à rien d'accéder à un state qui est censé changer

Meilleure approche

```js
const [counter, setCounter] = useState(0); // définition à travers un hook

const test = (newValue) => {
  setCounter(newValue);
  console.log(newValue); // captation direct de la nouvelle valeur (pas du state)
};

test();
```

Autre bonne approche

```js
const [counter, setCounter] = useState(0); // définition à travers un hook

const test = () => {
  let newValue = 42;

  setCounter(newValue);
  console.log(newValue); // on capte la variable qu'on a défini et pas le state directement
};

test();
```

### Pourquoi il y a un retardement dans l'exécution de setMachin ?

Si on modifie le state, alors on a un rerender.
Il se peut qu'on casse l'exécution de la fonction actuelle (test).
Donc, dans le cas où on fait plusieurs setMachin, setBidulle, setChouette, ça provoquera 3 re-render, donc 3 cassures d'exécution de fonction donc on s'en sort pas.

React va compresser tout les setMachinBidulle, pour les modifier d'une traite.

Le but étant à la fin d'avoir un seul re-render par exécution de fonction.

### Règle d'or:

Ne pas capter un state qui doit se modifier depuis l'exécution d'une fonction.
Stocker la nouvelle valeur dans une variable et capter cette copie.

---

# Petit point sur la programmation fonctionnelle

Paradigmes de code =

- programmation impérative (classique)
  - exécution ligne par ligne classique
  - pas de règle précise / pas de contrainte
  - programmation libre
- programmation Orientée Objet

gros problème dans les grosses applications impératifs =

- règle non stricte du scope
  - la donnée peut se ballader partout dans les fonctions de notre code (surtout pour des variables globales)

* programmation fonctionnelle:
  - programmation classique + qqlq principes

React suit des principes de la programmation fonctionnelle

2 principes clés:

- compacter le code dans des fonctions (facile)
- écrire des fonctions pures

Fonction pure = fonction générique

- fonction qui ne modifie pas de variable externe à la fonction (pas de side effect)

### Comment faire une fonction pure

2 situations:

- on ne change pas de données en dehors du scope
- si on veut modifier de la donnée:
  - on crée une copie
  - on modifie la copie
  - on retourne la copie (pour l'exploiter ailleurs)

ps: ce sera une copie jetable qui servira juste à faire notre travail dans la fonction et éventuellement, retourner la valeur nouvelle

Comment on fait des copies:

```js
valeur = "str" / 334 / true; // string, number, boolean
let copie = valeur; // créer une variable + assigner autre variable

let listCopy = [...oldList, newValue];

let objectCopy = { ...oldObject, newKey: "newValue" };
```

Dans le contexte de React, on utilise le fonctionnel principalement dans le cadre des "reducers".

Exemple Redux de la doc:

```js
// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case "todos/todoAdded": {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
```

Clé =

- Créer des copies surtout surtout surtout pour les objets et les listes

### Corrollaire

Ca fait du code très propre
