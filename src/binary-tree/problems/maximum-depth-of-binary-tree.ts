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
 * 104. 二叉树的最大深度
 * link: https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
 function maxDepth(root: TreeNode | null): number {
    let p: TreeNode = root;

    if (p === null) return 0;
    let h: number = 1;
    if (p.left !== null && p.right !== null ) {
        let lh: number = maxDepth(p.left);
        let rh: number = maxDepth(p.right);
        if (lh > rh) {
            h += lh;
        } else {
            h += rh;
        }
    } else if (p.right !== null) {
        h += maxDepth(p.right);
    } else if (p.left !== null) {
        h += maxDepth(p.left);
    }

    return h;
};