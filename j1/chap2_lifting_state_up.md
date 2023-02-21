# Lifting State Up

Parfois des composants doivent faire remonter des données dynamiques à leur parent direct. Nous allons découvrir cette technique dans un exercice d'application.

Voici un exemple pour bien expliciter la problématique.

Supposons que l'on ait deux composants Foo et bar :

```text
    Foo
    .
    .
    .
    Bar
```

Et que Bar fasse remonter un état à son composant parent direct.

- On passe une méthode du composant parent Foo à l'enfant direct Bar.

- Dans Bar on crée un événement qui appelera la méthode de Foo en lui passant éventuellement une/des valeurs. C'est-à-dire un état local à Bar que l'on passe à Foo (Lifting state up).

```js
const function Foo(props) {
  const handleChange = (e) => {
    console.log("parent", e);
  };

  return <Bar onChange={handleChange} />;
};

const function Bar(props){
  return (
    <p>
      <button onClick={() => props.onChange(1)}>Lifting state up</button>
    </p>
  );
};
```

## Exemple d'utilisation Form

Pour la gestion des formulaires on utilise souvent cette technique pour configurer les champs d'un formulaire. Voyez l'exemple qui suit :

1. Form est la classe mère qui utilise Input un composant enfant. Ce composant fera remonter son état au parent (lifting state up).

```js
const function Form (props) {
  const [user, setUser] = React.useState({ username: "", email: "" });

  const handleChange = (event) => {
    setUser({ [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(`New User : ${value}`);
    event.preventDefault();
  };

  const {username, email} = user

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
```

2. L'enfant Input pourra par exemple être utiliser pour styliser ce champ dans un projet.

```js
const function Input (props) (
  <div style={{ margin: "10px" }}>
    <input {...props} />
  </div>
);
```

---

### Reducer

```js
{
  // tout notre state, tient en un objet
}
```

- increment
- decrement
- reset

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };

    default:
      return state;
  }
};
```
