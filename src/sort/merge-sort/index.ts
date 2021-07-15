/** 
 * 归并排序
 * 时间复杂度 T(a) = T(b) +  T(c) + K
 * 最坏时间复杂度：O(nlog(n))
 * 平均时间复杂度：O(nlog(n))
 * 最好时间复杂度：O(nlog(n))
 * 
 * 空间复杂度：O(n)
 * 
 * 稳定排序
 */

const nums: number[] = [11, 8, 3, 9, 7, 1, 2, 5, 10];

function mergeSort(nums: number[], p: number, r: number) {
    if (p >= r) return;
    const q = (p + r) % 2 === 0 ? (p + r) / 2 : (p + r - 1) / 2
    // const q = Math.floor(p + (r - p) / 2)
    mergeSort(nums, p, q);
    mergeSort(nums, q + 1, r);
    merge(nums, p, q, r);
}

function merge(a: number[], p: number, q: number, r: number) {
    let i: number = p;
    let j: number = q + 1;
    let k: number = 0;

    // 申请临时数组
    const tmp: number[] = new Array(a.length - 1);

    // 比较大小，写入临时数组中
    while(i <= q && j <= r) {
        if (a[i] <= a[j]) {
            tmp[k++] = a[i++];
        } else {
            tmp[k++] = a[j++];
        }
    }

    // 检查那个子数组有剩余数据
    let start: number = i;
    let end: number = q;
    if (j <= r) {
        start = j;
        end = r;
    }

    // 拷贝至临时数组中
    while(start <= end) {
        tmp[k++] = a[start++];
    }

    // 将临时数组中数据拷贝回原数组
    for (i = 0; i <= r - p; i++) {
        a[p + i] = tmp[i];
    }
}

mergeSort(nums, 0, nums.length - 1);
console.log(nums);