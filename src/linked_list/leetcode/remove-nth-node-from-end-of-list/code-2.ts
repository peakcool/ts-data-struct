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
  * @Desc: 快慢指针
  * 时间复杂度：O(n)
  * 空间复杂度：O(1) 
  */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let dummyHead: ListNode = new ListNode(0, head);
    let p: ListNode | null = dummyHead;
    let q: ListNode | null = dummyHead;
    let qn: number = 0;

    while(q.next !== null && p.next !== null) {
        if (qn === n) {
            p = p.next;
        } else {
            qn++;
        }
        q = q.next;
    }

    let cur: ListNode | null = new ListNode();
	cur = p.next;
	if (cur !== null) {
		p.next = cur.next;
		cur.next = null;
	} else {
		p.next = null
	}
    return dummyHead.next;
}

console.log("remove-nth-node-from-end-of-list__double-pointer__ output>>>>> ", removeNthFromEnd(data1, 2));