/** 
 * 最坏时间复杂度：O(n^2)
 * 平均时间复杂度：O(n^2)
 * 最好时间复杂度：O(n^2)
 * 
 * 空间复杂度：O(1)
 * 
 * 不稳定排序
 */


const nums: number[] = [4, 5, 6, 3, 2, 1];

function selectionSort(nums: number[]): number[] {
    const n: number = nums.length;

    if (n <= 1) return nums

    for (let i:number = 0; i < n - 1; i++) {
        let minIndex: number = i;
        for(let j = i + 1; j < n; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }

        const tmp = nums[minIndex];
        nums[minIndex] = nums[i];
        nums[i] = tmp;
    }

    return nums;
}

console.log(selectionSort(nums));