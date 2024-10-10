// Fonction qui calcule la somme des carrés des nombres pairs
function sumOfSquaresOfEvens(arr) {
    let sum = 0;
    arr.forEach(i => {
        if (isEven(i)) {
            sum += square(i);
        }
    });
    return sum;
}

// Fonction qui calcule la somme des cubes des nombres impairs
function sumOfCubesOfOdds(arr) {
    let sum = 0;
    arr.forEach(i => isOdd(i) ? sum += cube(i) : null);
    return sum;

    // better one liner..
    // return arr.reduce...()
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

console.log(sumOfSquaresOfEvens(numbers)); // 220
console.log(sumOfCubesOfOdds(numbers));    // 1539

