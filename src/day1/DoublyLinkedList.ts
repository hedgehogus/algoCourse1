type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error('Index out of bounds');
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        const node = { value: item } as Node<T>;
        this.length++;

        let current = this.getAt(idx);

        current = current as Node<T>;

        node.next = current;
        node.prev = current.prev;
        current.prev = node;

        if (current.prev) {
            current.prev.next = node;
        }
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let current = this.head;

        for (let i = 0; i < this.length && current; i++) {
            if (current.value === item) {
                break;
            }
            current = current.next;
        }

        if (!current) {
            return undefined;
        }

        return this.removeNode(current);
    }
    get(idx: number): T | undefined {
        const node = this.getAt(idx);

        return node?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);

    }

    private removeNode (node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return node.value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined
        return node.value;
    }

    private getAt (idx: number): Node<T> | undefined {
        let current = this.head;
        for (let i = 0; i < idx && current; i++) {
            current = current.next;
        }
        return current;
    }
}