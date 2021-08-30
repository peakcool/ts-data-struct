import BinaryTreeNode from './index';
/**
 * 二叉查找树
 * 
 * 在树中的任意一个节点，其左子树中的每个节点的值，都要小雨这个节点的值， 而右子树节点的值，都要大于这个节点的值
 */

class BinarySearchTree {
    private tree: BinaryTreeNode | null;

    constructor(tree: BinaryTreeNode) {
        this.tree = tree;
    }

    public find(data: number): BinaryTreeNode | null {
        let p: BinaryTreeNode | null = this.tree;

        while (p != null) {
            if (data < p.data) {
                p = p.left;
            } else if (data > p.data) {
                p = p.right
            } else {
                return p;
            }
        }

        return null;
    }

    /**
     * 如果插入的数据比节点数据大，并且节点的右子树为空，就将新数据直接插入到右子节点的位置；如果不为空，就再遍历右子树，查找插入位置。
     * 如果要插入的数据比节点数值小, 并且左子树为空，就将新数据插入到左子节点的位置；如果不为空，就再递归遍历左子树，查找插入位置。
     */
    public insert(data: number) {
        let p: BinaryTreeNode | null = this.tree;

        while (p != null) {
            if (data > p.data) {
                if (p.right === null) {
                    p.right = new BinaryTreeNode(data);
                } else {
                    p = p.left;
                }
            } else if (data < p.data) {
                if (p.left === null) {
                    p.left = new BinaryTreeNode(data);
                } else {
                    p = p.right;
                }
            }
        }
    }

    /**
     * 1. 如果要删除的节点没有子节点，只需将父节点中，指向要删除节点的指针设置为null
     * 2. 如果要删除的节点只有一个子节点（只有左节点或右节点），只需要更新父节点，指向要删除节点的指针，让它指向节点的子节点
     * 3. 如果要删除的节点有两个子节点，需要找到这个节点的右子树中的最小节点，把它替换至要删除的节点上。然后再删除掉这个最小节点，
     * 因为最小节点肯定没有左子节点
     */
    public delete(data: number) {
        let p: BinaryTreeNode | null = this.tree;
        let pp: BinaryTreeNode |  null = null;

        // 找到父节点
        while(p != null && p.data !== data) {
            pp = p;
            if (data > p.data) p = p.right;
            else p = p.left
        }

        if (p === null) return;

        if (p.left !== null && p.right !== null) {
            let minP = p.right;
            let minPP = p;

            while(minP.left !== null) {
                minPP = minP;
                minP = minP.left;
            }

            p.data = minP.data;
            p = minP;
            pp = minPP;
        }

        let child: BinaryTreeNode | null;
        if (p.left != null) {
            child = p.left
        } else if (p.right != null) {
            child = p.right
        } else {
            child = null
        }

        if (pp === null) {
            this.tree = child;
        } else if (pp.left == p) {
            pp.left = child;
        } else {
            pp.right = child;
        }
    }
}