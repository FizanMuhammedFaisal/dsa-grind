/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let l = 0
    let r = 1
    let max = 0
    while ((r < prices.length)) {

        if (prices[r] < prices[l]) {
            l = r        
        } else  {
            const prof = (prices[r] - prices[l])
        if (prof > max) {
            max = prof
        }
        }
        r++
        console.log(l,r)

    }

    return max
};