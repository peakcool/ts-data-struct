/** 
 * @Desc: 基本二分查找 
 * 
 * 时间复杂度 O(logn)
 * 
 * n + n/2 + n/4 + n/8 + ...... + n/2^k
 * 
 * 当 n/2^k  = 1 时，即找到 value
 * k 即查找次数，求平均每次时间复杂度
 * 
 * 2^k = n
 * k = log(n)
 *
 */

const nums: number[] = [8, 11, 19, 23, 27, 33, 45, 55, 67, 98]

function bsearch(nums: number[], value: number): number {
    let low: number = 0;
    let hight: number = nums.length - 1;

    while(low <= hight) {
        let mid: number = Math.floor((low + hight) / 2);
        if (nums[mid] == value) {
            return mid;
        } else if (nums[mid] < value) {
            low = mid + 1;
        } else {
            hight = mid - 1;
        }
    }

    return -1;
}

console.log(bsearch(nums, 55))