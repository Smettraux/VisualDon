# Projet VisualDon

## Introduction 
Réaliser un graphique de type "rose des vents" sur la base de données météorologiques. https://observablehq.com/@julesblm/wind-rose

## Équipe
Le projet a été réalisé avec Robin Zweifel.

## Concept
L'idée est de réaliser un graphique de type "rose des vents" sur la base de données météorologique d'une station météo homemade. Une fois le graphique fonctionnel, il nous faudra y ajouter une manière d'interagir pour passer d'une date (set de données) à une autre. Le tout, avec de l'animation.

## Framework 
Afin de pouvoir construire notre projet tel qu'imaginé, nous avons décidé d'utiliser Svelte qui nous permettra de construire une belle animation pour notre rose des vents. Note: Les stores Tween de Svelte ont été le coeur de l'animation. Note 2: Nous avons installé un composant Svelte afin d'avoir un visuel plus abouti: https://github.com/simeydotme/svelte-range-slider-pips

## Inspiration 
Nous nous sommes inspirés du travail de cette personne pour la construction du graphique: https://observablehq.com/@julesblm/wind-rose Il a fallu cependant tout repenser en composants pour y intégrer le concept de réactivité dans notre graphique. Note: Nous avons choisi de garder en exemple le set de données fourni, car les données répertoriées par la station météo ne comportaient pas beaucoup de forts vents.

## Liens
<a href="https://github.com/zweiro/WindRose">Repo du projet</a>

<a href="https://quick-quickie.surge.sh/">Adresse de déploiement</a>
