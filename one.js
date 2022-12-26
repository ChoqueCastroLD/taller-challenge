function testFun(coins_arr) {
    const sorted_arr = coins_arr.sort((a, b) => a - b);
    let sum = 0;
    for (const coin of sorted_arr) {
        if (coin > sum + 1) {
            return sum + 1;
        }
        sum += coin;
    }
    return sum + 1;
}

console.log(testFun([5, 7, 1, 1, 2, 3, 22])); // returns 20
console.log(testFun([1, 1, 1, 1, 1])); // returns 6
console.log(testFun([1, 5, 1, 1, 1, 10, 15, 20, 100])); // returns 55