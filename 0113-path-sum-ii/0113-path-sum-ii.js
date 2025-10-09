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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    const res = []

    function dfs(node, sum, path) {
        if(!node) return
        sum = sum + node.val
        path.push(node.val)
        console.log(sum)
        if (sum === targetSum && node.left === null && node.right===null) {
            console.log('got in')
            res.push([...path])
        }

        dfs(node.left, sum, path)
        dfs(node.right, sum, path)
        path.pop()
    }
    dfs(root, 0, [])

    return res
};