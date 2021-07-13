"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("../ListNode");
/**
  * @Author: TangLiangcheng
  * @Date: 2021-04-18 10:27:53
  * @Desc: 快慢指针, q + 1, p + 2
  * 时间复杂度：O(n)
  * 空间复杂度：O(1)
  */
function middleNode(head) {
    let p = head;
    let q = head;
    if (head === null || head.next === null)
        return head;
    while (p !== null && q !== null && q.next !== null) {
        p = p.next;
        q = q.next.next;
    }
    return p;
}
console.log("middle-of-the-linked-list__double-pointer__ output>>>>> ", middleNode(ListNode_1.data2));
