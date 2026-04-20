class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {

        let n = nums.length

        while(k > 0) {

            let value = nums[n - 1]
            for(let i = n - 1; i > 0; i--) {
                nums[i] = nums[i - 1]
            }
            nums[0] = value
            k--
        }
    }
}
