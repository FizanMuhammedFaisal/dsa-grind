/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0
    function dfs(node, nsum) {
        if (!node) return
        nsum = nsum + String(node.val)
        if (node.left === null && node.right === null) {
            sum += Number(nsum)
        }

        dfs(node.left,nsum)
        dfs(node.right,nsum)
        nsum -= node.val
    }
    dfs(root, '')
    console.log(sum,)
    return sum
};