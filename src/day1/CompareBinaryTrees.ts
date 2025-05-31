export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (!a && !b) {
        return true; // both are null
    }

    if (!a || !b) {
        return false; // one is null, the other is not
    }

    if (a.value !== b.value) {
        return false; // values differ
    }

    return compare(a.left, b.left) && compare(a.right, b.right); // recursively compare left and right subtrees
}