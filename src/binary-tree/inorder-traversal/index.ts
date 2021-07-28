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

 function inorderTraversal(root: TreeNode | null): number[] {

    let nodes: number[] = [];

    const inorder = function(root: TreeNode | null, nodes: number[]): number[] {
        if (root === null) {
            return []
        } else {
            inorder(root.left, nodes);
            nodes.push(root.val);
            inorder(root.right, nodes);
        }
        return nodes;
    }

    return inorder(root, nodes);
};