const nums: number[] = [4, 5, 6, 3, 2, 1];

function bubbleSort(nums: number[]): number[] {
    let n: number = nums.length;
    if (n <= 1) return nums;
    for(let i: number = 0; i < n; i++) {
        for (let j: number = 0; j < n - i - 1; j++) {
            let tmp: number = nums[j];
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }

    return nums;
}

console.log(bubbleSort(nums));