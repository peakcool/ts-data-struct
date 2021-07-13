"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasCycle(head) {
    if (head === null || head.next === null)
        return false;
    let p = head;
    let q = head.next;
    while (p !== q && p.next !== null) {
        if (q === null || q.next == null) {
            return false;
        }
        p = p.next;
        q = q.next.next;
    }
    return true;
}
;
