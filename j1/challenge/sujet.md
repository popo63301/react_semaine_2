# Sujet 03

## 01 Exercice Partie 1

Vous allez créer un script React permettant de réaliser une conversion de nombre décimal vers un nombre binaire.

Vous pouvez utiliser au choix :

1. Vous pouvez utiliser si vous le souhaitez un fichier simple HTML.

2. Le Webpack voir dans le dossier MODELS.

3. La CRA.

Créez deux composants **App** et **BaseNumberInput**. Le composant App contiendra deux composants BaseNumberInput : respectivement pour saisir le nombre décimal et afficher le nombre binaire.

```txt

Nombre décimal : [ ... ]
Nombre binaire : [ ... ]

```

Hiérarchie des composants :

```txt
                 App
                .    .
            .            .
BaseNumberInput    BaseNumberInput
```

Dans le composant BaseNumberInput l'attribut onChangeBase sera appelé dans le composant lui-même. La logique algorithmique du changement de base sera implémentée dans le composant parent App (méthode this.handleChange) :

```js
<BaseNumberInput onChangeBase={handleChange} />;

// Dans le composant BaseNumberInput
props.onChangeBase(e.target.value);
```

![Conversion binary <=> decimal](./images/decimal_binary.png)

## 02 Exercice Partie 1

Implémentez la logique dans l'autre sens : si on rentre un nombre binaire dans le champ correspondant alors la conversion se fait dans l'autre sens (binaire vers décimal).

## 03 Exercice Partie 2

Développez une solution maintenant la CRA si vous ne l'avez pas déjà fait ou Webpack.
