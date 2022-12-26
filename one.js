function testFun(coins_arr) {
    let sum = 0;
    let sorted_arr = coins_arr.sort((a, b) => a - b);
    for (const coin of sorted_arr) {
        sum += coin;
        console.log({sum, coin, s: sorted_arr.reduce((p, c) => p + c, 0)})
        if (sum === sorted_arr.reduce((p, c) => p + c, 0)) {
            return (sum - coin) + 1;
        }
    }
}

const coins = [1, 1, 1, 1, 1];

console.log(testFun(coins));