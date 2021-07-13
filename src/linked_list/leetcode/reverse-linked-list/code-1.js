"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("../ListNode");
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
function reverseList(head) {
    let cur = head;
    let prev = null;
    if (head === null || head.next === null)
        return head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
;
console.log("remove-nth-node-from-end-of-list output>>>>> ", reverseList(ListNode_1.data1));
