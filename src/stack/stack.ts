export class Stack<T> {
    private stack: T[];
    private length: number;
    private readonly maxSize: number;

    public constructor(maxSize: number) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array<T>(this.maxSize);
    }

    /** 
     * @Author: TangLiangcheng 
     * @Date: 2021-04-22 13:03:57 
     * @Desc: 是否是空栈 
     */
    public isEmpty(): boolean {
        return this.length === 0;
    }

    /** 
     * @Desc: 是否栈满
     */
    public isFull(): boolean {
        return this.length === this.maxSize;
    }

    /** 
     * @Desc: 入栈 
     */
    public push(newItem: T): void {
        if (this.isFull()) {
            throw 'stack is full'
        }
        this.stack[this.length++] = newItem;
    }

    /** 
     * @Desc: 出栈 
     */
    public pop(): T {
        if (this.isEmpty()) {
            throw 'stack is empty'
        }
        return this.stack[--this.length];
    }

    /** 
     * @Desc: 栈顶 
     */
    public top(): T {
        if (this.isEmpty()) {
            throw 'stack is empty'
        }
        return this.stack[this.length - 1];
    }

    public getLength(): number {
        return this.length;
    }    
}