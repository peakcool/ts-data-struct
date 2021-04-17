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

// const data = [1, 2, 3, 4, 5];
// const node = new ListNode(1, 
//     new ListNode(2, 
//         new ListNode(3, 
//             new ListNode(4, 
//                 new ListNode(5, null)))));

// const n = 2;
// console.log(removeNthFromEnd(node, n)); // [1, 2, 3, 5]


const data = [1, 2];
const node = new ListNode(1, 
    new ListNode(2, null));

const n = 2;
console.log(removeNthFromEnd(node, n)); // [2]
