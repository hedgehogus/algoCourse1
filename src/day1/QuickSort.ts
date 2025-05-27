function quickSort(arr: number[], left: number, right: number): void {
    if(left >= right) {
        return;
    }

    const pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
}

function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];

    let index = left - 1;

    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }

    index++;
    arr[right] = arr[index];
    arr[index] = pivot;
    return index;
}

export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);

}