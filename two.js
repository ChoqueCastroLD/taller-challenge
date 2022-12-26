function sortSquaredArray(arr) {
    return arr.map(element => Math.pow(element, 2)).sort((a, b) => a - b);
}

let sampleArray = [-10, -5, 0, 5, 10];

const result = sortSquaredArray(sampleArray);

console.log(result);