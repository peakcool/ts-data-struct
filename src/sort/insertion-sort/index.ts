/** 
 * 最坏时间复杂度：O(n^2)
 * 平均时间复杂度：O(n^2)
 * 最好时间复杂度：O(n)
 * 
 * 空间复杂度：O(1)
 * 
 * 稳定排序
 */

const nums: number[] = [4, 5, 6, 1, 3, 2];

function insertionSort(nums: number[]): number[] {
    const n: number = nums.length;

    if (n <= 1) return nums;

    for (let i = 1; i < n; i++) {
        let tmp: number = nums[i]; // 需要检查的值
        let j = i - 1;

        // 在有序集合中查找插入位置
        for(j; j >= 0; j--) {
            if (nums[j] > tmp) {
                nums[j + 1] = nums[j]; // 移动数据
            } else {
                break;  // 在有序集合中查找，直到大于就跳出循环，此时 j + 1 即需要插入的位置
            }
        }
        nums[j + 1] = tmp; // 插入数据
    }
    return nums;
}

console.log(insertionSort(nums));