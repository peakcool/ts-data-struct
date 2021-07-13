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
 * @Desc: 递归
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function reverseList(head) {
    if (head === null || head.next === null)
        return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}
;
console.log("remove-nth-node-from-end-of-list output>>>>> ", reverseList(ListNode_1.data1));
