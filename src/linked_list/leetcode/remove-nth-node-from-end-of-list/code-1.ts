/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 import ListNode from '../ListNode';
 import { data1, data2 } from '../ListNode';

 /** 
  * @Author: TangLiangcheng 
  * @Date: 2021-04-18 10:27:53 
  * @Desc: 暴力解法
  * 时间复杂度：O(n)
  * 空间复杂度：O(1) 
  */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	// 处理特殊情况
	if (head === null || (head.next === null && n === 1)) {
		head = null;
		return head;
	}

	let nodeCount: number = 1; // 找到所有结点个数

	// 遍历结点
	let cur: ListNode = head;
	while (head && cur.next !== null) {
		nodeCount += 1;
		cur = cur.next;
	}

    if (nodeCount === n) {
        head = head.next;
        return head;
    }

	// 再次遍历结点
	let nodeCount_again: number = 1;
	let cur_again: ListNode = head;
	let findNode: ListNode = new ListNode();
	while (head && cur_again.next !== null) {
        if (nodeCount === nodeCount_again + n) {
			findNode = cur_again.next;
			cur_again.next = findNode.next;
			findNode.next = null;
			break;
		}
		cur_again = cur_again.next;
		nodeCount_again += 1;
	}

	return head;
}

console.log("remove-nth-node-from-end-of-list output>>>>> ", removeNthFromEnd(data1, 2));
