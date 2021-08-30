function search(nums: number[], target: number): number {

    let low: number = 0;
    let high: number = nums.length - 1;
    let start: number = -1;
    let end: number = -1;

    if (low === high) {
        if (nums[low] === target) return 1;
    }

    while(low <= high) {
        let mid: number = Math.floor(low + (high - low) / 2); // 0
        if (nums[mid] === target) {
            if (nums[mid - 1] === target) {
                high = mid - 1;
            } else {
                start = mid;
                break;
            }
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    low = 0;
    high = nums.length - 1;
    while(low <= high) {
        let mid: number = Math.floor(low + (high - low) / 2); // 0
        if (nums[mid] === target) {
            if (nums[mid + 1] === target) {
                low = mid + 1;
            } else {
                end = mid;
                break;
            }
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return start > -1 && end > -1 ? end - start + 1 : 0;
};

console.log(search([2, 2], 2))