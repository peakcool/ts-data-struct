"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const node_1 = require("./node");
class LinkedList {
    constructor() {
        this.head = new node_1.DS.Node();
        this.tail = new node_1.DS.Node();
        this.head.next = this.tail;
    }
    /**
     * @Desc:  inserts an element at the beginning of the list.
     */
    insertFirst(item) {
        const newNode = new node_1.DS.Node(item);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }
    /**
     * @Desc:  inserts an element at the end of the list.
     */
    insertLast(item) {
        const newNode = new node_1.DS.Node(item);
        let current = this.head;
        // 找到尾指针前一个结点
        while (current && current.next !== this.tail) {
            current = current.next;
        }
        if (current) {
            newNode.next = this.tail;
            current.next = newNode;
        }
    }
    /**
     * @Desc:  removes an element at the end of the list.
     */
    removeFirst() {
        if (this.isEmpty()) {
            throw new Error('linked list is empty');
        }
        let rv = this.head.next;
        if (rv) {
            this.head.next = rv.next;
            rv.next = null;
        }
        return rv ? rv.item : null;
    }
    /**
     * @Desc:  inserts an element with a given key.
     */
    remove(item) {
        if (this.isEmpty()) {
            throw new Error('linked list is empty');
        }
        let current = this.head;
        let rv = null;
        while (current.next && current.next.item !== item) {
            current = current.next;
        }
        if (current.next) {
            rv = current.next;
            current.next = current.next.next;
            rv.next = null;
        }
        return rv && rv.item ? rv.item : null;
        // while(current && current.next !== this.tail) {
        //     if (current.next && current.next.item === item) {
        //         current.next = current.next.next;
        //         break;
        //     } else {
        //         current = current.next;
        //     }
        // }
    }
    /**
     * @Desc:  checks to see if an element with a given key is in the list.
     */
    contains(item) {
        if (this.isEmpty()) {
            return false;
        }
        let isContain = false;
        let current = this.head;
        while (current && current.next !== this.tail) {
            if (current.next && current.next.item === item) {
                isContain = true;
                break;
            }
            current = current.next;
        }
        return isContain;
    }
    /**
     * @Desc:  checks to see if the list contains any node other than head or tail.
     */
    isEmpty() {
        return this.head.next === this.tail;
    }
    /**
     * @Desc:  retrieve the first element in the list without removing it.
     */
    getFirst() {
        if (this.isEmpty()) {
            throw new Error('linked list is empty');
        }
        return this.head.next ? this.head.next.item : null;
    }
}
exports.LinkedList = LinkedList;
