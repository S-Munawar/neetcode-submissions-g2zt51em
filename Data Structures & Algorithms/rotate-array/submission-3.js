class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {

        let n = nums.length
        let arr = new Array(n)

        for(let i = 0; i < n; i++) {
            let index = (i + k) % n
            arr[index] = nums[i]
        }

        for(let i = 0; i < n; i++) {
            nums[i] = arr[i]
        }
    }
}
