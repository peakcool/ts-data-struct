"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueList = void 0;
const linked_list_1 = require("../linked_list/linked_list");
class QueueList {
    constructor() {
        this.list = new linked_list_1.LinkedList();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    enqueue(item) {
        this.list.insertFirst(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('queue list is empty');
        }
        return this.list.removeFirst();
    }
    peak() {
        return this.list.getFirst();
    }
}
exports.QueueList = QueueList;
