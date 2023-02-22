### Layout

Chaque page contient:

- Header
- (body)
- Footer

---

chaque page, dans le return:

```js
<Header />
<div>contenu différent à chaque fois</div>
<Footer/>
```

---

plus simple = créer un layout / template

```js
const Layout  = (props) => (
    <Header />
        {props.children}
    <Footer/>
    )
```

Maintenant, je crée une page comme ça:

```js
const Page1 = (props) => (
  <Layout>
    <div>contenu de ma page</div>
  </Layout>
);
```

Tout ce que contient une balise (donc, balise ouvrante, balise fermante) est appelé "children".
On peut accéder au "children" dans le composant englobant avec `props.children`.

L'avantage est qu'on peut changer le layout une fois et le changement sera repercuté.
