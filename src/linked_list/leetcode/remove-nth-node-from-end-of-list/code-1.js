"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("../ListNode"));
const ListNode_2 = require("../ListNode");
/**
 * @Author: TangLiangcheng
 * @Date: 2021-04-18 10:27:53
 * @Desc: 暴力解法
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function removeNthFromEnd(head, n) {
    // 处理特殊情况
    if (head === null || (head.next === null && n === 1)) {
        head = null;
        return head;
    }
    let nodeCount = 1; // 找到所有结点个数
    // 遍历结点
    let cur = head;
    while (head && cur.next !== null) {
        nodeCount += 1;
        cur = cur.next;
    }
    if (nodeCount === n) {
        head = head.next;
        return head;
    }
    // 再次遍历结点
    let nodeCount_again = 1;
    let cur_again = head;
    let findNode = new ListNode_1.default();
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
console.log("remove-nth-node-from-end-of-list output>>>>> ", removeNthFromEnd(ListNode_2.data1, 2));
