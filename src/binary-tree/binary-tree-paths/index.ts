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
 * # 257. 二叉树的所有路径 
 * https://leetcode-cn.com/problems/binary-tree-paths/
 * 
 * 还有优化空间!!!
 */
 function binaryTreePaths(root: TreeNode | null): string[] {

    // 当为 null 时
    if (root === null) return [];

    // 当无子节点时
    if (root.left === null && root.right === null) return [root.val.toString()]

    let leftPath: string[] = binaryTreePaths(root.left);
    let rightPath: string[] = binaryTreePaths(root.right);

    let fullPath: string[] = [];

    for(let i: number = 0; i < leftPath.length; i++) {
        fullPath.push(root.val + '->' + leftPath[i])
    }

    for(let j: number = 0; j < rightPath.length; j++) {
        fullPath.push(root.val + '->' + rightPath[j])
    }
    
    return fullPath;
};