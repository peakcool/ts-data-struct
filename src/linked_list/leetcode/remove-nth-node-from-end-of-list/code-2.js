"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const ListNode_1 = __importDefault(require("../ListNode"));
const ListNode_2 = require("../ListNode");
/**
* @Author: TangLiangcheng
* @Date: 2021-04-18 10:27:53
* @Desc: 快慢指针
* 时间复杂度：O(n)
* 空间复杂度：O(1)
*/
function removeNthFromEnd(head, n) {
    let dummyHead = new ListNode_1.default(0, head);
    let p = dummyHead;
    let q = dummyHead;
    let qn = 0;
    while (q.next !== null && p.next !== null) {
        if (qn === n) {
            p = p.next;
        }
        else {
            qn++;
        }
        q = q.next;
    }
    let cur = new ListNode_1.default();
    cur = p.next;
    if (cur !== null) {
        p.next = cur.next;
        cur.next = null;
    }
    else {
        p.next = null;
    }
    return dummyHead.next;
}
console.log("remove-nth-node-from-end-of-list__double-pointer__ output>>>>> ", removeNthFromEnd(ListNode_2.data1, 2));
