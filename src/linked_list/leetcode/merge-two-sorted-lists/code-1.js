"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeTwoLists(l1, l2) {
    if (l1 === null && l2 === null) {
        return null;
    }
    if (l1 === null || l2 === null) {
        return l1 || l2;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
;
