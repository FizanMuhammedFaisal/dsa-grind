/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {

    const memo = { 0: 0, 1: 1 }

    function fibcal(n) {
        console.log(n)
        if (memo[n]!==undefined) {
            console.log(n)
            return memo[n]
        } else {
            memo[n] = fibcal(n - 1) + fibcal(n - 2)
            return memo[n]
        }
    }

    return fibcal(n)
};