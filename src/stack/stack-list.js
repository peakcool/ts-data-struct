"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackList = void 0;
const linked_list_1 = require("../linked_list/linked_list");
class StackList {
    constructor() {
        this.list = new linked_list_1.LinkedList();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    push(item) {
        this.list.insertFirst(item);
    }
    pop() {
        return this.list.removeFirst();
    }
    top() {
        return this.list.getFirst();
    }
}
exports.StackList = StackList;
