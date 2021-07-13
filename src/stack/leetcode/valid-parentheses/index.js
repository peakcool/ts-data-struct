"use strict";
class Stack {
    constructor(maxSize) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array(this.maxSize);
    }
    /**
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
        if (!newItem) {
            throw 'item is required';
        }
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
    stackContents() {
    }
}
function isValid(s) {
    let left = new Stack(s.length);
    if (s.length % 2 !== 0)
        return false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left.push(s[i]);
        }
        else {
            if (left.isEmpty())
                return false;
            const pop = left.pop();
            if (s[i] === ')' && '(' !== pop) {
                return false;
            }
            if (s[i] === '}' && '{' !== pop) {
                return false;
            }
            if (s[i] === ']' && '[' !== pop) {
                return false;
            }
        }
    }
    return left.isEmpty();
}
;
