import { from, of } from 'rxjs';
import { filter, map, reduce, delay, concatMap } from 'rxjs/operators';

// Un flux de nombres émis progressivement
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Créons un flux réactif à partir de ce tableau, avec un délai pour simuler une émission progressive
const numberStream = from(numbers).pipe(
  concatMap(num => of(num).pipe(delay(500)))  // Simule l'émission d'un nombre toutes les 500ms
);

// Fonctions utilitaires
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => !isEven(num);  // Ou num % 2 !== 0
const square = (num) => num * num;
const cube = (num) => num * num * num;

// Fonction pour calculer la somme des transformations (carré ou cube) sur un flux filtré
const calculateSum = (filterCondition, transformation) =>
  numberStream.pipe(
    filter(filterCondition),         // Filtrer les nombres
    map(transformation),             // Appliquer la transformation (carré ou cube)
    reduce((sum, num) => sum + num, 0)  // Faire la somme des résultats
  );

// Souscription pour afficher la somme des carrés des pairs
calculateSum(isEven, square).subscribe(sum => {
  console.log("Somme des carrés des pairs:", sum);  // Affiche 220
});

// Souscription pour afficher la somme des cubes des impairs
calculateSum(isOdd, cube).subscribe(sum => {
  console.log("Somme des cubes des impairs:", sum);  // Affiche 1225
});
