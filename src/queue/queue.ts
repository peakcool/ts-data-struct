export class Queue<T> {
    private queue: T[];
    private length: number;
    private readonly maxSize: number;

    public constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.length = 0;
        this.queue = new Array<T>(this.maxSize);
    }

    public isEmpty(): boolean {
        return this.length === 0;
    }

    public isFull(): boolean {
        return this.length === this.maxSize;
    }

    /** 
     * @Desc: 入栈 
     */
    public enqueue(item: T): void {
        if (this.isFull()) {
            throw new Error('queue is full')
        }
        this.queue[this.length] = item;
        this.length++;
    }

    /** 
     * @Desc: 出栈 
     */
    public dequeue(): T | null {
        if (this.isEmpty()) {
            throw new Error('queue is empty')
        }
        const retval = this.queue[0]

        // 整体搬移
        for(let i = 0; i < this.length; i++) {
            this.queue[i] = this.queue[ i + 1 ]
        }

        this.length--;
        return retval;
    }

    /** 
     * @Desc: 获取第一元素
     */
    public peak(): T | null {
        if (this.isEmpty()) {
            throw new Error('queue is empty')
        }
        const first = this.queue[0]
        return first;
    }
}