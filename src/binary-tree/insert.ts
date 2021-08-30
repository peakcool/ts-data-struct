import BinaryTreeNode from './index';

/**
 * 如果插入的数据比节点数据大，并且节点的右子树为空，就将新数据直接插入到右子节点的位置；如果不为空，就再遍历右子树，查找插入位置。
 * 如果要插入的数据比节点数值小, 并且左子树为空，就将新数据插入到左子节点的位置；如果不为空，就再递归遍历左子树，查找插入位置。
 */

 class BinarySearchTreeInsert {
    private tree: BinaryTreeNode;

    constructor(tree: BinaryTreeNode) {
        this.tree = tree;
    }

    public find(data: number): BinaryTreeNode | null {
        let p: BinaryTreeNode = this.tree;

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
}