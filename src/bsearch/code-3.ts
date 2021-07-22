/** 
 * 二分查找变形3：查找第一个大于给定值的元素
 * 
 */

const nums: number[] = [ 1, 3, 4, 5, 6, 8, 8, 8, 11, 18 ];

function bsearch_code_3(nums: number[], value: number): number {
    let low: number = 0;
    let high: number = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (nums[mid] === value) {
            if (nums[mid + 1] > value) {
                return mid + 1;
            } else {
                low = mid + 1;
            }
        } else if (nums[mid] > value) {
            if (nums[mid -1] > value) {
                high = mid - 1;
            } else {
                return mid;
            }
        } else if (nums[mid] < value) {
            low = mid + 1;
        }

        // if (nums[mid] >= value) {
        //     if (mid === 0 || nums[mid - 1] < value) {
        //         return mid
        //     } else {    
        //         high = mid - 1;
        //     }
        // } else {
        //     low = mid + 1;
        // }
    }

    return -1;
}

console.log(bsearch_code_3(nums, 8))