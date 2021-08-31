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
 * 450. 删除二叉搜索树中的节点
 * link: https://leetcode-cn.com/problems/delete-node-in-a-bst/
 */
 function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    let p: TreeNode = root;
    let pp: TreeNode = root;

    if (root === null) return null;

    // 找到删除的节点
    while(p !== null && p.val !== key) {
        pp = p;
        if (key > p.val) {
            p = p.right
        } else {
            p = p.left
        }
    }

    if (p === null) return root;

    if (p.left !== null && p.right !== null) {
        // 找到删除节点的右子树中最小节点
        let minP: TreeNode = p.right;
        let minPP: TreeNode = p;

        while(minP.left !== null) {
            minPP = minP;
            minP = minP.left;
        }

        p.val = minP.val;
        p = minP;
        pp = minPP;
    }

    let child: TreeNode;
    if (p.left !== null) {
        child = p.left;
    } else if (p.right !== null) {
        child = p.right
    } else {
        child = null;
    }

    if (pp === null) {
        root = null;
    } else if (pp.left === p) {
        pp.left = child;
    } else if (pp.right === p) {
        pp.right = child;
    } else if (pp === p) {
        root = child;
    }

    return root;

};