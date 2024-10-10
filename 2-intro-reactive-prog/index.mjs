import { from, of } from 'rxjs';
import { filter, map, reduce, delay, concatMap } from 'rxjs/operators';

// Un flux de nombres émis progressivement
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Créons un flux réactif à partir de ce tableau, avec un délai pour simuler une émission progressive
const numberStream = from(numbers).pipe(
  concatMap(num => of(num).pipe(delay(500)))  // Simule l'émission d'un nombre toutes les 500ms
);

// Fonction réactive qui calcule la somme des nombres pairs au carré
const sumOfSquaresOfEvens$ = numberStream.pipe(
  filter(num => num % 2 === 0),  // Filtre (filter) les nombres pairs
  map(num => num * num),  // Transformer (map) pour appliquer le nombre au carré
  reduce((sum, num) => sum += num, 0)  // Faire la somme des résultats (reduce)
);

// Fonction réactive qui calcule la somme des nombres impairs au cube
const sumOfCubesOfOdds$ = numberStream.pipe(
  filter(num => num % 2 !== 0),  // Filtre (filter) les nombres pairs
  map(num => num * num * num),  // Transformer (map) pour appliquer le nombre au carré
  reduce((sum, num) => sum += num, 0)  // Faire la somme des résultats (reduce)
);

// Souscription pour afficher la somme des carrés des pairs
sumOfSquaresOfEvens$.subscribe(sum => {
  console.log("Somme des carrés des pairs:", sum);  // Affiche 220
});

// Souscription pour afficher la somme des cubes des impairs
sumOfCubesOfOdds$.subscribe(sum => {
  console.log("Somme des cubes des impairs:", sum);  // Affiche 1225
});
