"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("../ListNode");
/**
  * @Author: TangLiangcheng
  * @Date: 2021-04-18 10:27:53
  * @Desc: 暴力解法
  * 时间复杂度：O(n)
  * 空间复杂度：O(1)
  */
function middleNode(head) {
    let cur = head;
    if (cur === null)
        return null;
    if (cur.next === null)
        return cur;
    let len = getNodeLength(head);
    let n = len % 2 === 0 ? len / 2 + 1 : (len - 1) / 2 + 1;
    while ((n - 1) > 0 && cur.next !== null) {
        cur = cur.next;
        n--;
    }
    return cur;
}
function getNodeLength(head) {
    let len = 1;
    let cur = head;
    if (cur === null)
        return len;
    while (head && cur.next !== null) {
        cur = cur.next;
        len++;
    }
    return len;
}
console.log("middle-of-the-linked-list output>>>>> ", middleNode(ListNode_1.data1));
