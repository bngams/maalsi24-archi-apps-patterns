// Fonction réutilisable qui applique une opération à tous les éléments filtrés
function sumOfTransformedNumbers(arr, filterFn, transformFn) {
    return arr
        .filter(filterFn)
        .reduce((sum, num) => sum + transformFn(num), 0);
}

// Filtre pour les nombres pairs
function isEven(num) {
    return num % 2 === 0;
}

// Filtre pour les nombres impairs
function isOdd(num) {
    return num % 2 !== 0;
}

// Transformation pour le carré
function square(num) {
    return num * num;
}

// Transformation pour le cube
function cube(num) {
    return num * num * num;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilisation du code refactorisé
console.log(sumOfTransformedNumbers(numbers, isEven, square)); // 220
console.log(sumOfTransformedNumbers(numbers, isOdd, cube));    // 1225