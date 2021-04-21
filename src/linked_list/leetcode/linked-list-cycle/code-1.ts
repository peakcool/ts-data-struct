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

 function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;

    let p: ListNode | null = head;
    let q: ListNode | null = head.next;

    while(p !== q && p.next !== null) {
        if ( q === null || q.next == null) {
            return false;
        }
        p = p.next;
        q = q.next.next;
    }

    return true;
};