import ListNode from '../ListNode';
import { data1, data2 } from '../ListNode';

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

/** 
 * @Author: TangLiangcheng 
 * @Date: 2021-04-18 10:27:09 
 * @Desc: 迭代
 * 时间复杂度：O(n)
 * 空间复杂度：O(1) 
 */
 function reverseList(head: ListNode | null): ListNode | null {
    let cur: ListNode | null = head;
    let prev: ListNode | null = null;

    if (head === null || head.next === null) return head;

    while(cur !== null) {
        let next: ListNode | null = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};

console.log("remove-nth-node-from-end-of-list output>>>>> ", reverseList(data1));