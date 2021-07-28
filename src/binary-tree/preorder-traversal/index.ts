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

 function preorderTraversal(root: TreeNode | null): number[] {
    
    let nodes: number[] = [];

    const preorder = function (root: TreeNode | null, nodes: number[]) {
        if (root === null) {
            return [];
        }
        nodes.push(root.val);
        preorder(root.left, nodes);
        preorder(root.right, nodes);

        return nodes;
    }

    return preorder(root, nodes);
};