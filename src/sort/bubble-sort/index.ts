/** 
 * 交换次数: 5
 * 时间复杂度 O(n^2)
 * 最好时间复杂度 O(n)
 * 最坏时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 */
const nums: number[] = [4, 5, 6, 3, 2, 1];

function bubbleSort(nums: number[]): number[] {
    let n: number = nums.length;
    if (n <= 1) return nums;

    // 遍历整个数组
    for(let i: number = 0; i < n; i++) {

        let flag: boolean = false;
        // 比较大小，交换位置
        for (let j: number = 0; j < n - i - 1; j++) {
            let tmp: number = nums[j];
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
                flag = true; // 有数据交换
            }
        }
        if (!flag) break; // 没有数据交换，提前退出
    }

    return nums;
}

console.log(bubbleSort(nums));