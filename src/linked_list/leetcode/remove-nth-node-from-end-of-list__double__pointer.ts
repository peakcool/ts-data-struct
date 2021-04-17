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
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

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

// const data = [1, 2, 3, 4, 5];
// const node = new ListNode(1, 
//     new ListNode(2, 
//         new ListNode(3, 
//             new ListNode(4, 
//                 new ListNode(5, null)))));

// const n = 2;
// console.log(removeNthFromEnd(node, n)); // [1, 2, 3, 5]


const data = [1];
const node = new ListNode(1, null);

const n = 1;
console.log(removeNthFromEnd(node, n)); // []