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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let has = false
    function dfs(node, sum) {
        if (!node) {
            return
        }
        if (node.left ===null && node.right === null && node.val + sum === targetSum) {
            has = true
        }
        sum=sum+node.val

        dfs(node.left,sum)
        dfs(node.right,sum)
    }
    dfs(root, 0)
    return has
};