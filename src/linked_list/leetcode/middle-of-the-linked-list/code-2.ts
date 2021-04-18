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

// 快慢指针, q + 1, p + 2
function middleNode(head: ListNode | null): ListNode | null {
	let p: ListNode | null = head;
	let q: ListNode | null = head;

	if (head === null || head.next === null) return head;
    
	while(p !== null && q !== null && q.next !== null) {
		p = p.next;
		q = q.next.next;
	}

	return p;
}

console.log("middle-of-the-linked-list__double-pointer__ output>>>>> ", middleNode(data2));
