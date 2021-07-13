"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(maxSize) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array(this.maxSize);
    }
    /**
     * @Author: TangLiangcheng
     * @Date: 2021-04-22 13:03:57
     * @Desc: 是否是空栈
     */
    isEmpty() {
        return this.length === 0;
    }
    /**
     * @Desc: 是否栈满
     */
    isFull() {
        return this.length === this.maxSize;
    }
    /**
     * @Desc: 入栈
     */
    push(newItem) {
        if (this.isFull()) {
            throw 'stack is full';
        }
        this.stack[this.length++] = newItem;
    }
    /**
     * @Desc: 出栈
     */
    pop() {
        if (this.isEmpty()) {
            throw 'stack is empty';
        }
        return this.stack[--this.length];
    }
    /**
     * @Desc: 栈顶
     */
    top() {
        if (this.isEmpty()) {
            throw 'stack is empty';
        }
        return this.stack[this.length - 1];
    }
    getLength() {
        return this.length;
    }
}
exports.Stack = Stack;
