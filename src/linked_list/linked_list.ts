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
    public insertFirst(item: T): void {}

    /** 
     * @Desc:  inserts an element at the end of the list.
     */
    public insertLast(item: T): void {}

    /** 
     * @Desc:  removes an element at the end of the list.
     */
    public removeFirst(): T | null {
        return null;
    }

    /** 
     * @Desc:  inserts an element with a given key.
     */
    public remove(item: T): void {}

    /** 
     * @Desc:  checks to see if an element with a given key is in the list.
     */
    public contains(item: T): boolean {
        return false;
    }

    /** 
     * @Desc:  checks to see if the list contains any node other than head or tail.
     */
    public isEmpty(item: T): void {}

    /** 
     * @Desc:  retrieve the first element in the list without removing it.
     */
    public getFirst(item: T): T | null {
        return null;
    }
}