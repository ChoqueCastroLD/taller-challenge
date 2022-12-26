function sortSquaredArray(arr) {
    return arr.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
}

console.log(sortSquaredArray([1, 2, 3, 5, 6, 8, 9])); // returns [1, 4, 9, 25, 36, 64, 81]
console.log(sortSquaredArray([-2, -1])); // returns [1, 4]
console.log(sortSquaredArray([-10, -5, 0, 5, 10])); // returns [0, 25, 25, 100, 100]