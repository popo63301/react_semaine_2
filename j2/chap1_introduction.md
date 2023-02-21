# Router

Nous allons présenter les principes généraux du module **react-router-dom V6**, nous vous invitons à regarder de prêt la documentation sur ce module :

Documentation : [react-router-dom](https://reactrouter.com/)

## Installation de la dépendance

Nous allons utiliser vite pour installer nos projets React.

Précisons que vite est un bundle, rapide.

Vous aurez toujours besoin de npm/npx pour installer vos dépendances.

- Exemple installons avec vite l'application myapp avec vite, on doit préciser avec vite le template react.

```bash
npm create vite@latest myapp -- --template react

cd myapp
npm install
```

Pour lancer le serveur vite une fois dans votre projet:

```bash
npm run dev
```

Dans votre projet installez maintenant le module react-router-dom pour le gérer le routing.

```bash
cd myapp
npm install react-router-dom
```

## Contextualiser la racine principale de React

1. Utilisez BrowserRouter sur le composant racine.

```js
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Home />
    // ...
  </BrowserRouter>
);
```

2. Définir les routes dans un composant Nav par exemple, notez également dans l'exemple qui suit, que nous explicitons la mise en place des liens actifs.

Dans la navigation vous utilisez soit Link ou NavLink.

```js
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/logs">
            LOGS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
```

3. Le composant Nav.

Il faut placer ce composant sur le composant racine. Puis à l'aide des composants Routes et Route définissez les routes.

La syntaxe du Link ou NavLink doit matcher avec le path définit dans le composant Route. Attention ce composant se trouve dans le composant Routes.

```js
<>
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="logs" element={<Log />} />
  </Routes>
</>
```

## Gestion de la route 404

Vous pouvez parfaitement gérer les routes qui ne "match" pas avec l'attribut path et l'opérateur \* comme suit :

```js
<Route
  path="*"
  element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
    </main>
  }
/>
```

## Routes dynamiques

Pour gérer une route avec un paramètre dynamique, voyez la syntaxe suivante utilisée avec le module react-router, urls du type /post/2

```js
<Routes>
    <Route path="/" element={<App />}>
    <Route path="post/:id" element={<Post />} />
</Routes>
```

Pour récupérer l'id du post que l'on souhaite afficher vous utiliserez le Hook suivant propre au module react-router-dom, dans le composant Post :

```js
import { useParams } from "react-router-dom";

const post = () => {
  const { postId } = useParams();

  return <h2>Post : {postId}</h2>;
};
```

## Paramètres de route

Si vous avez une url du type

```txt
http://localhost:5173/post?page=5&author=2
```

Pour récupérer les paramètres d'une route vous utiliserez le Hook **useSearchParams**. La méthode get permettra de récupérer les paramètres nommés.

```js
import { useParams, useSearchParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // attention searchParams, il faut le parcourir pour afficher les données
  for (const [page, author] of searchParams) console.log(page, author);

  return <div className="App">Post : {id}</div>;
}

export default Post;
```

## Gestion des sous-routes avec le composant Outlet

Vous pouvez à l'aide de la syntaxe suivante définir des sous-routes de manière simple :

```js
<Routes>
  <Route path="/posts/*" element={<Posts />} />
</Routes>
```

## Les sous-routes avec le composant Outlet

```js
// route dashboard
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

// la sous route message sera donc ici /dashboard/messages
function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}
```

Exemple dashboard nesté: https://remix.run/ (exemple landing page)

## Redirection composant Navigate

- La syntaxe d'une redirection est simple avec le composant Navigate et peux facilement être intégrée dans la définition même d'une route :

```js
<Route path="/category" element={<Navigate to="/home" />} />
```

- Une autre manière de faire une redirection est la suivante

Vous pouvez également utiliser le Hook **useNavigate** pour gérer une redirection ainsi que l'historique des liens, navigate(-1) vous permettra de revenir par exemple à la route précédente.

```js
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success?message=Alan", { replace: true });
    // navigate(-1) par précédente
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Login </button>
    </form>
  );
}
```

---

### Fonction / Appel de fonction

```js
const createAction = () => {
  return {
    type: "ADD_TODO",
    title: "go to Carrefour",
  };
};
```

```js
const createAction = () => ({
  type: "ADD_TODO",
  title: "go to Carrefour",
});
```

### fonction fléché

- cas fonction simple:

```js
const add = (a, b) => a + b;
```

(a,b) = entrée
après "=>" = sortie (valeur return)

- cas fonction plus grosse:

```js
const addWithConsoleLog = (a, b) => {
  console.log("ligne 1");
  console.log(a);
  console.log(b);
  return a + b;
};
```

(a,b) = entrée
entre les accolades = bloc de code
et il faut un return explicite (si on veut return une valeure)

moyen mnémotechnique / accolade = bloc de code et il faut return

si on veut retourner objet, il faut des parenthèses autour

---

### Fonction / Appel de fonction

```js
const createAction = () => ({
  type: "ADD_TODO",
  title: "go to Carrefour",
});
```

si on fait:
`createAction`

createAction = nom de la fonction
createAction() = appel de la fonction = sera remplacé par la valeur de return (donc la partie à droite de la flèche)
