class Stack<T> {
    private stack: T[];
    private length: number;
    private readonly maxSize: number;

    public constructor(maxSize: number) {
        this.length = 0;
        this.maxSize = maxSize;
        this.stack = new Array<T>(this.maxSize);
    }

    /** 
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
        if (!newItem) {
            throw 'item is required'
        }
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

    public stackContents(): void {

    }    
}

function isValid(s: string): boolean {
    let left: Stack<string> = new Stack(s.length);

    if (s.length % 2 !== 0) return false;

    for(let i:number = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left.push(s[i]);
        } else {
            if (left.isEmpty()) return false;
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
};