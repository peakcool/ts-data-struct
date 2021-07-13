"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.length = 0;
        this.queue = new Array(this.maxSize);
    }
    isEmpty() {
        return this.length === 0;
    }
    isFull() {
        return this.length === this.maxSize;
    }
    /**
     * @Desc: 入栈
     */
    enqueue(item) {
        if (this.isFull()) {
            throw new Error('queue is full');
        }
        this.queue[this.length] = item;
        this.length++;
    }
    /**
     * @Desc: 出栈
     */
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('queue is empty');
        }
        const retval = this.queue[0];
        // 整体搬移
        for (let i = 0; i < this.length; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        this.length--;
        return retval;
    }
    /**
     * @Desc: 获取第一元素
     */
    peak() {
        if (this.isEmpty()) {
            throw new Error('queue is empty');
        }
        const first = this.queue[0];
        return first;
    }
}
exports.Queue = Queue;
