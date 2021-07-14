"use strict";
const nums = [4, 5, 6, 3, 2, 1];
function bubbleSort(nums) {
    let n = nums.length;
    if (n <= 1)
        return nums;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let tmp = nums[j];
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums;
}
console.log(bubbleSort(nums));
