/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/** 
 * 111. 二叉树的最大深度
 * link: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
 function minDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    let minH: number = 1;

    if (root.left !== null && root.right !== null) {
        let lH: number = minDepth(root.left);
        let rH: number = minDepth(root.right);

        if (lH < rH) {
            minH += lH;
        } else {
            minH += rH;
        }
    } else if (root.left !== null) {
        minH += minDepth(root.left);
    } else if (root.right !== null) {
        minH += minDepth(root.right);
    }

    return minH;
};