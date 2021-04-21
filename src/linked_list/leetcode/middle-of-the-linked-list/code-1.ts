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
function middleNode(head: ListNode | null): ListNode | null {
	let cur: ListNode | null = head;
    if (cur === null) return null;
    if (cur.next === null) return cur;

    let len: number = getNodeLength(head);
	let n: number = len % 2 === 0 ? len / 2 + 1 : (len - 1) / 2 + 1;
	while ((n - 1) > 0 && cur.next !== null) {
		cur = cur.next;
		n--;
	}

	return cur;
}

function getNodeLength(head: ListNode | null): number {
	let len: number = 1;
	let cur: ListNode | null = head;
    if (cur === null) return len;
	while (head && cur.next !== null) {
		cur = cur.next;
		len++;
	}
	return len;
}

console.log("middle-of-the-linked-list output>>>>> ", middleNode(data1));
