import { DS } from './node';

export class LinkedList<T> {

    private head: DS.Node<T>;
    private tail: DS.Node<T>;

    constructor() {
        this.head = new DS.Node<T>();
        this.tail = new DS.Node<T>();
        this.head.next = this.tail;
    }

    /** 
     * @Desc:  inserts an element at the beginning of the list.
     */
    public insertFirst(item: T): void {
        const newNode = new DS.Node<T>(item);

        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    /** 
     * @Desc:  inserts an element at the end of the list.
     */
    public insertLast(item: T): void {
        const newNode = new DS.Node<T>(item);
        
        let current: DS.Node<T> | null = this.head;

        // 找到尾指针前一个结点
        while(current && current.next !== this.tail) {
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
    public removeFirst(): T | null {
        if (this.isEmpty()) {
            throw new Error('linked list is empty');
        }

        let rv: DS.Node<T> | null = this.head.next;

        if (rv) {
            this.head.next = rv.next;
            rv.next = null;
        }

        return rv ? rv.item : null;
    }

    /** 
     * @Desc:  inserts an element with a given key.
     */
    public remove(item: T): T | null {
        if (this.isEmpty()) {
            throw new Error('linked list is empty');
        }

        let current: DS.Node<T> | null = this.head;
        let rv: DS.Node<T> | null = null;

        while (current.next && current.next.item !== item) {
            current = current?.next;
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
    public contains(item: T): boolean {

        if (this.isEmpty()) {
            return false;
        }

        let isContain: boolean = false;
        let current: DS.Node<T> | null = this.head;

        while(current && current.next !== this.tail) {
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
    public isEmpty(): boolean {
        return this.head.next === this.tail;
    }

    /** 
     * @Desc:  retrieve the first element in the list without removing it.
     */
    public getFirst(): T | null {
        if (this.isEmpty()) {
            throw new Error('linked list is empty');
        }
        return this.head.next ? this.head.next.item : null;
    }
}