/** 
 * 快速排序
 * 
 */

const nums: number[] = [11, 7, 8, 10, 2, 3, 6, 1, 5];

function quickSort(nums: number[], p: number, r: number) {
    if (p >= r) return;

    let q: number = partition(nums, p, r);
    
    quickSort(nums, p, q - 1);
    quickSort(nums, q + 1, r);
}

function partition(arr: number[], p: number, r: number): number {
    const pivot = arr[p];

    let left: number[] = [];
    let right: number[] = [];
    let li: number = 0;
    let ri: number = 0;

    for(let i = p + 1; i <= r; i++) {
        if (arr[i] > pivot) {
            right[ri++] = arr[i]
        } else {
            left[li++] = arr[i]
        }
    }

    let pivotIndex = p + left.length;
    for(let j = 0; j < left.length; j++) {
        arr[j + p] = left[j]
    }

    arr[pivotIndex] = pivot;

    for(let k = 0; k < right.length; k++) {
        arr[pivotIndex + 1] = right[k]
        pivotIndex++;
    }

    if (li === 0) return p++
    if (ri === 0) return r--

    return pivotIndex;
}

quickSort(nums, 0, nums.length - 1)
console.log(nums);