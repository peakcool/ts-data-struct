/** 
 * 快速排序
 * 原地交换
 * 
 * 最好时间复杂度: O(nlogn)
 * 时间复杂度: O(nlogn)
 * 最差时间复杂度: O(n^2)
 * 
 * 空间复杂度: O(1)
 * 
 * 非稳定排序算法
 */

const nums: number[] = [8, 10, 2, 3, 6, 1, 5];

function quickSort(nums: number[], p: number, r: number) {
    if (p >= r) return;

    let q: number = partition(nums, p, r);
    
    quickSort(nums, p, q - 1);
    quickSort(nums, q + 1, r);
}

function partition(arr: number[], p: number, r: number): number {
    const pivot = arr[p];

    let index: number = p + 1; // 已经处理好的下一个元素位置

    for(let i: number = index; i <= r; i++) {
        if (arr[i] < pivot) {
            const temp: number = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            index++;
        }
    }

    // 交换 pivot 和 最终分区点的值
    const temp: number = arr[p];
    arr[p] = arr[index - 1];
    arr[index - 1] = temp;
    
    return index - 1;
}

quickSort(nums, 0, nums.length - 1)
console.log(nums);