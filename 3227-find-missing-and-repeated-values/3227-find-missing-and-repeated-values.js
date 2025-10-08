/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {

    const hash = {}
    let repeated = null
    let missing = null
    const l = grid[0].length
    const h = grid.length
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < l; j++) {
            console.log(hash[grid[i][j]])
            if (hash[grid[i][j]] === 1) {
                repeated = grid[i][j]
            } else {
                hash[grid[i][j]] = 1
            }
        }
    }

    for (let i = 1; i <= l* h; i++) {
        if (hash[i]  === undefined) {
            missing = i
        }
    }
    return [repeated, missing]
};