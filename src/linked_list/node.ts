export namespace DS {
    export class Node<T> {
        public item: T | null;
        public next: Node<T> | null;

        // init data struct node
        public constructor(item: T | null = null) {
            this.item = item;
            this.next = null;
        }
    }
}