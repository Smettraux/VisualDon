# Data.md
## Ce qui à été fait dans `Data.json`

Pour préparer un jeu de données pour un graphique en bâton, j'ai conçu un fichier `preparer.js` qui me permettra de sélectionner mes données et de les enregistrer dans un fichier JSON.

Voici les tâches effectuées:

1. Récupérer les données sur l'ensoleillement en Suisse préallablement enregistrées dans le fichier `solaire.json`

```javascript
const data = require('./solaire.json')
```
2. Limitation aux communes vaudoises
```javascript
const communesVaudoises = d => d.Canton ==='Vaud'
```

3. J'ai ensuite choisi parmi ces communes pour n'afficher que leur nom et leur potentie énergétique Toit + Facade.
4. J'ai ordonné ces communes par ordre décroissant de potentiel énergétique
5. et j'ai ajouté un filtre pour n'afficher que les communes dont le potentiel est supérieur à 80 GWh

```javascript
const resultats = data
    .filter(communesVaudoises)
    .map(d => ({nom: d.MunicipalityName, potentiel: d.Scenario3_RoofsFacades_PotentialSolarElectricity_GWh }))
    .sort((a, b) => a.potentiel > b.potentiel ? -1 : 1)
    .filter(d => d.potentiel > 80)
```
Finalement j'ai exporté le résultat dans un fichier JSON à l'aide de :

```javascript
console.log(JSON.stringify(resultat));
```

Voici ce qu'on obtient après l'exercice 5: ![image](https://user-images.githubusercontent.com/56030786/110128042-a62e9780-7dc6-11eb-9ad4-f9443a239704.png)
