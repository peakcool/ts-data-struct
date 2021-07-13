"use strict";
class MinStack {
    constructor() {
        this.stack = new Array();
        this.minStack = new Array();
        this.length = 0;
    }
    push(val) {
        this.stack[this.length] = val;
        if (this.length === 0) {
            this.minStack[this.length] = val;
        }
        else {
            this.minStack[this.length] = val < this.minStack[this.length - 1] ? val : this.minStack[this.length - 1];
        }
        this.length++;
    }
    pop() {
        this.stack[this.length - 1];
        this.minStack[this.length - 1];
        this.length--;
    }
    top() {
        return this.stack[this.length - 1];
    }
    getMin() {
        const index = this.length - 1;
        return this.minStack[index];
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack();
obj.push(-10);
obj.push(14);
obj.getMin();
obj.getMin();
obj.push(-20);
obj.getMin();
obj.getMin();
obj.top();
obj.getMin();
obj.pop();
obj.push(10);
obj.push(-7);
obj.getMin();
obj.push(-7);
obj.pop();
obj.pop();
obj.getMin();
obj.pop();
