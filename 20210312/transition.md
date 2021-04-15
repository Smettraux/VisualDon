# Exercice 3

Comment fonctionnent les transitions en D3 et en svelte?

<hr>

1. ## Transitions D3

Il faut d'abord créer les éléments qui vont changer. Puis choisir le moment ou se déclenche la transition (gestion des évènements).
Ensuite, il faut changer les données en réaction à l'évènement.
La transition se lance avec `.transition()`et sa durée doit être définie avec `.duration()`


2. ## Transitions svelte

Avec Svelte, il suffit d'utiliser `<g tranform = '' >`puis définir les changements voulus. 
Il esxiste aussi le mot reservé `#each` pour parcourir cahque données.