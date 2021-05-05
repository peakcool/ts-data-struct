import { LinkedList } from '../linked_list/linked_list';

export class QueueList<T> {
    private list: LinkedList<T>;

    public constructor() {
        this.list = new LinkedList<T>();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public enqueue(item: T): void {
        this.list.insertFirst(item);
    }

    public dequeue(): T | null {
        if (this.isEmpty()) {
            throw new Error('queue list is empty')
        }

        return this.list.removeFirst();
    }

    public peak(): T | null {
        return this.list.getFirst();
    }
}