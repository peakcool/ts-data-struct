"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data2 = exports.data1 = void 0;
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
exports.default = ListNode;
const data1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
exports.data1 = data1;
const data2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))));
exports.data2 = data2;
