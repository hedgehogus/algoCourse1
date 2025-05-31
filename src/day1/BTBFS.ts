export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: (BinaryNode<number> | null)[] = [head];

    while (queue.length) {
        const current = queue.shift() as BinaryNode<number> | undefined | null;
        if (!current) {
            continue;
        }

        //search
        if (current.value === needle) {
            return true;
        }

        queue.push(current.right);

        queue.push(current.left);

    }

    return false;

}